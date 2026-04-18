<script setup>

import { ref, reactive, onMounted } from 'vue';
import { useCart, addCart, plusOnclickevent, minusOnclickevent } from '@/composables/cartMethods';
import { addWishlist, removeWishlist, checkWishlistExist } from '@/composables/wishlistMethods';


const { productExistInCartStatus } = useCart();
const { productExistInWishlist } = checkWishlistExist();

const props = defineProps({
  image: String,
  title: String,
  price: Number,
  originalPrice: String,
  discountPercentage: Number,
  availabilityStatus: String,
  productQuantity: Number,
  productId: Number,
  productData: Object,
});

// localStorage data
const cartData = ref(JSON.parse(localStorage.getItem('cart')));
const wishlistData = ref(JSON.parse(localStorage.getItem('wishlist')));
// console.log('wishlist:', wishlistData.value);
// console.log('productId:', props.productId, typeof props.productId);
// console.log('match:', wishlistData.value?.find(item => item.id === props.productId));
// UI state
const addToCartDisplayStatus = ref(false);
const plusOrMinusDisplay = ref(false);
const isLoading = ref(false);
const isInWishlist = ref(
  (() => {
    const wishlist = JSON.parse(localStorage.getItem('wishlist'));
    return wishlist !== null && productExistInWishlist(props.productId, wishlist);
  })()
);

console.log("this is before click")
console.log(isInWishlist.value);


console.log(localStorage.getItem("wishlist"))
// Quantity of the product in cart
const cartQuantity = ref(
  JSON.parse(localStorage.getItem('cart'))?.find(
    (item) => item.id === props.productId
  )?.quantity || 1
);


onMounted(() => {
  // Cart state
  const inCart =
    cartData.value !== null &&
    productExistInCartStatus(props.productId, cartData.value);
  addToCartDisplayStatus.value = !inCart;
  plusOrMinusDisplay.value = inCart;

  // Wishlist state
  isInWishlist.value =
    wishlistData.value !== null &&
    productExistInWishlist(props.productId, wishlistData.value);
});

function buildProductPayload() {
  return {
    id: props.productId,
    name: props.title,
    price: props.price,
    quantity: cartQuantity.value,
    discountPercentage: props.discountPercentage,
    ProductAvailabilityStatus: props.availabilityStatus,
    productFirstPrice: props.originalPrice,
    image: props.image,
  };
}

function refreshCartData() {
  cartData.value = JSON.parse(localStorage.getItem('cart'));
}

function refreshWishlistData() {
  wishlistData.value = JSON.parse(localStorage.getItem('wishlist'));
}

function startTimer() {
  addCart(buildProductPayload());
  refreshCartData();
  isLoading.value = true;
  addToCartDisplayStatus.value = false;
  setTimeout(() => {
    isLoading.value = false;
    plusOrMinusDisplay.value = true;
  }, 2000);
}

function addItemOnClick() {
  plusOnclickevent(cartQuantity, buildProductPayload(), props.productId);
}

function removeItemOnClick() {
  minusOnclickevent(cartQuantity, buildProductPayload(), props.productId);
}

function toggleWishlist() {
  if (isInWishlist.value) {
    // console.log("this is after it is click and set to non active")
    // console.log(isInWishlist.value);
    removeWishlist(props.productId);
    isInWishlist.value = false;
  } else {
    // console.log("this is after it is click and set to active")
    // console.log(isInWishlist.value);
    addWishlist(buildProductPayload());
    isInWishlist.value = true;
  }
  refreshWishlistData();
}
</script>


