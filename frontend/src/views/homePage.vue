<template>
  <section>
    <div class="home-page">
      <img class="homepage-header-img" src="@/assets/images/header.png" alt="">
        <div class="text-container">
          <img src="../assets/images/askem.png" alt=""/>
          <h2>Watch The World Answer</h2>
        <router-link to="/survey/create">
          <button>
            Create Survey
            <img src="@/assets/images/arrow-icon.svg" alt="">
          </button>
        </router-link>
        </div>
    <!-- <div class="red-bcg">
        <img src="@/assets/images/askem-bcg-img.png" alt="">
      </div>
      <div class="homepage-header">
        <div class="text-container">
          <img src="../assets/images/askem.png" alt=""/>
          <h2>Watch The World Answer</h2>
        </div>
        <router-link to="/survey/create">
          <button>
            Create Survey
            <img src="@/assets/images/arrow-icon.svg" alt="">
          </button>
        </router-link> 
    </div>  -->
      </div>
        <section class="trending-surveys title">
        <div class="under-title"></div>
        <h2 class="trending-surveys-title">Most Trending Surveys</h2>
      <section class="survey-list top-answered">
        <survey-preview v-for="currSurvey in popularSurveys" :key="currSurvey._id" :survey="currSurvey"/>
      </section>
        </section>
      <div class="how-it-works">
      <div class="under-title"></div>
        <h2 class="how-it-works-title">How It Works</h2>
        <div class="how-it-work-gif-div flex">
          <h3>Make a surveys, Publish him, Track the results live and Watch the world answer! </h3>
        <!-- <img class="guide-gif" src="@/assets/images/guide-gif.gif" alt=""> -->
        </div>
      </div>
      <div class="use-our-service">
      <div class="under-title"></div>
        <h2 class="companies-use-us">Who Works With Us?</h2>
        <div class="companies-icons flex">
          <img src="@/assets/images/companies/bird.png">
          <img src="@/assets/images/companies/metube.png">
          <img src="@/assets/images/companies/NOONLE.png">
          <img src="@/assets/images/companies/pear.png">
          <img src="@/assets/images/companies/squars.png">
        </div>
      </div>
      <div class="under-title"></div>
    </section>
</template>

<script>
import surveyService from '@/services/surveyService'
import surveyPreview from '@/components/surveyPreview'

export default {
  data(){
    return {
      popularSurveys:[],
    }
  },
  async created(){
    const surveyIds = await this.$store.dispatch('getMostAnsweredSurveyIds')
    surveyIds.forEach(async surveyId => {
      const survey = await this.$store.dispatch({type:'surveyById', surveyId})
      if(survey) this.popularSurveys.push(survey)
    })
  },
  components: {
    surveyPreview,
  }
}
</script>


<style lang="scss" scoped src="@/styles/views/_home-page.scss">

</style>
