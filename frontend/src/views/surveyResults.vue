<template>
  <section class="survey-results-container" 
            v-if="answersToShow.length > 0 && survey.name">
    <h1>{{survey.name}}</h1>
    <div class="result-list" v-for="(ans, idx) in answersToShow" :key="idx">
      <result-preview :quest="survey.quests[idx]" :answer="ans" />
    </div>
  </section>
</template>

<script>
import resultPreview from '../components/resultPreview'
import socket from '../services/socketService'

export default {

  data() {
    return {
      answers: [],
      survey: {}
    };
  },
  async created() {
    const surveyId = this.$route.params.surveyId;
    await this.$store.dispatch({ type: "getAnswersBySurveyId", surveyId });
    this.survey = await this.$store.dispatch({ type: "surveyById", surveyId });
    this.$store.dispatch({type: 'watchingResults', surveyId})
    socket.on('surveySubmit', () => {
      this.$store.dispatch({type: 'getAnswersBySurveyId', surveyId})
    })
  },
  computed:{
    answersToShow(){
      return this.$store.getters.surveyAnswers;
    }
  },
  destroyed() {
    let surveyId = this.survey._id
    this.$store.dispatch({type:'leftResults', surveyId})
  },
  components: {
    resultPreview
  },
};
</script>

<style>
</style>
