<template>
  <div class="home-page">
    <!-- <img height="auto" width="40%" src="../assets/logo.png" alt="coverPhoto"> -->
    <img class="homepage-backgroung-img" src="../assets/images/homepage-background.jpg" alt="">
    <div class="homepage-header">
      <img src="../assets/images/askem.png" alt="">
    <h2>Watch The World Answer</h2>
    <router-link to="/survey/create" class="button">Make a Suvey</router-link> 
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
