<template>
  <div class="about">
    <h1 class="">
      <div class="row justify-content-center">
        <div class="col-6 shadow p-4 mt-5">
          <div class="mb-4">Connectez vous à votre compte</div>
          <form @submit="login">
            <div class="mb-3">
              <label for="exampleInputEmail1" class="">Email address</label>
              <input
                type="email"
                class="form-control"
                id="exampleInputEmail1"
                aria-describedby="emailHelp"
                v-model="email"
              />
            </div>
            <div class="mb-3">
              <label for="exampleInputPassword1" class="form-label"
                >Password</label
              >
              <input
                type="password"
                class="form-control"
                id="exampleInputPassword1"
                v-model="password"
              />
            </div>

            <span v-if="error" class="text-danger"
              >nom d'utilisateur ou mot de passe incorrect
            </span>
            <div v-if="loading" class="spinner-grow" role="status">
              <span class="visually-hidden">Loading...</span>
            </div>

            <button v-else type="submit" class="btn btn-primary form-control">
              Connexion
            </button>
          </form>
          ou
          <p>
            <router-link to="/">créez un compte</router-link>
          </p>
        </div>
      </div>
    </h1>
  </div>
</template>

<script>
import axios from "axios";

export default {
  data() {
    return {
      email: "",
      password: "",
      url: "http://localhost:5001/api/",
      error: false,
      loading: false,
    };
  },

  methods: {
    login(e) {
      e.preventDefault();

      let data = { email: this.email, password: this.password };
      this.loading = true;
      this.$store
        .dispatch("auth/login", data)
        .then((res) => {
          this.loading = false;
          this.$store.commit("auth/setBearer");
          this.$router.push({ name: "home" });
        })
        .catch((err) => {
          this.loading = false;
          this.error = true;
        });
    },
  },
};
</script>
