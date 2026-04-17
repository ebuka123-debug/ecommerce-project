<script setup>
import { ref, computed } from 'vue';

const states = ref([
  {
    name: "Anambra",
    towns: [
      "Aguluzigbo",
      "Awka",
    ],

    selectedStateStatus: true,
    selectedTown: {
      status: true,
      name: "Aguluzigbo"
    }

  },
  {
    name: "Enugu",
    towns: [
      "Ozala",
      "Nsukka",

    ],
    selectedStateStatus: false,
    selectedTown: {
      status: false,
      name: null
    }
  }
])

// Set initial selected state from selectedStateStatus
//checks for the state that it's selected status is true
const selectedState = ref(states.value.find(s => s.selectedStateStatus)?.name);

// Automatically gives you the towns of whatever state is selected
const filteredTowns = computed(() => {
  return states.value.find(s => s.name === selectedState.value)?.towns ?? [];
});


// Get the preselected town of the current state
const selectedTown = ref(states.value.find(s => s.selectedStateStatus)?.selectedTown.name);

// When state changes, reset town to null (triggers "Please select a town")
function onStateChange() {
  selectedTown.value = null;
}
</script>
<template>
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

      <!-- State -->
      <select class="form-select form-select-lg mb-3" v-model="selectedState" @change="onStateChange">
        <option v-for="(state, index) in states" :key="index" :value="state.name">
          {{ state.name }}
        </option>
      </select>
      <!-- Towns -->
      <select class="form-select form-select-lg mb-3" v-model="selectedTown">
        <option :value="null" disabled>Please select a town</option>
        <option v-for="(town, index) in filteredTowns" :key="index" :value="town">
          {{ town }}
        </option>
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
</template>
<style scoped>
/* .icon-box{
    width: 40px;
    height: 40px;
    border: 0.5px solid silver;
} */
</style>
