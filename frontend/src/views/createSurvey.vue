<template>
  <div class="create-survey-page">
    <h1>create Survey</h1>
    Enter Survey Name:
    <input type="text">
    <create-quest></create-quest>
    <button @click="publishSurvey">Publish</button>
  </div>
</template>

<script>
  import createQuest from '@/components/createQuest'

export default {
  data(){
    return{
      survey:{name:'',description:'', tags:[]},
    }
  },
  methods:{
    publishSurvey(){
      console.log('publishing')
    }
  },
  components: {
    createQuest
  }
}
</script>
