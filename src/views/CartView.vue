<script setup>
import { ref } from 'vue';
import EmptyCartComp from '@/components/EmptyCartComp.vue';

//Cart data
const cart = ref(JSON.parse(localStorage.getItem("cart")));

console.log(cart.value);

</script>

<template>
  <div v-if="cart !== null && cart.length" id="name-display" class="d-flex name-display d-md-none flex-column justify-content-center ">
    <div>
        <b class="p-3">
            <!-- Welcome, Firstname -->
             Welcome, John Doe
        </b>
    </div>

    <div class="">
      <span class="p-3 fs-14 total-cart-item-sm border border-danger">
        You have 20 items in your cart
      </span>
    </div>

  </div>

  <div class="container mt-md-4">

    <div v-if="cart !== null && cart.length" class="row mb-3 cart-items-section">
      <div class="col-xl-9 mt-2 cart-item-section-column">
        <div class="row">
          <div id="product-number-in-cart" class="col border-2 border-bottom mt-2">
            You have 1 item(s) in cart
          </div>
        </div>
        <div class="row mt-4 mt-xl-3 mb-3 pt-md-2 border-4 border-bottom pb-2" data-product-id="">
          <div class="col-4 col-md-3 col-xl-2 gx-2 gx-md-4">
              <div class="image-box ms-2">
                  <img src="">
              </div>
          </div>

          <div class="col-8 col-md-9 cart-item col-xl-10">
              <div class="row mt-2 mt-xl-0">
                  <div class="col-12 col-xl-9">
                      <div>
                          <h3 class="fs-14">
                              Eyeshadow Palette with Mirror
                          </h3>
                      </div>
                      <div class="d-flex w-100 d-flex">

                          <div class="w-100 d-flex align-items-center">
                              <div class="me-2 fs-17">
                                  <b>
                                      $19.99
                                  </b>
                              </div>

                              <div>
                                  <del class="text-ash fs-14">
                                      $24.43
                                  </del>
                              </div>
                              <div id="discount" class="p-1 ms-3">
                                  -18.19%
                              </div>
                          </div>
                      </div>

                  </div>

              </div>
              <div class="row">
                  <div class="col">
                      <span class="text-ash fs-14">
                          in stock
                      </span>
                      <div class="d-flex align-items-center">
                          <div class="row w-100">
                              <div class="col d-flex align-items-center">
                                  <b class="fs-6">
                                      Specs
                                  </b>

                                  <div id="fullstop" class="rounded-circle ms-1 mt-1"></div>
                              </div>

                          </div>


                      </div>
                  </div>
              </div>

          </div>

          <div class="row mt-2">
            <div class="col mt-2">
                <div class="text-red btn btn-sm rounded-0 p-2 ms-md-2 remove-item border">
                    <i class="fa fa-trash"></i>
                    Remove
                </div>
            </div>
            <div class="col d-flex align-items-center justify-content-end">
                <div class="btn btn-sm btn-red minus-item-btn">
                    <font-awesome-icon :icon="['fa', 'fa-minus']"/>
                </div>
                <div class="ms-4 product-amount">
                    <span>
                        1
                    </span>
                </div>
                <div class="btn btn-sm btn-red ms-4 add-item-btn">
                    <font-awesome-icon :icon="['fa', 'fa-plus']"/>
                </div>
            </div>
          </div>
        </div>

      </div>

      <div class="mt-md-3 mt-xl-0 col-xl-3 gx-0 gx-md-4 mb-md-3  order-first order-xl-0">
        <div class="card">
          <div class="card-header fs-16">
              CART SUMMARY
          </div>
          <div class="card-body">
            <div class="d-flex mb-2 justify-content-between">
              <div class="d-flex align-items-center">
                  <span class="fs-14 cart-summary">
                      Items total (4)
                  </span>
              </div>
              <div>
                  <span class="fs-15 cart-summary-total">
                      $1000
                  </span>
              </div>
            </div>
            <div class="d-flex justify-content-between">
                <div class="d-flex align-items-center">
                    <span class="fs-14">
                        Subtotal
                    </span>
                </div>
                <div>
                    <b class="fs-15 cart-summary-total">
                        $1000,000
                    </b>
                </div>
            </div>

            <div class="row d-flex bg-sm-none fixed-at-bottom justify-content-center bg-white mt-3 pt-3 pb-3 pt-md-4 pb-md-4 pt-xl-0 pb-xl-0">
              <div class="col-12 d-flex justify-content-center">
                  <a href="../html/checkout.html" class="btn btn-red checkout-btn w-100 w-sm-75 fs-14 shadow-sm">
                      Checkout ($1000,000)
                  </a>
              </div>
            </div>

          </div>
        </div>
      </div>
    </div>

   <EmptyCartComp v-else />
  </div>
</template>

<style scoped>

.silver{
    background-color: #D4D4D6;
}

#name-display{
    width: 100%;
    height: 10vh;
    background-color: var(--primary);
    color: white;
    /* border: 1px solid red; */
}

/* .text-red{
    color:var(--primary);
}

.text-ash{
    color: #828A91;
}

.text-white{
    color: var(--other);
} */

.remove-item:hover{
    background-color: #c51d364d;
    color: var(--primary)
}



.image-box{
    width: 100px;
    height: 100%;
    /* border: 1px solid red; */
}

.image-box img{
    width: 100%;
    height: 100%;
    object-fit: cover;
}




@media (max-width: 1024px){
    .image-box{
        width: 100% !important;
    }

    .modal-content{
        width: 100%;
        height: auto;
    }
    .h-sm{
        height: 20vh;
    }

    /* .bg-sm-none{
        background-color: #F8F9FA !important;

    } */


}
/* .active-link{
    color: var(--primary) !important;
    border-bottom: 2px solid var(--primary);
} */

</style>
