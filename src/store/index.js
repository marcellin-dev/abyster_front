import Vue from "vue";
import Vuex from "vuex";
import auth from "./auth";
import depense from "./depense";
import revenu from "./revenu";
import axios from "axios";

Vue.use(Vuex);

axios.defaults.baseURL = "http://localhost:5001/api/";

export default new Vuex.Store({
  state: {},
  getters: {},
  mutations: {},
  actions: {},
  modules: {
    auth,
    depense,
    revenu,
  },
});
