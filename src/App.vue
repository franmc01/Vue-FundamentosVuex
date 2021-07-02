<template>
  <AppProductList/>
  <AppShoppingCart/>
</template>

<script>
import AppProductList from "./components/AppProductList";
import AppShoppingCart from "./components/AppShoppingCart";

export default {
  name: 'App',
  components: {
    AppProductList,
    AppShoppingCart
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
}

#app > * {
  flex-basis: 49%;
}

</style>
