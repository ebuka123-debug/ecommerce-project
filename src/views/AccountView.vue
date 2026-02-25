<script setup>
// import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
import { useRoute } from 'vue-router';
const isActiveRoute = (routePath) => {
  const route = useRoute();

  return route.path === routePath;
}
</script>
<template>
  <div id="name-display" class="d-flex d-md-none flex-column justify-content-center ">
    <div>
        <b class="p-3">
            Welcome, Firstname
        </b>
    </div>

    <div>
        <span class="p-3 fs-14">
            whatever@gmail.com
        </span>
    </div>

  </div>
    <!-- <h1>This is the account overview page</h1> -->

       <div class="container mt-md-4 mb-5">


        <div class="row mt-md-4 justify-content-md-evenly">
            <div class="col col-md-3 border overflow g-0">
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
            <div class="col-md-9 col-xl-8 d-none d-md-block">
                <div class="row mb-2">
                    <div class="col border-bottom mt-2">
                        <h1 class="fs-20">
                            Account Overview
                        </h1>
                    </div>
                </div>

                <div class="row mt-4">
                    <div class="col-xl-6 mb-3">
                        <div class="card">
                           <div class="card-header h-46 d-flex align-items-center bg-white">
                                <span class="fs-14">
                                    ACCOUNT DETAILS
                                </span>
                           </div>
                           <div class="card-body h-150">
                                <span>Zlatan Ibrahimovic</span> <br>
                                <div class="mt-2">
                                    <span class="text-primary fs-14">
                                        zlatttan23@gmail.com
                                    </span>
                                </div>
                           </div>
                        </div>
                    </div>
                    <div class="col-xl-6">
                        <div class="card">
                           <div class="card-header bg-white d-flex align-items-center justify-content-between">
                                <div>
                                    <span class="fs-14">
                                        ADDRESS BOOK
                                    </span>
                                </div>
                                <RouterLink to="/addressBook" class="edit rounded-circle">
                                    <!-- <i class="fa fa-pencil-alt"></i> -->
                                     <font-awesome-icon :icon="['fa','pencil-alt']"/>
                                </RouterLink>
                           </div>
                           <div class="card-body h-150">
                                <span class="fs-16">Your default shipping address:</span> <br>
                                <div class="fs-14 text-ash mt-2">
                                    <span>Zlatan ibrahimovic</span><br>
                                    <span>8 Texas Street</span><br>
                                    <span>Alabama, USA</span><br>
                                    <span>+234 7045666</span>
                                </div>
                           </div>
                        </div>
                    </div>
                </div>

                <div class="row mt-3 mt-xl-0">
                    <div class="col">
                        <div class="card">
                           <div class="card-header bg-white d-flex align-items-center justify-content-between">
                                <span class="fs-14">
                                   NEWS LETTER PREFERENCES
                                </span>
                           </div>
                           <div class="card-body h-150">
                                <span class="fs-16">Your default shipping address:</span> <br>
                                <div class="mt-2">
                                    <span>Manage your email communications to stay updated with the latest news and offers.</span>
                                </div>
                                <div class="mt-4">
                                    <a href="" class="p-2 rounded" id="news-letter">
                                        Edit Newsletter  preferences
                                    </a>
                                </div>
                           </div>
                        </div>
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
