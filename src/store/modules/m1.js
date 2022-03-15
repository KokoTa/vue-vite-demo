const m1 = {
  namespaced: true,
  state() {
    return {
      count: 100
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

export default m1