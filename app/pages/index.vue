<template>
  <v-main>
    <v-container>
      <v-row>
        <v-col>
        <h1 class="text-center h2 ma-6"> Фотографии на любой вкус</h1>
        </v-col>
      </v-row>
    </v-container>
      <photo-grid :photos="dataImg" />
  </v-main>
</template>

<script>
import CoolLightBox from 'vue-cool-lightbox'
import 'vue-cool-lightbox/dist/vue-cool-lightbox.min.css'
import PhotoGrid from '../components/PhotoGrid.vue'
import store from '../store'
import key from '../keys'
console.log(key.KEY)

export default {
  name: 'Home',
  store,
  components: {
    CoolLightBox,
    PhotoGrid
  },

  data:function() {
    return {
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
          key.KEY
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
    // getInfo(page) {
    //   this.page = page
    //   this.show = true
    // },
    //   globalUpdatePage(){

    //   this.getData(this.globalPage)
    // },
     async getData(page) {
    const photo = await this.$axios.$get(
      `https://api.pexels.com/v1/curated?page=${page}`,
      {
        method: 'GET',
        headers: {
          Authorization: key.KEY
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
  computed:{
    globalPage() {
      return this.$store.state.paginationNumber;
    }
  },
  watch:{
    globalPage:function(){
      this.getData(this.globalPage)
    }
  }

}
</script>

<style scoped>
.cool-lightbox {
  height: 100vh !important;
  width: 100%;
}
</style>
