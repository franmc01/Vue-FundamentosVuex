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
        <button
            :disabled="!productIsInStock(product)"
            @click="addToCart(product)">Cart</button>
      </li>
    </ul>
  </div>
</template>

<script>
// import store from "../store/index";
import { mapActions, mapGetters, mapState } from "vuex";


export default {
  name: "AppProductList",
  data() {
    return {
      loading: false
    }
  },
  computed: {
    ...mapState({
      productos: 'productos'
    }),
    // productos() {
    //   return store.state.productos;
    //   // return store.getters.productsOnStock;
    // },
    ...mapGetters([
      'productIsInStock'
    ])
    // productIsInStock(){
    //   return this.$store.getters.productIsInStock;
    // }
  },
  methods: {
    ...mapActions({
      addToCart: 'addProductToCart',
      getProducts: 'getProducts'
    })
    // addToCart(product) {
    //   store.dispatch('addProductToCart', product);
    // }
  },
  async created() {
    try {
      this.loading = true;
      await this.getProducts();
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
