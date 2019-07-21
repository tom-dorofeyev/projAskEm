<template>
    <div class="app-header-div flex">
      <nav class="main-nav flex">
        <div class="logo">
          <router-link to="/"><img src="@/assets/images/askem.png" alt="Link to home page"></router-link>
        </div>
        <div class="router-link-list flex">
          <router-link to="/about">About</router-link> 
          <router-link to="/survey/list">Survey List</router-link> 
          <router-link to="/signup">Sign up</router-link>
          <router-link v-if="!user.userName" to="/login" id="sign-in">Sign In</router-link>
        </div>
      </nav>
      <nav class="user-main-nav flex" v-if="user.userName">
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



<style lang="scss" scoped src="@/styles/components/_appHeader.scss">

</style>
