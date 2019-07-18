<template>
  <div class="create-survey">
    <h1>create Survey</h1>
    <form @submit.prevent="publishSurvey">
      Enter Survey Name:
      <input type="text" v-model="survey.name" />
      <br />Enter Survey Description:
      <textarea v-model="survey.description"></textarea>
      <br />
      <input type="text" v-model="survey.tags" placeholder="Add Tags..." />
      <br />
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
        createdBy: "u101",
        quests: [],
        createdAt: null,
        endDate: null,
        userLiked: [
          {
            _id: "u101",
            name: "bobo",
            img: ""
          },
          {
            _id: "u102",
            name: "kabobo",
            img: ""
          },
          {
            _id: "u103",
            name: "shlomo",
            img: ""
          }
        ]
      }
    };
  },
  methods: {
    async publishSurvey() {
      let survey = this.survey;
      survey.createdAt = Date.now();
      survey.endDate = survey.createdAt * 1.00135;
      var res = survey.tags;
      if (survey.tags.includes(",")) res = survey.tags.split(",");
      if (survey.tags.includes(" ")) res = survey.tags.split(" ");
      if (survey.tags.includes("-")) res = survey.tags.split("-");
      if (survey.tags.includes("#")) res = survey.tags.split("#");
      survey.tags = res;
      try {
        this.$store.dispatch({ type: "publishSurvey", survey });
        this.$router.push("/survey/list");
      } catch (err) {
        console.log("had problems publishing survey");
      }
    }
  },
  components: {
    createQuest
  }
};
</script>
