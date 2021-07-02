<template>
  <div>
    <h2>Productos</h2>
    <hr/>
    <ul>
      <li v-for="product in productos" :key="product.id">
        {{ product.title }} | $ {{ product.price }} |
        <i>{{ product.inventory }} &nbsp;</i>
        <button @click="addToCart(product)">Cart</button>
      </li>
    </ul>
  </div>
</template>

<script>
import store from "../store/index";

export default {
  name: "AppProductList",
  async created() {
    try {
      await store.dispatch("getProducts");
    } catch (error) {
      console.error(error);
    }
  },
  computed: {
    productos() {
      //return store.state.productos;
      return store.getters.productsOnStock;
    }
  },
  methods: {
    addToCart(product) {
      store.dispatch('addProductToCart', product);
    }
  },
}
</script>

<style scoped>
ul {
  text-align: left;
}
</style>