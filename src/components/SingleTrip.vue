<template>
  <b-card
    :title="formattedTitle"
    :img-src="trip.photoLink"
    img-alt="Image"
    img-top
    tag="article"
    style="max-width: 20rem; "
    class="mb-5 centered"
  >
    <b-form-checkbox :id="trip.id.toString()" v-model="checked" :name="trip.id.toString()" value="checked" class="checkbox" @change="$emit('selection-changed', trip.id)">Check</b-form-checkbox>
    <b-card-text>
      <ul>
        <li v-for="place in trip.thingsToSee" :key="place">{{place}}</li>
      </ul>
    </b-card-text>
    <b-card-text class="rating">
      Rating:
      <b-icon icon="patch-minus" class="rating-change" @click="decrement"></b-icon>
      {{formattedRating}}
      <b-icon icon="patch-plus" class="rating-change" @click="increment"></b-icon>
    </b-card-text>
  </b-card>
</template>

<script>
export default {
  name: "SingleTrip",
  props: ["trip"],
  data: function () {
    return {
      rating: this.trip.rating,
      checked: false,
      cityOfResidence: this.trip.cityOfResidence
    };
  },
  computed: {
    formattedRating() {
      const indicator = () => (this.rating === 1 ? "star" : "stars");
      return `${this.rating} ${indicator()}`;
    },
    formattedTitle() {
      if (this.cityOfResidence) {
        return `${this.trip.country} (${this.trip.cityOfResidence})`;
      } else {
        return this.trip.country;
      }
    }
  },
  methods: {
    increment() {
      this.rating++;
    },
    decrement() {
      if (this.rating) {
        this.rating--;
      }
    },
  }
};
</script>

<style scoped>
.centered {
  margin: 0 auto;
}
.card-img-top {
  max-height: 180px;
}
.rating {
  position: absolute;
  bottom: 0;
}
.rating-change {
  cursor: pointer;
}
.rating-change:hover {
  color: red;
}
.checkbox {
    margin: 5px;
}
</style>