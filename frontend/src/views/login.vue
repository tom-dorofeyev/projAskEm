<template>
  <div class="login">
    <h1>Login!</h1>
    <h3>{{msg}}</h3>
    <div class="login-container">
      <form @submit.prevent="doLogin">
          <b>Username</b>
        <input
          type="text"
          v-model="loginCred.userName" placeholder="Enter Username" required/>
        <br />
          <b>Password</b>
        <input
          type="password"
          v-model="loginCred.password" placeholder="Enter Password" required/>
        <br />

        <button type="submit">Login</button>
      </form>
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
