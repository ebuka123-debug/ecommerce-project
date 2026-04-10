<script setup>
// import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
import AccountOverviewSidebar from '@/components/AccountOverviewSidebar.vue';

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
            <AccountOverviewSidebar />
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



</style>
