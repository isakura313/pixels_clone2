<template>
 <v-main>
  <v-container>
   <v-row>
    <v-col>
     <Loader v-if="showLoader" />
     <h1 class="text-center h2 ma-6">Фотографии на любой вкус</h1>
    </v-col>
   </v-row>
  </v-container>
  <PhotoGrid :photos="dataImg" :gallery-mode="true" @likePhoto="globalLike" />
 </v-main>
</template>

<script>
import PhotoGrid from '../components/PhotoGrid.vue';
import Loader from '../components/Loader.vue';
import { key } from '../keys';

export default {
 name: 'Home',
 components: {
  PhotoGrid,
  Loader,
 },
 async asyncData({ $axios, globalPage }) {
  const photo = await $axios.$get(
   `https://api.pexels.com/v1/curated?page=${globalPage}&per_page=24`,
   {
    method: 'GET',
    headers: {
     Authorization: key.KEY,
    },
   }
  );
  const dataImg = photo.photos.map((item, index) => ({
   like: false,
   id: item.id,
   index,
   thumb: item.src.large,
   src: item.src.large,
   author_url: item.photographer_url,
   author: item.photographer,
  }));
  return { dataImg };
 },

 data() {
  return {
   index: null,
   showLoader: false,
   media: [],
  };
 },
 computed: {
  globalPage() {
   return this.$store.state.paginationNumber;
  },
  currentPage: {
   get() {
    return this.$route.query.page || 1;
   },
   set(newPage) {
    this.$router.push({ query: { ...this.$route.query, page: newPage } });
   },
  },
 },
 watch: {
  globalPage() {
   this.getData(this.globalPage);
  },
 },

 updated() {
  this.$nextTick(() => {
   this.currentPage = this.globalPage ||1 ; 
  });
 },
 mounted() {
  const query = this.$route.query.page || 1;
  this.$store.commit('updatePagination', query);
 },

 methods: {
  async getData(page) {
   this.showLoader = true;
   const photo = await this.$axios.$get(
    `https://api.pexels.com/v1/curated?page=${page}`,
    {
     method: 'GET',
     headers: {
      Authorization: key.KEY,
     },
    }
   );
   const dataImg = photo.photos.map((item, index) => ({
    id: item.id,
    like: false,
    index,
    thumb: item.src.large,
    src: item.src.large,
    color: item.avg_color,
    author: item.photographer,
   }));
   this.dataImg = dataImg;
   this.showLoader = false;
  },
  globalLike(id) {
   // eslint-disable-next-line array-callback-return
   this.dataImg.map((index) => {
    if (index.id === id) {
     // eslint-disable-next-line no-param-reassign
     index.like = !index.like;
    }
   });
   this.$store.commit('updateLikes', id);
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
