<script setup>
const props = defineProps({
  title: String,
  list: Array,
  typeOfList: String,
})
</script>

<template>

      <div class="card rounded-0  mb-3" >
          <div class="card-header">
              <span>
                  {{ title }}
              </span>
          </div>
          <div class="card-body pt-4 pe-3 pb-0 ps-0">

              <ul v-if="typeOfList === 'unordered'">
                  <li v-for="(value,index) in list" :key="index" class="mb-3">
                    {{ value }}
                  </li>

              </ul>
              <ol v-if="typeOfList === 'ordered'">
                <li v-for="(value,index) in list" :key="index" class="mb-3">
                  {{ value }}
                </li>
              </ol>
          </div>
      </div>


    <!-- <div class="col-xl-5 g-0 ms-md-3">
      <div class="card rounded-0  mb-3" >
          <div class="card-header">
              <span>
                  Specifications
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
    </div> -->

</template>
<style scoped>
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
