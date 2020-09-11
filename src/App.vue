<template>
  <div id="app">
    <site-header></site-header>
    <router-view></router-view>
  </div>
</template>

<script>
import { mapMutations } from "vuex";
import SiteHeader from "./components/SiteHeader";
import { myTrips } from "./data";

export default {
  name: "App",
  components: {
    SiteHeader,
  },
  methods: {
    ...mapMutations(["loadTrips"]),
  },
  mounted() {
    this.loadTrips(myTrips);
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
</style>
