<script setup>

</script>

<template>
  <div class="container">
      <div class="row mb-3">
        <div class="col  text-center">
          <span class="text-404">404</span>
          <div class="divider"></div>
        </div>
      </div>
      <div class="row mb-1">
        <div class="col text-center">
          <b class="fs-20">This page doesn't exist.</b>
        </div>
      </div>
      <div class="row mb-4">
        <div class="col text-center">
          <span class="fs-14">The link may be broken or the page may have moved</span>
        </div>
      </div>
      <div class="row">
        <div class="col text-center">
          <RouterLink to="/" class="btn btn-red btn-sm">
              continue shopping
          </RouterLink>
        </div>
      </div>

  </div>
</template>

<style>
  .divider {
      width: 60px; height: 2px;
      background: #C51D36;
      margin: 0.1rem auto;
      /* opacity: 0; */
      /* animation: rise 0.6s ease 0.5s forwards; */
    }
  .text-404{
    font-size: 100px;
  }


</style>


