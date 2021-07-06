import api from "../../api/shop";

export default {
    state: {
     productos: []
    },
    mutations: {
        setProductos(state, productos) {
            state.productos = productos;
        },
        decrementProductInventory(state, producto) {
            producto.inventory--;
        },
    },
    actions: {
        getProducts({commit}) {
            return new Promise((resolve) => {
                api.getProducts(productos => {
                    commit('setProductos', productos);
                    resolve();
                });
            })
        },
    },
    getters: {
        productsOnStock(state) {
            return state.productos.filter(product => {
                return product.inventory > 0;
            });
        },
        productIsInStock(){
            return (product) => {
                return product.inventory > 0;
            }
        }
    }
}
