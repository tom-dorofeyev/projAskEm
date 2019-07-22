<template>
    <div class="app-header-div flex">
    <router-link to="/"><img src="@/assets/images/askem.png" alt="Link to home page"></router-link>
    <nav class="main-nav flex">
      <router-link to="/about">About</router-link> 
      <router-link to="/survey/list">Survey List</router-link> 
      <router-link to="/signup">Sign up</router-link>
      <router-link to="/login">Login</router-link>
    </nav>
      <button v-if="!user" @click="doSignin">Sign In</button>
      <nav class="user-main-nav flex" v-if="user">
        <button @click="userProfile">Your Profile</button>
        <button @click="doLogout">Logout</button>
      </nav>
    </div>
</template>

<script>
export default {
  created(){
    this.$store.dispatch({ type: 'loadUser' })
  },
  methods: {
    doSignin(){
      this.$router.push('/signup')
    },
    async doLogout(){
      await this.$store.dispatch({type:'logout'})    
      this.$router.push('/')
    },
    userProfile(){
      this.$router.push(`/user/${this.user._id}`)
    }
  },
  computed: {
    user(){
      return this.$store.getters.user
    },
  }

}
</script>
