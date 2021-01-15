<template>
  <div
    class="column is-one-quarter"
  @click='showLightBox'>
    <b-image
      :src="srcimage"
      ratio="6by4"
      :rounded="rounded"
    ></b-image>
  </div>
</template>

<script>
export default {
  props: {
    srcimage: {
      type: String,
      required: true
    },
  },
  methods:{
    showLightBox (){
      this.$emit('showGallery')
    }
  }
}
</script>
