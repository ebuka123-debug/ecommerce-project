<script setup>
</script>
<template>
  <div class="container mt-4 d-flex justify-content-center">
    <div class="norm-carousel ">
      <div id="slides" class="carousel slide" data-bs-ride="carousel">
          <div class="carousel-indicators">
              <button type="button" data-bs-target="#slides" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
              <button type="button" data-bs-target="#slides" data-bs-slide-to="1" aria-label="Slide 2"></button>
              <button type="button" data-bs-target="#slides" data-bs-slide-to="2" aria-label="Slide 3"></button>
          </div>
          <div class="carousel-inner">
              <div class="carousel-item active">
                  <div class="row g-0">
                      <div class="col-6">
                          <div class="carousel-side d-flex flex-column justify-content-center bg-red">
                              <div class="ms-4 pt-md-5 pt-xl-0 text-dark w-75 fs-5">
                                  <b>Laptop Collection</b>
                              </div>

                              <div class="text-white ms-4 mt-3 pe-2">
                                  Don't miss out on 300% bonus on this sale, lets do this
                              </div>
                              <div class="ms-4 mt-" style="height: 30vh">
                                  <div class="ms-2 mt-xl-4">
                                      <div class="btn btn-black mt-md-4 mt-xl-5 border">
                                          See details
                                      </div>
                                  </div>
                              </div>

                          </div>
                      </div>
                      <div class="col-6">
                          <div class="carousel-side">
                              <img src="/src/assets/images/headphone.jpg" class="">
                          </div>
                      </div>
                  </div>
              </div>
                <div class="carousel-item">
                  <div class="row g-0">
                      <div class="col-6">
                          <div class="carousel-side d-flex flex-column justify-content-center bg-red">
                              <div class="ms-4 pt-md-5 pt-xl-0 text-dark w-75 fs-5">
                                  <b>Laptop Collection</b>
                              </div>

                              <div class="text-white ms-4 mt-3 pe-2">
                                  Don't miss out on 300% bonus on this sale, lets do this
                              </div>
                              <div class="ms-4 mt-" style="height: 30vh">
                                  <div class="ms-2 mt-xl-4">
                                      <div class="btn btn-black mt-md-4 mt-xl-5 border">
                                          See details
                                      </div>
                                  </div>
                              </div>
                          </div>
                      </div>
                      <div class="col-6">
                          <div class="carousel-side">
                              <img src="/src/assets/images/macbook.jpg" class="">
                          </div>
                      </div>
                  </div>
              </div>
              <div class="carousel-item">
                  <div class="row g-0">
                      <div class="col-6">
                          <div class="carousel-side d-flex flex-column justify-content-center bg-red">
                              <div class="ms-4 pt-md-5 pt-xl-0 text-dark w-75 fs-5">
                                  <b>Laptop Collection</b>
                              </div>

                              <div class="text-white ms-4 mt-3 pe-2">
                                  Don't miss out on 300% bonus on this sale, lets do this
                              </div>
                              <div class="ms-4 mt-" style="height: 30vh">
                                  <div class="ms-2 mt-xl-4">
                                      <div class="btn btn-black mt-md-4 mt-xl-5 border">
                                          See details
                                      </div>
                                  </div>
                              </div>
                          </div>
                      </div>
                      <div class="col-6">
                          <div class="carousel-side">
                              <img src="/src/assets/images/headphone2.jpg" class="">
                          </div>
                      </div>
                  </div>
              </div>


          </div>
          <button class="carousel-control-prev" type="button" data-bs-target="#slides" data-bs-slide="prev">
              <span class="carousel-control-prev-icon" aria-hidden="true"></span>
              <span class="visually-hidden">Previous</span>
          </button>
          <button class="carousel-control-next" type="button" data-bs-target="#slides" data-bs-slide="next">
              <span class="carousel-control-next-icon" aria-hidden="true"></span>
              <span class="visually-hidden">Next</span>
          </button>
      </div>
    </div>
  </div>
</template>

<style scoped>
.bg-red{
    background-color: var(--primary);

}
.norm-carousel{
    width: 70%;
    height: 60vh;
    /* border: 1px solid red; */
}

.carousel-side{
    /* position: relative; */
    width: 100%;
    height: 60vh;

}

.carousel-item img{
    width: 100%;
    height: 100%;
    object-fit: cover;
}
</style>
