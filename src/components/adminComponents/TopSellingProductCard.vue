<script setup>

const props = defineProps({
  description: String,
  amountSold: String,
  price: String,
  image: String
})
</script>
<template>
  <div class="col-12 col-md-6 col-lg-3">
    <div class="card border">
        <div class="card-body d-flex flex-column align-items-center text-center">
            <img :src="image" class="img-fluid rounded mb-2" style="height: 120px; object-fit: cover;">
            <h6 class="mb-1">{{ description }}</h6>
            <p class="text-muted small mb-2">{{ amountSold }}</p>
            <span class="badge bg-success">${{ price }}</span>
        </div>
    </div>
  </div>
</template>
