const m2 = {
  namespaced: true,
  state() {
    return {
      count: 200
    }
  },
  mutations: {
    INCREMENT (state) {
      state.count++
    }
  },
  actions: {
    increment({ commit }) {
      commit('INCREMENT')
    }
  }
}

export default m2