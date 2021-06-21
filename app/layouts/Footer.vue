<template>
  <v-footer dark padless class="footer__main">
    <v-card class="flex" flat tile>
      <v-card-text class="py-2 white--text text-center">
        {{ new Date().getFullYear() }} — <strong>Pavel Yakupov  </strong>
      </v-card-text>
    </v-card>
  </v-footer>
</template>


<style scoped lang="sass">
.footer__main
    margin-top: 10em
</style>