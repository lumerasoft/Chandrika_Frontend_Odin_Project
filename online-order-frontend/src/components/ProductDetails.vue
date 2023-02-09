<template>
  <div class="card">
  <div class="card-body">
    <h3 class="card-title">{{product.name}}</h3>
    <p class="card-text">{{product.desc}}</p>
    <p class="card-text">{{product.quantity}}</p>
    <p class="card-text"><b>${{product.price}}</b></p>
    <router-link :to="`/products/${product.name}`">View Product</router-link>
    <!-- <button  class="button" v-on:click="view" type="button">View Product</button> -->
  </div>
</div>
</template>
<script>
// import { useRouter } from 'vue-router'
export default {
  name: "productDetails",
  props: ['product'],

  // props: {
  //   name: String,
  //   desc: String,
  //   price: Number,
  //   quantity: Number,

  // }
  // setup() {
  //     const router = useRouter();
  //     function view() {

  //       router.push("`/products/${name}`");
  //     }
  //     return {
  //       view,
  //     };
  //   }
}
</script>

<style scoped>
.card {
  width: 100%;
}
.card:hover {
  box-shadow: 0 8px 16px 0 rgba(0,0,0,0.2);
}
</style>