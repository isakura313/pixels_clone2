<template v-if="loader">
    <loader object="#ff9633" 
     color1="#ffffff" 
     color2="#17fd3d" 
     size="5" 
     speed="2" 
     bg="#343a40" 
     objectbg="#999793" 
     opacity="80" 
     v-show="true"
     name="circular"></loader>
</template>


<script>
export default {
  props: {
    loader: {
      type: Boolean,
      default: false,
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