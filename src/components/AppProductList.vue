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

export default {
  name: "AppProductList",
  computed: {
    productos() {
      return store.state.productos;
    }
  },
  created() {
    try{
      store.dispatch('getProducts');
    }catch (e) {
      console.log(e)
    }
  }
}
</script>

<style scoped>

</style>