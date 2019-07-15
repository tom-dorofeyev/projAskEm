<template>
  <div class="create-survey-page">
    <h1>create Survey</h1>
    <form @submit.prevent="publishSurvey">
      Enter Survey Name:
      <input type="text" v-model="survey.name" />
      Enter Survey Description:
      <textarea v-model="survey.description"></textarea>
      <input type="text" @keyup.enter="addTag" placeholder="Add Tags..." />
      <div class="tags" v-for="(tag, tagIdx) in survey.tags" :key="tagIdx">
        {{tag}}
        <button @click="removeTag(tagIdx)">X</button>
      </div>
      <create-quest v-model="survey.quests"></create-quest>
      <button type="submit">Publish</button>
    </form>
  </div>
</template>

<script>
import createQuest from "@/components/createQuest";

export default {
  data() {
    return {
      survey: {
        name: "",
        description: "",
        tags: [],
        isActive: true,
        createdBy: null,
        quests: [],
        createdAt: null,
        endDate: null,
        userLiked: []
      }
    };
  },
  methods: {
    async publishSurvey() {
      let survey = this.survey;
      survey.createdAt = Date.now();
      try {
        this.$store.dispatch({ type: "publishSurvey", survey });
        this.$router.push("/");
      } catch (err) {
        console.log("had problems publishing survey");
      }
    },
    addTag(ev) {
      this.survey.tags.push(ev.target.value);
    },
    removeTag(idx) {
      this.survey.tags.splice(idx, 1);
    }
  },
  components: {
    createQuest
  }
};
</script>
