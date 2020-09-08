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
    <b-form-checkbox :id="trip.id.toString()" v-model="checked" :name="trip.id.toString()" value="checked" class="checkbox" @change="$emit('selection-changed', trip.id)">Check</b-form-checkbox>
    <b-card-text>
      <ul>
        <li v-for="place in trip.seen" :key="place">{{place}}</li>
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
      rating: null,
      checked: false,
    };
  },
  computed: {
    formattedRating() {
      const indicator = () => (this.rating === 1 ? "star" : "stars");
      return `${this.rating} ${indicator()}`;
    },
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
  },
  mounted() {
    this.rating = this.trip.rating;
  },
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