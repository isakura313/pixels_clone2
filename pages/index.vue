<template>
  <v-main>
    <v-container>
      <v-row>
        <v-col v-for="image in dataImg" :key="image.index">
          <v-img
            :src="image.thumb"
            max-height="150"
            max-width="250"
            @click="hello"
          />
        </v-col>
      </v-row>
    </v-container>
  </v-main>
</template>

<script>
import Card from '~/components/Card'
import Main from '~/components/Main'

export default {
  name: 'HomePage',

  components: {
    Main,
    Card,
  },

  data:function() {
    return {
      page: 1,
      total: 300,
      media: [
        {
          thumb:
            'https://images.pexels.com/photos/3885950/pexels-photo-3885950.jpeg',
          src: 'https://images.pexels.com/photos/3885950/pexels-photo-3885950.jpeg',
        },
      ],
    }
  },
  async asyncData({ $axios }) {
    const photo = await $axios.$get(
      'https://api.pexels.com/v1/curated?page=1',
      {
        method: 'GET',
        headers: {
          Authorization:
            '563492ad6f91700001000001c6dc5c5329904df0936ea995dc4d7209',
        },
      }
    )
    console.log(photo.photos)
    const dataImg= photo.photos.map((item, index) => {
      return {
        index: index,
        thumb: item.src.large,
        src: item.src.large,
      }
    }) 
    return {dataImg};
  },

  methods: {
    getInfo(page) {
      this.page = page
      this.$fetch()
      this.show = true
    },
    hello() {
      alert('hello')
    },
  },
}
</script>
