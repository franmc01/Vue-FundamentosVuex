<template>
  <div>
    <h2>Productos</h2>
    <hr/>
    <ul>
      <li v-for="product in productos" :key="product.id">
        {{ product.title }} | $ {{ product.price }} |
        <i>{{ product.inventory }} unidades </i>
      </li>
    </ul>
  </div>
</template>

<script>
import store from "../store/index";

export default {
  name: "AppProductList",
  computed: {
    productos() {
      //return store.state.productos;
      return store.getters.productsOnStock;
    }
  },
  created() {
    try {
      store.dispatch('getProducts');
    } catch (e) {
      console.log(e)
    }
  }
}
</script>

<style scoped>
ul {
  text-align: left;
}
</style>