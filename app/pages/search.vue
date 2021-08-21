<template>
  <v-main>
    <SearchTop 
      :search = "search"
      @searchEvent = "getData"
    />
    <v-container>
      <h1 class="text-center h2 ma-6" v-if="!Boolean(media.length)">
        Здесь пока ничего нет... Ищите!
      </h1>
      <div v-else>
        <h1 class="text-center h2 ma-6">
          Результат поиска по запросу {{ search }}
        </h1>
      </div>
    </v-container>
    <Loader :loader="showLoader" />
    <PhotoGrid :photos="media" :galleryMode="showPag" @likePhoto="globalLike" />
  </v-main>
</template>

<script>
import CoolLightBox from 'vue-cool-lightbox'
import 'vue-cool-lightbox/dist/vue-cool-lightbox.min.css'
import PhotoGrid from '../components/PhotoGrid.vue'
import SearchTop from '../components/SearchTop.vue';
import Loader from '../components/Loader.vue'
import { key } from '../keys'

export default {
  components: {
    CoolLightBox,
    PhotoGrid,
    SearchTop,
    Loader
  },

  data() {
    return {
      search: '',
      showPag: false,
      index: null,
      media: [],
      showLoader: false,
    }
  },
  methods: {
    async getData(value, page) {
      this.search = value || this.$route.query.word;
      this.globalPage = page || this.$store.state.paginationNumber
      if (!this.search) {
        return
      }
      this.showLoader = true
      this.globalUpdateQuery(this.search, this.globalPage)
      const photo = await this.$axios.$get(
        `https://api.pexels.com/v1/search?query=${this.search}&page=${this.globalPage}`,
        {
          method: 'GET',
          headers: {
            Authorization: key.KEY,
          },
        }
      )
      this.media = photo.photos.map((item, index) => {
        return {
          like: false,
          id: item.id,
          index: index,
          thumb: item.src.large,
          src: item.src.large,
          author_url: item.photographer_url,
          author: item.photographer,
        }
      })
      this.showPag = true
    },
    globalUpdatePage(page) {
      this.globalPage = page
      this.getData(this.search, this.globalPage )
    },
    globalUpdateQuery(word, newPage){
        this.$router.push({ query: { word: word, pg: newPage } })
    },
    globalLike(id) {
      this.media.map((index) => {
        if (index.id == id) {
          index.like = !index.like
        }
      })
      this.$store.commit('updateLikes', id)
    },
  },
  computed: {
    globalPage() {
      return this.$store.state.paginationNumber
    },
  },
  updated() {
    this.showLoader = false
    this.$nextTick(() => {
      this.currentPage = this.$store.state.paginationNumber
      this.currentSearch = this.search
    })
  },
  mounted() {
    const query = this.$route.query.page || 1
    this.search = this.$route.query.search || ''
    this.$store.commit('updatePagination', query)
    this.getData();
  },
  watch: {
    globalPage: function () {
      this.getData(this.search, this.globalPage)
    },
  },
}
</script>

