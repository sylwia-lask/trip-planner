<template>
  <div>
    <h2>My trips</h2>
    <div class="row">
      <single-trip v-for="trip in trips" :key="trip.id" class="col-sm-4" :trip="trip">{{trip.country}}</single-trip>
    </div>
  </div>
</template>

<script>
import { myTrips } from "../data";
import SingleTrip from "./SingleTrip";

export default {
  name: "MyTrips",
  components: { SingleTrip },
  data: () => ({
    trips: [],
  }),
  mounted() {
    this.trips = myTrips;
  },
};
</script>