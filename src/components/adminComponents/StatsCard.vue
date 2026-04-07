<script setup>
import { defineProps } from 'vue';

const props = defineProps({
  statsContent: Object
})

</script>

<template>
  <div class="col-12 col-sm-6 col-xl-3">
    <div class="card stat-card">
        <div class="card-body">
            <div class="d-flex justify-content-between align-items-center">
                <div>
                    <p class="text-muted mb-1">{{statsContent.title}}</p>
                    <h3 class="mb-0">{{ statsContent.value }}</h3>
                    <small :class="[statsContent.percentageColor]">
                      <i class="bi bi-arrow-up"></i>
                      <!-- 12.5% -->
                       {{ statsContent.percentage }}
                    </small>
                </div>
                <div :class="[statsContent.iconBgColor, statsContent.iconColor]" class="stat-icon bg-opacity-10 ">
                    <i :class="[statsContent.icon]"></i>
                    
                </div>
            </div>
        </div>
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