<template>
  <div id="product-column" class="row mt-md-4">
    <div class="col-md-6 col-xl-4">
      <div class="product-image-box">
        <img :src="image" class="img-fluid" alt="">
      </div>
    </div>
    <div class="col-md-6 col-xl-8 mt-4 mt-xl-0 product-details-box">
      <div class="row">
        <div class="col">
          <div class="row">
            <div class="col d-flex align-items-center">
              <div class="tip ps-2 pe-2 bg-black text-white">
                <span style="font-size: 14px">Special Offer</span>
              </div>
            </div>
            <div class="col d-flex justify-content-end">
              <div
                id="like"
                :class="{ 'like-bg-color': isInWishlist }"
                class="d-flex justify-content-center align-items-center rounded-circle"
                @click="toggleWishlist"
              >

                <font-awesome-icon
                  :icon="['fa', 'heart']"
                  :class="isInWishlist ? 'text-danger' : 'text-ash'"
                />
              </div>
              <!-- <div id="like" :class="[likeBgColor]" class="d-flex justify-content-center align-items-center rounded-circle">
                <font-awesome-icon
                  :icon="['fa','heart']"
                  :class="[likeColor]"
                  @click="addToWishlist()"
                />
              </div> -->
            </div>
          </div>
        </div>
      </div>

      <div class="row mt-1 mt-md-2 mt-xl-0">
        <div class="col border-bottom">
          <h1 class="fs-20 product-title">{{ title }}</h1>
        </div>
      </div>

      <div class="row mt-2 mt-md-3 mt-xl-4 mb-1">
        <div class="col d-flex align-items-center">
          <div class="width-fit-content">
            <span class="fs-24">
              <b class="product-price">${{ price }}</b>
            </span>
          </div>
          <div class="width-fit-content ms-2 d-flex align-items-center">
            <span class="fs-16 text-ash">
              <del class="product-ogpr">${{ originalPrice }}</del>
            </span>
          </div>
          <div id="discount" class="width-fit-content d-flex align-items-center ms-3 h-30 ps-1 pe-1">
            <span class="fs-16 product-discount">-{{ discountPercentage }}%</span>
          </div>
        </div>
      </div>

      <div id="stock" class="row mb-md-1">
        <div class="col ms-1">
          <span class="text-ash availability-Status">{{ availabilityStatus }}</span>
        </div>
      </div>

      <div id="shipping-from" class="row mb-2 mb-md-3">
        <div class="col ms-1">
          <span>+ shipping from $1500 to Lekki</span>
        </div>
      </div>

      <div class="row mb-4">
        <div class="col ms-1">
          <font-awesome-icon :icon="['fa','star']" class="text-gold" />
          <font-awesome-icon :icon="['fa','star']" class="text-gold" />
          <font-awesome-icon :icon="['fa','star']" class="text-gold" />
          <font-awesome-icon :icon="['fa','star']" class="text-gold" />
          <font-awesome-icon :icon="['fa','star']" />
        </div>
      </div>

      <!-- Cart section -->
      <div class="row fixed-at-bottom d-flex justify-content-center bg-white mt-3 pt-3 pb-3 pt-md-4 pb-md-4 pt-xl-0 pb-xl-0">
        <div class="col-12 d-flex justify-content-center">
          <div
            v-if="addToCartDisplayStatus"
            class="btn btn-red w-100 w-sm-75 shadow-sm add-to-cart"
            @click="startTimer"
          >
            Add to cart
          </div>
          <div v-if="isLoading" class="w-100 loader d-flex justify-content-center mb-5">
            <div class="spinner-border text-danger" role="status">
              <span class="visually-hidden">Loading...</span>
            </div>
          </div>
        </div>
      </div>


      <div v-if="plusOrMinusDisplay" class="row">
        <div class="col d-flex align-items-center adding-minusing-section">
          <div @click="removeItemOnClick" class="btn btn-sm btn-red minus-item-btn ms-1">
            <font-awesome-icon :icon="['fa','minus']" />
          </div>
          <div class="ms-3 product-amount">
            <span>{{ cartQuantity }}</span>
          </div>
          <div @click="addItemOnClick" class="btn btn-sm btn-red ms-3 add-item-btn">
            <font-awesome-icon :icon="['fa','plus']" />
          </div>
          <div class="ms-3 items-quantity-read">
            <span>{{ cartQuantity }} item(s) added</span>
          </div>
        </div>
      </div>

    </div>
  </div>
</template>

<style scoped>
.product-image-box{
    width: 100%;
    height: 50vh;
    /* border: 1px solid black; */
}

#product-column{
    height: 80vh !important;
}


.product-image-box img{
    width: 100%;
    height: 100%;
    object-fit: cover;
}

#discount{
    background-color: #c51d361c;
    color: #C51D36;
}
.h-30{
    height: 30px;
}

.content-box{
    height: auto;
}
.icon-box{
    width: 40px;
    height: 40px;
    border: 0.5px solid silver;
}


.tip{
    width: fit-content;
    border-radius: 3px;
}

.width-fit-content{
    width: fit-content;
}

#like{
    width: 40px;
    height: 40px;
    transition: background-color 1s ease-in;
    /* border: 1px solid red */
}

#like:hover{
    background-color: #c7344a18;
}

.like-bg-color{
  background-color: #c7344a18;
}

@media (max-width: 1199px){
    #product-column{
        height: auto;
    }

    .product-image-box{
        height: 34vh;
    }


        /* form {
        display: block !important;
    } */

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



