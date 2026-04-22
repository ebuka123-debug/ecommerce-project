<script setup>
import { ref, watch } from 'vue';
import { useCartStore } from '@/stores/cart';
import CartSummaryConfirmDetailsCard from '@/components/CartSummaryConfirmDetailsCard.vue';
import DeliveryFormComp from '@/components/DeliveryForm.vue';
import PaymentMethodComp from '@/components/PaymentMethod.vue';

//Cart data
const cartStore = useCartStore();

const showModal = ref(false);

const selectPickupStationClicked = () => {
  showModal.value = true
}

watch(showModal, (val) => {
  document.body.style.overflow = val ? 'hidden' : ''
})
</script>
<template>
  <div  :class="['my-modal', { active: showModal }]" @click.self="showModal = false">
    <div class="modal-content rounded">
      <div class="row ms-3 me-3 mt-4">
          <div class="col-8 col-xl-6">
              <h2 class="modal-title">
                  Pickup Station
              </h2>
          </div>
          <div class="col-4 col-xl-6 d-flex justify-content-end">
              <button type="button" class="btn-close"  @click="showModal = false"></button>
          </div>
      </div>
      <div class="row ms-3 g-0 me-3 mt-3">
        <div class="col border g-0">
          <div class="pickupSections">
            <div class="pick-up mb-3 border p-2 rounded">
              <div class="form-check mt-2">
                  <input  class="form-check-input" type="radio" name="pickup-station-name" id="radio-button1">
                  <label for="radio-button1">
                      <div class="d-flex align-items-center">
                          <b class="fs-6">Specs</b>
                          <div id="fullstop" class="rounded-circle ms-1 mt-1"></div>
                          <div class="ms-2 fs-16">
                              <span>
                                  Pickup station agbor
                              </span>

                                  <b id="shipping-price" class="fs-16 pt-1 pb-1 ps-2 pe-2 ms-1">$2,000</b>

                          </div>
                      </div>

                  </label>
                  <div class="mt-1">
                      <span class="text-ash fs-14">
                          Shop 104 LJO plaza opposite GUO transport company <br>
                      </span>
                      <span class="text-ash fs-14">
                          <font-awesome-icon :icon="['fa','paper-plane']" class="me-1" />
                          Close to Guo transport <br>
                      </span>
                      <span class="text-ash fs-14">
                              <font-awesome-icon :icon="['fa','calendar-alt']" class="me-1" />
                          Opening hours Mon-Fri 8am-5pm; Sat 9am-5pm <br>
                      </span>
                  </div>
              </div>
            </div>
            <div class="pick-up mb-3 border p-2 rounded">
              <div class="form-check mt-2">
                  <input  class="form-check-input" type="radio" name="pickup-station-name" id="radio-button2">
                  <label for="radio-button2">
                      <div class="d-flex align-items-center">
                          <b class="fs-6">Specs</b>
                          <div id="fullstop" class="rounded-circle ms-1 mt-1"></div>
                          <div class="ms-2 fs-16">
                              <span>
                                  Pickup station agbor
                              </span>

                                  <b id="shipping-price" class="fs-16 pt-1 pb-1 ps-2 pe-2 ms-1">$2,000</b>

                          </div>
                      </div>

                  </label>
                  <div class="mt-1">
                      <span class="text-ash fs-14">
                          Shop 104 LJO plaza opposite GUO transport company <br>
                      </span>
                      <span class="text-ash fs-14">
                          <font-awesome-icon :icon="['fa','paper-plane']" class="me-1" />
                          Close to Guo transport <br>
                      </span>
                      <span class="text-ash fs-14">
                          <font-awesome-icon :icon="['fa','calendar-alt']" class="me-1" />
                          Opening hours Mon-Fri 8am-5pm; Sat 9am-5pm <br>
                      </span>
                  </div>
              </div>
            </div>
            <div class="pick-up mb-3 border p-2 rounded">
              <div class="form-check mt-2">
                  <input  class="form-check-input" type="radio" name="pickup-station-name" id="radio-button3">
                  <label for="radio-button3">
                      <div class="d-flex align-items-center">
                          <b class="fs-6">Specs</b>
                          <div id="fullstop" class="rounded-circle ms-1 mt-1"></div>
                          <div class="ms-2 fs-16">
                              <span>
                                  Pickup station agbor
                              </span>

                                  <b id="shipping-price" class="fs-16 pt-1 pb-1 ps-2 pe-2 ms-1">$2,000</b>

                          </div>
                      </div>

                  </label>
                  <div class="mt-1">
                      <span class="text-ash fs-14">
                          Shop 104 LJO plaza opposite GUO transport company <br>
                      </span>
                      <span class="text-ash fs-14">
                          <font-awesome-icon :icon="['fa','paper-plane']" class="me-1" />
                          Close to Guo transport <br>
                      </span>
                      <span class="text-ash fs-14">
                          <font-awesome-icon :icon="['fa','calendar-alt']" class="me-1" />
                          Opening hours Mon-Fri 8am-5pm; Sat 9am-5pm <br>
                      </span>
                  </div>
              </div>
            </div>
          </div>


        </div>
      </div>
      <div class="row ms-3 me-3 mt-3 mb-3">
          <div class="col">
            <div class="btn btn-red w-100 text-center">
              <span>Select Pickup Station</span>
            </div>
          </div>
      </div>
    </div>
  </div>
   <div class="container mt-5 mb-5">
      <div class="row mb-5 align-items-start">
        <div class="col-xl-4 mb-4 order-xl-last">
          <div class="row mt-3">
            <div class="col">
                <CartSummaryConfirmDetailsCard :quantity="cartStore.totalItems" :totalPrice="cartStore.totalPriceOfItems"/>
            </div>
          </div>
        </div>
        <div class="col-xl-8 border">
          <div class="row mt-3 ps-xl-3 pe-xl-3">
            <div class="col border-bottom pb-1">
                <h1 class="fs-19">
                    Customer Information
                </h1>
            </div>
          </div>

          <DeliveryFormComp @select-pickup-station = "selectPickupStationClicked"/>


        </div>
      </div>
      <PaymentMethodComp />
    </div>
