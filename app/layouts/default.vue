<template>
  <v-app>
    <navigator />
    <nuxt />
    <footer />
  </v-app>
</template>

<script>
import Navigator from './Navigator.vue';
import Footer from './Footer.vue';

export default {
  components: {
    Navigator,
    Footer,
  },
};
</script>
