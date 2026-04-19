import { createRouter, createWebHistory } from "vue-router";

const routes = [
  {
    path: '/',
    component: () => import('@/layouts/MainLayouts.vue'),
    children: [
      {
        path: '',
        component: () => import('@/views/HomeView.vue'),
        meta: { title: 'Home' }
      },
      {
        path: '/account',
        name: 'account',
        component: () => import('@/views/AccountView.vue'),
        meta: { title: 'Account' }
      },
      {
        path: '/wishlist',
        name: 'wishlist',
        component: () => import('@/views/WishlistView.vue'),
        meta: { title: 'Wishlist' }
      },
      {
        path: '/orders',
        name: 'orders',
        component: () => import('@/views/OrdersView.vue'),
        meta: { title: 'Orders' }
      },
      {
        path: '/inbox',
        name: 'inbox',
        component: () => import('@/views/InboxView.vue'),
        meta: { title: 'Inbox' }
      },
      {
        path: '/addressBook',
        name: 'addressBook',
        component: () => import('@/views/AddressBookView.vue'),
        meta: { title: 'AddressBook' }
      },
      {
        path: '/newsletter',
        name: 'newsletter',
        component: () => import('@/views/NewsletterPreferenceView.vue'),
        meta: { title: 'Newsletter' }
      },
      {
        path: '/orders/canceledOrDeliveredOrders',
        name: 'canceledOrders',
        component: () => import('@/views/CanceledOrReturnedOrdersViews.vue'),
        meta: { title: 'CanceledOrders' }
      },
      {
        path: '/cart',
        name: 'cart',
        component: () => import('@/views/CartView.vue'),
        meta: { title: 'Cart' }
      },
      {
        path: '/checkout',
        name: 'checkout',
        component: () => import('@/views/CheckoutView.vue'),
        meta: { title: 'checkout' }
      },
      {
        path: '/product/:id',
        name: 'Product',
        component: () => import('@/views/ProductDetailsView.vue'),
        meta: { title: 'Product' }
      },
      {
        path: '/profile',
        name: 'Profile',
        component: () => import('@/views/AccountManagementView.vue'),
        meta: { title: 'Profile' }
      },
      {
        path: '/profile/security',
        name: 'Security',
        component: () => import('@/views/ProfileSecurityView.vue'),
        meta: { title: 'Security' }
      },
      {
        path: '/:catchAll(.*)',
        component: () => import('@/views/NotFoundView.vue')
      }
    ]
  },

  {
    path: '/auth',
    component: () => import('@/layouts/AuthLayouts.vue'),
    children: [
      {
        path: '/signup',
        name: 'signup',
        component: () => import('@/views/SignupView.vue'),
        meta: { title: 'Signup' }
      },
      {
        path: '/signin',
        name: 'signin',
        component: () => import('@/views/SigninView.vue'),
        meta: { title: 'Signin' }
      }
    ]
  },

  {
    path: '/admin',
    component: () => import('@/layouts/AdminLayouts.vue'),
    children: [
      {
        path: '',
        component: () => import('@/views/admin/DashboardView.vue'),
        meta: { title: 'Dashboard' }
      },
      {
        path: '/admin/products',
        name: 'Products',
        component: () => import('@/views/admin/ProductsView.vue'),
        meta: { title: 'Products' }
      },
      {
        path: '/admin/orders',
        name: 'Order Management',
        component: () => import('@/views/admin/OrdersView.vue'),
        meta: { title: 'Order Management' }
      },
      {
        path: '/admin/customers',
        name: 'Customer Management',
        component: () => import('@/views/admin/CustomersView.vue'),
        meta: { title: 'Customer Management' }
      },
      {
        path: '/admin/inventory',
        name: 'Inventory Management',
        component: () => import('@/views/admin/InventoryView.vue'),
        meta: { title: 'Inventory Management' }
      },
      {
        path: '/admin/analytics',
        name: 'Analytics',
        component: () => import('@/views/admin/AnalyticsView.vue'),
        meta: { title: 'Analytics' }
      },
      {
        path: '/admin/reviews',
        name: 'Reviews',
        component: () => import('@/views/admin/ReviewsView.vue'),
        meta: { title: 'Customer Reviews' }
      },
      {
        path: '/admin/categories',
        name: 'Categories',
        component: () => import('@/views/admin/CategoriesView.vue'),
        meta: { title: 'Product Categories' }
      }
    ]
  }
];

const router = createRouter({
  history: createWebHistory(),
  routes
});

router.afterEach((to) => {
  document.title = to.meta.title
    ? `${to.meta.title}`
    : 'My Shop'
});

export default router;
