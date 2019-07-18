<template>
  <section class="survey-results-container" v-if="answers.length > 0">
    {{answers}}
  </section>
</template>





<script>
export default {
  data(){
    return{
      answers: []
    }
  },
  created(){
    const surveyId = this.$route.params.surveyId;
    this.$store.dispatch({type:'getAnswersBySurveyId', surveyId})
    this.answers = this.$store.getters.SurveyAnswers
  },
  computed:{
    setAnswers(){
      this.answers = this.$store.getters.SurveyAnswers
    }
  }
};
</script>

<style>
</style>
