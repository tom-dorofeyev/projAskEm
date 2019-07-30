<template>
  <form class="signup-form">
    <h2 class="signup-msg">{{msg}}</h2>
    <input type="text" v-model="user.userName"  placeholder="🜶 Enter User Name" required />
    <input type="email" v-model="user.email" placeholder="✉ Enter Your Email" required />
    <input type="text" v-model="user.fullName" placeholder="✎ Enter Full Name" required />
    <input type="password" v-model="user.password" placeholder="⌨ Enter Password" required />
    <input type="password" v-model="user.rePassword" placeholder="⌨ Re Enter Password" required />
    
    <button type="submit" @click="doSignUp">Create Accout</button>
  </form>
</template>

<script>
export default {
  name: "sign-up",

  data() {
    return {
      user: {
        userName: "",
        email: "",
        fullName: "",
        password: "",
        rePassword: "",
        isAdmin: false
      },
      msg: ""
    };
  },

  methods: {
    async doSignUp() {
      let user = this.user;
      if (user.password !== user.rePassword)
        return (this.msg = "Password isn't match!");
      delete user.rePassword;

      try {
        await this.$store.dispatch({ type: "signup", user });
        this.$router.push("/");
        this.cleanInputs();
      } catch (err) {
        this.msg = err;
      }
    },
    cleanInputs() {
      this.user = {
        userName: "",
        email: "",
        fullName: "",
        password: "",
        rePassword: "",
        isAdmin: false
      };
    }
  }
};
</script>

