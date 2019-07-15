<template>
  <div id="app">
    <nav class="main-nav">
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link> | 
      <router-link to="/login">Login</router-link> | 
      <router-link to="/profile">User Details</router-link> | 
      <router-link to="/survey/list">Survey List</router-link> |
      <router-link to="/signup">Sign Up</router-link>
    </nav>
    <router-view />
  </div>
</template>

<style lang="scss">
@import "../src/styles/global.scss";
</style>
