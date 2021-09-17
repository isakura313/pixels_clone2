<template>
 <v-main>
  <Loader />
  <v-container>
   <v-row>
    <v-column>
     <h3>Здравствуйте! Совсем скоро здесь появится видео</h3>
    </v-column>
   </v-row>
  </v-container>
 </v-main>
</template>

<script>
import Loader from '../components/Loader.vue';

export default {
 components: {
  Loader,
 },
};
</script>
