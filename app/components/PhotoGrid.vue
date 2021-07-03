<template>
<v-container fluid style="width:80%">
  <v-row>
    <v-col v-for="image in photos" :key="image.index" xl="4" xs ='4' sm="1" align="center">
      <v-img
        :src="image.src"
        max-height="250px"
        max-width="400px"
        @click="index = image.index"
      />
    </v-col>
    <CoolLightBox :items="photos" :index="index" @close="index = null">
    </CoolLightBox>
  </v-row>
    <v-row justify="center" class="mt-8" rounded>
      <v-col>
      <v-pagination
        v-model="page"
        :length="8"
        input="updateData(page)"
        circle
      ></v-pagination>
      </v-col>
    </v-row>
</v-container>
</template>

<script>
import CoolLightBox from 'vue-cool-lightbox'
import 'vue-cool-lightbox/dist/vue-cool-lightbox.min.css'
import Card from '../components/Card'
import store from '../store'

export default {
  name: 'PhotoGrid',
  store,
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
  data() {
    return {
      page: 1,
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
  watch: {
    page: function () {
     this.$store.commit("updatePagination", this.page)
    },
  },
}
</script>

<style scoped lang="sass">
</style>
