<template>
  <v-main>
    <v-container>
      <v-row>
        <v-col>
          <h1 class="text-center h2 ma-6">Фотографии на любой вкус</h1>
        </v-col>
      </v-row>
    </v-container>
    <photo-grid :photos="dataImg" :galleryMode="true" @likePhoto="globalLike" />
  </v-main>
</template>

<script>
import CoolLightBox from 'vue-cool-lightbox'
import 'vue-cool-lightbox/dist/vue-cool-lightbox.min.css'
import PhotoGrid from '../components/PhotoGrid.vue'
import { key } from '../keys'

export default {
  name: 'Home',
  components: {
    CoolLightBox,
    PhotoGrid,
  },

  data: function () {
    return {
      index: null,
      loading: false,
      media: [
        {
          thumb:
            'https://images.pexels.com/photos/3885950/pexels-photo-3885950.jpeg',
          src: 'https://images.pexels.com/photos/3885950/pexels-photo-3885950.jpeg',
        },
      ],
    }
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
    )
    const dataImg = photo.photos.map((item, index) => {
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
    return { dataImg }
  },

  methods: {
    async getData(page) {
      const photo = await this.$axios.$get(
        `https://api.pexels.com/v1/curated?page=${page}`,
        {
          method: 'GET',
          headers: {
            Authorization: key.KEY,
          },
        }
      )
      const dataImg = photo.photos.map((item, index) => {
        return {
          id: item.id,
          like: false,
          index: index,
          thumb: item.src.large,
          src: item.src.large,
          color: item.avg_color,
          author: item.photographer,
        }
      })
      this.dataImg = dataImg
    },
    globalLike(id) {
      this.dataImg.map((index) => {
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
  watch: {
    globalPage: function () {
      this.getData(this.globalPage)
    },
  },
}
</script>

<style scoped>
.cool-lightbox {
  height: 100vh !important;
  width: 100%;
}
</style>
