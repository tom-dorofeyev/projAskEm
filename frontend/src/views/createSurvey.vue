<template>
  <div class="create-survey-page">
    <h1>create Survey</h1>
    <section class="quest-editot-list" v-if="quests.length > 0">
      <div v-for="currQuest in quests"
            :key="currQuest.title"
            class="quest-editor">
        choose question type:
        <select v-model="quests.type">
          <option value="textBox">Text Box</option>
          <option value="singleAnswer">Single Answer</option>
          <option value="multAnswer">Multiple Answers</option>
        </select>
      </div>
    </section>

    {{quests}}

    <button @click="addQuest">Add Question</button>
  </div>
</template>

<script>


export default {
  data(){
    return{
      quests:[]
    }
  },
  methods:{
    addQuest(){
      this.quests.push({
        title: '',
        type:'',
        opts:[]
      })
    }
  },
  components: {

  }
}
</script>
