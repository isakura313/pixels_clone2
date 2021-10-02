<template>
  <v-main>
    <v-container fluid>
      <v-row
        justify="center"
        sm="12"
      >
        <v-col cols="4">
          <v-card class="elevation-12">
            <v-toolbar
              color="purple darken-4"
              dark
              flat
            >
              <v-toolbar-title>Войдите в систему</v-toolbar-title>
            </v-toolbar>
            <v-card-text>
              <v-form>
                <v-text-field
                  v-model="email"
                  label="email"
                  name="email"
                  prepend-inner-icon="mdi-email"
                  type="text"
                />
                <v-text-field
                  id="password"
                  v-model="password"
                  label="Пароль"
                  name="password"
                  prepend-inner-icon="mdi-lock"
                  type="password"
                />
              </v-form>
            </v-card-text>
            <v-card-actions>
              <v-spacer />
              <v-btn
                color="purple darken-4"
                style="color: white"
                @click="authNow"
              >
                Войти
              </v-btn>
            </v-card-actions>
          </v-card>
        </v-col>
      </v-row>
    </v-container>
  </v-main>
</template>

<script>
// eslint-disable-next-line import/no-extraneous-dependencies
import axios from 'axios';

export default {
  data: () => ({
    drawer: null,
    email: '',
    password: '',
  }),
  methods: {
    async authNow() {
      // console.log(this.$auth);
      // const token = sessionStorage.getItem("token");
      try {
        const response = await this.$auth.loginWith('local', {
          data: {
            email: this.email,
            password: this.password,
          },
          // headers:{
          //   token:token
          // }
        });
        console.log(response);
      } catch (err) {
        console.log(err);
      }
    }
  },
};
</script>
