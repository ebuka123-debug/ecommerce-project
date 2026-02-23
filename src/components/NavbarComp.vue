<script setup>

</script>

<template>
  <nav class="container-fluid bg-black sticky-top d-none d-md-flex align-items-center specs-nav bg-success">
    <div class="row w-100">
      <div class="col-3 col-xl-3 d-flex align-items-center justify-content-center ">

          <b class="text-white fs-3">Specs</b>
          <div id="fullstop" class="rounded rounded-circle mt-3 ms-1 me-xl-5"></div>

      </div>
      <div class="col-6 col-xl-5 g-0">
          <form action="" method="post" class="d-flex w-100 justify-content-center">
              <div id="search" class="d-flex align-items-center ms-2 mt-2">
                  <input class="form-control rounded-0" type="text" placeholder="Search product, brands and categories" aria-label=".form-control-lg example">
              </div>
              <button class="input-group-text rounded-0 rounded-end mt-2 btn btn-red d-flex justify-content-center align-items-center">Search</button>
          </form>
      </div>
      <div class="col-3 col-xl-4  d-flex align-items-center justify-content-end justify-content-xl-center">
          <div class="dropdown me-xl-3">
              <button class="btn text-white btn-hover btn-sm dropdown-toggle" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
                  <b class=""> <font-awesome-icon :icon="['fa','user-circle']" class="fs-18 me-1"/> Account</b>

              </button>
              <ul class="dropdown-menu" aria-labelledby="dropdownMenuButton1">
                  <li class="d-flex justify-content-center mt-2 mb-3">
                      <a href="../html/signIn.html" class="btn btn-red w-75 shadow">
                          sign in
                      </a>
                  </li>
                  <li>
                      <!-- <a href="../html/account.html">

                      </a> -->
                      <RouterLink to="/account" class="dropdown-item" >
                          <font-awesome-icon :icon="['fa','user-circle']" />
                          My Account
                      </RouterLink>
                  </li>
                  <li>
                      <RouterLink to="/wishlist" class="dropdown-item">
                          <font-awesome-icon :icon="['fa','heart']" class="ms-1 me-2"/>
                          Wishlist
                      </RouterLink>
                  </li>
                  <li>
                      <RouterLink to="/orders" class="dropdown-item">
                            <font-awesome-icon :icon="['fa','box-open']" class="ms-1 me-2"/>
                          Orders
                      </RouterLink>
                  </li>
              </ul>
          </div>
          <a href="./html/cart.html" class="text-white d-flex">
              <div class="position-relative">
                  <!-- <i class="fa fa-cart-plus"></i> -->
                    <font-awesome-icon :icon="['fa','cart-plus']" />
                  <span class="position-absolute top-0 start-100 translate-middle badge border border-light rounded-circle bg-danger p-2"><span class="visually-hidde fs-0">5</span></span>
              </div>
              <span class="ms-3">Cart</span>
          </a>
      </div>
    </div>
  </nav>
</template>

<style scoped>
  /* h1{color: red} */
</style>
