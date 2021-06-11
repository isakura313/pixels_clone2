<template>
  <v-main>
    <v-container>
      <v-row>

      </v-row>
      <v-row>
        <v-img
          v-for="image in photos"
          :key="image.index"
          :src="image.thumb"
          @click="index = image.index"
        />
      </v-row>
    </v-container>
  </v-main>
</template>

<script>
import CoolLightBox from 'vue-cool-lightbox'
import 'vue-cool-lightbox/dist/vue-cool-lightbox.min.css'
import Card from '../components/Card'

export default {
  name: 'Main',
  components: {
    Card,
    CoolLightBox,
  },
  props: {
    photos: {
      type: Array,
      required: true,
    },
    total: {
      type: Number,
      default: 300,
    },
    imageCount: {
      type: Number,
      default: 30,
    },
  },
  methods: {
    // showLightBox(idPhoto) {
    //   this.lightToShow = !this.lightToShow
    //   this.$refs.lightGallery.lightBoxOn = true
    //   this.$refs.lightGallery.showImage(idPhoto)
    // },
    getInfo() {
      this.$emit('changePage', this.current)
    },
  },
  data() {
    return {
      index: 1,
      current: 1,
      size: '',
      rangeBefore: 3,
      rangeAfter: 1,
      isSimple: false,
      isRounded: false,
      prevIcon: 'chevron-left',
      nextIcon: 'chevron-right',
    }
  },
}
</script>

<style scoped>
</style>
