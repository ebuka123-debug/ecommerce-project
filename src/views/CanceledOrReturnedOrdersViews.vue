<script setup>
// import { RouterLink } from 'vue-router';
import AccountOverviewSidebar from '@/components/AccountOverviewSidebar.vue';

// import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
</script>
<template>

<!-- <h1>This is the wishlist page</h1> -->
    <!-- <h1>This is the account overview page</h1> -->

       <div class="container mt-md-4 mb-5">
        <div class="row mt-md-4 justify-content-md-evenly">
           <AccountOverviewSidebar />

              <div class="col-md-9 col-xl-8 ">
                <div class="row mb-2 mt-3 mt-xl-0">
                    <div class="col-1 border-bottom d-flex align-items-center d-md-none">
                        <RouterLink to="/account" class="p-2">
                            <font-awesome-icon :icon="['fa','arrow-left']" class="text-dark"/>
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

                    <RouterLink to="/orders" class="hover-text-red border-2 fs-sm-12 fs-14 text-dark p-md-2">
                        ONGOING/DELIVERED (0)
                    </RouterLink>
                    <RouterLink to="/canceledOrders" class="border-bottom border-danger fs-14 ms-3 ms-md-0 hover-text-red text-red p-md-2 fs-sm-12">
                        CANCELED/RETURNED (4)
                    </RouterLink>
                </div>
                <div class="row mt-3 mt-md-0">
                  <div class="col mt-xl-4">
                      <div class="row border mb-3 p-1 p-md-2">
                          <div class="col-3 col-xl-2 gx-0 gx-md-0">

                              <div class="img-box-container">
                                  <img src="../assets/images/headphone.jpg" class="" alt="">
                              </div>
                          </div>
                          <div class="col-9 col-xl-8">
                              <span class="fs-16">
                                  Galaxy z fold 7 phone case
                              </span> <br>
                              <span class="fs-14">Order 1957496312</span>
                              <div class="p-1 ps-2 pe-2 mt-3 mt-md-4 mb-1 rounded bg-secondary text-white fs-10 fit-content">
                                  <span>CANCELED-PAYMENT UNSUCCESSFUL</span>
                              </div>
                              <span class="">On Saturday 29/11/25</span>
                          </div>
                          <div class="col-2 d-none d-xl-block">
                              <a href="" id="news-letter" class="p-1 ps-2 pe-2 fs-15 text-red rounded">See details</a>
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

.hover-text-red:hover{
    color: var(--primary) !important;
}

.img-box-container{
    width: 100%;
    height: 120px;
    /* border: 1px solid red; */
}

.img-box-container img{
    width: 100%;
    height: 100%;
    object-fit: cover;
}
</style>
