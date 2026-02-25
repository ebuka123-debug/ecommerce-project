<script setup>
import { RouterLink } from 'vue-router';
import Offcanvas from './OffcanvasComp.vue';


</script>

<template>
  <nav class="navbar sticky-top d-md-none">
    <div class="row w-100 d-flex gx-3">
      <div class="col-2 d-flex align-items-center">
          <div class="icon-bars ms-3 " type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasRight" aria-controls="offcanvasRight"></div>
      </div>

     <Offcanvas />
      <div class="col-4 g-0 d-flex align-items-center justify-content-center">
        <b class="text-white fs-3">Specs</b>
        <div id="fullstop" class="rounded rounded-circle mt-3 ms-1"></div>
      </div>
      <div class="col-6 d-flex align-items-center justify-content-end">
        <RouterLink to="/account" class="text-white fs-18 me-4">
            <!-- <i class="fa fa-user-circle"></i> -->
             <font-awesome-icon :icon="['fa','user-circle']" />
        </RouterLink>
        <RouterLink href="/cart">
            <div class="position-relative mt-1">
                <!-- <i class="fa fa-cart-plus fs-18 text-white"></i> -->
                 <font-awesome-icon :icon="['fa','cart-plus']" class="fs-18 text-white" />
                <span class="position-absolute top-0 start-100 translate-middle badge border border-light rounded-circle bg-danger p-2"><span class="visually-hidde fs-0">5</span></span>
            </div>
        </RouterLink>
      </div>
    </div>
  </nav>
</template>

<style scoped>
  /* h1{color: red} */

</style>
