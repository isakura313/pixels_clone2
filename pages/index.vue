<template>
  <v-main>
    <v-container>
      <v-row>
        <v-col>
        <h1 class="text-center h2 ma-6"> Фотографии на любой вкус</h1>
        </v-col>
      </v-row>
      <v-row>
        <v-col v-for="image in dataImg" :key="image.index">
          <v-img
            :src="image.src"
            max-height="250"
            max-width="350"
           @click="index = image.index"
          />
        </v-col>
    </v-row>
  <CoolLightBox 
      :items="dataImg" 
      :index="index"
      @close="index = null">
    </CoolLightBox>
    </v-container>
  </v-main>
</template>

<script>
import CoolLightBox from 'vue-cool-lightbox'
import 'vue-cool-lightbox/dist/vue-cool-lightbox.min.css'

export default {
  name: 'Home',
  components: {
    CoolLightBox
  },

  data:function() {
    return {
      page: 1,
      total: 300,
      index:null,
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
      this.show = true
    },
  },
}
</script>

<style scoped>
.cool-lightbox {
  height: 100vh !important;
  width: 100%;
}
</style>
