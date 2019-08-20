<template>
  <div class="create-survey">
    <section class="create-survey-container">
        <h1 class="create-survey-header">Ready to AskEm?</h1>
    <section class="survey-preview-tags-container flex" v-if="survey.tags.length">
      <div class="survey-preview-tags" v-for="(tag, tagIdx) in survey.tags" :key="tagIdx">#{{tag }}</div>
            <button v-if="survey.tags.length" class="survey-create-btn-delete" @click="removeTag" type="button">Delete Tag</button>
    </section>
        <form class="create-survey-form" @submit.prevent="publishSurvey">
          <section class="survey-base-input-container">
            <input
              class="survey-input"
              type="text"
              placeholder="Enter Survey Name"
              v-model="survey.name"
            />
            <br />
            <input class="survey-input" type="text" v-model="inputTag" placeholder="Add a Tag..." />
            <button v-if="inputTag" class="survey-create-btn-tags" @click="addTag" type="button">Add Tag</button>
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
          <div hidden>{{isSurveyReady}}</div>
          <button
            v-if="surveyReady"
            class="survey-create-btn-publish"
            type="submit"
          >Publish</button>
        </form>
    </section>
  </div>
</template>

<script>
import createQuest from "@/components/createQuest";

export default {
  data() {
    return {
      surveyReady: false,
      inputTag: null,
      survey: {
        name: null,
        description: null,
        tags: [],
        isActive: true,
        createdBy: {},
        quests: [],
        createdAt: null,
        endDate: null,
        userLiked: []
      }
    };
  },
  created() {},
  methods: {
    addTag() {
      this.survey.tags.push(this.inputTag);
      this.inputTag = null;
    },
    removeTag() {
      this.survey.tags.pop() 
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
    isSurveyReady() {
      if (this.survey.name && this.survey.tags.length && this.survey.description && this.survey.quests.length && this.survey.quests[0].opts.length > 1) {
       return this.surveyReady = true 
      }
    }
  },
  components: {
    createQuest
  }
};
</script>
