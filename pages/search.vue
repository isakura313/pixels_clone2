<template>
  <v-main >
    <v-row>
      <v-col xs ={12}>
        <h1 class='is-size-3 title'>
          Поиск на Pixels
        </h1>
        <v-input v-model='search' />
        <v-btn @click='$fetch'>
          Искать
        </v-btn>
      </v-col>
    </v-row>
    <v-row>
      <Card
        v-for='photo in data.photos'
        :key='photo.id'
        :srcimage='photo.src.large'
      />
    </v-row>
  </v-main>
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
