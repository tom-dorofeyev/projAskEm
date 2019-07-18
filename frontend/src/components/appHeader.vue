<template>
    <div class="app-header-div flex">
    <router-link to="/"><img src="@/assets/images/askem.png" alt="Link to home page"></router-link>
    <nav class="main-nav flex">
      <router-link to="/about">About</router-link> 
      <router-link to="/survey/list">Survey List</router-link> 
      <router-link to="/signup">Signp</router-link>
      <router-link to="/login">Login</router-link>
    </nav>
      <button v-if="!user" @click="doSignin">Sign In</button>
      <nav class="user-main-nav flex" v-if="user">
        <router-link to="/profile">User Details</router-link>
        <button @click="doLogout">Logout</button>
      </nav>
    </div>
</template>

<script>
export default {
  data() {
    return {
    }
  },
  created(){
    this.$store.dispatch({ type: "loadUser" })
  },
  methods: {
    doSignin(){
      //TODO: after marging signup and login change it!
      this.$router.push('/signup')
    },
    doLogout(){
      this.$store.dispatch({type:'logout'})      
    }
  },
  computed: {
    user(){
      const user = this.$store.getters.user
      return user
    }
  }

}
</script>
