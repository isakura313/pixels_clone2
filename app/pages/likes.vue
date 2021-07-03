<template>
  <v-main>
    <v-container>
      <v-row>
        <v-col>
        <h1 class="text-center h2 ma-6"> Ваши избранные фотографии</h1>
        <!-- <v-btn  @click="getLikedPhoto"> getPhoto </v-btn> -->
        </v-col>
      </v-row>
    </v-container>
        <div v-if="!media.length"> <h3>Добавьте сюда что-нить</h3> </div>
      <photo-grid :photos="media"/>
  </v-main>
</template>

<script>
import CoolLightBox from 'vue-cool-lightbox'
import 'vue-cool-lightbox/dist/vue-cool-lightbox.min.css'
import PhotoGrid from '../components/PhotoGrid.vue'
import {key} from '../keys'
import axios from 'axios'

export default {
  name: 'likes',
  components: {
    CoolLightBox,
    PhotoGrid
  },

  data:function() {
    return {
        
      index:null,
      loading: false,
      media: [],
    }
  },
//   async asyncData({ $axios, likedPhotos }) {
//    const dataImg  = likedPhotos.map(item = async () =>{
//     const photoInfo = await $axios.$get(
//       `https://api.pexels.com/v1/photos/${item.id}`,
//       {
//         method: 'GET',
//         headers: {
//           Authorization:
//           key.KEY
//         },
//       }
//     )
//     const dataInfo =  {
//         like:false,
//         id: photoInfo.id,
//         index: index,
//         thumb: photoInfo.src.large,
//         src: photoInfo.src.large,
//         author_url: photoInfo.photographer_url,
//         author: photoInfo.photographer
//       }
//       return {dataInfo}
//     }) 
//     return {dataImg};
//   },

  methods: {
     async getLikedPhoto() {
    const dataImg  = this.likedPhotos.map(async(item, index) =>{
    let photoInfo = await axios.get(
      `https://api.pexels.com/v1/photos/${item}`,
      {
        method: 'GET',
        headers: {
          Authorization:
          key.KEY
        },
      }
    )
    const dataInfo =  {
        like:false,
        id: photoInfo.data.id,
        index: index,
        thumb: photoInfo.data.src.large,
        src: photoInfo.data.src.large,
        author_url: photoInfo.data.photographer_url,
        author: photoInfo.data.photographer
      }
      this.media.push(dataInfo)
    }) 
    // return {dataImg};
    console.log(dataImg)
    
  },
  },
  mounted(){
      if(this.likedPhotos.length == 0){
     return
      } else{
          this.getLikedPhoto()
      }
  },
  computed:{
    likedPhotos() {
      return this.$store.state.likedPhotos;
    }
  },
}
</script>

<style scoped>
.cool-lightbox {
  height: 100vh !important;
  width: 100%;
}
</style>
