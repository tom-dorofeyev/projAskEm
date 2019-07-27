<template>
  <section class="survey-results-container">
    <canvas ref="qrCanvas" id="qr-canvas"></canvas>
    <div class="survey-inner-container" v-if="answersToShow.length > 0 && survey.name">
      <h1>{{survey.name}}</h1>
      <div class="result-list">
        <template v-for="(ans, idx) in answersToShow">
          <result-preview :quest="survey.quests[idx]" :answer="ans" :key="idx" />
        </template>
      </div>
    </div>
  </section>
</template>

<script>
import resultPreview from "../components/resultPreview";
import socket from "../services/socketService";
import qrCode from 'qrcode'

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
    this.$store.dispatch({ type: "watchingResults", surveyId });
    socket.on("surveySubmit", () => {
      this.$store.dispatch({ type: "getAnswersBySurveyId", surveyId });
    });
    qrCode.toCanvas(this.$refs.qrCanvas, window.location.href, (error) => {
      if (error) console.error(error)
      console.log('success!')
    })
  },
  computed: {
    answersToShow() {
      return this.$store.getters.surveyAnswers;
    }
  },
  mounted() {

  },
  destroyed() {
    let surveyId = this.survey._id;
    this.$store.dispatch({ type: "leftResults", surveyId });
  },
  components: {
    resultPreview
  },
   methods: {
     shortUrl(){
       let surveyPath = 'https://proj-askem.herokuapp.com'+this.$route.path
       this.$store.dispatch({ type: "getShortUrl", surveyPath });
     }
   }
};
</script>


<style lang="scss" scoped src="@/styles/views/_survey-result.scss">
</style>