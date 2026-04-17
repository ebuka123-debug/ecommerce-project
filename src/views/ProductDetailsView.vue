<script setup>
import { ref, reactive } from 'vue';
import { useRoute } from 'vue-router';
import NotFoundComponent from '@/components/NotFound.vue';
import ProductDescription from '@/components/ProductDescription.vue';
import DeliveryAndReturns from '@/components/DeliveryAndReturns.vue';
import ProductDetailsCard from '@/components/ProductDetailsCard.vue';
import Ratings from '@/components/Ratings.vue';
import CommentsCard from '@/components/CommentsCard.vue';
import SpecificationCard from '@/components/SpecificationCard.vue';


//Data of products that are stored in the local storage
const data = JSON.parse(localStorage.getItem("Product-data"));

//Data of the product that was cliked to buy now
const product = ref(JSON.parse(localStorage.getItem("products")));

//Cart data
const cartData = ref(JSON.parse(localStorage.getItem("cart")));

//original price of product
const originalPrice = ref((product.value.price / (1 - product.value.discountPercentage / 100)).toFixed(2));
//route
const route = useRoute();

//parameter or id
const routeParameterId = route.params.id;

//products exist set to false
const productExist = ref(false);


//looping throught the data of products
data.forEach(element => {
  // checks if id's (parameter) or in the product data matches the parameter on the route
  if (element.id === Number(routeParameterId)) {
    productExist.value = true;
  }
});

//product quantity
const productQuantity = ref(
  JSON.parse(localStorage.getItem("cart"))?.find(
    item => item.id === product.value.id
  )?.quantity || 1
);


const productSpecs = reactive(
  {
    keyFeatures: [
      "48h nourishing deep moisture care",
      "DEEP MOISTURE SERUM and cocoa butter & vitamin E",
      "Provides moisture and smoothes away dullness",
      "Leaves skin nicely fragranced with a scent of cocoa - after just 1 application.",
      "With Cocoa Butter"
    ],

    specifications: [
      "SKU: NI930ST32OJ5WNAFAMZ",
      "Weight (kg): 1",
      "Product Type: Body Lotions",
      "Shop Type: Specs Mall"
    ]
  }
)

const comments = ref(
  [
    {
      name: "Chukwuebuka",
      comment: `
        The smasung A53 is very very fast in terms of network, and also i like that it does'nt hang.
        i did'nt know you guys could actually deliver the colors that i picked`,
      date: '17-4-2026'
    },

    {
      name: "Chukwuemeka",
      comment: `
        The smasung A53 is very very fast in terms of network, and also i like that it does'nt hang.
        i did'nt know you guys could actually deliver the colors that i picked`,
      date: '17-4-2026'
    },
    {
      name: "Chukwuedoziem",
      comment: `
        The smasung A53 is very very fast in terms of network, and also i like that it does'nt hang.
        i did'nt know you guys could actually deliver the colors that i picked`,
      date: '17-4-2026'
    }
  ]
)

</script>

