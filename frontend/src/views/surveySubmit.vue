
<template>
  <div class="survey-submit-page" v-if="survey._id">
    <div class="survey-submit-container">
      <form id="myForm">
        <h1 class="survey-submit-header">{{survey.name}}</h1>
        <h6 class="survey-submit-created">{{survey.createdAt}}</h6>
        <h6 class="survey-submit-created">{{survey.tags}}</h6>
        <h5 class="survey-submit-qst-number">"{{survey.description}}"</h5>
        <h6 class="survey-submit-qst-number">Survey has {{survey.quests.length}} Questions</h6>


        <div class="quest-list" v-for="(currQuest, questIdx) in survey.quests" :key="questIdx">
          <h4>{{currQuest.title}}</h4>
          <div class="option-list" v-for="(option, optIdx) in currQuest.opts" :key="optIdx">
            <input :type="getQuestType(currQuest.type)" :name="currQuest.title"/>
            {{option}}
          </div>
        </div>


        <section class="survey-submit-btn">
            <input type="button" @click="submitSurvey()" value="Submit Answers!" />
        </section>
      </form>
    </div>
  </div>
</template>

<script>
import surveyService from "../services/surveyService.js";
export default {
  data: () => ({
    survey: {}
  }),
  created() {
    (async () => {
      let surveyId = this.$route.params.id;
      const foundSurvey = await this.$store.dispatch({type: "surveyById",surveyId});
      this.survey = foundSurvey;
    })();
  },
  methods: {
    submitSurvey() {
      console.log("Survey Submitted!");
    },
    getQuestType(type) {
      if (type === "singleSelect") return "radio";
      else if (type === "multSelect") return "checkbox";
    }
  }
};
</script>
