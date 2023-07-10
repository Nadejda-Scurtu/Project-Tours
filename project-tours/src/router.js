import Vue from 'vue'
import VueRouter from "vue-router";

import shop from './components/tourism_shop/Shop.vue'
import TourismTrips from './components/project_tours/ToursTrips.vue'

Vue.use(VueRouter);

const routes = [
  {path:"/shop", component: shop},
  {path: "/", component: TourismTrips}

];

const router = new VueRouter({
  mode:'history',
  routes
});

export default router;