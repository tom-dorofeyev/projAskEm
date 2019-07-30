
<template>
  <section class="user-details-section" v-if="user.userName">
    <div class="header-container">
      <img class="user-details-top-img" src="@/assets/images/userDetails/background.png" />
      <h2 class="user-details-name">{{user.userName}}'s Profile</h2>
    </div>
    <div class="user-details-container flex">
      <div>
        <h2>Your Profile</h2>
        <h4>
          <span class="user-detail-span">🜶 {{user.userName}}</span>
        </h4>
        <h4>
          <span class="user-detail-span">✉ {{user.email}}</span>
        </h4>
      </div>
      <img class="user-img-details" src="@/assets/images/userDetails/guest-icon.png" />
    </div>
    <div class="survey-list flex">
      <div class="created-by-user">
        <h2>Surveys You Created</h2>
        <div class="created-by-user-preview flex">
          <survey-preview 
            v-for="currSurvey in createdByUser"
            :key="currSurvey._id"
            :survey="currSurvey"
          ></survey-preview>
        </div>
        <h2 v-if="!createdByUser">You Hasn't Created Surveys Yet!</h2>
      </div>
      <div class="answered-by-user">
        <h2>Surveys You Answered</h2>
          <div class="answered-by-user-preview">
            <survey-preview
            v-for="currSurvey in answeredByUser"
            :key="currSurvey._id"
            :survey="currSurvey"
          ></survey-preview>
        </div>
        <h2 v-if="!answeredByUser">You Hasn't Answered Surveys Yet!</h2>
      </div>
    </div>
  </section>
</template>
<script>
import surveyPreview from "@/components/surveyPreview";

export default {
  data() {
    return {
      user: {},
      createdByUser: [],
      answeredByUser: []
    };
  },
  async created() {
    const userId = this.$route.params.id;

    this.user = await this.$store.dispatch({ type: "userById", userId });
    this.createdByUser = await this.$store.dispatch({ type: "surveyByUserId", userId });
    this.answeredByUser = await this.$store.dispatch({ type: "answerByUserId", userId });   
  },
  components: {
    surveyPreview
  }
};
</script>
