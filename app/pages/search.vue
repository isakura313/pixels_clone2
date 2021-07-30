<template>
  <v-main>
    <v-container fluid>
      <v-row dense>
        <v-col>
          <v-card class="search" align="center">
            <v-row justify="center">
              <v-col cols="3" xs="6" sm="12" justify="center">
                <v-card-title class="card__title">
                  <h3>Поиск на Pixels</h3>
                </v-card-title>
              </v-col>
            </v-row>
            <v-row align="center" justify="center" class="main__search">
              <v-col xl="6" xs="6" sm="12" style="display:flex; align-items:center; justify-content: center">
                <input
                  v-model="search"
                  class="search__input"
                  @keydown.enter="getData"
                />
                <v-btn @click="getData" style="height: 42px; margin-left: 20px;">
                  <v-icon> mdi-magnify </v-icon>
                </v-btn>
              </v-col>
            </v-row>
          </v-card>
        </v-col>
      </v-row>
    </v-container>
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
    <PhotoGrid :photos="media" :galleryMode="showPag" @likePhoto="globalLike" />
  </v-main>
</template>

<script>
import CoolLightBox from 'vue-cool-lightbox'
import 'vue-cool-lightbox/dist/vue-cool-lightbox.min.css'
import PhotoGrid from '../components/PhotoGrid.vue'
import { key } from '../keys'

export default {
  components: {
    CoolLightBox,
    PhotoGrid,
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
    async getData() {
      if(this.search === ''){
        return;
      }
      this.showLoader = true
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
      this.getData(page)
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
    currentPage: {
      get() {
        return this.$route.query.page || 1
      },
      set(newPage) {
        this.$router.push({ query: { ...this.$route.query, page: newPage } })
      },
    },
    currentSearch:{
      get() {
        return this.$route.query.search || ''
      },      
      set(newSearch) {
        this.$router.push({ query: { ...this.$route.query, search: newSearch, page:this.globalPage } })
      },
    }
  },
    updated() {
      this.showLoader = false
      this.$nextTick(() => {
        this.currentPage = this.globalPage;
        this.currentSearch = this.search;
      })
    },
    mounted() {
      const query = this.$route.query.page || 1
      this.search = this.$route.query.search || ''
      this.$store.commit('updatePagination', query)
    },
    watch: {
      globalPage: function () {
        this.getData(this.globalPage)
      },
      showLoader: function () {
        if (this.showLoader) {
          this.$loading.show()
        } else {
          this.$loading.hide()
        }
      },
    },
}
</script>

<style lang="sass">
.main__search
  display: flex
  align-items: flex-end
.search
  background-image: url('https://images.pexels.com/photos/998641/pexels-photo-998641.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260')
  background-size: cover
  height: 200px

.search__input
  font-size: 22px
  background-color: white
  outline: none
  color: black
  padding: 4px
  border-radius: 3px
.card__title
  font-size: 1.8em
  font-weight: bold
  color: white
  display: flex
  justify-content: center

$breakpoint-tablet: 608px
@media (max-width: $breakpoint-tablet)
  .search
    height: 90px
  .card__title
    display: none
  .search__input
    width: 200px
</style>
