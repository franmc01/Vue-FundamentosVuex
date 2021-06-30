import { createStore } from 'vuex'

export default createStore({
  state: {
    productos: []
  },
  mutations: {
    setProductos(state, productos) {
      state.productos = productos;
    }
  },
  actions: {
  },
  modules: {
  }
})
