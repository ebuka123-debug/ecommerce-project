<script setup>
import { ref, onMounted } from 'vue';
import Carousel from '@/components/CarouselComp.vue';
// import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';

const products = ref([]);
  const loading = ref(false);
  const fetchProducts = async () => {
    try {
      loading.value = true;
      const res = await fetch("https://dummyjson.com/products");

      const data = await res.json();

      products.value = data.products;
      console.log(products.value);

    }
    catch (error) {
      console.log(error);
    }
    finally {
      loading.value = false;
    }

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
                  <i class="fa fa-search text-ash"></i>
              </button>

          </form>
      </div>
    </div>
  </div>
  <!-- This is the carousel -->
  <Carousel />

  <div class="d-flex mb-4 mt-5 ms-md-5">
        <b class="fs-3 ms-4">Products</b>
      <div id="fullstop" class="rounded rounded-circle mt-3 ms-1"></div>
  </div>

  <!-- Products card section -->

  <div v-if="loading" class="container">
    <div class="row">
      <div class="col text-center">
        <span class="fs-4">loading products please wait...</span>
      </div>
    </div>
  </div>
  <!-- <div v-else class="container">
    <div class="row">
      <div class="col text-center">
        <span class="fs-4">Please reload the page...</span>
      </div>
    </div>
  </div> -->

    <!-- <Product /> -->
  <div class="container mt-5">
    <div class="row products-section mb-5 mt-5 d-flex">
        <!-- <ul>
          <li v-for="(product, index) in products" :key="index">{{ product }}</li>
        </ul> -->

        <div v-for="product in products" :key="product" class="col-6 g-2 g-md-3 col-md-4 mb-1 mb-md-3 col-xl-3">
          <div class="card border">
            <div class="card-body">
              <div class="card-img mb-4">
                  <img :src="product.images[0]" class="img-fluid" alt="">
              </div>
              <p class="card-text text-ash product-title product-title-clamp"><b>{{ product.title }}</b></p>
              <p class="text-silver product-description">
                  {{ product.description }}
              </p>
              <p class="">
                  <font-awesome-icon :icon="['fa','star']" class="text-gold"/>
                  <font-awesome-icon :icon="['fa','star']" class="text-gold"/>
                  <font-awesome-icon :icon="['fa','star']" class="text-gold"/>
                  <font-awesome-icon :icon="['fa','star']" class="text-gold"/>
                  <font-awesome-icon :icon="['fa','star']" class="text-ash"/>
                  <!-- <i class="fa fa-star text-ash"></i> -->
              </p>
              <p class="card-text"><b class="ms-md-3 text-silver">${{ product.price }}</b> <del class="ms-4 text-ash">${{ (product.price / (1 - product.discountPercentage / 100)).toFixed(2) }}</del></p>
              <a href="./html/productDetails.html" class="btn btn-sm btn-red w-100 add" data-product="${electronicProduct.id}">Buy now</a>
            </div>
          </div>
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





.product-title{
        overflow: hidden;
    text-overflow: ellipsis;
    display:-webkit-box;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
}

.product-description{
    overflow: hidden;
    text-overflow: ellipsis;
    display:-webkit-box;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
}

.product-title-clamp{
    overflow: hidden;
    text-overflow: ellipsis;
    display:-webkit-box;
    -webkit-line-clamp: 1;
    -webkit-box-orient: vertical;
}









.card{
    transition: all 0.3s ease-in-out 0s;
}

.card:hover{
    border: 0px;
    transform: scale(1.03);
    box-shadow: 0 0.5rem 1rem rgba(0, 0, 0, 0.08) !important;
    cursor: pointer;
}

.card-img{
    height: 30%;
    overflow: hidden;
    /* border: 1px solid black; */
}


.card img{
    width: 100%;
    height: 100%;
    object-fit: cover;
}

.card{
    height: 415px;
}


</style>
