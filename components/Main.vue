<template>
<div class='gallery'>
  <section class='section'>
    <div class='columns is-multiline'>
      <Card
        v-for = 'image in photos'
        :key =  'image.id'
        :srcimage = 'image.thumb'
        @showGallery = "showLightBox(image.index)"
      />
    </div>
    <LightBox
      ref='lightGallery'
      :media='photos'
      :showLightBox = "false"
      />
  </section>
  <div class='section is-centered'>
    <b-pagination
      v-model="current"
      :total="total"
      :range-before="rangeBefore"
      :range-after="rangeAfter"
      :size="size"
      :simple="isSimple"
      :rounded="isRounded"
      :per-page="perPage"
      :icon-prev="prevIcon"
      :icon-next="nextIcon"
      aria-next-label="Next page"
      aria-previous-label="Previous page"
      aria-page-label="Page"
      aria-current-label="Current page"
      @change = "getInfo" >
      <b-pagination-button
        slot='previous'
        slot-scope='props'
        :page="props.page"
        tag="router-link"
        :to="`/documentation/pagination#page${props.page.number}`">
        Previous
      </b-pagination-button>
      <b-pagination-button
        slot='previous'
        slot-scope='props'
        :page="props.page"
        tag="router-link"
        :to="`/documentation/pagination#page${props.page.number}`">
        Previous
      </b-pagination-button>
    </b-pagination>
  </div>
</div>
</template>

<script>
import LightBox from 'vue-image-lightbox'
import Card from '../components/Card'

export default {
  name: 'Main',
  components: {
    Card,
    LightBox
  },
  props:{
    photos: {
      type: Array,
      required: true
    },
    total: {
      type: Number,
      default: 300
    },
    imageCount: {
      type: Number,
      default: 30
    }
  },
  methods:{
    showLightBox(idPhoto){
      this.lightToShow = !this.lightToShow
      this.$refs.lightGallery.lightBoxOn = true
      this.$refs.lightGallery.showImage(idPhoto)
    },
    getInfo (){
      this.$emit("changePage", this.current)
    }
  },
  data(){
    return {
      current: 1,
      size: '',
      rangeBefore: 3,
      rangeAfter: 1,
      isSimple: false,
      isRounded: false,
      prevIcon: 'chevron-left',
      nextIcon: 'chevron-right'
    }
  }
}
</script>

<style scoped>

</style>
