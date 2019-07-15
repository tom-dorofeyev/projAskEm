
<template>
  <div class="survey-submit-page" v-if="survey._id">
    {{submition}}
    <div class="survey-submit-container">
      <form id="myForm">
        <h1 class="survey-submit-header">{{survey.name}}</h1>
        <h6 class="survey-submit-created">{{survey.createdAt}}</h6>
        <h6 class="survey-submit-created">{{survey.tags}}</h6>
        <h5 class="survey-submit-qst-number">"{{survey.description}}"</h5>
        <h6 class="survey-submit-qst-number">Survey has {{survey.quests.length}} Questions</h6>

        <div class="quest-list" v-for="(currQuest, questIdx) in survey.quests" :key="questIdx">
          <quest-submit :quest="currQuest" :questIdx="questIdx" @update-answer="updateAns">
          </quest-submit>
        </div>

        <section class="survey-submit-btn">
          <input type="button" @click="submitSurvey" value="Submit Answers!" />
        </section>
      </form>
    </div>
  </div>
</template>

<script>

import questSubmit from '@/components/questSubmit'

export default {
  data: () => ({
    survey: {},
    submition: { surveyId: "", userId: null, answers: [] }
  }),
  created() {
    (async () => {
      let surveyId = this.$route.params.id;
      this.submition.surveyId = surveyId;
      const foundSurvey = await this.$store.dispatch({
        type: "surveyById",
        surveyId
      });
      this.survey = foundSurvey;
      this.survey.quests.forEach(() =>
        this.submition.answers.push({})
      );
    })();
  },
  methods: {
    submitSurvey() {
      const submition = this.submition;
      this.$store.dispatch({ type: "submitSurvey", submition });
    },
    updateAns(optIdx, questIdx){
      console.log(optIdx)
    }
  },
  computed: {

  },
  components: {
    questSubmit,
  }
};
</script>
