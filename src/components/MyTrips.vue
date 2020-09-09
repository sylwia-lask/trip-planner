<template>
  <div>
    <h2>My trips</h2>
    <div v-if="selectedTrips.length">
      <h3>Selected trips:</h3>
      <country-pin v-for="trip in selectedTrips" :key="trip.id" :country="trip.country"></country-pin>
      <b-button variant="danger" @click="deleteSelected">
        <b-icon icon="x"></b-icon>Delete selected
      </b-button>
    </div>
    <h3 v-else>No trips selected</h3>
    <div class="row">
      <single-trip
        v-for="trip in trips"
        :key="trip.id"
        class="col-sm-4"
        :trip="trip"
        @selection-changed="addToSelectedTrips($event)"
      >{{trip.country}}</single-trip>
    </div>
  </div>
</template>

<script>
import { myTrips } from "../data";
import SingleTrip from "./SingleTrip";
import CountryPin from "./CountryPin";

export default {
  name: "MyTrips",
  components: { SingleTrip, CountryPin },
  data() {
    return {
      trips: [],
      selectedTrips: []
    };
  },
  methods: {
    addToSelectedTrips(id) {
      if (this.selectedTrips.some((i) => i.id === id)) {
        this.selectedTrips = this.selectedTrips.filter((i) => i.id !== id);
      } else {
        const changedTrip = this.trips.filter((i) => i.id === id)[0];
        this.selectedTrips.push(changedTrip);
      }
    },
    deleteSelected() {
      this.trips = this.trips.filter(
        (i) => !this.selectedTrips.some((el) => el.id === i.id)
      );
      this.selectedTrips = [];
    },
  },
  mounted() {
    this.trips = myTrips;
  },
};
</script>