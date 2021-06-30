<template>
  <h1>Tienda Sisco</h1>
  <hr/>
  <ul>
    <li v-for="item in productos" :key="item.id">
      {{ item.title }}
    </li>
  </ul>
</template>

<script>
import store from "../store/index";
import api from "../api/shop";

export default {
  name: "AppProductList",
  computed: {
    productos() {
      return store.state.productos;
    }
  },
  created() {
    api.getProducts(productos => {
      store.commit('setProductos', productos);
    });
  }
}
</script>

<style scoped>

</style>