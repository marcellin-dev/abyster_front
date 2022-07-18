<template>
  <div class="">
    <h1 class="">
      <div class="row justify-content-center">
        <div class="col-6 shadow p-4 mt-5">
          <small class="my-4">inscrivez vous ici</small>

          <br />
          <form @submit="signup">
            <div class="mb-3">
              <small>Email address</small>
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

            <span v-if="error" class="text-danger">
              cet utilisateur existe deja</span
            >
            <div v-if="loading" class="spinner-grow" role="status">
              <span class="visually-hidden">Loading...</span>
            </div>
            <button v-else type="submit" class="btn btn-primary form-control">
              je créé mon compte
            </button>
          </form>

          ou
          <p>
            <router-link to="/login">connectez vous</router-link>
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
    signup(e) {
      e.preventDefault();
      let data = { email: this.email, password: this.password };

      this.loading = true;
      this.$store
        .dispatch("auth/signUp", data)
        .then((res) => {
          this.loading = false;
          this.$router.push({ name: "login" });
        })
        .catch((err) => {
          this.loading = false;
          this.error = true;
        });
    },

    checkUser() {
      let user = JSON.parse(localStorage.getItem("user"));

      if (user && user?.token) {
        console.log("user -- ", user);
        this.$router.push({ name: "home" });
      } else this.$router.push({ name: "login" });
    },
  },

  mounted() {
    this.checkUser();
  },
};
</script>
