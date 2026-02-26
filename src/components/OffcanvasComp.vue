<script setup>
import { watch } from 'vue'
import { useRoute } from 'vue-router'
import { Offcanvas } from 'bootstrap'

const route = useRoute();

//check which route is active
const isActiveRoute = (routePath) => {
  return route.path === routePath
}

watch(route, () => {
  const offcanvasEl = document.getElementById('offcanvasRight')
  const offcanvasInstance = Offcanvas.getInstance(offcanvasEl)
  if (offcanvasInstance) {
    offcanvasInstance.hide()
  }
})

</script>

<template>
  <div class="offcanvas offcanvas-end" tabindex="-1" id="offcanvasRight" aria-labelledby="offcanvasRightLabel">
        <div class="offcanvas-header d-flex justify-content-end">
            <h5 id="offcanvasRightLabel"></h5>
            <button type="button" class="icon-close text-reset" data-bs-dismiss="offcanvas" aria-label="Close"></button>

        </div>
        <div class="offcanvas-body">
            <RouterLink  to="/products" :class="isActiveRoute('/products')? 'active-nav':'non-active-nav'" class="offcanvas-content d-flex align-items-center mb-2 rounded d-flex pt-2 pb-2 ps-2">
                <!-- <div class="icon-hot"></div> -->
                 <font-awesome-icon :icon="['fa','store-alt']" class="text-red fs-14"/>
                <b class="ms-2 fs-14">Products</b>
            </RouterLink>
            <RouterLink to="/profile" :class="isActiveRoute('/profile')? 'active-nav':'non-active-nav'" class="offcanvas-content d-flex align-items-center mb-2 rounded d-flex pt-2 pb-2 ps-2">
                <!-- <div class="icon-hot"></div> -->
                  <!-- <i class="fa fa-user-alt text-red fs-14"></i> -->
                   <font-awesome-icon :icon="['fa', 'user-alt']" class="text-red fs-14"/>
                <b class="ms-2 fs-14">Profile</b>
            </RouterLink>
            <RouterLink to="/wishlist" :class="isActiveRoute('/wishlist')? 'active-nav':'non-active-nav'" class="offcanvas-content d-flex align-items-center mb-2 rounded d-flex pt-2 pb-2 ps-2">
                <!-- <div class="icon-hot"></div> -->
                <!-- <i class="fa fa-heart text-red fs-14"></i> -->
                 <font-awesome-icon :icon="['fa','heart']" class="text-red fs-14"/>
                <span class="ms-2 fs-14">Wishlist</span>
            </RouterLink>
            <RouterLink to="/hotDeals" :class="isActiveRoute('/hotDeals')? 'active-nav':'non-active-nav'" class="offcanvas-content d-flex align-items-center mb-2 rounded d-flex pt-2 pb-2 ps-2">
                <!-- <div class="icon-hot"></div> -->
                <!-- <i class="fa fa-lightbulb text-red fs-14"></i> -->
                <font-awesome-icon :icon="['fa','lightbulb']" class="text-red fs-14" />
                <span class="ms-2 fs-14">Hot deals</span>
            </RouterLink>
            <RouterLink to="/orders" :class="isActiveRoute('/orders')? 'active-nav':'non-active-nav'" class="offcanvas-content d-flex align-items-center mb-2 rounded d-flex pt-2 pb-2 ps-2">
                <!-- <div class="icon-hot"></div> -->
                <!-- <i class="fa fa-box-open text-red fs-14"></i> -->
                 <font-awesome-icon :icon="['fa','box-open']" class="text-red fs-14" />
                <span class="ms-2 fs-14">Orders</span>
            </RouterLink>
            <RouterLink to="/categories" :class="isActiveRoute('/categories')? 'active-nav':'non-active-nav'" class="offcanvas-content d-flex align-items-center mb-2 rounded d-flex pt-2 pb-2 ps-2">
                <!-- <div class="icon-hot"></div> -->
                <!-- <i class="fa fa-cubes text-red fs-14"></i> -->
                <font-awesome-icon :icon="['fa','cubes']" class="text-red fs-14" />
                <span class="ms-2 fs-14">Categories</span>
            </RouterLink>
            <RouterLink to="/laptops" :class="isActiveRoute('/laptops')? 'active-nav':'non-active-nav'" class="offcanvas-content d-flex align-items-center mb-2 rounded d-flex pt-2 pb-2 ps-2">
                <!-- <div class="icon-hot"></div> -->
                <!-- <i class="fa fa-laptop text-red fs-14"></i> -->
                 <font-awesome-icon :icon="['fa','laptop']" class="text-red fs-14" />
                <span class="ms-2 fs-14">Laptops</span>
            </RouterLink>
        </div>
  </div>
</template>


