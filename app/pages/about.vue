<template>
    <v-main>
        <v-container>
            <v-row>
                <v-container>
                   <h3> {{ this.$auth.$state.loggedIn }}</h3> 
                   <h3> {{ this.$auth.user }}</h3> 
                   <h3> {{ this.$auth.email }}</h3> 
                </v-container>
            </v-row>
        </v-container>
    </v-main>
</template>


<script>
export default{
    mounted(){
        console.log(this.$auth)
    }
}
</script>
