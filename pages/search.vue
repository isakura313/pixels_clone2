<template>
  <v-main>
    <v-container fluid>
      <v-row dense>
        <v-col>
          <v-card class="search">
            <v-row align="center" justify="center">
              <v-card-title style="color: white">
                Поиск на Pixels
              </v-card-title>
              <v-col cols="4">
                <v-text-field background-color="white" 
                v-model="search"
                />
              </v-col>
              <v-col cols="2">
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
        <v-row>
          <v-col 
            v-for="image in dataImg" 
            :key="image.index">
            <v-img
              :src="image.src"
              max-height="250"
              max-width="350"
              @click="index = image.index"
            />
          </v-col>
        </v-row>
    <CoolLightBox 
      :items="dataImg" 
      :index="index"
      @close="index = null">
    </CoolLightBox>
    </v-container>
  </v-main>
</template>

<script>
import CoolLightBox from 'vue-cool-lightbox'
import 'vue-cool-lightbox/dist/vue-cool-lightbox.min.css'


export default {
  components: {
    CoolLightBox,
  },

  data() {
    return {
      search: '',
      index: null,
      dataImg: [],
    }
  },
  methods:{
      async getData() {
    const photo = await this.$axios.$get(
      `https://api.pexels.com/v1/search?query=${this.search}`,
      {
        method: 'GET',
        headers: {
          Authorization:
            '563492ad6f91700001000001c6dc5c5329904df0936ea995dc4d7209',
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
  }
}
</script>



<style scoped>
.search {
  background-image: url('https://images.pexels.com/photos/998641/pexels-photo-998641.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260');
  background-size: cover;
}
</style>
