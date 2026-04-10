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
                            <!-- <i class="fa fa-arrow-left text-dark"></i> -->
                             <font-awesome-icon :icon="['fa','arrow-left']" class="text-dark" />
                        </RouterLink>
                    </div>
                    <div class="col border-bottom mt-2">
                        <h1 class="fs-20 ms-4 ms-md-0">
                            Profile
                        </h1>
                    </div>
                </div>

                 <div class="p-2">

                    <RouterLink to="/profile" class="border-bottom hover-text-red border-2 fs-sm-12 border-danger fs-14 text-red p-md-2">
                        PROFILE DEATAILS
                    </RouterLink>
                    <RouterLink to="/profile/security" class="fs-14 ms-3 ms-md-0 hover-text-red text-dark p-md-2 fs-sm-12">
                        SECURITY
                    </RouterLink>
                </div>

                <div class="d-flex">

                <!-- <div style="width: 40px; height: 40px; background-color: #D4586B;"></div>
                <div style="width: 40px; height: 40px; background-color: #c0243b;"></div> -->
                </div>
                <div class="row mt-2 mt-md-0">
                  <div class="col border mt-2 rounded">
                    <form action="" method="post">
                      <div class="row mt-2 mt-md-4 mb-3 ps-xl-3 pe-xl-3">
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
                              <input type="text" class="form-control" id="firstName" placeholder="Enter phone number" value="0902345645" required>
                          </div>
                          <div class="col-xl-6 mb-3 mb-xl-0">
                              <label for="firstName" class="form-label">Email address</label>
                              <input type="email" class="form-control" id="email" placeholder="Enter email address" value="zlatan@gmail.com" required>
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
