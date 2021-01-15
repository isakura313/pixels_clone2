<template>
  <section class="section">
  <div class='columns is-multiline'>
    <Card
    v-for = 'photo in data.photos'
    :key =  'photo.id'
    :srcimage = 'photo.src.large'
    />
  </div>
  </section>
</template>

<script>
import Card from '~/components/Card'

export default {
  name: 'HomePage',

  components: {
    Card
  }, async fetch () {
    this.data = await fetch('https://api.pexels.com/v1/curated', {
      method: 'GET',
      headers: {
        Authorization: '563492ad6f91700001000001c6dc5c5329904df0936ea995dc4d7209'
      }
    }).then(res => res.json())
  },
  data() {
    return{
      data: []
    }
  }
}
</script>
