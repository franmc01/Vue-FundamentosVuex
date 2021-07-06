import {createStore} from 'vuex'
import carrito from "./modules/carrito";
import productos from "./modules/productos";


export default createStore({
    state: {}, //Data
    mutations: {},  /*Las mutaciones son responsables de cambios de estado individuales; un cambio de estado individual podría ser "actualizar" el
      arreglo products en nuestro store.
      Las mutaciones deberían ser lo más simple posible y son deben ser el único medio para actualizar el estado
     */
    actions: {}, /* = methods, al principio se suele confundir con las mutaciones (me paso a mi :v), sin embargo no es asi ya las actions son
    aquellas que deciden cuándo se activa una mutación.
    */
    getters: {}, // = computed properties, por lo que tambien rastrean sus propias dependencias y se actualizan automáticamente cuando una dependencia cambia.,
    modules: {
        carrito,
        productos
    }
})
