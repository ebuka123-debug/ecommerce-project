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

                <div class="w-100 active">
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
                            Edit Address
                        </h1>
                    </div>
                </div>

                <div class="d-flex">

                <!-- <div style="width: 40px; height: 40px; background-color: #D4586B;"></div>
                <div style="width: 40px; height: 40px; background-color: #c0243b;"></div> -->
                </div>

                <form action="" method="post">
                    <div class="row mt-2 mb-3 ps-xl-3 pe-xl-3">
                        <div class="col-xl-6 mb-3 mb-xl-0">
                            <label for="firstName" class="form-label">First name</label>
                            <input type="text" class="form-control" id="firstName" placeholder="Enter first name" value="Zlatan ibrahimovic" required>
                        </div>
                        <div class="col-xl-6">
                            <label for="firstName" class="form-label">Last name</label>
                            <input type="text" class="form-control" id="firstName" placeholder="Enter last name" value="lion" required>
                        </div>
                    </div>
                    <div class="row mt-2 mb-3 ps-xl-3 pe-xl-3">
                        <div class="col-xl-6 mb-3 mb-xl-0">
                            <label for="firstName" class="form-label">Phone number</label>
                            <input type="text" class="form-control" id="firstName" placeholder="ENter phone number" value="0902345645" required>
                        </div>
                        <div class="col-xl-6">
                            <label for="firstName" class="form-label">Additional Phone number</label>
                            <input type="text" class="form-control" id="firstName" placeholder="Enter your Additional Phone number" value="" required>
                        </div>
                    </div>
                    <div class="row ps-xl-3 pe-xl-3 mb-3 mb-xl-0">
                        <div class="col">

                            <label for="firstName" class="form-label">Delivery Address</label>
                            <input type="text" class="form-control" id="firstName" placeholder="Enter address" value="9 Houston Texas" required>

                        </div>
                    </div>
                    <div class="row mt-2 mb-3 ps-xl-3 pe-xl-3">
                        <div class="col-xl-6 mb-3 mb-xl-0">
                            <label for="firstName" class="form-label">State</label>
                            <select class="form-select" id="country" required>

                                <option value="anambra">Anambra</option>
                                <option value="enugu">Enugu</option>
                                <option value="abia">Abia</option>
                            </select>
                        </div>
                        <div class="col-xl-6">
                            <label for="firstName" class="form-label">City</label>
                            <select class="form-select" id="country" required>
                            <!-- This slect will resonate with the city that is state that is clicked (once a state is clicked this selsct will automatically bring out options of cities related to the state clicked) -->

                                <option value="aguluzigbo">aguluzigbo</option>
                            </select>
                        </div>
                    </div>

                    <div class="row fixed-at-bottom ps-xl-3 pe-xl-3 mb-xl-3 mb-xl-0 d-md-flex justify-content-center bg-white mt-md-3 mt-xl-5 pt-3 pb-3 pt-xl-0 pb-xl-0">
                        <div class="col d-flex justify-content-center justify-content-xl-end">
                            <input type="submit" class="btn btn-red w-sm-75 fs-14" value="Save">
                        </div>
                    </div>
                </form>
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
