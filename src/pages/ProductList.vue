
<template>
  <div>
    <h1>Listado de productos</h1>
    <hr />
    <ul>
      <li v-for="producto in productos" :key="producto.id">
        {{ producto.title }} | {{ producto.price }}
        <i>{{ producto.inventory }}</i>
      </li>
    </ul>
  </div>
</template>

<script>
import store from "@/store/index.js";
export default {
  name: "ProductList",
  computed: {
    productos() {
      return store.state.productos;
    }
  }
};
</script>

<style>
</style>