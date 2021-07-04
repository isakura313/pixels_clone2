<template>
<v-container fluid style="width:80%">
  <v-row>
    <v-col v-for="image in photos" :key="image.index"  md="4" xl="4" xs ='4' sm="1" align="center">
      <v-card>
    <div style="height:280px">
      <v-img
        :src="image.src"
        max-height="250px"
        max-width="400px"
        @click="index = image.index"
      />
      </div>
      <div style="display:flex; justify-content:space-between;">
  <a v-bind:href="image.author_url" class="gallery_author"><v-card-title> {{ image.author }} </v-card-title> </a>
    <v-card-actions v-if="galleryMode">
       <v-icon
       v-if="!image.like"
       large
        @click="likePhoto(image.id)">
         mdi-heart
       </v-icon>
        <v-icon
       v-else
       large
        color="red"
        @click="likePhoto(image.id)">
         mdi-heart
       </v-icon>
    </v-card-actions>
      
    <v-card-actions v-else>
         <v-icon
         large
        @click="deleteFromLike(image.id)">
         mdi-delete
       </v-icon>
      </v-card-actions>
      </div>
      </v-card>
    </v-col>
    
    <CoolLightBox :items="photos" :index="index" @close="index = null">
    </CoolLightBox>
  </v-row>
    <v-row justify="center" class="mt-8" rounded>
      <v-col>
      <v-pagination
      v-show="galleryMode"
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
    galleryMode:{
      type: Boolean,
      default:false
    }
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
  methods:{
    likePhoto(id){
      this.$emit("likePhoto", id)
    },
    deleteFromLike(id){
      this.$store.commit("deleteLikes", id)
    }
  }
}
</script>

<style scoped lang="sass">
.color_pallete
  width: 30px
  height: 30px
  border: 1px solid black
</style>
