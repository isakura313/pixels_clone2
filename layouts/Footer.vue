<template>
  <v-footer dark padless class="footer__main">
    <v-card class="flex" flat tile>
      <v-card-text class="py-2 white--text text-center">
        {{ new Date().getFullYear() }} — <strong>Pixels</strong>
      </v-card-text>
    </v-card>
  </v-footer>
</template>


<style scoped>
.footer__main{
    margin-top: 20em;
}
</style>