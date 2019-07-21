<template>
  <div class="create-survey">
  <div class="create-survey-container">
    <h1>Create Survey</h1>
    <form class="create-survey-form" @submit.prevent="publishSurvey">
      <input class="survey-input" type="text" placeholder="Enter Survey Name" v-model="survey.name" />
      <br />
      <textarea class="survey-input-desc" placeholder="Enter Survey Description" v-model="survey.description"></textarea>
      <br />
      <input class="survey-tags" type="text" v-model="survey.tags" placeholder="Add Tags..." />
      <br />
      <create-quest v-model="survey.quests"></create-quest>
      <button type="submit">Publish</button>
    </form>
  </div>
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
