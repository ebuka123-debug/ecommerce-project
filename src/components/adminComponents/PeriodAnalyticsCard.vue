<script setup>
import { defineProps } from 'vue';
const props = defineProps({
  period: String,
  content: String,
  percentage: String

})
</script>

<template>
  <div class="col-md-3">
    <div class="text-center p-3 border rounded">
        <h6 class="text-muted">{{ period }}</h6>
        <h4>{{ content }}</h4>
        <small class="text-success">{{ percentage }}</small>
    </div>
  </div>
</template>
