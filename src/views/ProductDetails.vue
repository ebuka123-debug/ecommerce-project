<script setup>
</script>

<template>
  <div class="container mt-4">
      <div class="row mb-3">
          <div class="col-xl-8 border-slim rounded">
              <div id="product-column" class="row mt-md-4">
                  <div class="col-md-6 col-xl-4">
                      <div class="product-image-box">
                          <img src="../assets/images/macbook.jpg" class="img-fluid" alt="">
                      </div>
                  </div>
                  <div class="col-md-6 col-xl-8 mt-4 mt-xl-0 product-details-box">
                      <div class="row">
                          <div class="col">
                              <div class="row">
                                  <div class="col d-flex align-items-center">
                                      <div class="tip ps-2 pe-2 bg-black text-white">
                                          <span style="font-size: 14px">
                                              Special Offer
                                          </span>
                                      </div>
                                  </div>
                                  <div class="col d-flex justify-content-end">
                                      <div id="like" class="d-flex justify-content-center align-items-center rounded-circle">
                                          <!-- <i class="fa fa-heart text-ash"></i> -->
                                           <font-awesome-icon :icon="['fa','heart']" class="text-ash" />
                                      </div>
                                  </div>
                              </div>

                          </div>
                      </div>
                      <div class="row mt-2 mt-md-0">
                          <div class="col border-bottom">
                              <h1 class="fs-20 product-title">
                                <!-- Product title -->
                                Eyeshadow Palette with Mirror
                              </h1>

                          </div>

                      </div>
                      <div class="row mt-3 mt-xl-4 mb-1">
                          <div class="col d-flex align-items-center">
                              <div class="width-fit-content">
                                  <span class="fs-24">
                                      <b class="product-price">
                                          <!-- $${product.price} -->
                                           $13.4
                                      </b>
                                  </span>
                              </div>
                              <div class="width-fit-content ms-2 d-flex align-items-center">
                                  <span class="fs-16 text-ash">
                                      <del class="product-ogpr">
                                          <!-- $${originalPrice} -->
                                           $20
                                      </del>
                                  </span>
                              </div>
                              <div id="discount" class="width-fit-content d-flex align-items-center ms-3 h-30 ps-1 pe-1">
                                  <span class="fs-16 product-discount">
                                      <!-- -${product.discountPercentage}% -->
                                       -30%
                                  </span>
                              </div>
                          </div>
                      </div>
                      <div id="stock" class="row mb-1">
                          <div class="col ms-1">
                              <span class="text-ash availability-Status">
                                  <!-- ${product.availabilityStatus} -->
                                   In stock
                              </span>
                          </div>
                      </div>
                      <div id="shipping-from" class="row mb-3">
                          <div class="col ms-1">
                              <span class="">
                                  + shipping from $1500 to Lekki
                              </span>
                          </div>
                      </div>
                      <div class="row mb-4">
                          <div class="col ms-1">
                              <font-awesome-icon :icon="['fa','star']" class="text-gold" />
                              <font-awesome-icon :icon="['fa','star']" class="text-gold" />
                              <font-awesome-icon :icon="['fa','star']" class="text-gold" />
                              <font-awesome-icon :icon="['fa','star']" class="text-gold" />
                              <font-awesome-icon :icon="['fa','star']" class="" />
                              <!-- <i class="fa fa-star"></i> -->
                          </div>
                      </div>
                      <!-- When the product is not yet added to cart -->
                      <div class="row fixed-at-bottom d-flex justify-content-center bg-white mt-3 pt-3 pb-3 pt-md-4 pb-md-4 pt-xl-0 pb-xl-0">
                        <div class="col-12 d-flex justify-content-center">
                            <div class="btn btn-red w-100 w-sm-75 shadow-sm add-to-cart">
                                Add to cart
                            </div>
                        </div>
                      </div>

                  </div>
              </div>
          </div>

          <div class="col-xl-4  mt-5 mt-xl-0">
              <ul class="list-group mb-3">
                  <li class="list-group-item">
                      <span>
                          Delivery & Returns
                      </span>
                  </li>
                  <li class="list-group-item">
                      <div class="d-flex align-items-center">
                          <b class="fs-4">
                              Specs
                          </b>
                          <div id="fullstop" class="rounded-circle ms-1 mt-2"></div>
                      </div>
                      <small>
                          The BEST products, delivered faster. Now PAY on DELIVERY, Cash or Bank Transfer Anywhere, Zero Wahala! <a href="">Details</a>
                      </small>
                  </li>
                  <li class="list-group-item border-bottom-0">
                      <span>
                          Choose your location
                      </span>
                  </li>

                  <li class="list-group-item">
                      <select class="form-select form-select-lg mb-3" aria-label=".form-select-lg example">
                          <option selected>Anambra</option>
                          <option value="1">Enugu</option>
                          <option value="2">Imo</option>
                          <option value="3">Ebonyi</option>
                      </select>
                      <select class="form-select form-select-lg mb-3" aria-label=".form-select-lg example">
                          <option selected>Awka</option>
                          <option value="1">Aguluzigno</option>
                          <option value="2">Agulu</option>
                          <option value="3">Onitsha</option>
                      </select>
                  </li>
                  <li class="list-group-item d-flex jn lh-sm pt-4">
                      <div class="icon-box rounded d-flex justify-content-center align-items-center">
                          <font-awesome-icon :icon="['fa','star']" class="text-ash" />
                      </div>
                      <div class="w-100 content-box ps-2">
                          <div class="d-flex justify-content-between">

                              <h4 class="fs-14">
                                  Pickup Station
                              </h4>
                              <small>
                                  <a href="">Details</a>
                              </small>

                          </div>
                          <div class="delivery-fess mb-1">
                              <span class="fs-14">
                                  Delivery Fees $1,000
                              </span>
                          </div>
                          <div>
                              <p class="fs-12">
                                  Ready for pickup between 24 November and 26 November if you place your order within the next 37mins
                              </p>
                          </div>
                      </div>
                  </li>
                  <li class="list-group-item d-flex jn lh-sm pt-4">
                      <div class="icon-box rounded d-flex justify-content-center align-items-center">
                          <!-- <i class="fa fa-car-side text-ash"></i> -->
                           <font-awesome-icon :icon="['fa','car-side']" class="text-ash" />
                      </div>
                      <div class="w-100 content-box ps-2">
                          <div class="d-flex justify-content-between">

                              <h4 class="fs-14">
                                  Door Delivery
                              </h4>
                              <small>
                                  <a href="">Details</a>
                              </small>

                          </div>
                          <div class="delivery-fess mb-1">
                              <span class="fs-14">
                                  Delivery Fees $2,300
                              </span>
                          </div>
                          <div>
                              <p class="fs-12">
                                  Ready for delivery between 24 November and 26 November if you place your order within the next 37mins
                              </p>
                          </div>
                      </div>
                  </li>
                  <li class="list-group-item d-flex jn lh-sm pt-4">
                      <div class="icon-box rounded d-flex justify-content-center align-items-center">
                          <font-awesome-icon :icon="['fa','star']" class="text-ash" />
                      </div>
                      <div class="w-100 content-box ps-2">
                          <div class="d-flex justify-content-between">

                              <h4 class="fs-14">
                                  Return Policy
                              </h4>
                              <small>
                                  <a href="">Details</a>
                              </small>

                          </div>

                          <div>
                              <p class="fs-12">
                                  Free return within 7 days for ALL eligible items
                              </p>
                          </div>
                      </div>
                  </li>

              </ul>
          </div>
      </div>
      <div class="row mb-3">
          <div class="col-xl-8 g-0">
              <div class="card rounded-0  mb-3" >
                  <div class="card-header">
                      <span>
                          Product Details
                      </span>
                  </div>
                  <div class="card-body">

                      <p class="card-text fs-14">Lunch bag is very useful when you need to store your food, drinks, fruits and your baby food packs etc. Also very useful for outing,
                          lunch, picnics and other outing programme. This will give you home away from home.
                      </p>
                      <p class="card-text fs-14">
                          This lunch bag is a wise choice for your babies/ kids lunch or creche needs. It is fully padded and keeps food warm or cool.
                            It contains enough space to carry their water bottle and food bowl.
                      </p>
                      <p class="card-text fs-14">
                          Sannea Lunch bag is very useful when you need to store your food, drinks, fruits and your baby food packs etc. Also very useful for outing, lunch, picnics and other outing programme.
                          This will give you home away from home.
                      </p>
                      <p class="card-text fs-14">
                          This lunch bag is a wise choice for your babies/ kids lunch or creche needs.
                          It is fully padded and keeps food warm or cool. It contains enough space to carry their water bottle and food bowl.
                      </p>
                      <p class="card-text fs-14">
                          Sannea Lunch bag is very useful when you need to store your food, drinks, fruits and your baby food packs etc.
                          Also very useful for outing, lunch, picnics and other outing programme. This will give you home away from home.
                      </p>
                  </div>
              </div>

          </div>
          <div class="col-xl-4">
              <div>
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
          </div>
      </div>
      <div class="row border mb-3">
          <div class="col-xl-8">
              <div class="mt-4 mb-4">
                  <h2 class="fs-20">
                      Specifications
                  </h2>
              </div>
              <div class="row g-0 d-flex justify-content-evenly">
                  <div class="col-xl-6 g-0">
                      <div class="card rounded-0  mb-3" >
                          <div class="card-header">
                              <span>
                                  Key Features
                              </span>
                          </div>
                          <div class="card-body pt-4 pe-3 pb-0 ps-0">

                              <ul>
                                  <li class="mb-3">
                                      To blend beans or other hard ingredients, Please use the small cup and quickly adjust to the maximum power.
                                  </li>
                                  <li class="mb-3">
                                      To CRUSH hard items, put the blender to MAX power to avoid a burning smell or overheating.
                                  </li>
                                  <li class="mb-3">
                                      2 litre big cup
                                  </li>
                              </ul>
                          </div>
                      </div>

                  </div>
                  <div class="col-xl-5 g-0">
                      <div class="card rounded-0  mb-3" >
                          <div class="card-header">
                              <span>
                                  Key Features
                              </span>
                          </div>
                          <div class="card-body pt-4 pe-3 pb-0 ps-0">

                              <ul>
                                  <li class="mb-3">
                                      To blend beans or other hard ingredients, Please use the small cup and quickly adjust to the maximum power.
                                  </li>
                                  <li class="mb-3">
                                      To CRUSH hard items, put the blender to MAX power to avoid a burning smell or overheating.
                                  </li>
                                  <li class="mb-3">
                                      2 litre big cup
                                  </li>
                              </ul>
                          </div>
                      </div>

                  </div>
              </div>
          </div>
      </div>

      <div class="row ">
          <div class="col-xl-8">
              <div class="mt-4 mb-4 border-bottom">
                  <h2 class="fs-20">
                      Verification Customer Feedback
                  </h2>
              </div>
              <div class="row">
                  <div class="col-md-6 col-xl-4 border-end">
                      <div class="mt-3">
                          <span>
                              VERIFIED RATINGS (1234)
                          </span>
                      </div>

                      <div id="rating-box" class="mt-3 mb-5 bg-silver rounded text-center d-flex flex-column align-items-center justify-content-center">
                          <div class="fs-29 mb-2 text-gold">
                              <span class=""><b>4.3</b></span>/5
                          </div>
                          <div class="mb-2">
                              <font-awesome-icon :icon="['fa','star']" class="text-gold" />
                              <font-awesome-icon :icon="['fa','star']" class="text-gold" />
                              <font-awesome-icon :icon="['fa','star']" class="text-gold" />
                              <font-awesome-icon :icon="['fa','star']" class="text-gold" />
                              <font-awesome-icon :icon="['fa','star']" class="text-ash" />
                          </div>
                          <div>
                              <span>
                                  1234 Verified ratings
                              </span>
                          </div>
                      </div>

                      <div class="d-flex w-100 align-items-center mb-2 border-top pt-3">

                          <div class="ms-2 fs-14">
                              5
                          </div>
                          <div class="ms-2">
                              <font-awesome-icon :icon="['fa','star']" class="text-gold fs-14" />
                          </div>
                          <div class="ms-2 fs-14">
                              <span>
                                  (1234)
                              </span>
                          </div>
                          <div class="progress progress-rating ms-4">
                              <div class="progress-bar bg-gold" role="progressbar" style="width: 80%" aria-valuenow="25" aria-valuemin="0" aria-valuemax="100"></div>
                          </div>
                      </div>

                      <div class="d-flex w-100 align-items-center mb-2">

                          <div class="ms-2 fs-14">
                              4
                          </div>
                          <div class="ms-2">
                              <font-awesome-icon :icon="['fa','star']" class="text-gold fs-14" />
                          </div>
                          <div class="ms-2 fs-14">
                              <span>
                                  (1200)
                              </span>
                          </div>
                          <div class="progress progress-rating ms-4">
                              <div class="progress-bar bg-gold" role="progressbar" style="width: 50%" aria-valuenow="25" aria-valuemin="0" aria-valuemax="100"></div>
                          </div>
                      </div>

                      <div class="d-flex w-100 align-items-center mb-2">

                          <div class="ms-2 fs-14">
                              3
                          </div>
                          <div class="ms-2">
                              <font-awesome-icon :icon="['fa','star']" class="text-gold fs-14" />
                          </div>
                          <div class="ms-2 fs-14">
                              <span>
                                  (1000)
                              </span>
                          </div>
                          <div class="progress progress-rating ms-4">
                              <div class="progress-bar bg-gold" role="progressbar" style="width: 43%" aria-valuenow="25" aria-valuemin="0" aria-valuemax="100"></div>
                          </div>
                      </div>
                      <div class="d-flex w-100 align-items-center mb-2">

                          <div class="ms-2 fs-14">
                              2
                          </div>
                          <div class="ms-2">
                              <font-awesome-icon :icon="['fa','star']" class="text-gold fs-14" />
                          </div>
                          <div class="ms-2 fs-14">
                              <span>
                                  (1000)
                              </span>
                          </div>
                          <div class="progress progress-rating ms-4">
                              <div class="progress-bar bg-gold" role="progressbar" style="width: 23%" aria-valuenow="25" aria-valuemin="0" aria-valuemax="100"></div>
                          </div>
                      </div>
                      <div class="d-flex w-100 align-items-center mb-2">

                          <div class="ms-2 fs-14">
                              1
                          </div>
                          <div class="ms-2">
                              <font-awesome-icon :icon="['fa','star']" class="text-gold fs-14" />
                          </div>
                          <div class="ms-2 fs-14">
                              <span>
                                  (1000)
                              </span>
                          </div>
                          <div class="progress progress-rating ms-4">
                              <div class="progress-bar bg-gold" role="progressbar" style="width: 13%" aria-valuenow="25" aria-valuemin="0" aria-valuemax="100"></div>
                          </div>
                      </div>

                  </div>
                  <div class="col-md-6 col-xl-8 comment-section">
                      <div class="mt-5 mt-md-3 border-bottom pb-1">
                          <span>
                              COMMENTS FROM VERIFIED PURCHASES (1234)
                          </span>
                      </div>
                      <div class="comment-box mb-3 border-bottom mt-3 pb-2">

                          <div class="mb-2">
                              <font-awesome-icon :icon="['fa','star']" class="text-gold" />
                              <font-awesome-icon :icon="['fa','star']" class="text-gold" />
                              <font-awesome-icon :icon="['fa','star']" class="text-gold" />
                              <font-awesome-icon :icon="['fa','star']" class="text-gold" />
                              <font-awesome-icon :icon="['fa','star']" class="text-gold" />
                          </div>

                          <div class="comment-title mb-2">
                              <b>
                                  This is nice
                              </b>
                          </div>

                          <div class="comment-body fs-14">
                              <span>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Neque, nihil. Sed similique, nostrum consectetur labore nihil excepturi voluptatibus earum eaque sit velit recusandae atque numquam. Deleniti deserunt necessitatibus velit minima?</span>
                          </div>
                          <div class="comment-footer mt-2 fs-14">
                              <span class="text-ash">22-11-2025 </span><span>by Chukwuebuka</span>
                          </div>
                      </div>
                      <div class="comment-box mb-3 border-bottom mt-3 pb-2">

                          <div class="mb-2">
                              <font-awesome-icon :icon="['fa','star']" class="text-gold" />
                              <font-awesome-icon :icon="['fa','star']" class="text-gold" />
                              <font-awesome-icon :icon="['fa','star']" class="text-gold" />
                              <font-awesome-icon :icon="['fa','star']" class="text-gold" />
                              <font-awesome-icon :icon="['fa','star']" class="text-gold" />
                          </div>

                          <div class="comment-title mb-2">
                              <b>
                                  This is nice
                              </b>
                          </div>

                          <div class="comment-body fs-14">
                              <span>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Neque, nihil. Sed similique, nostrum consectetur labore nihil excepturi voluptatibus earum eaque sit velit recusandae atque numquam. Deleniti deserunt necessitatibus velit minima?</span>
                          </div>
                          <div class="comment-footer mt-2 fs-14">
                              <span class="text-ash">22-11-2025 </span><span>by Chukwuebuka</span>
                          </div>
                      </div>


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

.border-slim{
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
    background-color: #c51d3667;
}

#rating-box{
    width: 90%;
    height: 25vh;
    /* border: 0.5px solid black; */
}

@media (max-width: 1024px){
    #product-column{
        height: auto;
    }

    .product-image-box{
        height: 34vh;
    }

    #rating-box{
        width: 200px;
        height: 150px;
    }
}
</style>
