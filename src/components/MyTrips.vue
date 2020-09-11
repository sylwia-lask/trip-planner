<template>
  <div>
    <h2>My trips</h2>
    <div v-if="selectedTrips.length">
      <h3>Selected trips:</h3>
      <country-pin v-for="trip in selectedTrips" :key="trip.id" :country="trip.country"></country-pin>
      <b-button variant="danger" @click="deleteSelectedTrips">
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
import { mapGetters, mapMutations, mapActions } from "vuex";


import SingleTrip from "./SingleTrip";
import CountryPin from "./CountryPin";

export default {
  name: "MyTrips",
  components: { SingleTrip, CountryPin },
  methods: {
    ...mapMutations(["addToSelectedTrips", "deleteSelectedTrips", "loadTrips"]),
    ...mapActions(['fetchCityWeather'])
  },
  computed: {
    ...mapGetters(["trips", "selectedTrips"]),
  },
  async mounted() {
    
    this.fetchCityWeather('Athens');
  },
};
</script>