<template>
  <section class="survey-results-container">
    <div class="survey-submit-page" v-if="survey._id">
      <div class="survey-img-trans-cover"></div>
      <img v-if="survey.imageUrl" class="survey-img" :src="survey.imageUrl" />
      <img class="survey-img" src="@/assets/images/homepage-background.jpg" v-if="!survey.imageUrl" />
      <h2 v-if="(survey.name)" class="survey-submit-name">"{{survey.name}}" Results:</h2>
      <section class="survey-submit-header">
        <section class="survey-submit-details">
          <h6 class="survey-submit-created">Created {{survey.createdAt | moment("from", "now") }}</h6>
          <h6 class="survey-submit-qst-number">Survey has {{survey.quests.length}} Questions</h6>
          <div class="survey-preview-tags-container">
            Tags: &nbsp;
            <div
              class="survey-preview-tags"
              v-for="(tag, tagIdx) in survey.tags"
              :key="tagIdx"
            >#{{tag}} &nbsp;</div>
          </div>
        </section>
      </section>
    </div>
    <h1 v-if="!(answersToShow.length > 0 && survey.name)" class="survey-no-results">No Results Yet!</h1>
    <img
      class="survey-no-result-img"
      v-if="!(answersToShow.length > 0 && survey.name)"
      src="@/assets/images/nosearchresults.jpg"
      alt
    />
    <h5 v-if="(answersToShow.length > 0 && survey.name)" class="qrCanvas-title">QR code:</h5>
    <canvas v-if="(answersToShow.length > 0 && survey.name)" ref="qrCanvas" id="qr-canvas"></canvas>
    <div class="survey-inner-container" v-if="answersToShow.length > 0 && survey.name">
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
import qrCode from "qrcode";

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
    setTimeout(() => {
      qrCode.toCanvas(this.$refs.qrCanvas, window.location.href, error => {
        if (error) console.error(error);
        console.log("QR success!");
      });
    }, 0);
  },
  computed: {
    answersToShow() {
      return this.$store.getters.surveyAnswers;
    }
  },
  destroyed() {
    let surveyId = this.survey._id;
    this.$store.dispatch({ type: "leftResults", surveyId });
  },
  components: {
    resultPreview
  },
  methods: {
    shortUrl() {
      let surveyPath = "https://proj-askem.herokuapp.com" + this.$route.path;
      this.$store.dispatch({ type: "getShortUrl", surveyPath });
    }
  }
};
</script>


<style lang="scss" scoped src="@/styles/views/_survey-result.scss">
</style>