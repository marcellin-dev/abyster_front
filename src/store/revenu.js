import axios from "axios";

export default {
  namespaced: true,

  state: {
    revenus: [],
  },
  getters: {},
  mutations: {
    setRevenus(state, data) {
      state.revenus = data;
    },
  },

  actions: {
    getRevenus({ commit }) {
      return axios.get(`revenu`).then((res) => {
        commit("setRevenus", res.data.revenus);

        console.log("data ", res);
      });
    },

    addRevenu({ commit }, data) {
      return axios.post(`revenu`, data).then((res) => {
        console.log("add Revenu res ", res);
        return res;
      });
    },
    updateRevenu({ commit }, data) {
      return axios.patch(`revenu/${data.id}`, data).then((res) => {
        console.log("add Revenu res ", res);
        return res;
      });
    },

    deleteRevenu({ commit }, id) {
      return axios.delete(`revenu/${id}`).then((res) => {
        console.log("res delete ", res);
      });
    },
  },
};
