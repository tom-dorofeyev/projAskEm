
<template>
  <div class="users-details">
    <div class="users-details-container">
      <h1>User Name: {{users[0].userName}}</h1>
      <h1>Email: {{users[0].email}}</h1>
      <h1>Full Name: {{users[0].fullName}}</h1>
      <h1>Password: {{users[0].Password}}</h1>
      <h1>Admin? {{users[0].isAdmin}}</h1>
      <!-- <h6>{{users.createdAt}}</h6>
      <h5>"{{users.description}}"</h5>
      <h6>Tags: {{users.tags}}</h6>
      <h4>{{users.quests[0].title}} ({{users.quests[0].type}})</h4>
      <h5>{{users.quests[0].opts[0]}}</h5> -->
    </div>
  </div>
</template>

<script>
import userService from "../services/userService.js";
export default {
  data: () => ({
    users: userService.DB.users
  }),
  components: {}
};
</script>
