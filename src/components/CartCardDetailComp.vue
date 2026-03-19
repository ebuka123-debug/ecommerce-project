<script setup>
import { defineProps, ref, defineEmits } from 'vue';
import { minusOnclickevent, plusOnclickevent} from '@/composables/cartMethods';
// const a = ref(0);
const props = defineProps({
  product: Object
})


const emit = defineEmits(['remove-clicked'])

// Local ref to track quantity display
const productQuantity = ref(props.product.quantity)
</script>
<template>
  <div class="row mt-4 mt-xl-3 mb-3 pt-md-2 border-4 border-bottom pb-2" data-product-id="">
    <div class="col-4 col-md-3 col-xl-2 gx-2 gx-md-4">
        <div class="image-box ms-2">
            <img :src="product.image">
        </div>
    </div>

    <div class="col-8 col-md-9 cart-item col-xl-10">
      <div class="row mt-2 mt-xl-0">
        <div class="col-12 col-xl-9">
            <div>
                <h3 class="fs-14">
                    <!-- Eyeshadow Palette with Mirror -->
                     {{ product.name }}
                </h3>
            </div>
            <div class="d-flex w-100 d-flex">

                <div class="w-100 d-flex align-items-center">
                    <div class="me-2 fs-17">
                        <b>
                            <!-- $19.99 -->
                             ${{ product.price }}
                        </b>
                    </div>

                    <div>
                        <del class="text-ash fs-14">
                            <!-- $24.43 -->
                             ${{ product.productFirstPrice }}
                        </del>
                    </div>
                    <div id="discount" class="p-1 ms-3">
                        <!-- -18.19% -->
                         -{{ product.discountPercentage }}%
                    </div>
                </div>
            </div>

        </div>
      </div>
      <div class="row">
          <div class="col">
              <span class="text-ash fs-14">
                  <!-- in stock -->
                   {{ product.ProductAvailabilityStatus }}
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
          <div @click="emit('remove-clicked',product)" class="text-red btn btn-sm rounded-0 p-2 ms-md-2 remove-item border">
            <font-awesome-icon :icon="['fa','trash']" />
            Remove
          </div>
      </div>
      <div class="col d-flex align-items-center justify-content-end">
        <!-- Minus button -->
          <div @click="minusOnclickevent(productQuantity, product, product.id)"  class="btn btn-sm btn-red minus-item-btn">
              <font-awesome-icon :icon="['fa', 'fa-minus']"/>
          </div>
        <!-- Quantity display -->
          <div class="ms-4 product-amount">
              <span>
                  {{ product.quantity }}
              </span>
          </div>
        <!-- Plus button -->
          <div @click="plusOnclickevent(productQuantity, product, product.id)" class="btn btn-sm btn-red ms-4 add-item-btn">
              <font-awesome-icon :icon="['fa', 'fa-plus']"/>
          </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
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


}
</style>
