<template>
  <div>
    <h2>Carrito</h2>
    <hr>
    <p v-if="carrito.length === 0">Carrito vacio</p>
    <ul v-else>
      <li v-for="productItem in carrito" :key="productItem.id">
        {{ productItem.title }} ({{ productItem.quantity }})
        <button @click="disminuirCantidadDelProductoCarrito(productItem)">-</button>
        &nbsp;
        <button @click="eliminarProductoCarrito(productItem)">X</button>
      </li>
    </ul>
    <p>Total: ${{ total }} </p>
    <button @click="checkout">Checkout</button>
    <p v-if="checkoutStatus">{{ checkoutStatus }}</p>
  </div>
</template>

<script>
import {mapActions, mapGetters, mapState} from "vuex";

export default {
  name: "AppShoppingCart",
  computed: {
    ...mapState({
      checkoutStatus: state => state.carrito.checkoutStatus
    }),
    ...mapGetters({
      carrito: 'productsOnCart',
      total: 'cartTotal'
    }),
    // carrito() {
    //   return this.$store.getters.productsOnCart;
    // },
    // total(){
    //   return this.$store.getters.cartTotal;
    // }
  },
  methods: {
    ...mapActions({
      eliminarProductoCarrito: 'removeProductFromCart',
      checkout: 'checkout'
    }),
    // eliminarProductoCarrito(productItem) {
    //   this.$store.dispatch('removeProductFromCart', productItem);
    // },
    disminuirCantidadDelProductoCarrito(productItem) {
      this.$store.dispatch('decrementItemQuantity', productItem);
    }
  },
}
</script>

<style scoped>
ul {
  text-align: left;
}
</style>
