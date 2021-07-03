<template>
  <v-main>
    <v-container fluid>
      <v-row dense>
        <v-col>
          <v-card class="search" align="center">
            <v-row justify="center">
              <v-col cols="3">
              <v-card-title style="color: white" class="card__title">
                Поиск на Pixels
              </v-card-title>
              </v-col>
            </v-row>
            <v-row align="center" justify="center" class="main__search">
              <v-col xl="3" xs ='3' sm="3">
                <input
                  v-model="search"
                  class="search__input"
                  @keydown.enter="getData"
                />
                <v-btn @click="getData"  small>
                  <v-icon> mdi-magnify </v-icon>
                </v-btn>
              </v-col>
            </v-row>
          </v-card>
        </v-col>
      </v-row>
    </v-container>
    <v-container>
      <h1 class="text-center h2 ma-6" v-if="!Boolean(dataImg.length)">
        Здесь пока ничего нет... Ищите!
      </h1>
      <div v-else>
        <h1 class="text-center h2 ma-6">
          Результат поиска по запросу {{ search }}
        </h1>

        <PhotoGrid :photos="dataImg" />
      </div>
    </v-container>
  </v-main>
</template>

<script>
import CoolLightBox from 'vue-cool-lightbox'
import 'vue-cool-lightbox/dist/vue-cool-lightbox.min.css'
import PhotoGrid from '../components/PhotoGrid.vue'
import key from '../keys'

export default {
  components: {
    CoolLightBox,
    PhotoGrid,
  },

  data() {
    return {
      search: '',
      index: null,
      dataImg: [],
    }
  },
  methods: {
    async getData() {
      const photo = await this.$axios.$get(
        `https://api.pexels.com/v1/search?query=${this.search}&page=${this.globalPage}`,
        {
          method: 'GET',
          headers: {
            Authorization:
               key.KEY
          },
        }
      )
      const dataImg = photo.photos.map((item, index) => {
        return {
          index: index,
          thumb: item.src.large,
          src: item.src.large,
        }
      })
      this.dataImg = dataImg
  
    },
    globalUpdatePage(page) {
      this.globalPage = page
      this.getData(page)
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
  text-align: center
  font-size: 1.8em
  font-weight: bold

$breakpoint-tablet: 608px
@media (max-width: $breakpoint-tablet)
  .search
    height: 90px
  .card__title
    display: none
  .search__input
    width: 200px
</style>
