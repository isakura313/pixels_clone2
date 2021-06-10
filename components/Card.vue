<template>
    <v-img
      lazy-src="srcimage"
      :src="srcimage"
       max-height="150"
       max-width="250"
    ></v-img>
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
    showCoolBox (){
      this.$emit('showGallery')
    }
  }
}
</script>
