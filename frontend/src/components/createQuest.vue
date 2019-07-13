<template>
  <div class="create-survey-page">
    <section class="quest-editot-list" v-if="quests.length > 0">
      <div v-for="(currQuest, index) in quests" :key="index" class="quest-editor">
        Enter Question:
        <input type="text" v-model="currQuest.title" />
        <section class="type-selection">
          choose question type:
          <select v-model="currQuest.type" @input="setQuestType">
            <option v-for="type in typeOptions" :value="type.value" :key="type.value">{{type.txt}}</option>
          </select>
        </section>
        <button @click="removeQuest(index)">delete question</button>
      </div>
    </section>
    <button @click="addQuest" type="button">Add Question</button>
  </div>
</template>

<script>
export default {
    props:['value'],
  data() {
    return {
      quests: [],
      typeOptions: [
        { value: "textBox", txt: "Text Box" },
        { value: "singleAnswer", txt: "Single Answer" },
        { value: "multAnswer", txt: "Multiple Answers" }
      ],
      questIndex: 0
    };
  },
  methods: {
    addQuest() {
      this.quests.push({
        title: "",
        type: "",
        opts: []
      });
      this.$emit('input', this.quests)
    },
    removeQuest(index) {
      this.quests.splice(index, 1);
    },
    setQuestType(ev){
      console.log(ev.target.value)
    }
  },
  components: {}
};
</script>
