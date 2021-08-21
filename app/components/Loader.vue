<template v-if="loader">
    <v-progress-circular
      class="loader"
      indeterminate
      :size="70"
      :width="7"
      color="purple"
    ></v-progress-circular>
</template>


<script>
export default {
  props: {
    loader: {
      type: Boolean,
      default: true,
    },
  },
}
</script>


<style scoped>
.loader {
  position: absolute;
  left: 50%;
  top: 30%;
}
</style>