
<template>
  <div class="surveys-list-page" v-if="surveys.length > 0">
    <div class="survey-results-container" v-for="currSurvey in surveys" :key="currSurvey._id">
      <router-link :to="getSurveyUrl(currSurvey._id)">{{currSurvey.name}}</router-link>
    </div>
  </div>
</template>

<script>
export default {
  data: () => ({
    surveys: [],
  }),
  created() {
    (async () => {
      await this.$store.dispatch({type:'loadSurveys'})
      this.surveys = this.$store.getters.getSurveyList;
    })();
  },
  methods: {
    getSurveyUrl(id){
      return `/survey/${id}`
    }
  },
};
</script>