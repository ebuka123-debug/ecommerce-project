<script setup>

const props = defineProps({
  quantity: Number,
  totalPrice: String

})
</script>

<template>
  <div class="card shadow-sm">
    <div class="card-header d-flex align-items-center">
      <font-awesome-icon  :icon="['fa','cart-arrow-down']" class=" text-red" />
      <!-- <div class="border d-flex align-items-center"> -->
      <h1 class="fs-16 mt-2 ms-3 text-red">
          Cart Summary
      </h1>
      <!-- </div> -->
    </div>
    <div class="card-body ">
      <div class="d-flex justify-content-between mb-3">
        <div class="d-flex align-items-center">
            <span class="fs-16">
                Item's total ({{ quantity }})
            </span>
        </div>
        <div>
            <span class="fs-16">
                ${{ totalPrice }}
            </span>
        </div>
      </div>
      <div class="d-flex justify-content-between border-bottom mb-3 pb-2">
        <div class="d-flex align-items-center">
            <span class="fs-16">
                Delivery fees
            </span>
        </div>
        <div>
            <span class="fs-16">
                $150
            </span>
        </div>
      </div>
      <div class="d-flex justify-content-between mb-3">
        <div class="d-flex align-items-center">
            <span class="fs-16">
                Total
            </span>
        </div>
        <div>
            <b class="fs-16">
                ${{ totalPrice }}
            </b>
        </div>
      </div>

      <a href="../html/checkout.html" class="btn btn-red w-100 mt-3 fs-14 d-none d-md-block shadow-sm">
          Confirm order
      </a>
      <!-- <div class="card-body"> -->

      <!-- </div> -->

    </div>

  </div>
</template>

<style scoped>
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
