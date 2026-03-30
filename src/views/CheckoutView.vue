<script setup>
import { ref } from 'vue';
import CartSummaryConfirmDetailsCard from '@/components/CartSummaryConfirmDetailsCard.vue';
import DeliveryFormComp from '@/components/DeliveryFormComp.vue';

import { totalPriceOfItems, getTotalItemCount} from '@/composables/cartMethods';

//Cart data
const cart = ref(JSON.parse(localStorage.getItem("cart")));
</script>
<template>
   <div class="container mt-5 mb-5">
      <div class="row mb-5 align-items-start">
        <div class="col-xl-4 mb-4 order-xl-last">
          <div class="row mt-3">
            <div class="col">
                <CartSummaryConfirmDetailsCard :quantity="getTotalItemCount(cart)" :totalPrice="totalPriceOfItems(cart)"/>
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

          <DeliveryFormComp />

        </div>
      </div>
    </div>
</template>
<style scoped>


.bg-black{
    background-color: var(--tetiary);
}







#my-modal{
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.138);
    position: fixed;
    z-index: 1111;
    overflow-x: hidden;
    overflow-y: auto;
}

.modal-content{
    position: relative;
    width: 40%;
    max-height: 80%;
    background-color: white;
    overflow-y: scroll;
}

@media (max-width: 1199px) {
    .image-box{
        width: 100% !important;
    }

    .modal-content{
        width: 100%;
        max-height: 70%;
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
