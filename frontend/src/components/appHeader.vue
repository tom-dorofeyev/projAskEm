<template>
    <div class="app-header-div flex">
      <nav class="main-nav flex">
        <div class="logo">
          <router-link to="/"><img src="@/assets/images/askem.png" alt="Link to home page"></router-link>
        </div>
        <div class="header-btn-list flex">
          <router-link to="/about">About</router-link> 
          <router-link to="/survey/list">Survey List</router-link> 
          <template v-if="!user.userName">
            <router-link to="/signup">Sign up</router-link>
            <router-link to="/login" id="sign-in">Sign In</router-link>
          </template>
          <button v-if="user.userName" @click="doLogout">Log Out</button>
        </div>
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



<style lang="scss" scoped src="@/styles/components/_appHeader.scss">

</style>
