<script setup>
import AccountOverviewSidebar from '@/components/AccountOverviewSidebar.vue';
</script>
<template>

      <div class="container mt-md-4 mb-5">
        <div class="row mt-md-4 justify-content-md-evenly">
          <AccountOverviewSidebar />

             <div class="col-md-9 col-xl-8 ">
                <div class="row mb-2 mt-3 mt-xl-0">
                    <div class="col-1 border-bottom d-flex align-items-center d-md-none">
                        <RouterLink to="/account" class="p-2">
                            <!-- <i class="fa fa-arrow-left text-dark"></i> -->
                             <font-awesome-icon :icon="['fa', 'arrow-left']" class="text-dark"/>
                        </RouterLink>
                    </div>
                    <div class="col border-bottom mt-2">
                        <h1 class="fs-20 ms-4 ms-md-0">
                            Newsletter Preferences
                        </h1>
                    </div>
                </div>



                <div class="row mt-5 mt-xl-3">
                    <div class="col">
                        <div class="card">
                           <div class="card-header bg-white d-flex align-items-center justify-content-between">
                                <span class="fs-16">
                                   Define your preference
                                </span>
                           </div>
                           <div class="card-body h-150">
                                <form action="" method="post">
                                    <div class="form-check mb-2">
                                        <input class="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault1">
                                        <label class="form-check-label fs-15" for="flexRadioDefault1">
                                            I want to recieve daily newsletters
                                        </label>
                                    </div>
                                    <div class="form-check mb-2">
                                        <input class="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault2">
                                        <label class="form-check-label fs-15" for="flexRadioDefault2">
                                            I don't want to receive daily newsletters
                                        </label>
                                    </div>
                                    <div class="form-check mb-1">
                                        <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault">
                                        <label class="form-check-label fs-15" for="flexCheckDefault">
                                            I agree to Jumia’s Privacy and Cookie Policy. You can unsubscribe from newsletters at any time.
                                        </label>
                                    </div>
                                    <div class="form-check fs-14 ms-1">
                                        <a href="" class="text-red">I accept the legal terms</a>
                                    </div>

                                    <div class="row d-flex fixed-at-sm-bottom justify-content-center bg-white mt-3 pt-3 pb-3 pt-md-0 pb-md-0">
                                        <div class="col-12 d-flex justify-content-center">
                                            <input class="btn btn-red w-100 mt-xl-3 w-must-75" type="submit" value="save">

                                        </div>
                                    </div>

                                </form>
                                <!-- <span class="fs-16">Your default shipping address:</span> <br>
                                <div class="mt-2">
                                    <span>Manage your email communications to stay updated with the latest news and offers.</span>
                                </div>
                                <div class="mt-4">
                                    <a href="" class="p-2 rounded" id="news-letter">
                                        Edit Newsletter  preferences
                                    </a>
                                </div> -->
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

@media (max-width: 1199px){

    .card {
        height: auto !important;
        min-height: 0 !important;
    }

    .card > .card-body {
        flex: 0 0 auto !important;
        height: auto !important;
    }
}

</style>
