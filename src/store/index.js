import {createStore} from 'vuex'
import api from "../api/shop";

export default createStore({
    state: {
        productos: [],
        carrito: []
    },
    mutations: {
        setProductos(state, productos) {
            state.productos = productos;
        },
        incrementProductQuantity(state, existe) {
            existe.quantity++;
        },
        addToCart(state, producto) {
            state.carrito.push({
                id: producto.id,
                quantity: producto.quantity
            });
        },
        decrementProductInventory(state, producto) {
            producto.inventory--;
        }
    },
    actions: {
        getProducts(context) {
            return new Promise((resolve) => {
                api.getProducts(productos => {
                    context.commit('setProductos', productos);
                    resolve();
                });
            })
        },
        addProductToCart(context, producto) {
            //Verificar si hay inventario
            if (producto.inventory === 0) return;
            //Verificar si existe el producto en el carrito
            const existe = context.state.carrito.find(item => item.id === producto.id);
            if (existe) {
                //Si es así, añadir uno más a la compra
                context.commit('incrementProductQuantity', existe);
            } else {
                //Caso contrario, el producto al carrito
                context.commit('addToCart', producto);
            }
            //Independientemente, restar el inventario del producto
            context.commit('decrementProductInventory', producto);
        }

    },
    getters: {
        productsOnStock(state) {
            return state.productos.filter(product => {
                return product.inventory > 0;
            });
        },
    },
    modules: {}
})
