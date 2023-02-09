<template>
  <div class="card">
  <div class="card-body">
    <h3 class="card-title">{{name}}</h3>
    <p class="card-text">{{desc}}</p>
    <p class="card-text">{{quantity}}</p>
    <p class="card-text"><b>{{price}}</b></p>
    <a class="product-link" href="">product details</a>
  </div>
</div>
</template>
<script>
export default {
  name: "productDetails",
  props: {
    name: String,
    desc: String,
    price: Number,
    quantity: Number
  }
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