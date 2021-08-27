<template>
  <v-main>
    <v-container>
      <v-row>
        <v-col>
        <h1 class="text-center h2 ma-6"> Ваши избранные фотографии</h1>
        <div v-if="!media.length"> <h5 class="text-center h2 ma-6">Добавьте сюда что-нить</h5> </div>

        </v-col>
      </v-row>
    </v-container>
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

  methods: {
     async getLikedPhoto() {
       const dataPhoto = []
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
     dataPhoto.push(dataInfo)
    }) 
    this.media = dataPhoto
  },
  },
  created(){
    this.$store.dispatch("getLikes")
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
  watch: {
    likedPhotos:function(){
      if(this.$store.state.deleteId != 0){
      console.log(this.likedPhotos)
      this.media = this.media.filter(item => {
       return item.id != this.$store.state.deleteId 
      })
    }
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
