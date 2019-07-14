
<template>
  <div class="surveys-list-page" v-if="surveys.length > 0">
    <div>
      <div class="survey-preview-container" v-for="currSurvey in surveys" :key="currSurvey._id">
        <h3 class="survey-preview-title">{{currSurvey.name}}</h3>
        <p class="survey-preview-timestamp">{{currSurvey.createdAt}}</p>
        <section v-if="currSurvey.tags.length">
          <div
            class="survey-preview-tags"
            v-for="(tag, tagIdx) in currSurvey.tags"
            :key="tagIdx"
          >#{{tag}}</div>
        </section>
        <h5 class="survey-preview-quest-counter">{{currSurvey.quests.length}} Questions</h5>
        <br />
        <router-link class="survey-preview-btn" :to="getSurveyUrl(currSurvey._id)">Enter Survey</router-link>
        <br />
        <br />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data: () => ({
    surveys: []
  }),
  created() {
    (async () => {
      await this.$store.dispatch({ type: "loadSurveys" });
      this.surveys = this.$store.getters.getSurveyList;
    })();
  },
  methods: {
    getSurveyUrl(id) {
      return `/survey/${id}`;
    }
  }
};
</script>