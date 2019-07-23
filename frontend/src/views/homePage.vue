<template>
  <section>
    <div class="home-page">
      <!-- <img class="homepage-backgroung-img" src="../assets/images/homepage-background.jpg" alt=""> -->
      <div class="background">
      </div>
      <div class="red-bcg">
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
      </div>
    </div>
      <trending-survey></trending-survey>
      <div class="how-it-works">
        <h2 class="how-it-works-title">How It Works</h2>
        <div class="how-it-work-gif-div flex">
          <h3>Make a surveys, Publish him, Track the results live and Watch the world answer! </h3>
        <!-- <img class="guide-gif" src="@/assets/images/guide-gif.gif" alt=""> -->
        </div>
      </div>
      <div class="under-title"></div>
      <div class="use-our-service">
        <h2 class="companies-use-us">Who Use Us?</h2>
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
import trendingSurvey from '@/components/trendingSurvey'
export default {
  components: {
    trendingSurvey

  }
}
</script>


<style lang="scss" scoped src="@/styles/views/_home-page.scss">

</style>
