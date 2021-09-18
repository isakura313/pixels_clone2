<template>
 <v-main>
  <SearchTop :search="search" @searchEvent="getData" />
  <v-container>
   <h1 v-if="!Boolean(media.length)" class="text-center h2 ma-6">
    Здесь пока ничего нет... Ищите!
   </h1>
   <div v-else>
    <h1 class="te xt-center h2 ma-6">
     Результат поиска по запросу {{ search }}
    </h1>
   </div>
  </v-container>
  <Loader v-if="showLoader"></Loader>
  <PhotoGrid
   :photos="media"
   :gallery-mode="showPag"
   :show-loader="showLoader"
   @likePhoto="globalLike"
  />
 </v-main>
</template>

<script>
import PhotoGrid from '../components/PhotoGrid.vue';
import SearchTop from '../components/SearchTop.vue';
import Loader from '../components/Loader.vue';
import { key } from '../keys';

export default {
 components: {
  PhotoGrid,
  SearchTop,
  Loader,
 },

 data() {
  return {
   search: '',
   showPag: false,
   index: null,
   media: [],
   showLoader: false,
  };
 },
 computed: {
  globalPage() {
   return this.$store.state.paginationNumber;
  },
 },
 watch: {
  globalPage() {
   if (this.search !== '') {
    this.getData(this.search, this.globalPage);
   }
  },
 },
 updated() {
  this.$nextTick(() => {
   this.currentPage = this.$store.state.paginationNumber;
   this.currentSearch = this.search;
  });
 },
 mounted() {
  const query = this.$route.query.pg || 1;
  this.search = this.$route.query.word || '';
  this.$store.commit('updatePagination', query);
  if (this.search !== '') {
   this.getData(this.search, this.globalPage);
  }
  this.showLoader = false;
 },
 methods: {
  async getData(value, page) {
   this.showLoader = true;
   this.search = value || this.$route.query.word;
   this.globalPage = page || this.$store.state.paginationNumber;
   if (!this.search) {
    return;
   }
   this.globalUpdateQuery(this.search, this.globalPage);
   const photo = await this.$axios.$get(
    `https://api.pexels.com/v1/search?query=${this.search}&page=${this.globalPage}`,
    {
     method: 'GET',
     headers: {
      Authorization: key.KEY,
     },
    }
   );
   this.media = photo.photos.map((item, index) => {
    return {
     like: false,
     id: item.id,
     index,
     thumb: item.src.large,
     src: item.src.large,
     author_url: item.photographer_url,
     author: item.photographer,
    };
   });
   this.showPag = true;
   this.showLoader = false;
  },
  globalUpdatePage(page) {
   this.globalPage = page;
   this.getData(this.search, this.globalPage);
  },
  globalUpdateQuery(word, newPage) {
   this.$router.push({ query: { word, pg: newPage } });
  },
  globalLike(id) {
   // eslint-disable-next-line array-callback-return
   this.media.map((index) => {
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
