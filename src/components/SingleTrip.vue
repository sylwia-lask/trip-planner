<template>
  <b-card
    :title="trip.country"
    :img-src="trip.photoLink"
    img-alt="Image"
    img-top
    tag="article"
    style="max-width: 20rem; "
    class="mb-5 centered"
  >
    <b-card-text>
      <ul>
        <li v-for="place in trip.seen" :key="place">{{place}}</li>
      </ul>
    </b-card-text>
  </b-card>
</template>

<script>
export default {
  name: "SingleTrip",
  props: ["trip"],
};
</script>

<style scoped>
.centered {
  margin: 0 auto;
}
.card-img-top {
    max-height: 180px;
}
</style>