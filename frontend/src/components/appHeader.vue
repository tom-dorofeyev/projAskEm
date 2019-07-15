<template>
    <div class="app-header-div flex">
    <img src="@/assets/images/askem.png" alt="">
    <nav class="main-nav flex">
      <router-link to="/">Home</router-link> 
      <router-link to="/about">About</router-link> 
      <router-link to="/survey/list">Survey List</router-link> 
      <router-link to="/profile">User Details</router-link> 
      <router-link to="/login">Login</router-link> 
      <router-link to="/signup">Sign Up</router-link>
    </nav>

    </div>
</template>

<script>
export default {
}
</script>
