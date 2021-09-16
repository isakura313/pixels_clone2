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
import axios from 'axios';
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
  mounted() {
    if (this.likedPhotos.length !== 0) {
      this.getLikedPhoto();
    }
  },

  methods: {
    async getLikedPhoto() {
      const dataPhoto = [];
      this.likedPhotos.map(async (item, index) => {
        const photoInfo = await axios.get(
          `https://api.pexels.com/v1/photos/${item}`,
          {
            method: 'GET',
            headers: {
              Authorization: key.KEY,
            },
          }
        );
        const dataInfo = {
          like: false,
          id: photoInfo.data.id,
          index,
          thumb: photoInfo.data.src.large,
          src: photoInfo.data.src.large,
          author_url: photoInfo.data.photographer_url,
          author: photoInfo.data.photographer,
        };
        dataPhoto.push(dataInfo);
      });
      this.media = dataPhoto;
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
