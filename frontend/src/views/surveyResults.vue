
<template>
  <div class="survey-results-page">
    <div class="survey-results-container">
      <h1>{{survey.name}}</h1>
      Questions:{{survey.quests.length}}
      <h6>{{survey.createdAt}}</h6>
      <h5>"{{survey.description}}"</h5>
      <h6>Tags: {{survey.tags}}</h6>
      <h4>{{survey.quests[0].title}} ({{survey.quests[0].type}})</h4>
      <h5>{{survey.quests[0].opts[0]}}</h5>
      <h5>{{survey.quests[0].opts[1]}}</h5>
      <h5>{{survey.quests[0].opts[2]}}</h5>
      <h4>{{survey.quests[1].title}} ({{survey.quests[1].type}})</h4>
      <h5>{{survey.quests[1].opts[0]}}</h5>
      <h5>{{survey.quests[1].opts[1]}}</h5>
      <h5>{{survey.quests[1].opts[2]}}</h5>
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
import surveyDB from "../data/surveyDB.js";
export default {
  data: () => ({
    survey: surveyDB.surveys[0]
  }),
  components: {}
};
</script>
