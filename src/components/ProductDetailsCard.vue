<script setup>
import { computed } from 'vue';
const props = defineProps({
  details: String
})

const paragraphs = computed(() =>
  props.details
    ?.split('\n')
    .map(p => p.trim())
    .filter(p => p.length > 0) ?? []
)
</script>

<template>
  <div class="card rounded-0  mb-3" >
      <div class="card-header">
          <span>
              Product Details
          </span>
      </div>
      <div class="card-body">
        
        <p
          v-for="(paragraph, index) in paragraphs"
          :key="index"
          class="card-text fs-14"
        >
          {{ paragraph }}
        </p>

      </div>
  </div>
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
