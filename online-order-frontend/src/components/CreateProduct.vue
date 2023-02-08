<template>
  <h1>Product creation </h1>
  <form>
    <label>Product name </label>
    <input type="text" id="name" placeholder="product name here" v-model="name"><br/>
    <label>Price</label>
    <input type="text" id="price" placeholder="product price here" v-model="price"><br/>
    <label>Quantity</label>
    <input type="text" id="quantity" placeholder="product quantity here" v-model="quantity">
    <br/><button v-on:click="create" type="button">Create Product</button>
  </form>
</template>

<script>
  export default {
    name: "CreateProduct",

    data() {
      return {
        name: '',
        price: '',
        quantity: '',
        products: []
      }
    },
    methods: {
      create() {
        this.products.push({name: this.name, price: this.price, quantity: this.quantity, id: this.products.length });
        localStorage.setItem('products',JSON.stringify(this.products))
        this.name = "",
        this.price = "",
        this.quantity = ""
      }
    }
  }
</script>
