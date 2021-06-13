<template>
  <v-main>
    <v-container>
      <v-row>
        <v-col>
        <h1 class="text-center h2 ma-6"> Фотографии на любой вкус</h1>
        </v-col>
      </v-row>
      <photo-grid :photos="dataImg"  @updatePage="globalUpdatePage"/>
    </v-container>
  </v-main>
</template>

<script>
import CoolLightBox from 'vue-cool-lightbox'
import 'vue-cool-lightbox/dist/vue-cool-lightbox.min.css'
import PhotoGrid from '../components/PhotoGrid.vue'

export default {
  name: 'Home',
  components: {
    CoolLightBox,
    PhotoGrid
  },

  data:function() {
    return {
      globalPage: 1,
      index:null,
      loading: false,
      media: [
        {
          thumb:
            'https://images.pexels.com/photos/3885950/pexels-photo-3885950.jpeg',
          src: 'https://images.pexels.com/photos/3885950/pexels-photo-3885950.jpeg',
        },
      ],
    }
  },
  async asyncData({ $axios, globalPage }) {
    const photo = await $axios.$get(
      `https://api.pexels.com/v1/curated?page=${globalPage}`,
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
      globalUpdatePage(page){
      this.globalPage = page;
      this.getData(page)
    },
     async getData(page) {
    const photo = await this.$axios.$get(
      `https://api.pexels.com/v1/curated?page=${page}`,
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
    this.dataImg = dataImg;
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
