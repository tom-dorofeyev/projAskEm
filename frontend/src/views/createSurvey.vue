<template>
  <div class="create-survey">
    <section class="create-survey-container">
      <h1 class="create-survey-header">{{surveyHeader}}</h1>
      <h3 v-if="survey.tags[0]" class="create-survey-header">#Tags: {{survey.tags}}{{surveyTags}}</h3>
      <form class="create-survey-form" @submit.prevent="publishSurvey">
        <section class="survey-base-input-container" v-if="baseOptsOpen">
          <input
            class="survey-input"
            type="text"
            placeholder="Enter Survey Name"
            v-model="survey.name"
          />
          <br />
          <input
            class="survey-input"
            type="text"
            v-model="survey.tags"
            placeholder="Add Tags..."
          />
          <br />
          <textarea
            @keyup.enter="catchDefault()"
            class="survey-input-desc"
            placeholder="Enter Survey Description"
            v-model="survey.description"
          ></textarea>
          <br />
        </section>
        <create-quest v-model="survey.quests"></create-quest>
        <br />
        <button v-if="(tagsReceived && survey.quests.length)" class="survey-create-btn-publish" type="submit">Publish</button>
      </form>
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
  created() {},
  methods: {
    titleReady() {
      this.titleReceived = !this.titleReceived;
      console.log("Got Title!");
    },
    descReady() {
      this.descReceived = !this.descReceived;
      console.log("Got Desc!");
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
    }
  },
  components: {
    createQuest
  }
};
</script>
