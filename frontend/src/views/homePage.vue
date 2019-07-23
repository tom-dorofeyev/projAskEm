<template>
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
          Create your survey
          <img src="@/assets/images/arrow-icon.svg" alt="">
        </button>
      </router-link> 
    </div>
  </div>
</template>

<script>
import surveyService from '@/services/surveyService'

export default {
  components: {

  }
}
</script>


<style lang="scss" scoped src="@/styles/views/_home-page.scss">

</style>
