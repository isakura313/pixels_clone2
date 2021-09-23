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
                />
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
                  label="Password"
                  name="password"
                  prepend-inner-icon="mdi-lock"
                  type="password"
                />
              </v-form>
            </v-card-text>
            <v-card-actions>
              <v-spacer />
              <v-btn
                color="primary"
                @click="authNow"
              >
                sign-up
              </v-btn>
            </v-card-actions>
          </v-card>
        </v-col>
      </v-row>
    </v-container>
  </v-main>
</template>

<script>

export default {
  data: () => ({
    drawer: null,
    login: '',
    email: '',
    password: '',
  }),
  methods: {
    async authNow() {
      // console.log(this.$auth.loginWith());
      // console.log(this.$auth);
      try {
        const response = await this.$auth.signup('local', {
          data: {
            username: this.login,
            email: this.email,
            password: this.password,
          },
        });
        console.log(response);
      } catch (err) {
        console.log(err);
      }
    //   alert('Произошла авторизация');
      // возможно, нам придется использовать здесь gravatar
      // или что-то в этом роде
    },
  },
};
</script>
