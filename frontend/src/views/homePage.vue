<template>
  <div class="home-page">
    <div class="background">
    </div>
    <div class="red-bcg">
      <img src="@/assets/images/askem-bcg-img.png" alt="computer picture">
    </div>
    <div class="homepage-header">
      <div class="text-container">
        <img src="../assets/images/askem.png" alt="askem logo"/>
        <h2>Watch The World Answer</h2>
      </div>
      <router-link to="/survey/create">
        <button>
          Create your survey
          <img src="@/assets/images/arrow-icon.svg">
        </button>
      </router-link>
    </div>
  </div>
</template>

<script>
import surveyService from '@/services/surveyService'
import surveyPreview from '@/components/surveyPreview'

export default {
  data(){
    return {
      populerSurveys:[],
    }
  },
  components: {
    surveyPreview,
  }
}
</script>


<style lang="scss" scoped src="@/styles/views/_home-page.scss">

</style>
