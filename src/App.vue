<template>
  <div id="app">
    <site-header></site-header>
    <router-view></router-view>
  </div>
</template>

<script>
import SiteHeader from "./components/SiteHeader";

export default {
  name: "App",
  components: {
    SiteHeader
  },
  data: () => ({
    countries: []
  })
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
</style>
