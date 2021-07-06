import api from "../api/shop";

export default {
    /* = methods, al principio se suele confundir con las mutaciones (me paso a mi :v), sin embargo no es asi ya las actions son
    aquellas que deciden cuándo se activa una mutación.
    */
    getProducts({commit}) {
        return new Promise((resolve) => {
            api.getProducts(productos => {
                commit('setProductos', productos);
                resolve();
            });
        })
    },
    addProductToCart({state, commit, getters}, producto) {
        if (getters.productIsInStock) {
            const cartItem = state.carrito.find(item => item.id === producto.id);
            if (!cartItem) {
                commit('pushProductToCart', producto.id);
            } else {
                commit('incrementItemQuantity', cartItem);
            }
            commit('decrementProductInventory', producto);
        }
    },
    removeProductFromCart({commit}, productItem) {
        commit('removeProductFromCart', productItem);
    },
    decrementItemQuantity({commit}, productItem) {
        commit('decrementItemQuantity', productItem);
    },
    checkout({state, commit}) {
        api.buyProducts(
            state.productos,
            () => {
                commit('emptyCart');
                commit('setCheckoutStatus', 'success');
            },
            () => {
                commit('setCheckoutStatus', 'fail');
            }
        )
    }

}
