<template>
  <v-app-bar
    color="purple darken-4"
    app
    hide-on-scroll
  >
    <v-btn
      class="logo_nav"
      nuxt
      color="error"
      to="/"
    >
      <v-toolbar-title class="toolbar__logo">
        Pixels
      </v-toolbar-title>
    </v-btn>
        <NuxtLink
          to="/"
          color="primary"
          class="nav_wrap__link"
        >
          Домой
        </NuxtLink>
        <NuxtLink
          to="/search"
          class="nav_wrap__link"
        >
          Поиск
        </NuxtLink>
        <NuxtLink
          to="/video"
          class="nav_wrap__link"
        >
          Видео
        </NuxtLink>
        <NuxtLink
          to="/likes"
          class="nav_wrap__link"
        >
          Избранное
        </NuxtLink>
         <v-spacer></v-spacer>
        <template v-if="!this.$auth.$state.loggedIn">
        <NuxtLink
          class="nav_wrap__link"
          to="/login"
        >
         
          Login
        </NuxtLink>

        <NuxtLink
          class="nav_wrap__link"
          to="/signup"
        >
          Sign Up
        </NuxtLink>
        </template>
        <template v-else>
        <NuxtLink
          class="nav_wrap__link"
          to="/about"
        >
          About
        </NuxtLink>
        <v-btn @click="logout">
          logout
        </v-btn>
        </template>
  </v-app-bar>
</template>

<script>
export default{
  methods:{
     async logout() {
      await this.$auth.logout();
    },
  }
}
</script>


<style scoped lang="sass">
.toolbar__logo
  color: white
  font-weight: bold
  font-size: 24px
.nav_wrap__link
  font-size: 22px
  text-decoration: none
  color: white
  font-weight: bold
  margin-right: 1.3em
  &:hover
    color: red

$breakpoint-tablet: 608px
@media (min-width: $breakpoint-tablet)
.toolbar__logo
  font-size: 20px
.nav_wrap
  width: 300px
  padding-left: 1rem
  .nav_wrap__link
    font-size: 18px
    padding-left: 0
  @media screen and (max-width: 600px)
    .nav_wrap__link
      font-size: 14px
</style>
