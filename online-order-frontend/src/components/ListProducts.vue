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
      <ProductDetails :product="product" />
    </p>

      <!-- <ProductDetails
        v-for="product in products"
        :key="product.name"
        :product="product"
        @view-product="viewProduct($event)" /> -->
  </div>

</template>

<script>
import { useRouter } from 'vue-router'
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
    setup() {
      const router = useRouter();
      function create() {
        router.push('/create_product');
      }
      // function displayDetails() {
      //   router.push('/show_details')
      // }
      return {
        create
        // displayDetails,
      };
    },
    methods: {
      displayProduct: function() {
        this.products = JSON.parse(localStorage.getItem("products"))
      },

      // viewProduct(product) {
      //   console.log("hii")
      //   this.product = product
      //   console.log(this.product)
      //   this.displayDetails();
      // }
    },
    mounted() {
      this.displayProduct();
    },
    // setup() {
    //   const router = useRouter();
    //   function create() {
    //     router.push('/create_product');
    //   }
    //   function viewProduct() {
    //     router.push('/show_product')
    //   }
    //   return {
    //     create,
    //     viewProduct,
    //   };
    // }
  }
</script>

<style scoped>

  .display {
    text-align: left;
  }
  button {
    padding: 10px;
    border: 2px;
    background-color: #5F9EA0;
    color: white;
  }
  button:hover {
    background-color: #808080;
  }
</style>