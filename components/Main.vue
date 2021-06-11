<template>
  <v-row>
        <v-col 
          v-for="image in photos"  
          :key="image.index">
          <v-img
          :src="image.thumb"
          @click="index = image.index" />
        </v-col>
  </v-row>
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
