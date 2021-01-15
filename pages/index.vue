<template>
  <section class='section'>
    <Main
      :photos='media'
      :total = 'total'
      :image-count='15'
      @changePage = "getInfo"
    />
  </section>
</template>

<script>
import Card from '~/components/Card'
import Main from '~/components/Main'

export default {
  name: 'HomePage',

  components: {
    Main,
    Card
  }, async fetch() {
    this.media = await fetch(`https://api.pexels.com/v1/curated?page=${this.page}`, {
      method: 'GET',
      headers: {
        Authorization: '563492ad6f91700001000001c6dc5c5329904df0936ea995dc4d7209'
      }
    }).then(res => res.json())
    .then(function(value){
      const tempGallery = []
      for (let i = 0; i < value.photos.length; i++){
        tempGallery.push(
          {
            index: i,
            thumb: value.photos[i].src.large,
            src: value.photos[i].src.large,
          })
      }
      return tempGallery
    })
  },
  data() {
    return {
      page: 1,
      total: 300,
      media: [
        {
          thumb: 'https://images.pexels.com/photos/3885950/pexels-photo-3885950.jpeg',
          src: 'https://images.pexels.com/photos/3885950/pexels-photo-3885950.jpeg'
        }
      ]
    }
  },methods:{
    getInfo(page){
      this.page = page
      this.$fetch()
      this.show = true

    }
  }
}
</script>
