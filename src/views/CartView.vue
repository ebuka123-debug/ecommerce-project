<script setup>
import { ref, watch } from 'vue';
import EmptyCartComp from '@/components/EmptyCart.vue';
import CartCardDetailComp from '@/components/CartCardDetail.vue';
import ConfirmModal from '@/components/ConfirmModal.vue';
import { totalPriceOfItems, getTotalItemCount} from '@/composables/cartMethods';

//Cart data
const cart = ref(JSON.parse(localStorage.getItem("cart")));

const showModal = ref(false)

const selectedProduct = ref(null);

//when the remove button is clicked
const handleRemoveClicked = (product) => {
  selectedProduct.value = product
  showModal.value = true
}

const confirmRemove = () => {
  cart.value = cart.value.filter(item => item.id !== selectedProduct.value.id)
  localStorage.setItem('cart', JSON.stringify(cart.value))
  showModal.value = false
}

</script>

<template>
  <ConfirmModal
    v-model="showModal"
    title="Remove From Cart"
    description="Do you really want to remove this item from cart?"
    confirm-label="Remove Item"
    :confirm-icon="['fa', 'trash']"
    @confirm="confirmRemove"
  />
  <div v-if="cart !== null && cart.length" id="name-display" class="d-flex name-display d-md-none flex-column justify-content-center ">
    <div>
        <b class="p-3">
            <!-- Welcome, Firstname -->
             Welcome, John Doe
        </b>
    </div>

    <div class="">
      <span class="p-3 fs-14 total-cart-item-sm">
        You have {{ getTotalItemCount(cart)}} items in your cart
      </span>
    </div>

  </div>

  <div class="container mt-md-4">

    <div v-if="cart !== null && cart.length" class="row mb-3 cart-items-section">

      <div class="col-xl-9 mt-2 cart-item-section-column">
        <div class="row">
          <div id="product-number-in-cart" class="col border-2 border-bottom mt-2">
            You have {{ getTotalItemCount(cart)}} item(s) in cart
            <!-- {{ cart }} -->
          </div>
        </div>

        <CartCardDetailComp
        :product="value" v-for="(value, product) in cart"
        :key="product"
         @remove-clicked="handleRemoveClicked"
        />

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
                      Items total ({{ getTotalItemCount(cart) }})
                  </span>
              </div>
              <div>
                  <span class="fs-15 cart-summary-total">
                      ${{ totalPriceOfItems(cart) }}
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
                        ${{ totalPriceOfItems(cart) }}
                    </b>
                </div>
            </div>

            <div class="row d-flex bg-sm-none fixed-at-bottom justify-content-center bg-white mt-3 pt-3 pb-3 pt-md-4 pb-md-4 pt-xl-0 pb-xl-0">
              <div class="col-12 d-flex justify-content-center">
                  <RouterLink to="checkout" class="btn btn-red checkout-btn w-100 w-sm-75 fs-14 shadow-sm">
                      Checkout (${{ totalPriceOfItems(cart) }})
                  </RouterLink>
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

.my-modal{
    width: 100%;
    height: 100%;
    inset: 0;
    background-color: rgba(0, 0, 0, 0.6);
    backdrop-filter: blur(0.5px);
    /* background-color: rgba(0, 0, 0, 0.138); */
    position: fixed;
    /* border: 1px solid red; */
    z-index: 9999;
    display: none;
    /* opacity: 0;
    pointer-events: none; */
    /* transition: opacity 0.3s ease; */
    overflow-x: hidden;
    overflow-y: auto;
    /* animation: fadeIn 0.3s ease; */
}
@media (max-width: 1199px){

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
