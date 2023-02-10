<template>
<nav class="navbar bg-body-tertiary">
  <div class="container-fluid">
      <h1>Product description is here</h1>
    <form class="d-flex" role="search">
      <button class="button" v-on:click="back" type="button">Back</button>
    </form>
  </div>
</nav>

  <div class="card">
  <div class="card-body">
    <h3 class="card-title">{{name}}</h3>
    <p class="card-text">{{product.desc}}</p>
    <p class="card-text">{{product.quantity}}</p>
    <p class="card-text"><b>{{product.price}}</b></p>
   </div>
</div>
<AddReview />
</template>

<script>
import { useRouter } from 'vue-router'
import AddReview from './AddReview.vue'

  export default {
    name: "ShowProduct",
    components: {
      AddReview
    },
    data() {
      return {
        name: '',
        product: {}
      }
    },
    methods:{
      loadProducts() {
        const products = JSON.parse(localStorage.getItem("products"));
        let product = products.find((product) => product.name == this.name)
        this.product = product
      }
    },
    created() {
        this.name = this.$route.params.name
    },

    mounted() {
      this.loadProducts();

    },
    setup() {
      const router = useRouter();
      function back() {
        router.push('/products');
      }
      return {
        back
      };
    },
  }
</script>