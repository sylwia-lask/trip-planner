<template>
  <div id="app">
    <site-header></site-header>
    <country-pin v-for="country in countries" :key="country" :country="country"></country-pin>
    <router-view></router-view>
  </div>
</template>

<script>
import SiteHeader from "./components/SiteHeader";
import CountryPin from './components/CountryPin';

export default {
  name: "App",
  components: {
    SiteHeader,
    CountryPin
  },
  data: () => ({
    countries: ["Croatia", "Poland", "Greece"]
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