</template>
<style scoped>

.bg-black{
    background-color: var(--tetiary);
}


#shipping-price{
    background-color: #c51d361c;
    color: #C51D36;
}

.pickupSections{
  height: 420px;
  overflow-y: auto;
}

.my-modal{
    width: 100%;
    height: 100%;
    inset: 0;
    background-color: rgba(0, 0, 0, 0.6);
    backdrop-filter: blur(0.5px);
    position: fixed;
    z-index: 9999;
    display: none;
    overflow-x: hidden;
    overflow-y: auto;
    animation: fadeIn 0.3s ease;
}
.modal-title {
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, sans-serif;
    font-size: 24px;
    font-weight: 700;
    color: #333;
}

.modal-description{
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, sans-serif;
    color: #666;
    line-height: 1.6;
}
.my-modal.active {
  display: flex;
    align-items: center;
    justify-content: center;

}
.modal-content{
    width: 40%;
    min-height: 30%;
    background-color: white;
    animation: slideUp 0.3s ease;
}


@keyframes fadeIn {
    from {
        opacity: 0;
    }
    to {
        opacity: 1;
    }
}

@keyframes slideUp {
    from {
        transform: translateY(30px);
        opacity: 0;
    }
    to {
        transform: translateY(0);
        opacity: 1;
    }
}

@media (max-width: 1199px) {
    .image-box{
        width: 100% !important;
    }

    .modal-content{
        width: 100%;
        max-height: 70%;
        overflow-y: scroll;
    }

    .h-sm{
        height: 20vh;
    }

    .specs-nav{
        height: 8vh;
    }

    #search{
        width: 80%;
    }

    form {
        display: block !important;
    }

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
