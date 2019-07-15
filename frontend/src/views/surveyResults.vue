<template>
  <section class="survey-results-container">
    <h1>Results</h1>
      answers : {{answers.length}}
      <hr />
    <div class="survey-results" v-for="currAnswer in answers" :key="currAnswer._id">
      {{currAnswer}}
    </div>
  </section>
</template>

<script>
export default {
  created() {
    const surveyId = this.$route.params.surveyId;
    // this.$store.dispatch({ type: "getAnswersBySurveyId", surveyId });
    (async () => {
      await this.$store.dispatch({ type: "getAnswersBySurveyId", surveyId });
      // this.answersData = this.$store.getters.answers;
    })();
  },
  mounted() {
    console.log(this.answers);
  },
  computed: {
    answers() {
      return this.$store.getters.answers;
    }
  }
};
</script>

<style>
</style>