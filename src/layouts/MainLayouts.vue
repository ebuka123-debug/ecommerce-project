<script setup>

import NavbarSmallScreen from '@/components/NavbarSmallScreen.vue';
import NavAndTabs from '@/components/NavAndTabs.vue'
import Navbar from '@/components/Navbar.vue';
import Footer from '@/components/Footer.vue';
import { getTotalItemCount } from '@/composables/cartMethods';
//Cart data
const cart = ref(JSON.parse(localStorage.getItem("cart")) || []);
// import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';

// import Product from '@/components/ProductComp.vue';

import { ref} from 'vue';

// import Navbar from './components/Navbar.vue';
import { RouterView } from 'vue-router';
const result = ref("welcome");

</script>

<template>

   <NavbarSmallScreen :quantity="getTotalItemCount(cart)"/>


  <navbar :quantity="getTotalItemCount(cart)"/>

  <NavAndTabs />

  <RouterView />



  <!-- <p ></p> -->





  <Footer />
</template>

<style scoped>







</style>
