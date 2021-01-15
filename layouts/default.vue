<template>
  <div>
    <b-navbar>
      <template #brand>
        <b-navbar-item tag='router-link' :to="{ path: '/' }">
          <img
            src='https://theme.zdassets.com/theme_assets/9028340/1e73e5cb95b89f1dce8b59c5236ca1fc28c7113b.png'
            alt='Lightweight UI components for Vue.js based on Bulma'
          >
        </b-navbar-item>
      </template>
      <template #start>
        <b-navbar-item>
          <nuxt-link to='/' class='is-size-4'>
            Домой
          </nuxt-link>
        </b-navbar-item>
        <b-navbar-item>
          <nuxt-link to='/search' class='is-size-4'>
            Поиск
          </nuxt-link>
        </b-navbar-item>

      </template>
    </b-navbar>
    <nuxt />
  </div>
</template>

<script>
export default {

}
</script>
