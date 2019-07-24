<template>
  <div class="create-survey-page">
    <section class="quest-editot-list" v-if="quests.length > 0">
      <div v-for="(currQuest, questIdx) in quests" :key="questIdx" class="quest-editor">
        <input class="survey-input" type="text" placeholder="Enter a Question" v-model="currQuest.title" />
        <button v-if="currQuest.title" class="survey-create-btn-delete" @click="removeQuest(questIdx)">Delete Question</button>
        <section class="type-selection">
          Type:
          <select v-model="currQuest.type">
            <option v-for="type in typeOptions" :value="type.value" :key="type.value">{{type.txt}}</option>
          </select>
        </section>
          <div class="answer-edit-list" v-if="currQuest.opts.length > 0">
            <div class="answer-editor" v-for="(option, ansIdx) in currQuest.opts" :key="ansIdx">
              <input type="text" placeholder="Enter Answer..." v-model="currQuest.opts[ansIdx]">
              <button class="survey-create-btn-delete" @click="removeOption(ansIdx, questIdx)" type="button">x</button>
            </div>
          </div>
        <button class="survey-create-btn" @click="addOption(questIdx)" v-if="checkAnswerType(questIdx)" type="button">Add Option</button>
      </div>
    </section>
    <button class="survey-create-btn" @click="addQuest" type="button">Add Question</button>
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
        { value: "singleSelect", txt: "Single Answer" },
        { value: "multSelect", txt: "Multiple Answers" }
      ],
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
    addOption(idx){
      this.quests[idx].opts.push('')
    },
    removeOption(ansIdx, questIdx){
      this.quests[questIdx].opts.splice(ansIdx, 1)
    },
    checkAnswerType(idx){
      const questType = this.quests[idx].type
      if(questType === 'singleSelect' || questType === 'multSelect') return true
    }
  },
};
</script>
