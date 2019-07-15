<template>
  <div id="app">
    <app-header></app-header>
    <router-view />
  </div>
</template>

<script>
  import appHeader from "@/components/appHeader";

export default {
  components: {
    appHeader
  }
}
</script>

<style lang="scss">
@import "../src/styles/global.scss";
</style>
