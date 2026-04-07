// import { createRouter, createWebHistory } from 'vue-router'
// import HomeView from '@/views/HomeView.vue'

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
//       component: () => import('@/views/AboutView.vue'),
//     },
//   ],
// })

// export default router


// import { createRouter, createWebHistory } from "vue-router";

// import Home from '@/views/HomeView.vue';

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
// Layouts
import AuthLayouts from "@/layouts/AuthLayouts.vue";
import MainLayouts from "@/layouts/MainLayouts.vue";
import AdminLayouts from "@/layouts/AdminLayouts.vue";

// MainLayouts children
import Home from "@/views/HomeView.vue";
import Account from "@/views/AccountView.vue";
import Wishlist from "@/views/WishlistView.vue";
import Orders from "@/views/OrdersView.vue";
import Inbox from "@/views/InboxView.vue";
import AddressBook from "@/views/AddressBookView.vue";
import NewsletterPreference from "@/views/NewsletterPreferenceView.vue";
import CanceledOrders from "@/views/CanceledOrReturnedOrdersViews.vue";
import NotFound from "@/views/NotFoundView.vue";
import ProductDetails from "@/views/ProductDetailsView.vue";
import CartView from "@/views/CartView.vue";
import CheckoutView from "@/views/CheckoutView.vue";

// AuthLayouts children
import Signup from "@/views/SignupView.vue";
import Signin from "@/views/SigninView.vue";

//AdminLayouts children
import AdminDashboard from "@/views/admin/DashboardView.vue";
// import { meta } from "@eslint/js";
const routes = [
  {
    path: '/',
    component: MainLayouts,
    children: [
      {
        path: '',
        component: Home,
        meta: { title: 'Home' }
      },
      {
        path: '/account',
        name: 'account',
        component: Account,
        meta: {title: 'Account'}
      },
      {
        path: '/wishlist',
        name: 'wishlist',
        component: Wishlist,
        meta: {title: 'Wishlist'}
      },
      {
        path: '/orders',
        name: 'orders',
        component: Orders,
        meta: {title: 'Orders'}
      },
      {
        path: '/inbox',
        name: 'inbox',
        component: Inbox,
        meta: {title: 'Inbox'}
      },
      {
        path: '/addressBook',
        name: 'addressBook',
        component: AddressBook,
        meta: {title: 'AddressBook'}
      },
      {
        path: '/newsletter',
        name: 'newsletter',
        component: NewsletterPreference,
        meta: {title: 'Newsletter'}
      },
      {
        path: '/canceledOrders',
        name: 'canceledOrders',
        component: CanceledOrders,
        meta: {title: 'CanceledOrders'}
      },
      {
        path: '/cart',
        name: 'cart',
        component: CartView,
        meta: { title: 'Cart' }
      },
      {
        path: '/checkout',
        name: 'checkout',
        component: CheckoutView,
        meta: {title: 'checkout'}
      },
      {
        path: '/product/:id',
        component: ProductDetails,
        meta: {title: 'Product'}
      },
      {
        path: '/:catchAll(.*)',
        component: NotFound
      },
    ]
  },

  {
    path: '/auth',
    component: AuthLayouts,
    children: [
      {
        path: '/signup',
        name: 'signup',
        component: Signup,
        meta: {title: 'Signup'}
      },
      {
        path: '/signin',
        name: 'signin',
        component: Signin,
        meta: {title: 'Signin'}
      },
    ]
  },

  {
    path: '/admin',
    component: AdminLayouts,
    children: [
      {
        path: '',
        component: AdminDashboard,
        meta: {title: 'Dashboard'}
      }
    ]
  }


]

const router = createRouter({
  history: createWebHistory(),
  routes
})

router.afterEach((to) => {
  document.title = to.meta.title
    ? `${to.meta.title}`
    : 'My Shop'
})

export default router
