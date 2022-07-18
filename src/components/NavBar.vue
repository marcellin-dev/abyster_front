<template>
  <div id="nav">
    <nav>
      <router-link to="/depense">Depense</router-link> |
      <router-link to="/revenu">revenu</router-link> |
      <span class="over fw-bold" @click="deconexion">
        deconexion<i class="fa-solid fa-right-from-bracket"></i
      ></span>
    </nav>
    <router-view />
  </div>
</template>

<script>
export default {
  data() {
    return {};
  },

  methods: {
    deconexion() {
      localStorage.removeItem("user");
      this.$router.push({ name: "login" });
    },
  },
};
</script>
<style>
.over {
  cursor: pointer;
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

nav {
  padding: 30px;
}

nav a {
  font-weight: bold;
  color: #2c3e50;
}

nav a.router-link-exact-active {
  color: #42b983;
}
</style>
