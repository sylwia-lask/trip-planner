<template>
  <div>
    <b-navbar type="dark" variant="info">
      <b-navbar-brand href="#">Trip Planer</b-navbar-brand>
      <b-navbar-nav>
        <b-nav-item :to="'/my-trips'">My trips</b-nav-item>
        <b-nav-item :to="'/add-trip'">Add trip</b-nav-item>
        <b-nav-item :to="'/cities-weather'">Weather</b-nav-item>
      </b-navbar-nav>
    </b-navbar>
  </div>
</template>

<script>
export default {
  name: "SiteHeader",
};
</script>

<style scoped>
h1 {
  color: red;
}
</style>