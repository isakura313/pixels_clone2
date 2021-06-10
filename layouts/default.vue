<template>
  <v-app-bar
    color="#6A76AB"
    dark
    shrink-on-scroll
    app
  >
    <v-btn nuxt to = '/' > Домой </v-btn>
    <v-btn nuxt to="/search"> Поиск </v-btn>
    <nuxt />
  </v-app-bar>
</template>

<script>
export default {}
</script>
