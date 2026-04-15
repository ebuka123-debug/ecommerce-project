<script setup>

const props = defineProps({
  activityTitle: String,
  activityDescription: String,
  activityIcon: String,
  activityIconColor: String,
})
</script>

<template>
  <div class="activity-item">
    <div class="d-flex align-items-start">
      <i :class="[activityIcon, activityIconColor]" class="me-3 fs-5"></i>
      <div>
          <p class="mb-0 fw-semibold">{{ activityTitle }}</p>
          <small class="text-muted">{{ activityDescription }}</small>
      </div>
    </div>
  </div>
</template>
