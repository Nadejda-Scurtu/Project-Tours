import Vue from 'vue'
import VueRouter from "vue-router";

import shop from './components/tourism_shop/Shop.vue'
import tours from './components/project_tours/Tours.vue'

Vue.use(VueRouter);

const routes = [
  {path:"/shop", component: shop},
  {path: "/tours", component: tours}
];

const router = new VueRouter({
  mode:'history',
  routes
});

export default router;