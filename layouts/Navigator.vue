<template>
  <v-app-bar
    color="purple darken-4"
    app
  >
  <v-btn   
  color="error"    
      nuxt
       to = '/' >
    <v-toolbar-title 
      class="toolbar__logo" 
>Pixels</v-toolbar-title>
  </v-btn>
       <div class="nav_wrap ma-6">
         <NuxtLink  to = '/' color="primary" class="nav_wrap__link"> Домой </NuxtLink >
         <NuxtLink  to="/search" class="nav_wrap__link"> Поиск </NuxtLink  >
       </div>
  </v-app-bar>
</template>

<style scoped lang="sass" >
.toolbar__logo
  color: white
  font-weight: bold
  font-size: 24px
.nav_wrap
  width: 4v00px
  padding-left: 2em 
  .nav_wrap__link
    font-size: 22px
    text-decoration: none
    color: white
    font-weight: bold
    margin-right: 1.3em
    &:hover
      color: red    
</style>


