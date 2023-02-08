import { createApp } from 'vue'
// import Vue from 'vue'
import { createRouter, createWebHistory } from 'vue-router'
import App from './App.vue'
import "bootstrap/dist/css/bootstrap.min.css";
import 'bootstrap-vue/dist/bootstrap-vue.css'
// import BootstrapVue from 'bootstrap-vue/dist/bootstrap-vue.esm';
// import 'bootstrap-vue/dist/bootstrap-vue.css';
// import 'bootstrap/dist/css/bootstrap.css';
import CreateProduct from './components/CreateProduct.vue'
import ListProducts from './components/ListProducts.vue'

// Vue.use(BootstrapVue);
// Vue.config.productionTip = false
const routes = [
  {
    path: '/new_product',
    component: CreateProduct,
  },
  {
    path: '/products',
    component: ListProducts,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

const app = createApp(App)
app.use(router)
app.mount('#app')
