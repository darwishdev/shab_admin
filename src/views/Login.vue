<template>
  <div class="wrapper">
    <v-container>
      <div class="login">
        <v-card width="500">
          <v-card-text>
            <v-form v-model="valid" ref="form">
              <p class="app-error" v-show="error">{{ error }}</p>
              <v-text-field
                label="username"
                @keyup.enter="$refs['password'].focus()"
                ref="username"
                v-model="form.username"
                :rules="rules.Username"
                :error-messages="errors['username']"
                outlined
              ></v-text-field>
              <v-text-field
                ref="password"
                @keyup.enter="valid ? login : ''"
                v-model="form.password"
                :rules="rules.Password"
                label="password"
                type="password"
                :error-messages="errors.password"
                outlined
              ></v-text-field>
              <v-btn
                :disabled="!valid"
                :loading="loading"
                @click.prevent="login"
                class="app-btn"
                >تسجيل دخول</v-btn
              >
            </v-form>
          </v-card-text>
        </v-card>
      </div>
    </v-container>
  </div>
</template>
<script>
import { loginValidation } from "@/utils/validations/validations.ts";
import { Login, Validate } from "@/repositories/user";
import router from '@/router'
// import {snackBar} from '@/utils/Helpers'
export default {
  data() {
    return {
      error: null,
      loading: false,
      valid: true,
      rules: loginValidation,
      errors: {},
      form: {
        username: "",
        password: "",
      },
    };
  },
  methods: {
    async login() {
      console.log(process.env.VUE_APP_API_URL)
      // return
      this.loading = true;
     await this.$refs.form.validate();

      if (this.valid) {
        Login(this.form)
          .then((d) => {
            this.error = null;
            this.loading = false;
            if (!d.User.Admin) {
              this.error = "ليس لديك صلاحبية";
              return;
            }
            localStorage.setItem("token", d.Token);
            this.$store.commit('user/loggedIn' , d)
            router.push("/");
          })
          .catch((e) => {
            this.loading = false;
            this.error = "بيانات غير صحيحة";
          });
      }
    },
  },
  created() {
    if (localStorage.getItem("token")) {
      Validate().then((res) => {
        if (res) router.push("/");
      });
    }
  },
};
</script>
<style>
.login {
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
}
</style>