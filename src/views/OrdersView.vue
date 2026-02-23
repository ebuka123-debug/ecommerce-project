<script setup>
// import { RouterLink } from 'vue-router';

// import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
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
                    <RouterLink to="/account" class="text-dark d-flex justify-content-between align-items-center non-active w-100 ps-2">
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
                <div class="w-100 non-active">
                    <RouterLink to="/wishlist" class="text-dark d-flex justify-content-between align-items-center w-100 ps-2">
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
                <div class="w-100 active">
                    <RouterLink to="/orders" class="text-dark d-flex justify-content-between align-items-center w-100 ps-2">
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
                <div class="w-100 non-active">
                    <RouterLink to="/inbox" class="text-dark d-flex justify-content-between align-items-center w-100 ps-2">
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

                <div class="w-100 non-active">
                    <RouterLink to="/profile" class="text-dark d-flex justify-content-between align-items-center w-100 ps-2">
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
                <div class="w-100 non-active">
                    <RouterLink to="" class="text-dark d-flex justify-content-between align-items-center w-100 ps-2">
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

                <div class="w-100 non-active">
                    <RouterLink to="/addressBook" class="text-dark d-flex justify-content-between align-items-center w-100 ps-2">
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

                <div class="w-100 non-active">
                    <RouterLink to="/newsLetter" class="text-dark d-flex justify-content-between align-items-center w-100 ps-2">
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
                            Orders
                        </h1>
                    </div>
                </div>

                <div class="d-flex">

                <!-- <div style="width: 40px; height: 40px; background-color: #D4586B;"></div>
                <div style="width: 40px; height: 40px; background-color: #c0243b;"></div> -->
                </div>
                <div class="p-2">

                    <RouterLink to="/orders" class="border-bottom hover-text-red border-2 fs-sm-12 border-danger fs-14 text-red p-md-2">
                        ONGOING/DELIVERED (0)
                    </RouterLink>
                    <RouterLink to="/canceledOrders" class="fs-14 ms-3 ms-md-0 hover-text-red text-dark p-md-2 fs-sm-12">
                        CANCELED/RETURNED (4)
                    </RouterLink>
                </div>
                <div class="row mt-5 mt-md-0">
                    <div class="col border border-md-none p-md-5 text-center">
                         <img class="like-svg" height="100" width="100" src="data:image/svg+xml,<svg width='100' height='100' xmlns='http://www.w3.org/2000/svg'><circle fill='%23F5F5F5' cx='50' cy='50' r='50'/><path d='M86.7 55.16L66.43 68.23l-.01-.01a7.63 7.63 0 00-8.23-1.7L46.8 48.66l25.32-16.34a2.52 2.52 0 013.5.77l11.84 18.56a2.56 2.56 0 01-.77 3.51z' fill='%23D4586B'/><path d='M14.56 32.57c.09.14.28.18.42.09l7.21-4.68a.3.3 0 00.09-.42l-1.65-2.6a.3.3 0 00-.2-.14.3.3 0 00-.22.04L13 29.54a.3.3 0 00-.14.19c-.01.08 0 .16.04.23l1.66 2.6z' fill='%23535353'/><path d='M31.24 25.2L57.86 66.5c-1 .4-1.9.99-2.64 1.74L28.6 26.97a2.87 2.87 0 00-3.99-.92l-2.16 1.37-1.7-2.65 2.15-1.38a6.05 6.05 0 018.33 1.81zM84.7 58.1c0 1.09-.54 2.1-1.44 2.68l-15 9.82a7.64 7.64 0 00-1.72-2.65l17.67-11.56c.32.51.49 1.1.49 1.71z' fill='%23C9C9C9'/><path d='M67.6 71.4a7.34 7.34 0 00-1.67-2.55l-.02-.01a7.5 7.5 0 00-8.05-1.66l-.02.01a7.52 7.52 0 00-3.17 11.53A7.5 7.5 0 0067.6 71.4zm-5.48 5.08a2.77 2.77 0 11-3-4.66 2.77 2.77 0 013 4.66z' fill='%23535353'/><path fill='%23C0243B' d='M66.54 35.84L46.9 48.5 36.54 32.27l.02-.01L56.8 19.28l3.02 4.6-.63.45z'/><path fill='%23D4586B' d='M59.44 24.81l1.22 1.84-19.73 12.37-1.23-1.83z'/><path fill='%23F5F5F5' d='M53.12 32.87l-3.45 2.2-5.23-8.05 3.44-2.2z'/></svg>" />

                        <h2 class="fs-16 mt-4">You have placed no orders yet!</h2>
                        <p class="fs-14">All your orders will be saved here for you to access their state anytime.</p>
                        <RouterLink to="/"  class="btn btn-red fs-14 mt-3">
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

.hover-text-red:hover{
    color: var(--primary) !important;
}
</style>
