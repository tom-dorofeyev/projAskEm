<template>
  <div class="signin-form">
    <h3>{{msg}}</h3>
      <form @submit.prevent="doLogin">
        <input
          type="text"
          v-model="loginCred.userName" placeholder="🜶 Enter User Name" autofocus required/>
        <input
          type="password"
          v-model="loginCred.password" placeholder="⌨ Enter Password" required/>
        <button type="submit" @click="doLogin">Sign In</button>
      </form>
    <div class="signin-container">
      
    </div>
  </div>
</template>


<script>
export default {
  data() {
    return {
      msg: "",
      loginCred: {
        userName: "",
        password: ""
      }
    };
  },
  methods: {
    async doLogin() {
      if (!this.loginCred.userName || !this.loginCred.password)
        return (this.msg = "Missing user name or password");
      try {
        await this.$store.dispatch({ type: "login", userCred: this.loginCred });
        this.$router.push("/");
      } catch (err) {
        this.msg = err;
      }
    }
  },
};
</script>
