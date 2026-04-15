<script setup>

const props = defineProps(
  {
    name: String,
    productAmount: String,

  }
)
</script>
<template>
  <div class="col-md-6 col-lg-4">
    <div class="card">
      <div class="card-body">
        <div class="d-flex justify-content-between align-items-center mb-3">
            <h5 class="mb-0">{{ name }}</h5>
            <div>
                <button class="btn btn-sm btn-outline-primary me-1"><i class="bi bi-pencil"></i></button>
                <button class="btn btn-sm btn-outline-danger"><i class="bi bi-trash"></i></button>
            </div>
        </div>
        <p class="text-muted mb-2">{{ productAmount }}</p>
        <div class="progress" style="height: 5px;">
            <div class="progress-bar bg-primary" style="width: 75%"></div>
        </div>
      </div>
    </div>
  </div>
</template>
