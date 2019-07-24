<template>
  <div class="create-survey">
    <section class="create-survey-container">
      <h1 class="create-survey-header">{{surveyHeader}}</h1>
      <h3
        v-if="survey.tags[0]"
        class="create-survey-header"
      >Survey #Tags: {{survey.tags}}{{surveyTags}}</h3>
      <input
        v-if="!titleReceived"
        @keyup.enter="titleReady()"
        class="survey-input"
        type="text"
        placeholder="Enter Survey Name"
        v-model="survey.name"
      />
      <!-- <div v-if="titleReceived" class="survey-list">
        <div class="survey-preview-container flex">
          <div class="survey-img-container">
          <img class="survey-img" src="../assets/images/homepage-background.jpg" alt />
        <div class="title-under-img flex">
          <h3 class="survey-preview-title">{{survey.name}}</h3>
        </div>
            <h5 class="survey-preview-quest-counter">Questions:{{survey.quests.length}}</h5>
          </div>
          <h5 class="survey-preview-quest-description">"{{survey.description}}"</h5>
          <section class="survey-preview-tags-container" v-if="tagsReceived">
            <div
              class="survey-preview-tags"
              v-for="(tag, tagIdx) in survey.tags"
              :key="tagIdx"
            >#{{tag}}</div>
          </section>
        </div>
      </div> -->
      <div v-if="titleReceived" class="create-survey-container">
        <form class="create-survey-form" @submit.prevent="publishSurvey">
          <section class="survey-base-input-container" v-if="baseOptsOpen">
            <!-- <input class="survey-input" type="text" placeholder="Survey Name" v-model="survey.name" /> -->
            <br />
            <textarea
              v-if="!descReceived"
              @keyup.enter="catchDefault()"
              class="survey-input-desc"
              placeholder="Enter Survey Description"
              v-model="survey.description"
            ></textarea>
            <button v-if="!descReceived" @click="descReady()" type="button">All Set!</button>
            <br />
            <input
              v-if="descReceived"
              class="survey-input"
              type="text"
              v-model="survey.tags"
              placeholder="Add Tags..."
            />
            <button
              v-if="descReceived"
              @click="surveyTags()"
              type="button"
            > Add Tag</button>
            <br />
          </section>
          <button
            class="survey-create-btn"
            v-if="(tagsReceived && survey.quests.length)"
            @click="baseReady()"
            type="button"
          >{{baseOptsBtn}} Base Settings</button>
          <create-quest v-if="tagsReceived" v-model="survey.quests"></create-quest>
          <button v-if="(tagsReceived && survey.quests.length)" type="submit">Publish</button>
        </form>
      </div>
    </section>
  </div>
</template>

<script>
import createQuest from "@/components/createQuest";

export default {
  data() {
    return {
      titleReceived: false,
      descReceived: false,
      tagsReceived: false,
      baseOptsOpen: true,
      survey: {
        name: "",
        description: "",
        tags: [],
        isActive: true,
        createdBy: {},
        quests: [],
        createdAt: null,
        endDate: null,
        userLiked: [
          {
            _id: "u101",
            name: "bobo",
            img: ""
          },
          {
            _id: "u102",
            name: "kabobo",
            img: ""
          },
          {
            _id: "u103",
            name: "shlomo",
            img: ""
          }
        ]
      }
    };
  },
  created(){
  },
  methods: {
    catchDefault() {
    },
    titleReady() {
      this.titleReceived = !this.titleReceived;
      console.log("Got Title!");
    },
    descReady() {
      this.descReceived = !this.descReceived;
      console.log("Got Desc!");
    },
    baseReady() {
      this.baseOptsOpen = !this.baseOptsOpen;
    },
    async publishSurvey() {
      let survey = this.survey;
      survey.createdAt = Date.now();
      survey.createdBy = this.$store.getters.user;
      survey.endDate = survey.createdAt * 1.00135;
      try {
        this.$store.dispatch({ type: "publishSurvey", survey });
        this.$router.push("/survey/list");
      } catch (err) {
        console.log("had problems publishing survey");
      }
    }
  },
  computed: {
    user() {
      return this.$store.getters.user;
    },
    surveyTags() {
      let survey = this.survey;
      let res = survey.tags;
      if (survey.tags.includes(",")) {
        this.tagsReceived = true;
        res = survey.tags.split(",");
      }
      if (survey.tags.includes(" ")) {
        this.tagsReceived = true;
        res = survey.tags.split(" ");
      }
      if (survey.tags.includes("-")) {
        this.tagsReceived = true;
        res = survey.tags.split("-");
      }
      if (survey.tags.includes("#")) {
        this.tagsReceived = true;
        res = survey.tags.split("#");
      }
      survey.tags = res;
      this.survey.tags = survey.tags;
    },
    surveyHeader() {
      if (this.tagsReceived) return "Great! Now Lets Add Questions:";
      if (!this.titleReceived) return "Ready to AskEm?";
      if (this.titleReceived && this.descReceived)
        return 'Lets Give "' + this.survey.name + '" At Least One Tag:';
      if (this.titleReceived)
        return (
          'Lets Give your survey "' + this.survey.name + '" a Description:'
        );
    },
    baseOptsBtn() {
      if (!this.baseOptsOpen) return "Show";
      else return "Hide";
    }
  },
  components: {
    createQuest
  }
};
</script>
