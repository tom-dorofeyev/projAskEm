
<template>
  <div class="survey-list" v-if="surveys.length > 0">
    <div class="survey-preview-container" v-for="currSurvey in surveys" :key="currSurvey._id">
      <img src="@/assets/images/tags/default1.jpg" />
      <!-- <img :src="'/assets/images/tags/'+currSurvey.tags[0]+'.jpg'" /> -->
      <div class="survey-img-container">
      <h3 v-if="currSurvey.name" class="survey-preview-title">{{currSurvey.name}}</h3>
      <h3 v-if="!currSurvey.name" class="survey-preview-title">No Title</h3>
      <h5 class="survey-preview-quest-counter">Questions:{{currSurvey.quests.length}} </h5>
      </div>
      <h5 class="survey-preview-quest-description">"{{currSurvey.description}}"</h5>
      <!-- <p
        v-if="currSurvey.createdAt"
        class="survey-preview-timestamp"
      >Created {{currSurvey.createdAt | moment("from", "now") }}</p>
      <p
        v-if="currSurvey.endDate"
        class="survey-preview-timestamp"
      >End Date {{currSurvey.endDate | moment("from") }}</p>-->
      <!-- <section class="survey-preview-users-liked-container">
        <h5 v-if="currSurvey.userLiked[0]" class="survey-preview-users-liked-header">Liked By:</h5>
        <ul class="survey-preview-users-liked-list">
          <li
            v-for="currUser in currSurvey.userLiked"
            :key="currUser._id"
            class="survey-preview-users-liked-user"
          >{{currUser.name}}</li>
        </ul>
      </section>-->
      <section class="survey-preview-btns-container">
          <router-link class="survey-preview-btn" :to="getSurveyUrl(currSurvey._id)">Enter Survey</router-link>
      <section class="survey-preview-tags-container" v-if="currSurvey.tags.length">
        <div
          class="survey-preview-tags"
          v-for="(tag, tagIdx) in currSurvey.tags"
          :key="tagIdx"
        >#{{tag}}</div>
      </section>
          <!-- <router-link
            class="survey-preview-results-btn"
            :to="getSurveyResultsUrl(currSurvey._id)"
          >Survey Results</router-link> -->
      </section>
    </div>
  </div>
</template>

<script>
export default {
  data: () => ({
    surveys: [],
    answers: [],
    timeStamp: Date.now()
  }),
  created() {
    (async () => {
      await this.$store.dispatch({ type: "loadSurveys" });
      // await this.$store.dispatch({ type: "loadAnswers" });
      this.surveys = this.$store.getters.getSurveyList;
      // this.answers = this.$store.getters.answers;
      // console.log('answers: ', this.$store.getters.answers)
    })();
  },
  methods: {
    getSurveyUrl(id) {
      return `/survey/${id}`;
    },
    getSurveyResultsUrl(id) {
      return `/survey/results/${id}`;
    }
  }
};
</script>