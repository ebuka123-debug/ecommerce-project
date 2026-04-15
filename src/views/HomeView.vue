<script setup>
import { onMounted } from 'vue';
import { useProducts } from '@/composables/useProducts';
import Carousel from '@/components/Carousel.vue';
import ProductCard from '@/components/ProductCard.vue';

const { loading, products, errorStatus,fetchProducts } = useProducts();

const saveToStorageOnclickBuyNow = (productId) => {
  const matchedProduct = products.value.find(value => {
      return value.id === productId;
  })
  // save to local storage
  localStorage.setItem("products", JSON.stringify(matchedProduct))

}

onMounted(() => {
  fetchProducts();

})

</script>

<template>
  <!-- <h1>This is home page</h1> -->
   <!-- This is the search input for small screen -->
  <div class="container mt-3 d-md-none">
    <div class="row">
      <div class="col">
          <form action="" method="post" class="d-flex w-100 justify-content-center">
              <div id="search" class="d-flex align-items-center ms-2 mt-2">
                  <input class="form-control rounded-0" type="text" placeholder="Search product, brands and categories" aria-label=".form-control-lg example">
              </div>
              <button class="input-group-text rounded-0 rounded-end mt-2 btn border d-flex justify-content-center align-items-center">
                  <font-awesome-icon :icon="['fa','search']" class="text-ash"/>
              </button>

          </form>
      </div>
    </div>
  </div>
  <!-- This is the carousel -->
  <Carousel />

  <!-- products label -->
  <div class="d-flex mb-4 mt-5 ms-md-5">
        <b class="fs-3 ms-4">Products</b>
      <div id="fullstop" class="rounded rounded-circle mt-3 ms-1"></div>
  </div>

 <!-- Displays the nfetch info -->
  <div v-if="loading" class="container">
    <div class="row">
      <div class="col text-center">
        <span class="fs-4">loading products please wait...</span>
      </div>
    </div>
  </div>
  <div v-if="errorStatus" class="container">
    <div class="row">
      <div class="col text-center">
        <span class="fs-4">Please check your internet connection...</span>
      </div>
    </div>
  </div>

 <!-- Products card section -->
  <div class="container mt-5">
    <div class="row products-section mb-5 mt-5 d-flex">
      <div v-for="product in products" :key="product.id" class="col-6 g-2 g-md-3 col-md-4 mb-1 mb-md-3 col-xl-3">
        <ProductCard
          :id="product.id"
          :image="product.images[0]"
          :price="product.price"
          :title="product.title"
          :description="product.description"
          :discount-percentage="product.discountPercentage "
          @save-product-clicked="saveToStorageOnclickBuyNow"
        />
      </div>
    </div>
  </div>
</template>

<style scoped>
.col-5 .form-select{
    width: 9rem;
    height: 2rem !important;

}

#category{
    width: 10rem;
    height: 80%;

}

.col-5 .input-group{
    width: 15rem;
}

</style>
