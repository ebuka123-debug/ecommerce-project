<script setup>
import { RouterLink } from 'vue-router';



</script>

<template>
  <nav class="navbar sticky-top d-md-none">
    <div class="row w-100 d-flex gx-3">
      <div class="col-2 d-flex align-items-center">
          <div class="icon-bars ms-3 " type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasRight" aria-controls="offcanvasRight"></div>
      </div>

      <div class="offcanvas offcanvas-end" tabindex="-1" id="offcanvasRight" aria-labelledby="offcanvasRightLabel">
        <div class="offcanvas-header d-flex justify-content-end">
            <h5 id="offcanvasRightLabel"></h5>
            <button type="button" class="icon-close text-reset" data-bs-dismiss="offcanvas" aria-label="Close"></button>

        </div>
        <div class="offcanvas-body">
            <RouterLink  to="" class="offcanvas-content d-flex align-items-center active-nav mb-2 rounded d-flex pt-2 pb-2 ps-2">
                <!-- <div class="icon-hot"></div> -->
                 <font-awesome-icon :icon="['fa','store-alt']" class="text-red fs-14"/>
                <b class="ms-2 fs-14">Products</b>
            </RouterLink>
            <RouterLink to="" class="offcanvas-content non-active-nav d-flex align-items-center mb-2 rounded d-flex pt-2 pb-2 ps-2">
                <!-- <div class="icon-hot"></div> -->
                  <!-- <i class="fa fa-user-alt text-red fs-14"></i> -->
                   <font-awesome-icon :icon="['fa', 'user-alt']" class="text-red fs-14"/>
                <b class="ms-2 fs-14">Profile</b>
            </RouterLink>
            <RouterLink to="/wishlist" class="offcanvas-content non-active-nav d-flex align-items-center mb-2 rounded d-flex pt-2 pb-2 ps-2">
                <!-- <div class="icon-hot"></div> -->
                <!-- <i class="fa fa-heart text-red fs-14"></i> -->
                 <font-awesome-icon :icon="['fa','heart']" class="text-red fs-14"/>
                <span class="ms-2 fs-14">Wishlist</span>
            </RouterLink>
            <RouterLink to="" class="offcanvas-content non-active-nav d-flex align-items-center mb-2 rounded d-flex pt-2 pb-2 ps-2">
                <!-- <div class="icon-hot"></div> -->
                <!-- <i class="fa fa-lightbulb text-red fs-14"></i> -->
                <font-awesome-icon :icon="['fa','lightbulb']" class="text-red fs-14" />
                <span class="ms-2 fs-14">Hot deals</span>
            </RouterLink>
            <RouterLink to="/orders" class="offcanvas-content non-active-nav d-flex align-items-center mb-2 rounded d-flex pt-2 pb-2 ps-2">
                <!-- <div class="icon-hot"></div> -->
                <!-- <i class="fa fa-box-open text-red fs-14"></i> -->
                 <font-awesome-icon :icon="['fa','box-open']" class="text-red fs-14" />
                <span class="ms-2 fs-14">Orders</span>
            </RouterLink>
            <a href="" class="offcanvas-content non-active-nav d-flex align-items-center mb-2 rounded d-flex pt-2 pb-2 ps-2">
                <!-- <div class="icon-hot"></div> -->
                <!-- <i class="fa fa-cubes text-red fs-14"></i> -->
                <font-awesome-icon :icon="['fa','cubes']" class="text-red fs-14" />
                <span class="ms-2 fs-14">Categories</span>
            </a>
            <a href="" class="offcanvas-content non-active-nav d-flex align-items-center mb-2 rounded d-flex pt-2 pb-2 ps-2">
                <!-- <div class="icon-hot"></div> -->
                <!-- <i class="fa fa-laptop text-red fs-14"></i> -->
                 <font-awesome-icon :icon="['fa','laptop']" class="text-red fs-14" />
                <span class="ms-2 fs-14">Laptops</span>
            </a>
        </div>
      </div>
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
