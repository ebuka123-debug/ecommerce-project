<script setup>

import NavbarSmallScreen from '@/components/NavbarSmallScreen.vue';   //Small screen navbar
import NavAndTabs from '@/components/NavAndTabs.vue'  //the semi navabr that shows the page your on
import Navbar from '@/components/Navbar.vue'; //Navbar
import Footer from '@/components/Footer.vue'; //Footer
import { RouterView } from 'vue-router';  //Router view that displays the various routes

</script>

<template>

  <NavbarSmallScreen />

  <navbar />

  <NavAndTabs />

  <RouterView />

  <Footer />
</template>
