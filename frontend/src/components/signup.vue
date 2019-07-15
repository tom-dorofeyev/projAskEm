<template>
  <form>
    <input type="text" v-model="user.userName" placeholder="Enter User Name" required />
    <input type="email" v-model="user.email" placeholder="Enter Your Email" required />
    <input type="text" v-model="user.fullName" placeholder="Enter Full Name" required />
    <input type="password" v-model="user.password" placeholder="Enter Password" required />
    <input type="password" v-model="user.rePassword" placeholder="Re Enter Password" required />
    <button>Sign Up</button>
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
      }
    };
  },
  methods: {
    async doSignUp() {
      let user = this.user;
      if (user.password !== user.rePassword)
        console.log("Re Password Entered isn't Match!");
      delete user.rePassword;
      try {
        this.$store.dispatch({ type: "doSignUp", user });
        this.$router.push("/profile");
        cleanInputs();
      } catch {
        console.log("got an error!");
      }
      console.log(user);
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
