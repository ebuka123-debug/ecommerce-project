// import { createRouter, createWebHistory } from 'vue-router'
// import HomeView from '../views/HomeView.vue'

// const router = createRouter({
//   history: createWebHistory(import.meta.env.BASE_URL),
//   routes: [
//     {
//       path: '/',
//       name: 'home',
//       component: HomeView,
//     },
//     {
//       path: '/about',
//       name: 'about',
//       // route level code-splitting
//       // this generates a separate chunk (About.[hash].js) for this route
//       // which is lazy-loaded when the route is visited.
//       component: () => import('../views/AboutView.vue'),
//     },
//   ],
// })

// export default router


// import { createRouter, createWebHistory } from "vue-router";

// import Home from '../views/HomeView.vue';

// //setting the routes
// const routes = [
//   {paths: '/', component: Home}
// ]

// //creating the router that runs the route
// const router = createRouter({
//   history: createWebHistory(),
//   routes
// })

// export default router

import { createRouter, createWebHistory } from "vue-router";
import Home from '../views/HomeView.vue';
import Account from '../views/AccountView.vue'
import Wishlist from '../views/WishlistView.vue'
import Orders from '../views/OrdersView.vue';
import Inbox from '../views/InboxView.vue';
import AddressBook from '../views/AddressBookView.vue';
import NewsletterPreference from "../views/NewsletterPreferenceView.vue";
import CanceledOrders from "../views/CanceledOrReturnedOrdersViews.vue";
import NotFound from "../views/NotFoundView.vue";
const routes = [
  { path: '/', component: Home },
  { path: '/account', component: Account },
  { path: '/wishlist', component: Wishlist },
  { path: '/orders', component: Orders },
  { path: '/inbox', component: Inbox },
  { path: '/addressBook', component: AddressBook },
  { path: '/newsletter', component: NewsletterPreference },
  { path: '/canceledOrders', component: CanceledOrders },
  { path: '/:catchAll(.*)', component: NotFound },
  



]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
