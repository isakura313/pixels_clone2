<template>
  <section class='section'>
    <div class='columns is-centered'>
      <div class='column is-half'>
        <h1 class='is-size-3 title'>
          Поиск на Pixels
        </h1>
        <b-field label='search'>
          <b-input v-model='search' />
        </b-field>
        <b-button @click='$fetch' type='is-primary'>
          Искать
        </b-button>
      </div>
    </div>
    <div class='columns is-multiline'>
      <Card
        v-for='photo in data.photos'
        :key='photo.id'
        :srcimage='photo.src.large'
      />
    </div>
  </section>
</template>

<script>
import Card from '~/components/Card'

export default {
  components: {
    Card
  },
  async fetch() {
    this.data = await fetch(`https://api.pexels.com/v1/search?query=${this.search}`, {
      method: 'GET',
      headers: {
        Authorization: '563492ad6f91700001000001c6dc5c5329904df0936ea995dc4d7209'
      }
    }).then(res => res.json())
  },
  data() {
    return {
      search: '',
      data: []
    }
  }
}
</script>
