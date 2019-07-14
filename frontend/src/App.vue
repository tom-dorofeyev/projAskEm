<template>
  <div id="app">
    <nav class="main-nav">
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link> | 
      <router-link to="/login">Login</router-link> | 
      <router-link to="/profile">User Details</router-link> | 
      <router-link to="/survey/list">Survey List</router-link>
    </nav>
    <router-view/>
  </div>
</template>

<style lang="scss">
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
.main-nav {
  padding: 30px;
  a {
    font-weight: bold;
    color: #2c3e50;
    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
.survey-submit-container{
    background-color: lightgreen;
    text-align: left;
}
.survey-submit-header{
  text-align: center;
  margin-bottom: 0;
}
.survey-submit-qst-number{
  text-align: center;
}
.survey-submit-created{
  margin: 0;
  text-align: center;
}
.survey-submit-btn{
  margin: 0 auto;
  text-align: center;
}
</style>
