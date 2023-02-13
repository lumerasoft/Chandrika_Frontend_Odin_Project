import { createApp } from 'vue'
// import Vue from 'vue'
import { createRouter, createWebHistory } from 'vue-router'
import App from './App.vue'
import "bootstrap/dist/css/bootstrap.min.css";
import 'bootstrap-vue/dist/bootstrap-vue.css'
import CreateProduct from './components/CreateProduct.vue'
import ListProducts from './components/ListProducts.vue'
import ShowProduct from './components/ShowProduct.vue'

const routes = [
  {
    path: '/',
    component: ListProducts,
  },
  {
    path: '/create_product',
    component: CreateProduct,
  },
  {
    path: '/products',
    component: ListProducts,
  },
  {
    path: '/products/:name',
    component: ShowProduct
  }
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

const app = createApp(App)
app.use(router)
app.mount('#app')