<template>

  <div v-if="productExist" class="container mt-4">
    <div class="row">
      <!-- row-a | col-xl-8 → appears 1st on small -->
      <div class="col-12 col-xl-4 order-1">
        <!-- row-a content (left) -->
        <!-- delivery and returns -->
         <DeliveryAndReturns />
      </div>

      <!-- row-a | col-xl-4 → appears 2nd on small -->
      <div class="col-12 col-xl-8 order-2 g-0 order-xl-2">
        <!-- row-a content (right) -->
        <!-- Product details -->

        <ProductDetailsCard />
      </div>

      <!-- row-b | col-xl-8 → appears 3rd on small -->
      <div class="col-12 col-xl-4 order-4 order-xl-3 d-none d-md-block">
        <!-- row-b content (left) -->
        <!-- product list -->
        <ul class="list-group mb-3">
          <a href="" class="list-group-item text-dark">
            <li class="d-flex align-items-center lh-sm">
                <div class="icon-box d-flex justify-content-center align-items-center border-0">
                    <!-- <i class="fa fa-file-alt text-ash"></i> -->
                    <font-awesome-icon :icon="['fa','file-alt']" class="text-ash" />
                </div>
                <div class="">
                    <span>
                        Product details
                    </span>
                </div>
            </li>
          </a>
          <a href="" class="list-group-item text-dark">
            <li class="d-flex align-items-center lh-sm">
                <div class="icon-box d-flex justify-content-center align-items-center border-0">
                    <!-- <i class="fa fa-bars text-ash"></i> -->
                      <font-awesome-icon :icon="['fa','bars']" class="text-ash" />
                </div>
                <div class="">
                    <span>
                        Specifications
                    </span>
                </div>
            </li>
          </a>

          <a href="" class="list-group-item text-dark">
            <li class="d-flex align-items-center lh-sm">
                <div class="icon-box d-flex justify-content-center align-items-center border-0">
                    <!-- <i class="fa fa-bars text-ash"></i> -->
                    <font-awesome-icon :icon="['fa','shield-cat']" class="text-ash" />
                </div>
                <div class="">
                    <span>
                        Verified Customer Feedback
                    </span>
                </div>

            </li>
          </a>
        </ul>
      </div>

      <!-- row-c | col-xl-8 → appears 4th on small -->
      <div class="col-12 col-xl-4 border order-5 order-xl-5 d-none ">
        row-c content (left)
      </div>

      <!-- row-b | col-xl-4 → appears 5th on small -->
      <div class="col-12 col-xl-8 order-3 order-xl-4">
        <!-- row-b content (right) -->
        <!-- specification -->
          <!-- specifications component-->
        <div class="row mb-3">
          <div class="col">
              <div class="mt-4 mb-4">
                  <h2 class="fs-20">
                      Specifications
                  </h2>
              </div>
              <!-- <Specification /> -->
              <div class="row g-0">
                <div class="col-xl-5 g-0">
                  <SpecificationCard
                    :title="`Key features`"
                    :list="productSpecs.keyFeatures"
                    :type-of-list="'unordered'"
                  />
                </div>
                <div class="col-xl-5 g-0 ms-md-3">
                  <SpecificationCard
                    :title="`Specifications`"
                    :list="productSpecs.specifications"
                    :type-of-list="'ordered'"
                  />
                </div>
              </div>
          </div>
        </div>
      </div>

      <!-- row-c | col-xl-4 → appears 6th on small -->
      <div class="col-12 col-xl-8 border-slim rounded order-6 order-xl-6 mb-3">
        <!-- row-c content (right) -->
         <!-- description -->
         <ProductDescription
          :image="product.images[0]"
          :title="product.title"
          :price="product.price"
          :original-price="originalPrice"
          :discount-percentage="product.discountPercentage"
          :availability-status="product.availabilityStatus"
          :product-quantity="productQuantity"
          :product-id="product.id"
          :product-data="product"
        />
      </div>
    </div>
     <!-- verification component -->
    <div class="row ">
        <div class="col-xl-8 border rounded">
            <div class="mt-4 mb-4 border-bottom">
                <h2 class="fs-20">
                    Verification Customer Feedback
                </h2>
            </div>
            <div class="row">
              <!-- ratings component -->
              <div class="col-md-6 col-xl-4 d-flex flex-column align-items-center align-items-md-start border-end">
                <Ratings />
              </div>

              <div class="col-md-6 col-xl-8 comment-section">
                <div class="mt-5 mt-md-3 border-bottom pb-1">
                  <span>
                    COMMENTS FROM VERIFIED PURCHASES (1234)
                  </span>
                </div>

                <CommentsCard
                  v-for="(user,index) in comments"
                  :value="user"
                  :key="index"
                  :username="user.name"
                  :comment="user.comment"
                  :date="user.date"
                />
              </div>


            </div>
        </div>
    </div>
  </div>
  <div v-else>
    <NotFoundComponent :btn-color="`btn-red`"/>
  </div>
</template>

<style scoped>


.border-slim{
    border: 0.5px solid silver;
}


@media (max-width: 767.98px) {
  .column-a,
  .column-b {
    display: contents;   /* This flattens the columns so subsets become direct children of .main-row */
  }
}


@media (max-width: 1199px){
    .border-slim{
      border-top: 0px;
      border-left: 0px;
      border-right: 0px;
      border-radius: 0px !important;
    }
    #product-column{
        height: auto;
    }

    .product-image-box{
        height: 34vh;
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
