import axios from "axios";

export default {
  namespaced: true,

  state: {
    user: {},
  },
  getters: {},
  mutations: {
    setBearer(state) {
      let token = JSON.parse(localStorage.getItem("user")).token;
      if (token) {
        console.log("set bearer  --- ", token);
        axios.defaults.headers.common.Authorization = `Bearer ${token}`;
      }
    },

    setUser(state, data) {
      console.log("set user ", data);
      localStorage.setItem("user", JSON.stringify(data));
      state.user = data;
    },
  },

  actions: {
    login({ commit }, data) {
      return axios.post("auth/login", data).then((res) => {
        commit("setUser", res.data);
        console.log(res);
        return res;
      });
    },

    signUp({ commit }, data) {
      return axios.post("auth/signup", data).then((res) => {
        console.log(res);

        return res;
      });
      // .catch((err) => {
      //   console.log(err);
      //   return err;
      // });
    },
  },
};
