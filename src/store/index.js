import { createStore } from "vuex";
import m1 from './modules/m1'
import m2 from './modules/m2'

const store = createStore({
  modules: {
    a: m1,
    b: m2
  }
})

export default store