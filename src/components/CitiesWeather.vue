<template>
  <div>
    <h2>Cities weather</h2>
    <ul>
      <li v-for="trip in tripsWithCities" :key="trip.id" class="m-2">
        {{ trip.country }} ({{trip.cityOfResidence}})
        <b-button @click="fetchCityWeather(trip)">Check weather</b-button>
      </li>
    </ul>
  </div>
</template>

<script>
import { mapGetters, mapActions } from "vuex";

export default {
  name: "citiesWeather",
  computed: {
    ...mapGetters(["tripsWithCities"]),
  },
  methods: {
      ...mapActions(["fetchCityWeather"])
  }
};
</script>