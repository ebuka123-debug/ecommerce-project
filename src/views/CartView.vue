<script setup>
import { ref, watch } from 'vue';
import EmptyCartComp from '@/components/EmptyCartComp.vue';
import CartCardDetailComp from '@/components/CartCardDetailComp.vue';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
import { plusOnclickevent, totalPriceOfItems} from '@/composables/cartMethods';

//Cart data
const cart = ref(JSON.parse(localStorage.getItem("cart")));




const showModal = ref(false)
function removeProduct(productName) {
  console.log(productName)
}
watch(showModal, (val) => {
  document.body.style.overflow = val ? 'hidden' : ''
})

const selectedProduct = ref(null)

const handleRemoveClicked = (product) => {
  selectedProduct.value = product
  showModal.value = true
}

const confirmRemove = () => {
  cart.value = cart.value.filter(item => item.id !== selectedProduct.value.id)
  localStorage.setItem('cart', JSON.stringify(cart.value))
  showModal.value = false
}

console.log(cart.value);
</script>

<template>
  <div :class="['my-modal', { active: showModal }]" @click.self="showModal = false">
    <div class="modal-content rounded">
      <div class="row ms-3 me-3 mt-4">
          <div class="col-8 col-xl-6">
              <h2 class="modal-title">
                  Remove From Cart
              </h2>
          </div>
          <div class="col-4 col-xl-6 d-flex justify-content-end">
              <button type="button" class="btn-close" @click="showModal = false"></button>
          </div>
      </div>
      <div class="row ms-3 me-3 mt-1">
          <div class="col">
              <span class="modal-description">
                  Do you really want to remove this item from cart
              </span>
          </div>
      </div>
      <div class="row ms-3 me-3 mt-3 mb-3">
          <div class="col">
              <div id="modal-remove-btn" class="btn btn-red d-flex w-100"@click="confirmRemove">
                  <div class="">
                      <!-- <i class="fa fa-trash"></i> -->
                      <Font-awesome-icon :icon="['fa','trash']" />
                  </div>
                  <div class="ms-3 ms-md-5  ms-xl-4 w-75 text-md-center">
                      Remove Item
                  </div>
              </div>
          </div>
      </div>
    </div>
  </div>
  <div v-if="cart !== null && cart.length" id="name-display" class="d-flex name-display d-md-none flex-column justify-content-center ">
    <div>
        <b class="p-3">
            <!-- Welcome, Firstname -->
             Welcome, John Doe
        </b>
    </div>

    <div class="">
      <span class="p-3 fs-14 total-cart-item-sm">
        You have {{ cart.length }} items in your cart
      </span>
    </div>

  </div>

  <div class="container mt-md-4">

    <div v-if="cart !== null && cart.length" class="row mb-3 cart-items-section">

      <div class="col-xl-9 mt-2 cart-item-section-column">
        <div class="row">
          <div id="product-number-in-cart" class="col border-2 border-bottom mt-2">
            You have {{ cart.length }} item(s) in cart
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
                      Items total ({{ cart.length }})
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
                  <a href="../html/checkout.html" class="btn btn-red checkout-btn w-100 w-sm-75 fs-14 shadow-sm">
                      Checkout (${{ totalPriceOfItems(cart) }})
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
    height: 30%;
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
/* Animate In */
/* .modal.active .modal-content {
  transform: scale(1);
} */

@media (max-width: 1024px){

    .modal-content{
        width: 96%;
        height: auto;
    }
}

</style>
