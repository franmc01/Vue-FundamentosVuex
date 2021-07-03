<template>
  <div>
    <h2>Carrito</h2>
    <hr>
    <p v-if="carrito.length === 0">Carrito vacio</p>
    <ul v-else>
      <li v-for="productItem in carrito" :key="productItem.id">
        {{ productItem.title }} ({{productItem.quantity}})
        <button>X</button>
      </li>
    </ul>
    <p>Total: ${{ total }} </p>
  </div>
</template>

<script>
export default {
  name: "AppShoppingCart",
  computed: {
    carrito() {
      return this.$store.getters.productsOnCart;
    },
    total(){
      return this.$store.getters.cartTotal;
    }
  },
}
</script>

<style scoped>
ul {
  text-align: left;
}
</style>
