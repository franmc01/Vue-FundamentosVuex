import { createStore } from 'vuex'
import api from "../api/shop";

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
    getProducts(context){
      return new Promise((resolve, reject) => {
        api.getProducts(productos => {
          context.commit('setProductos', productos);
          resolve();
        });
      })
    }
  },
  modules: {
  }
})
