<script setup>
// import { RouterLink } from 'vue-router';

// import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
import { useRoute } from 'vue-router';
const isActiveRoute = (routePath) => {
  const route = useRoute();

  return route.path === routePath;
}
</script>
<template>

<!-- <h1>This is the wishlist page</h1> -->
    <!-- <h1>This is the account overview page</h1> -->

       <div class="container mt-md-4 mb-5">


        <div class="row mt-md-4 justify-content-md-evenly">
            <div class="col d-none d-md-block col-md-3 border overflow g-0">
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
                    <RouterLink to="/orders" :class="isActiveRoute('/orders')? 'active':'non-active'" class="text-dark d-flex justify-content-between align-items-center w-100 ps-2">
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
                    <RouterLink to="/profile" :class="isActiveRoute('/profile')? 'active':'non-active'" class="text-dark d-flex justify-content-between align-items-center w-100 ps-2">
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
                    <RouterLink to="" :class="isActiveRoute('/paymentSettings')? 'active':'non-active'" class="text-dark d-flex justify-content-between align-items-center w-100 ps-2">
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

            <div class="col-md-9 col-xl-8 ">
              <div class="row mb-2 mt-3 mt-xl-0">
                  <div class="col-1 border-bottom d-flex align-items-center d-md-none">
                      <RouterLink to="/account" class="p-2">
                          <!-- <i class="fa fa-arrow-left text-dark"></i> -->
                           <font-awesome-icon :icon="['fa','arrow-left']" class="text-dark" />
                      </RouterLink>
                  </div>
                  <div class="col border-bottom mt-2">
                      <h1 class="fs-20 ms-4 ms-md-0">
                          Wishlist
                      </h1>
                  </div>
              </div>


              <div class="row mt-5 mt-md-0">
                  <div class="col border border-md-none p-md-5 text-center">
                      <img class="like-svg" height="100" width="100" src="data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' width='120' height='120'><defs><path id='a' d='M99.962 49.908c0 27.564-22.378 49.908-49.981 49.908C22.377 99.816 0 77.472 0 49.908S22.377 0 49.98 0c27.604 0 49.982 22.344 49.982 49.908'/></defs><g fill='none' fill-rule='evenodd'><mask id='b' fill='white'><use href='%23a'/></mask><use fill='%23F5F5F5' href='%23a'/><g fill-rule='nonzero' mask='url(%23b)'><path fill='%23C0243B' d='M61.496 29A12.01 12.01 0 0 0 51 35.127v35.83c3.38-2.511 22.5-17.287 22.5-30.082C73.5 34.317 68.125 29 61.496 29z'/><path fill='%23D4586B' d='M40.004 29C33.374 29 28 34.317 28 40.875c0 12.794 19.12 27.57 22.5 30.082v-35.83A12.011 12.011 0 0 0 40.004 29z'/></g></g></svg>" />
                      <h2 class="fs-16 mt-4">You haven't liked an item yet</h2>
                      <p class="fs-14">Found something you like? Tap on the heart shaped icon next to the item to add it to your wishlist! All your saved items will appear here.</p>
                      <RouterLink  to="/" class="btn btn-red fs-14 mt-3">
                          Continue shopping
                      </RouterLink>
                  </div>
              </div>
            </div>
        </div>
    </div>
</template>

<style scoped>
.h-150{
    min-height: 150px;
}
.h-46{
    height: 46.67px;
}

.edit{
    width: 30px;
    height: 30px;
    display: flex;
    align-items: center;
    justify-content: center;
    color: var(--primary);
}

.edit:hover{
    background-color: #c51d361c;
    color: var(--primary);
}

.overflow{
    overflow: hidden;
}

#name-display{
    width: 100%;
    height: 10vh;
    background-color: var(--primary);
    color: white;
    /* border: 1px solid red; */
}

#news-letter{
    color: var(--primary)
}

#news-letter:hover{
    background-color: #c51d361c;
    color: var(--primary);
}

.text-red:hover{
    color: var(--primary)
}

.active{
    background-color: #D4D4D6;
}

.non-active:hover{
    background-color: #F1F1F2;
}

</style>
