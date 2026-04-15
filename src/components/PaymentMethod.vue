<script setup></script>
<template>
    <div class="row mt-5">
      <div class="col-xl-8 border">
        <div class="row mt-3 ps-xl-3 pe-xl-3">
            <div class="col border-bottom pb-1">
                <h1 class="fs-19">
                    Payment method
                </h1>
            </div>
        </div>
        <div class="row mt-3 ps-xl-3 pe-xl-3">
            <div class="col">
                <h1 class="fs-15">
                    Pre-pay Now
                </h1>
            </div>
        </div>
        <form action="" class="form-check p-0 p-md-4">

            <div class="row mt-3 border-top pt-2 pb-2 ps-xl-3 pe-xl-3">

                <label for="payment-button" class="row">
                    <div class="col-10 col-md-8 d-flex">

                            <div class="mt-1 ms-4 ms-md-0">
                                <!-- <i class="fa fa-credit-card p-3 p-xl-2 fs-14 text-red bg-ash rounded-circle"></i> -->
                                <input  class="form-check-input bg-ash p-xl-2" type="radio" name="payment-method" id="payment-button">
                            </div>
                            <div class="ms-2">
                                <span class="fs-14">Pay with cards, Bank transfer</span><br>
                                <span class="fs-12">You will be directed to our secure checkout page</span>
                            </div>

                    </div>
                    <div class="col-2 col-md-4 d-flex justify-content-end align-items-md-center">
                        <img class="mt-3 mt-md-0" src="/src/assets/images/secure.png" alt="" style="width: 24px; height: 24px;">
                    </div>
                </label>
            </div>



            <div class="row pt-2 pb-2 ps-xl-3 pe-xl-3">
                <div class="col">
                    <div class="card">
                        <div class="card-body">
                            <span class="fs-14">
                                - Kindly note that you will be redirected to SpecsPay platform to complete your purchase.
                            </span>
                            <div>
                                <span class="fs-12 text-primary">
                                    Details
                                </span>
                            </div>
                        </div>
                        <div class="card-footer">
                            <div class="row">
                                <div class="col d-flex align-items-center">
                                    <span class="fs-14">
                                        Powered by <b class="ms-1">Specs</b>
                                    </span>
                                    <div id="fullstop" class="mt-1 rounded-circle ms-1"></div>
                                </div>
                                <div class="col text-end">
                                    <span class="fs-14">
                                        We accept
                                    </span>
                                    <img src="/src/assets/images/Jumiapay21stjuly.png" style="width: 90.8px; height: 24px;" alt="">
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div class="row mt-5 g-0 p-0">
                <div class="col border-bottom pb-1">
                    <h1 class="fs-15">
                        Payment on delivery
                    </h1>
                </div>
            </div>
            <div class="row form-check mt-3 mb-5">
                <div class="col d-flex align-items-center">
                    <input  class="form-check-input bg-ash p-1 p-md-3 p-xl-2" type="radio" name="payment-method" id="payment-on-delivery-button">
                    <label for="payment-on-delivery-button" class="fs-14 ms-2">
                        <span>Go Cashless: Pay on Delivery via bank transfer</span>
                    </label>
                </div>
            </div>

            <div class="row ps-xl-3 pe-xl-3 d-none d-md-block mt-5">
                <div class="col d-flex justify-content-center justify-content-xl-end">
                    <input type="submit" class="btn btn-red" value="confirm payment method">
                </div>
            </div>
        </form>

      </div>
    </div>
</template>
<style scoped>
/* .bg-ash{
    background-color: #dddddd;
} */

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
