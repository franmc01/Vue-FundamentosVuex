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
  getters: {
    productsOnStock(state){
      return state.productos.filter(producto => (producto.inventory > 0));
    }
  },
  modules: {
  }
})
