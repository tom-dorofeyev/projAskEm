
<template>
  <div class="survey-submit-page" v-if="survey._id">
    <div class="survey-img-trans-cover"></div>
    <img v-if="survey.imageUrl" class="survey-img" :src="survey.imageUrl" />
    <img class="survey-img" src="@/assets/images/homepage-background.jpg" v-if="!survey.imageUrl" />
      <h2 class="survey-submit-name">{{survey.name}}</h2>
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
    <div class="survey-submit-container">
      <form id="myForm">
        <br />
        <h5 class="survey-submit-description">"{{survey.description}}"</h5>
        <br />
        <section class="quest-list-container">
          <div
            class="quest-list-item"
            v-for="(currQuest, questIdx) in survey.quests"
            :key="questIdx"
          >
            <quest-submit :quest="currQuest" :questIdx="questIdx" @update-answer="updateAns"></quest-submit>
          </div>
        </section>
        <section class="survey-submit-btn">
          <input
            type="button"
            class="survey-create-btn-results"
            @click="viewResults"
            value="Results!"
          />
          <input
            type="button"
            class="survey-create-btn-publish"
            @click="submitSurvey"
            value="Make a Difference"
          />
        </section>
      </form>
    </div>
  </div>
</template>

<script>
import questSubmit from "@/components/questSubmit";

export default {
  data: () => ({
    survey: {},
    submition: { surveyId: "", userId: null, answers: [] }
  }),
  async created() {
      let surveyId = this.$route.params.id;
      this.submition.surveyId = surveyId;
      const foundSurvey = await this.$store.dispatch({
        type: "surveyById",
        surveyId
      });
      this.survey = foundSurvey;
      this.survey.quests.forEach(() => this.submition.answers.push({}));
  },
  methods: {
    submitSurvey() {
      const submition = this.submition;
      const surveyId = this.survey._id;
      this.$store.dispatch({ type: "submitSurvey", submition });
      this.$store.dispatch({ type: "emitSubmition", surveyId });
      this.$router.push(`/survey/results/${this.survey._id}`);
    },
    updateAns(answer, questIdx) {
      let currAnswer = this.submition.answers[questIdx];
      if (typeof answer === "number") currAnswer.optIdx = answer;
      else if (Array.isArray(answer)) currAnswer.optionsIdxs = answer;
      else if (typeof answer === "string") currAnswer.txt = answer;
    },
    viewResults(answer, questIdx) {
      this.$router.push(`/survey/results/${this.survey._id}`);
    }
  },
  computed: {},
  components: {
    questSubmit
  }
};
</script>
