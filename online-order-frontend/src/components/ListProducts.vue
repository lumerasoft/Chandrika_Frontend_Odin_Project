<template>
<nav class="navbar bg-body-tertiary">
  <div class="container-fluid">
    <h1>Products</h1>
    <form class="d-flex" role="search">
      <button class="button" v-on:click="create" type="button">Create Product</button>
    </form>
  </div>
</nav>
  <div class="display">
    <p v-for="product in products" :key="product.name">
      <ProductDetails :name="product.name" :desc="product.desc" :price="product.price" />
    </p>
  </div>

</template>

<script>
import ProductDetails from './ProductDetails.vue'
  export default {
    name: "ListProducts",
    components: {
      ProductDetails
    },
    data() {
      return {
        products: []
      }
    },
    methods: {
      displayProduct: function() {
        this.products = JSON.parse(localStorage.getItem("products"))
      }
    },
    mounted() {
      this.displayProduct();
    }
  }
</script>

<style scoped>

  .display {
    text-align: left;
  }
</style>