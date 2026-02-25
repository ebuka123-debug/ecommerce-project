<script setup>
import { useRoute } from 'vue-router';


//Checks if the the route path is the current path (The page the user is in is equivalent to the route path)
const isActiveRoute = (routePath) => {
  const route = useRoute(routePath);

  return route.path === routePath
}
</script>

<template>
  <div class="nav-tabs d-none pb-2 border-bottom-5 mt-4 d-md-flex justify-content-center align-items-center">
      <div id="nav-tabs" class="d-flex align-items-center">
          <div class="me-4">
              <!-- <b><a to="../index.html" >Home</RouterLink></b> -->
              <b><RouterLink to="/" :class="isActiveRoute('/')? 'active-link':''">Home</RouterLink></b>
          </div>
          <div class="me-4">
              <b><RouterLink to="">Hot deals</RouterLink></b>
          </div>
          <div class="me-4">
              <b><RouterLink to="">Categories</RouterLink></b>
          </div>
          <div class="me-4">
              <b><RouterLink to="">Laptops</RouterLink></b>
          </div>
          <div class="me-4">
              <b><RouterLink to="">Cameras</RouterLink></b>
          </div>
          <div class="me-4">
              <b><RouterLink to="">Cameras</RouterLink></b>
          </div>
      </div>
  </div>
</template>

<style scoped>
</style>
