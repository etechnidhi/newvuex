export default {
  state: {
    email: "",
    password: "",
    user: {}
  },
  getters: {
    getUser: state => state.user,
    isLoggedIn: state => (state.user.email ? true : false)
  },
  actions: {
    login({ commit }, payload) {
      commit("login", payload);
      commit("updateEmail", "");
      commit("updatePassword", "");
    },
    logout({ commit }) {
      commit("logout");
    }
  },
  mutations: {
    login: (state, data) => {
      state.user = data;
    },
    logout: state => {
      state.user = {};
    },
    updateEmail: (state, data) => {
      state.email = data;
    },
    updatePassword: (state, data) => {
      state.password = data;
    }
  }
};
