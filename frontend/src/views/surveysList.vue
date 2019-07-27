
<template>
  <div class="survey-list" >
      <filter-by @update-filter="updateFilter" />
    <template v-if="surveys.length">
      <div class="header-search-container">
        <h2 class="survey-list-header">Surveys List</h2>
      </div>
      <div class="under-title"></div>
      <survey-preview v-for="currSurvey in surveys" :key="currSurvey._id" :survey="currSurvey" />
    </template>
  </div>
</template>

<script>
import surveyPreview from "@/components/surveyPreview";
import filterBy from "@/components/filterBy";

export default {
  data: () => ({
    surveys: [],
    timeStamp: Date.now()
  }),
  async created() {
    await this.$store.dispatch({ type: "loadSurveys" });
    this.surveys = this.$store.getters.getSurveyList;
  },
  methods: {
    async updateFilter(filterBy) {
      await this.$store.dispatch({ type: "loadSurveys", filterBy });
      this.surveys = this.$store.getters.getSurveyList;
    }
  },
  components: {
    surveyPreview,
    filterBy
  }
};
</script>

<style lang="scss" src="@/styles/views/_survey-list.scss">
</style>
