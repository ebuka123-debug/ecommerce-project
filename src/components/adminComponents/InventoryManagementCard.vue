<script setup>
import { defineProps } from 'vue';

const props = defineProps({
  title: String,
  content: String,
  textColor: String
})
</script>
<template>
  <div class="card">
      <div class="card-body">
          <h6 class="text-muted">{{ title }}</h6>
          <h3 :class="[textColor]">{{ content }}</h3>
      </div>
  </div>
</template>
