<template>
  <section class="survey-results-container" 
            v-if="answers.length > 0 && survey.name">
    <h1>{{survey.name}}</h1>
    <div class="result-list" v-for="(ans, idx) in answers" :key="idx">
      <result-preview :quest="survey.quests[idx]" :answer="ans" />
    </div>
  </section>
</template>





<script>
import resultPreview from '../components/resultPreview'

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
    this.answers = this.$store.getters.SurveyAnswers;
    this.survey = await this.$store.dispatch({ type: "surveyById", surveyId });
  },
  components: {
    resultPreview
  }
};
</script>

<style>
</style>
