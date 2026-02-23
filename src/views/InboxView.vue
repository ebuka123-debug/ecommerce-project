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
                <div class="w-100 non-active">
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
                <div class="w-100 active">
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
                            Inbox Messages
                        </h1>
                    </div>
                </div>


                <div class="row mt-5 mt-md-0">
                    <div class="col border border-md-none p-md-5 text-center">
                        <img class="like-svg" height="100" width="100" src="data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' width='100' height='100'><circle cx='50' cy='50' r='50' fill='%23F5F5F5'/><g transform='translate(20 18.6)'><path fill='%23C0243B' fill-rule='nonzero' d='M58.2 25l-21 16H21L0 25'/><path fill='%23D4586B' fill-rule='nonzero' d='M58.2 57H0l21-16h16.1z'/><path fill='%23E56A79' fill-rule='nonzero' d='M21 41L0 57V25l6 4.5 4.4 3.4 2 1.4.4.4.6.4 1.2 1 .6.4 1.5 1.1.6.5.3.3 2 1.5h.2zm37.2-16v32l-21-16 1.2-1h.1l2-1.6.3-.3.7-.5 1.4-1 .7-.5 1.2-1 .6-.4.4-.4 1.5-1.1 4.8-3.6z'/><path fill='%239E1F32' d='M0 25L26.7 1a3.5 3.5 0 014.7 0l26.8 24H0z'/><circle cx='57.9' cy='25.3' r='11.4' fill='%23C9C9C9' fill-rule='nonzero' stroke='%23FFF' stroke-width='2'/><path fill='%23FFF' fill-rule='nonzero' d='M61.3 26c0 1.4-.3 2.5-.9 3.3-.6.8-1.5 1.1-2.6 1.2-1.1 0-2-.4-2.6-1.2-.6-.7-1-1.8-1-3.2v-2c0-1.4.4-2.5 1-3.2.6-.8 1.4-1.2 2.6-1.2 1.1 0 2 .4 2.6 1.2.6.7.9 1.8 1 3.2V26zm-2-2.1c0-.9-.2-1.5-.4-2-.2-.3-.6-.5-1.1-.5-.5 0-.9.2-1 .6-.3.3-.4 1-.5 1.7v2.6c0 .8.2 1.4.4 1.9.2 .4.6 .6 1.1 .6 .5 0 .9-.2 1-.6 .3-.4.4-1 .4-1.8v-2.5z'/></g></svg>" />

                        <h2 class="fs-16 mt-4">You don't have any messages</h2>
                        <p class="fs-14">Here you will be able to see all the messages that we send you. Stay tuned</p>
                        <RouterLink to="" class="btn btn-red fs-14 mt-3">
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
