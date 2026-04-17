<script setup>

</script>

<template>

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


</template>

<style scoped>
.bg-gold{
    background-color: #FFD700;
}

.progress-rating{
    width: 40%;
    height: 10px;
}

#rating-box{
    width: 90%;
    height: 25vh;
    /* border: 0.5px solid black; */
}

@media (max-width: 1199px){
     #rating-box{
        width: 200px;
        height: 150px;
    }
}
</style>
