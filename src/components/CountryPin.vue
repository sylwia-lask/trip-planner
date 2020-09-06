<template>
  <b-badge variant="primary" class="country-pin">{{ country }}</b-badge>
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
}
</style>