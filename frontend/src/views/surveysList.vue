
<template>
  <div class="survey-list" v-if="surveys.length > 0">
      <survey-preview v-for="currSurvey in surveys" :key="currSurvey._id" :survey="currSurvey"></survey-preview>
  </div>
</template>

<script>
import surveyPreview from '@/components/surveyPreview'

export default {
  data: () => ({
    surveys: [],
    timeStamp: Date.now()
  }),
  async created() {
      await this.$store.dispatch({ type: "loadSurveys" });
      this.surveys = this.$store.getters.getSurveyList;
  },
  components: {
    surveyPreview
  }
};
</script>

<style lang="scss" src="@/styles/views/_survey-list.scss">

</style>
