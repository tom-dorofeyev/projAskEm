<template>
  <div id="app">
    <nav class="main-nav">
      <router-link to="/">Home</router-link>|
      <router-link to="/about">About</router-link>|
      <router-link to="/login">Login</router-link>|
      <router-link to="/profile">User Details</router-link>|
      <router-link to="/survey/list">Survey List</router-link>
    </nav>
    <router-view />
  </div>
</template>

<style lang="scss">
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
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
.survey-preview-quest-counter{
  margin-bottom: 0;
}
.survey-preview-btn {
  background: #3498db;
  background-image: -webkit-linear-gradient(top, #3498db, #2980b9);
  background-image: -moz-linear-gradient(top, #3498db, #2980b9);
  background-image: -ms-linear-gradient(top, #3498db, #2980b9);
  background-image: -o-linear-gradient(top, #3498db, #2980b9);
  background-image: linear-gradient(to bottom, #3498db, #2980b9);
  -webkit-border-radius: 28;
  -moz-border-radius: 28;
  border-radius: 18px;
  font-family: Arial;
  color: #ffffff;
  font-size: 10px;
  padding: 10px 20px 10px 20px;
  text-decoration: none;
}
.survey-preview-btn:hover {
  background: #3cb0fd;
  background-image: -webkit-linear-gradient(top, #3cb0fd, #3498db);
  background-image: -moz-linear-gradient(top, #3cb0fd, #3498db);
  background-image: -ms-linear-gradient(top, #3cb0fd, #3498db);
  background-image: -o-linear-gradient(top, #3cb0fd, #3498db);
  background-image: linear-gradient(to bottom, #3cb0fd, #3498db);
  text-decoration: none;
}
.survey-preview-title {
  margin: 0;
}
.survey-preview-tags {
  font-size: 11px;
  font-style: italic;
  font-weight: bold;
}
.survey-preview-timestamp {
  font-size: 12px;
  margin: 0;
}
.survey-preview-container {
  background-color: lightblue;
  border: 1px solid black;
  margin-bottom: 1px;
  margin-left: 30%;
  margin-right: 30%;
}
.survey-submit-container {
  background-color: lightgreen;
  text-align: left;
}
.survey-submit-header {
  text-align: center;
  margin-bottom: 0;
}
.survey-submit-qst-number {
  text-align: center;
}
.survey-submit-created {
  margin: 0;
  text-align: center;
}
.survey-submit-btn {
  margin: 0 auto;
  text-align: center;
}
</style>
