import axios from "axios";

export default {
  namespaced: true,

  state: {
    depenses: [],
  },
  getters: {},
  mutations: {
    setDepenses(state, data) {
      state.depenses = data;
    },
  },

  actions: {
    getDepenses({ commit }) {
      return axios.get(`depense`).then((res) => {
        commit("setDepenses", res.data.depenses);

        console.log("data ", res);
      });
    },

    addDepense({ commit }, data) {
      return axios.post(`depense`, data).then((res) => {
        console.log("add depense res ", res);
        return res;
      });
    },
    updateDepense({ commit }, data) {
      return axios.patch(`depense/${data.id}`, data).then((res) => {
        console.log("add depense res ", res);
        return res;
      });
    },

    deleteDepense({ commit }, id) {
      return axios.delete(`depense/${id}`).then((res) => {
        console.log("res delete ", res);
      });
    },
  },
};
