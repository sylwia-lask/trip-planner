<template>
  <div>
    <h2 class="ml-5 mt-2">Add Trip</h2>
    <form class="m-5" @submit.prevent="saveTrip">
      <b-form-input v-model="country" placeholder="Enter country" required></b-form-input>
      <label for="trip-date" class="mt-3">Choose a date</label>
      <b-form-datepicker
        id="trip-date"
        v-model="date"
        class="mb-2"
        :date-format-options="{ year: 'numeric', month: 'numeric', day: 'numeric' }"
        required
      ></b-form-datepicker>
      <b-form-input v-model="seenInput" placeholder="Enter seen item"></b-form-input>
      <b-button variant="success" class="mt-1" @click="addToSeen">Add to seen things</b-button>
      <ul>
        <li v-for="item in seen" :key="item">{{item}}</li>
      </ul>
      <b-form-input v-model="photoLink" placeholder="Enter photo url" class="mt-3" required></b-form-input>
      <b-form-input v-model="rating" placeholder="Rating" type="number" class="mt-3" required></b-form-input>
      <b-button type="submit" variant="info" class="mt-2">Submit</b-button>
    </form>
  </div>
</template>

<script>
import { myTrips } from "../data";
export default {
  name: "addTrip",
  data() {
    return {
      country: "",
      date: "",
      seen: [],
      photoLink: "",
      rating: null,
      seenInput: "",
    };
  },
  methods: {
    addToSeen() {
      this.seen.push(this.seenInput);
      this.seenInput = "";
    },
    saveTrip() {
      const trip = {
        id: myTrips.length,
        country: this.country,
        date: this.date,
        seen: this.seen,
        photoLink: this.photoLink,
        rating: Number(this.rating),
      };

      console.log(trip);

      myTrips.push(trip);
      this.$router.push("../my-trips");
    },
  },
};
</script>