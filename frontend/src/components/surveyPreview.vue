<template>
  <div class="survey-preview-container flex">
    <div class="survey-img-container">
      <img
        v-if="survey.tags[0]"
        class="survey-img"
        :src="require('@/assets/images/tags/'+survey.tags[0]+'.jpg')"
      />
      <div class="title-under-img flex">
        <h3 class="survey-preview-title">{{ survey.name ? survey.name : 'No Title'}}</h3>
        <h5 class="survey-preview-quest-counter">Questions:{{survey.quests.length}}</h5>
      </div>
    </div>
    <section class="survey-preview-tags-container flex" v-if="survey.tags.length">
      <div class="survey-preview-tags" v-for="(tag, tagIdx) in survey.tags" :key="tagIdx">#{{tag }}</div>
    </section>
    <h5 v-if="survey.description" class="survey-preview-quest-description">"{{survey.description}}"</h5>
    <section class="survey-preview-btns-container">
      <router-link class="survey-preview-btn" :to="getSurveyUrl">Add Your Opinion</router-link>
      <router-link class="survey-result-btn" :to="getSurveyResultsUrl">View Results</router-link>
    </section>
  </div>
</template>


<script>
export default {
  props: ["survey"],
  computed: {
    getSurveyUrl() {
      return `/survey/${this.survey._id}`;
    },
    getSurveyResultsUrl() {
      return `/survey/results/${this.survey._id}`;
    }
  },
  components: {}
};
</script>
