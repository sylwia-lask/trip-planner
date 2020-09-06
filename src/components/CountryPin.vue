<template>
  <span class="country-pin">{{ country }}</span>
</template>

<script>
export default {
  name: "CountryPin",
  props: ['country']
};
</script>

<style scoped>
.country-pin {
  margin: 5px;
  color: blue;
}
</style>