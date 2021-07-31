<template>
  <v-container fluid>
    <v-row dense>
      <v-col>
        <v-card class="search" align="center">
          <v-row justify="center">
            <v-col cols="3" xs="6" sm="12" justify="center">
              <v-card-title class="card__title">
                <h3>Поиск на Pixels</h3>
              </v-card-title>
            </v-col>
          </v-row>
          <v-row align="center" justify="center" class="main__search">
            <v-col
              xl="6"
              xs="6"
              sm="12"
              style="
                display: flex;
                align-items: center;
                justify-content: center;
              "
            >
              <input
                v-model="search"
                class="search__input"
                @keydown.enter="getData(search)"
              />
              <v-btn @click="getData(search)" style="height: 42px; margin-left: 20px">
                <v-icon> mdi-magnify </v-icon>
              </v-btn>
            </v-col>
          </v-row>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>


<script>
export default {
  data: ()=> {
    return{
      search: ''
    }
  },
  methods: {
    getData(value) {
      this.$emit('searchEvent', value)
    },
  },
}
</script>





<style lang="sass">
.main__search
    display: flex
    align-items: flex-end
.search
    background-image: url('https://images.pexels.com/photos/998641/pexels-photo-998641.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260')
    background-size: cover
    height: 200px

.search__input
    font-size: 22px
    background-color: white
    outline: none
    color: black
    padding: 4px
    border-radius: 3px
.card__title
    font-size: 1.8em
    font-weight: bold
    color: white
    display: flex
    justify-content: center

$breakpoint-tablet: 608px
@media (max-width: $breakpoint-tablet)
.search
    height: 90px
.card__title
    display: none
.search__input
    width: 200px
</style>