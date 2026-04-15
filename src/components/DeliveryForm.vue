<script setup>


// Emit an event to the parent when the select pick station link is clicked
const emit = defineEmits(["Select-pickup-station"]);
</script>
<template>
  <form action="">
    <div class="row mt-2 mb-3 ps-xl-3 pe-xl-3">
        <div class="col-xl-6 mb-3 mb-xl-0">
            <label for="firstName" class="form-label">First name</label>
            <input type="text" class="form-control" id="firstName" placeholder="Enter first name" value="" required>
        </div>
        <div class="col-xl-6">
            <label for="firstName" class="form-label">Last name</label>
            <input type="text" class="form-control" id="firstName" placeholder="Enter last name" value="" required>
        </div>
    </div>
    <div class="row mt-2 mb-3 ps-xl-3 pe-xl-3">
        <div class="col-xl-6 mb-3 mb-xl-0">
            <label for="firstName" class="form-label">Email</label>
            <input type="email" class="form-control" id="firstName" placeholder="email" value="" required>
        </div>
        <div class="col-xl-6">
            <label for="firstName" class="form-label">Phone number</label>
            <input type="text" class="form-control" id="firstName" placeholder="+234" value="" required>
        </div>
    </div>
    <div class="row mt-2 mb-3 ps-xl-3 pe-xl-3">
        <div class="col-xl-6 mb-3 mb-xl-0">
            <label for="firstName" class="form-label">State</label>
            <select class="form-select" id="country" required>

                <option value="anambra">Anambra</option>
                <option value="enugu">Enugu</option>
                <option value="abia">Abia</option>
            </select>
        </div>
        <div class="col-xl-6">
            <label for="firstName" class="form-label">City</label>
            <select class="form-select" id="country" required>
            <!-- This slect will resonate with the city that is state that is clicked (once a state is clicked this selsct will automatically bring out options of cities related to the state clicked) -->

                <option value="aguluzigbo">aguluzigbo</option>
            </select>
        </div>
    </div>
    <div class="row ps-xl-3 pe-xl-3 mb-3 mb-xl-0">
        <div class="col">

            <label for="firstName" class="form-label">Address</label>
            <input type="text" class="form-control" id="firstName" placeholder="Enter address" value="" required>

        </div>
    </div>

    <div class="row mt-5 ps-xl-3 pe-xl-3">
        <div class="col border-bottom pb-1">
            <h1 class="fs-18">
                Delivery Method (Select your pick up station)
            </h1>
        </div>
    </div>

    <div class="row ps-xl-3 pe-xl-3">
        <div class="col">
            <div class="card mb-4 mb-md-5 shadow">
                <div class="card-header">
                    <div class="row">
                        <div class="col">
                            Pickup station
                        </div>
                        <div class="col text-end fs-14">
                            <span href="" id="select-pickup-station" class="text-primary" @click="emit('Select-pickup-station')">Select pickup station  ></span>
                        </div>
                    </div>
                </div>

                <div class="card-body d-flex align-items-center">

                        <font-awesome-icon :icon="['fa','search-location']" class="fs-14 bg-ash p-2 rounded-circle text-red" />

                        <div class="ms-2 fs-14">
                            <span>Pick a location which you want your order to be delivered</span>
                        </div>
                        <b class="fs-6 ms-2">Specs</b>
                    <div id="fullstop" class="rounded-circle ms-1 mt-1"></div>

                </div>
            </div>
        </div>
    </div>
    <div class="row fixed-at-bottom ps-xl-3 pe-xl-3 mb-xl-3 mb-xl-0 d-md-flex justify-content-center bg-white mt-md-3 mt-xl-0 pt-3 pb-3 pt-xl-0 pb-xl-0">
        <div class="col d-flex justify-content-center justify-content-xl-end">
            <input type="submit" class="btn btn-red w-sm-75 fs-14" value="confirm delivery details">
        </div>
    </div>
                    <!-- <div class="row fixed-bottom d-flex justify-content-center bg-white pt-3 pb-3">
                        <div class="col d-flex justify-content-center d-xl-none">
                           <input type="submit" class="btn btn-red w-75" value="confirm delivery details">
                        </div>
                    </div> -->
  </form>
</template>
<style scoped>
.bg-ash{
    background-color: #dddddd;
}

#select-pickup-station{
    cursor: pointer;
}

@media (max-width: 1199px){
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
