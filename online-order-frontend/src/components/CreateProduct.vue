<template>
  <h1>Product creation </h1><br/>
  <div class="mb-3">
    <form>
      <label class="form-label"><b>Name</b></label>
      <input type="text" id="name" class="form-control" v-model="name">
      <label class="form-label"><b>Description</b></label>
      <input type="text" id="desc" class="form-control" v-model="desc">
      <label class="form-label"><b>Price</b></label>
      <input type="text" id="price" class="form-control" v-model="price">
      <label class="form-label"><b>Quantity</b></label>
      <input type="text" id="quantity" class="form-control" v-model="quantity"><br/>

      <button v-on:click="create" type="submit">Create</button>
      <button class="button" v-on:click="goBack" type="button">Back</button>
    </form>
  </div>
</template>

<script>
import { useRouter } from 'vue-router'
  export default {
    name: "CreateProduct",

    data() {
      return {
        name: '',
        desc: '',
        price: '',
        quantity: '',
        products: []
      }
    },
    setup() {
      const router = useRouter();
      function goBack() {

        router.push('/products');

      }
      return {
        goBack,
      };
    },
    methods: {
      create: function() {
        const existing_products = localStorage.getItem("products")
        let parsed_data = JSON.parse(existing_products)
        let new_product = {name: this.name, desc:this.desc, price: this.price, quantity: this.quantity}
        parsed_data.push(new_product)
        localStorage.setItem("products",JSON.stringify(parsed_data))

        this.goBack();

        this.name = "",
        this.price = "",
        this.quantity = "",
        this.desc = ''
      }
    },
  }
</script>

<style scoped>
.mb-3 {
  text-align: center;
  align-items: center;
}
.mb-3 input {
  margin-left: 25%;
  width: 50%;
}
.mb-3 input:hover {
  box-shadow: 0 8px 16px 0 rgba(0,0,0,0.2);
}
.mb-3 button {
  margin: 10px;
  padding: 10px;
  border: 2px;
  background-color: #5F9EA0;
  color: white;
}
.mb-3 button:hover {
  background-color: #808080;
}
</style>