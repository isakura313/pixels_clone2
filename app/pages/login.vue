<template>
<v-main>
  <v-container fluid>
    <v-row justify="center" sm="12">
      <v-col cols="4">
        <v-card class="elevation-12">
          <v-toolbar color="purple darken-4" dark flat>
            <v-toolbar-title>Авторизируйтесь</v-toolbar-title>
          </v-toolbar>
          <v-card-text>
            <v-form>
              <v-text-field
                v-model="login"
                label="Login"
                name="login"
                prepend-inner-icon="mdi-account"
                type="text"
              ></v-text-field>
              <v-text-field
                v-model="email"
                label="email"
                name="email"
                prepend-inner-icon="mdi-email"
                type="text"
              ></v-text-field>
              <v-text-field
                id="password"
                v-model="password"
                label="Password"
                name="password"
                prepend-inner-icon="mdi-lock"
                type="password"
              ></v-text-field>
            </v-form>
          </v-card-text>
          <v-card-actions>
            <v-spacer></v-spacer>
            <v-btn color="primary" @click="authNow">Login</v-btn>
          </v-card-actions>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</v-main>
</template>

<script>
import axios from 'axios';

export default {
  data: () => ({
    drawer: null,
    login: '',
    email: '',
    password: '',
  }),
  methods: {
    async authNow() {
       const token = await axios({
            method:'POST',
            url: 'http://localhost:4000/user/signup',
            data:{
                username: this.login,
                email: this.email,
                password: this.password
            }
        })
        console.log(token)
    //   alert('Произошла авторизация');
      // возможно, нам придется использовать здесь gravatar
      // или что-то в этом роде
    },
  },
};
</script>
