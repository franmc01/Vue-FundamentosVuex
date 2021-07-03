import {createStore} from 'vuex'
import api from "../api/shop";

export default createStore({
    state: { // = data
        productos: [],
        carrito: []
    },
    /*Las mutaciones son responsables de cambios de estado individuales; un cambio de estado individual podría ser "actualizar" el
      arreglo products en nuestro store.
      Las mutaciones deberían ser lo más simple posible y son deben ser el único medio para actualizar el estado
     */
    mutations: {
        setProductos(state, productos) {
            state.productos = productos;
        },
        pushProductToCart(state, productId) {
            state.carrito.push({
                id: productId,
                quantity: 1
            });
        },
        incrementItemQuantity(state, cartItem) {
            cartItem.quantity++;
        },
        decrementProductInventory(state, producto) {
            producto.inventory--;
        }
    },
    actions: {
        /* = methods, al principio se suele confundir con las mutaciones (me paso a mi :v), sin embargo no es asi ya las actions son
        aquellas que deciden cuándo se activa una mutación.
        */
        getProducts(context) {
            return new Promise((resolve) => {
                api.getProducts(productos => {
                    context.commit('setProductos', productos);
                    resolve();
                });
            })
        },
        addProductToCart(context, producto) {
            if (producto.inventory > 0) {
                const cartItem = context.state.carrito.find(item => item.id === producto.id);
                if (!cartItem) {
                    context.commit('pushProductToCart', producto.id);
                } else {
                    context.commit('incrementItemQuantity', cartItem);
                }
                context.commit('decrementProductInventory', producto);
            }
        }

    },
    getters: { // = computed properties, por lo que tambien rastrean sus propias dependencias y se actualizan automáticamente cuando una dependencia cambia.
        productsOnStock(state) {
            return state.productos.filter(product => {
                return product.inventory > 0;
            });
        },
        productsOnCart(state) {
            return state.carrito.map(item => {
                const producto  = state.productos.find(product => product.id === item.id);
                return{
                    id: producto.id,
                    price: producto.price,
                    title: producto.title,
                    quantity: item.quantity
                }
            });
        },
        cartTotal(state, getters) {
            let total = 0;
            getters.productsOnCart.forEach(product => {
                total += product.price * product.quantity;
            })
            return total;
        }
    },
    modules: {}
})
