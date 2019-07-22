
<template>
  <section class="user-details-section" v-if="user.userName">
    <img class="user-details-top-img" src="@/assets/images/userDetails/background.png" />
    <h2 class="user-details-name">{{user.userName}}'s Profile</h2>
    <div class="users-details-container">
      <h4>
        User Name:
        <span class="user-detail-span">{{user.userName}}</span>
      </h4>
      <h4>
        Email:
        <span class="user-detail-span">{{user.email}}</span>
      </h4>
    </div>
  </section>
</template>

<script>
import userService from "../services/userService.js";
export default {
  data() {
    return {
      user: {},
    };
  },
  async created() {
    const userId = this.$route.params.id;
    await this.$store.dispatch({ type: 'userById', userId });
    this.user = this.$store.getters.user
  },
  components: {}
};
</script>
