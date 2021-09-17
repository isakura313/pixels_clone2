<template>
 <v-main>
  <v-container>
   <v-row>
    <v-col>
     <h1 class="text-center h2 ma-6">Ваши избранные фотографии</h1>
     <div v-if="!media.length">
      <h5 class="text-center h2 ma-6">Добавьте сюда что-нить</h5>
     </div>
    </v-col>
   </v-row>
  </v-container>
  <PhotoGrid :photos="media" />
 </v-main>
</template>

<script>
// eslint-disable-next-line import/no-extraneous-dependencies
// import axios from 'axios';
import PhotoGrid from '../components/PhotoGrid.vue';
import { key } from '../keys';

export default {
 name: 'Likes',
 components: {
  PhotoGrid,
 },

 data() {
  return {
   index: null,
   loading: false,
   media: [],
  };
 },
 computed: {
  likedPhotos() {
   return this.$store.state.likedPhotos;
  },
 },
 watch: {
  likedPhotos() {
   if (this.$store.state.deleteId !== 0) {
    this.media = this.media.filter(
     (item) => item.id !== this.$store.state.deleteId
    );
   }
  },
 },
 created() {
  this.$store.dispatch('getLikes');
 },
 async mounted() {
  if (this.likedPhotos.length !== 0) {
   this.getData();
  }
 },

 methods: {
  async getData() {
   const dataPhoto = [];
   let countIndex = 1;
   this.likedPhotos.map(async (id, index) => {
    const photoInfo = await this.$axios.$get(
     `https://api.pexels.com/v1/photos/${id}`,
     {
      method: 'GET',
      headers: {
       Authorization: key.KEY,
      },
     }
    );
    console.log(photoInfo);
    const dataInfo = {
     like: false,
     id: photoInfo.id,
     index: (countIndex -= 1),
     thumb: photoInfo.src.large,
     src: photoInfo.src.large,
     author_url: photoInfo.photographer_url,
     author: photoInfo.photographer,
    };
    console.log(dataInfo);
    dataPhoto.push(dataInfo);
    this.media.push(dataInfo);
   });
  },
 },
};
</script>

<style scoped>
.cool-lightbox {
 height: 100vh !important;
 width: 100%;
}
</style>
