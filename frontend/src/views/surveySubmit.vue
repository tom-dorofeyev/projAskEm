
<template>
  <div class="survey-submit-page">
    <div class="survey-submit-container">
      <form id="myForm">
        <h1 class="survey-submit-header">{{survey.name}}</h1>
        <h6 class="survey-submit-created">{{survey.createdAt}}</h6>
        <h6 class="survey-submit-created">{{survey.tags}}</h6>
        <h5 class="survey-submit-qst-number">"{{survey.description}}"</h5>
        <h6 class="survey-submit-qst-number">Survey has {{survey.quests.length}} Questions</h6>
        <h4>1.{{survey.quests[0].title}} ({{survey.quests[0].type}})</h4>
        {{survey.quests[0].opts[0]}}
        <input type="checkbox" name="opts0" />
        {{survey.quests[0].opts[1]}}
        <input type="checkbox" name="opts1" />
        {{survey.quests[0].opts[2]}}
        <input type="checkbox" name="opts2" />
        <h4>2.{{survey.quests[1].title}} ({{survey.quests[1].type}})</h4>
        {{survey.quests[1].opts[0]}}
        <input type="checkbox" name="opts0" />
        {{survey.quests[1].opts[1]}}
        <input type="checkbox" name="opts1" />
        {{survey.quests[1].opts[2]}}
        <input type="checkbox" name="opts2" />
        <br />
        <br />
        <section class="survey-submit-btn">
          <router-link to="/">
            <input type="button" @click="submitSurvey()" value="Submit Answers!" />
          </router-link>
        </section>
      </form>
      <hr />
      <p>
        Users Liked:
        {{survey.userLiked[0].name}}
        {{survey.userLiked[1].name}}
        {{survey.userLiked[2].name}}
      </p>
    </div>
  </div>
</template>

<script>
import surveyService from "../services/surveyService.js";
export default {
  data: () => ({
    survey: surveyService.DB.surveys[0]
  }),
  methods: {
    submitSurvey() {
      console.log("Survey Submitted!");
    }
  },
  components: {}
};
</script>
