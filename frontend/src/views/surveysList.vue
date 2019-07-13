
<template>
  <div class="surveys-list-page">
    <div class="survey-results-container">{{survey}}</div>
  </div>
</template>

<script>
import surveyService from "../services/surveyService.js";
export default {
  data: () => ({
    survey: {}
  }),
  created() {
    this.survey = this.readSurvey();
    console.log(this.survey);
  },
  methods: {
    readSurvey() {
      return this.$store
        .dispatch({ type: "readSurvey" })
        .then(res => (this.survey = res));
    }
  }
};
</script>