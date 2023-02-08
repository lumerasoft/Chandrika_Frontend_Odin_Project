<template>
  <ListProducts/>

</template>

<script>
import ListProducts from './components/ListProducts.vue'

export default {
  name: 'App',
  components: {
    ListProducts
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  align-items: center;
  color: #2c3e50;
  margin: 3%;
}
</style>
