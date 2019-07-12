<template>
  <div class="create-survey-page">
    <h1>create Survey</h1>
    Enter Survey Name:
    <input type="text" v-model="survey.name">
    Enter Survey Description:
    <textarea v-model="survey.description" ></textarea>
    <input type="text" @keyup.enter="addTag" placeholder="Add Tags...">
    <div class="tags" v-for="(tag, index) in survey.tags" :key="index">
      {{tag}}
      <button @click="removeTag(index)">X</button>
    </div>
    <create-quest v-model="survey.quests"></create-quest>
    <button @click="publishSurvey">Publish</button>
  </div>
</template>

<script>
  import createQuest from '@/components/createQuest'

export default {
  data(){
    return{
      survey:{name:'',description:'', tags:[],createdBy:null,quests:[],userLiked:[]},
    }
  },
  methods:{
    publishSurvey(){
      let survey = this.survey
      this.$store.dispatch({type:'publishSurvey', survey})
    },
    addTag(ev){
      this.survey.tags.push(ev.target.value)
    },
    removeTag(idx){
      this.survey.tags.splice(idx, 1);
    }
  },
  components: {
    createQuest
  }
}
</script>
