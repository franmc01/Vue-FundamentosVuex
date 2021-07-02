<template>
  <div>
    <h2>Productos</h2>
    <hr/>
    <img
        v-if="loading"
        src="https://i.imgur.com/JfPpwOA.gif"
        alt="loading"
    >
    <ul v-else>
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
  data() {
    return {
      loading: false
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
  async created() {
    try {
      this.loading = true;
      await store.dispatch("getProducts");
      this.loading = false;
    } catch (error) {
      console.error(error);
    }
  },
}
</script>

<style scoped>
ul {
  text-align: left;
}
</style>