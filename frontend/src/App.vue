<template>
  <div id="app">
    <app-header></app-header>
    <router-view />
    <app-footer></app-footer>
  </div>
</template>

<script>
  import appHeader from "@/components/appHeader";
  import appFooter from "@/components/appFooter";

export default {
  components: {
    appHeader,
    appFooter,
  }
}
</script>

<style lang="scss" src="@/styles/global.scss">
</style>
