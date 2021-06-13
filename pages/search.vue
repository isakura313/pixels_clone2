<template>
  <v-main>
    <v-container fluid>
      <v-row dense>
        <v-col>
          <v-card class="search" align="center" justify="center">
            <v-row align="center" justify="center">
              <v-card-title style="color: white">
                Поиск на Pixels
              </v-card-title>
              <v-col cols="3">
                <input
                  background-color="white"
                  ref="input"
                  @keydown.enter="getData"
                  class="search__input"
                />
                <v-btn @click="getData" small>
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

        <PhotoGrid :photos="dataImg" @updatePage="globalUpdatePage" />
      </div>
    </v-container>
  </v-main>
</template>

<script>
import CoolLightBox from 'vue-cool-lightbox'
import 'vue-cool-lightbox/dist/vue-cool-lightbox.min.css'
import PhotoGrid from '../components/PhotoGrid.vue'

export default {
  components: {
    CoolLightBox,
    PhotoGrid,
  },

  data() {
    return {
      search: '',
      globalPage: 1,
      index: null,
      dataImg: [],
    }
  },
  methods: {
    async getData() {
      if (this.globalPage == 1) {
        this.search = this.$refs.input.value
        this.$refs.input.value = ''
      }
      const photo = await this.$axios.$get(
        `https://api.pexels.com/v1/search?query=${this.search}&page=${this.globalPage}`,
        {
          method: 'GET',
          headers: {
            Authorization:
              '563492ad6f91700001000001c6dc5c5329904df0936ea995dc4d7209',
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
}
</script>



<style scoped>
.search {
  background-image: url('https://images.pexels.com/photos/998641/pexels-photo-998641.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260');
  background-size: cover;
  height: 70px;
}
.search__input {
  font-size: 22px;
  background-color: white;
  outline: none;
  color: black;
  padding: 4px;
  border-radius: 3px;
}
</style>
