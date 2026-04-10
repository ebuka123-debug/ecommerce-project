<script setup>
import { useRoute } from 'vue-router';
const isActiveRoute = (routePath) => {
  const route = useRoute();

  return route.path === routePath;
}
</script>
<template>
  <div :class="!isActiveRoute('/account')? 'd-none d-md-block':''" class="col col-md-3 border overflow g-0">
    <div class="w-100 active d-md-none">
        <div class="p-2 ms-2">
            <span class="fs-13">MY SPECS ACCOUNT</span>
        </div>
    </div>
    <div class="w-100 d-none d-md-block">
        <RouterLink to="/account" :class="isActiveRoute('/account')? 'active':'non-active'" class="text-dark d-flex justify-content-between align-items-center w-100 ps-2">
            <div class="d-flex align-items-center">
                <div class="p-2">
                    <!-- <i class="far fa-user"></i> -->
                      <font-awesome-icon :icon="['fa','user']" />
                </div>
                <span class="fs-14 ms-2">My jumia account</span>
            </div>
            <div class="me-3 d-md-none">
                <!--     <font-awesome-icon :icon="['fa','angle-right']"/> -->
                <font-awesome-icon :icon="['fa','angle-right']"/>
            </div>
        </RouterLink>
    </div>
    <div class="w-100">
        <RouterLink to="/wishlist" :class="isActiveRoute('/wishlist')? 'active':'non-active'" class="text-dark d-flex justify-content-between align-items-center w-100 ps-2">
            <div class="d-flex align-items-center">
                <div class="p-2">
                    <!-- <i class="far fa-heart"></i> -->
                      <font-awesome-icon :icon="['fa','heart']" />
                </div>
                <span class="fs-14 ms-2">Wishlist</span>
            </div>
            <div class="me-3 d-md-none">
                <!--     <font-awesome-icon :icon="['fa','angle-right']"/> -->
                      <font-awesome-icon :icon="['fa','angle-right']"/>
            </div>
        </RouterLink>
    </div>
    <div class="w-100">
        <RouterLink to="/orders" :class="isActiveRoute('/orders') || isActiveRoute('/canceledOrders')? 'active':'non-active'" class="text-dark d-flex justify-content-between align-items-center w-100 ps-2">
            <div class="d-flex align-items-center">
                <div class="p-2">
                    <!-- <i class="fa fa-box-open"></i> -->
                      <font-awesome-icon :icon="['fa','box-open']"/>
                </div>
                <span class="fs-14 ms-2">Orders</span>
            </div>
            <div class="me-3 d-md-none">
                <!--     <font-awesome-icon :icon="['fa','angle-right']"/> -->
                  <font-awesome-icon :icon="['fa','angle-right']"/>
            </div>
        </RouterLink>
    </div>
    <div class="w-100">
        <RouterLink to="/inbox" :class="isActiveRoute('/inbox')? 'active':'non-active'" class="text-dark d-flex justify-content-between align-items-center w-100 ps-2">
            <div class="d-flex align-items-center">
                <div class="p-2">
                    <!-- <i class="far fa-envelope"></i> -->
                      <font-awesome-icon :icon="['fa','envelope']"/>
                </div>
                <span class="fs-14 ms-2">Inbox</span>
            </div>
            <div class="me-3 d-md-none">
                  <font-awesome-icon :icon="['fa','angle-right']"/>
            </div>
        </RouterLink>
    </div>

    <div class="w-100 active d-md-none mt-2">
        <div class="p-2 ms-2">
            <span class="fs-13">ACCOUNT SETTINGS</span>
        </div>
    </div>

    <div class="w-100">
        <RouterLink to="/profile" :class="isActiveRoute('/profile') || isActiveRoute('/profile/security')? 'active':'non-active'" class="text-dark d-flex justify-content-between align-items-center w-100 ps-2">
            <div class="d-flex align-items-center">
                <div class="p-2">
                    <!-- <i class="fas fa-user-cog"></i> -->
                      <font-awesome-icon :icon="['fa','user-cog']" />
                </div>
                <span class="fs-14 ms-2">Account Management</span>
            </div>
            <div class="me-3 d-md-none">
                    <font-awesome-icon :icon="['fa','angle-right']"/>
            </div>
        </RouterLink>
    </div>
    <div class="w-100">
        <RouterLink to="/paymentSettings" :class="isActiveRoute('/paymentSettings')? 'active':'non-active'" class="text-dark d-flex justify-content-between align-items-center w-100 ps-2">
            <div class="d-flex align-items-center">
                <div class="p-2">
                    <!-- <i class="far fa fa-credit-card"></i> -->
                      <font-awesome-icon :icon="['fa','credit-card']"/>
                </div>
                <span class="fs-14 ms-2">Payment Settings</span>
            </div>
            <div class="me-3 d-md-none">
                    <font-awesome-icon :icon="['fa','angle-right']"/>
            </div>
        </RouterLink>
    </div>

    <div class="w-100">
        <RouterLink to="/addressBook" :class="isActiveRoute('/addressBook')? 'active':'non-active'" class="text-dark d-flex justify-content-between align-items-center w-100 ps-2">
            <div class="d-flex align-items-center">
                <div class="p-2">
                    <!-- <i class="far fa fa-address-book"></i> -->
                      <font-awesome-icon :icon="['fa','address-book']" />
                </div>
                <span class="fs-14 ms-2">Address Book</span>
            </div>
            <div class="me-3 d-md-none">
                    <font-awesome-icon :icon="['fa','angle-right']"/>
            </div>
        </RouterLink>
    </div>

    <div class="w-100">
        <RouterLink to="/newsLetter" :class="isActiveRoute('/newsLetter')? 'active':'non-active'" class="text-dark d-flex justify-content-between align-items-center w-100 ps-2">
            <div class="d-flex align-items-center">
                <div class="p-2">
                    <!-- <i class="far fa fa-envelope-open"></i> -->
                      <font-awesome-icon :icon="['fa','envelope-open']" />
                </div>
                <span class="fs-14 ms-2">Newsletter Preferences</span>
            </div>
            <div class="me-3 d-md-none">
                    <font-awesome-icon :icon="['fa','angle-right']"/>
            </div>
        </RouterLink>
    </div>

  </div>
</template>

<style scoped>
.active{
    background-color: #D4D4D6;
}

.non-active:hover{
    background-color: #F1F1F2;
}
</style>
