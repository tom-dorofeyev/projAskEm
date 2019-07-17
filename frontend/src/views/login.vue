<template>
  <div class="login">
    <h1>Login!</h1>
    <h3>{{msg}}</h3>
    <div class="login-container">
      <label for="uname">
        <b>Username</b>
      </label>
      <input type="text" v-model="loginCred.userName" placeholder="Enter Username" name="uname" required /> <br>

      <label for="psw">
        <b>Password</b>
      </label>
      <input type="password" v-model="loginCred.password" placeholder="Enter Password" name="psw" required /> <br>

      <button @click="doLogin" type="submit">Login</button>
      <label>
        <input type="checkbox" checked="checked" name="remember" /> Remember me
      </label>
    </div>
  </div>
</template>


<script>

export default {
  data(){
    return{
      msg:'',
      loginCred: {
        userName: '',
        password: '',
      },

    }
  },
  methods:{
    doLogin() {
      if(!this.loginCred.userName || !this.loginCred.password) return this.msg = 'Missing username or password'
      this.$store.dispatch({type :'login', userCred: this.loginCred})
    },
  },
  components: {
  }
}
</script>
