<template>
  <div>
    <h2 class="ml-5 mt-2">Add Trip</h2>
    <form class="m-5" @submit.prevent="saveTrip">
      <b-form-input v-model="country" placeholder="Enter country" required></b-form-input>
      <b-form-input v-model="cityOfResidence" placeholder="Enter city of residence" class="mt-2" required></b-form-input>
      <label for="trip-date" class="mt-3">Choose a date</label>
      <b-form-datepicker
        id="trip-date"
        v-model="date"
        class="mb-2"
        :date-format-options="{ year: 'numeric', month: 'numeric', day: 'numeric' }"
        required
      ></b-form-datepicker>
      <b-form-input v-model="thingsToSeeInput" placeholder="Enter thingsToSee item"></b-form-input>
      <b-button variant="success" class="mt-1" @click="addToThingsToSee">Add things to see</b-button>
      <ul>
        <li v-for="item in thingsToSee" :key="item">{{item}}</li>
      </ul>
      <b-form-input v-model="photoLink" placeholder="Enter photo url" class="mt-3" required></b-form-input>
      <b-form-input v-model="rating" placeholder="Rating" type="number" class="mt-3" required></b-form-input>
      <b-button type="submit" variant="info" class="mt-2">Submit</b-button>
    </form>
  </div>
</template>

<script>
import {mapGetters, mapMutations} from 'vuex';

export default {
  name: "addTrip",
  data() {
    return {
      country: "",
      cityOfResidence: '',
      date: "",
      thingsToSee: [],
      photoLink: "",
      rating: null,
      thingsToSeeInput: "",
    };
  },
  computed: {
    ...mapGetters(['trips'])
  },
  methods: {
    ...mapMutations(['addTrip']),
    addToThingsToSee() {
      this.thingsToSee.push(this.thingsToSeeInput);
      this.thingsToSeeInput = "";
    },
    saveTrip() {
      const trip = {
        id: this.trips.length + 1,
        country: this.country,
        date: this.date,
        thingsToSee: this.thingsToSee,
        photoLink: this.photoLink,
        rating: Number(this.rating),
      };

      this.addTrip(trip);
      this.$router.push("../my-trips");
    },
  },
};
</script>