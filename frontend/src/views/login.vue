<template>
  <div class="login">
    <h1>Login!</h1>
    <div class="login-container">
      <label for="uname">
        <b>Username</b>
      </label>
      <input type="text" placeholder="Enter Username" name="uname" required /> <br>

      <label for="psw">
        <b>Password</b>
      </label>
      <input type="password" placeholder="Enter Password" name="psw" required /> <br>

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

    }
  },
  methods:{
    doLogin(){
      console.log('Logging in! (Just a log - not actually logging)')
    }
  },
  components: {
  }
}
</script>
