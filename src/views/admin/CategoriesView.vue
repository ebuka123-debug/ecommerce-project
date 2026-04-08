<script setup>
import { ref } from 'vue';
import CategoryManagementCard from '@/components/adminComponents/CategoryManagementCard.vue';
const categories = ref(
  [
    {
      name: "Laptops",
      amount: "145 Products"
    },
    {
      name: "Cameras",
      amount: "89 Products"
    },
    {
      name: "Headphones",
      amount: "108 Products"
    },
  ]
)
</script>

<template>
  <!-- Categories Section -->
  <div id="categories-section" class="section-content">
    <div class="d-flex justify-content-between align-items-center mb-4">
      <h4>Categories Management</h4>
      <button class="btn btn-primary">
          <i class="bi bi-plus-circle me-2"></i>Add Category
      </button>
    </div>
    <div class="row g-4">
      <CategoryManagementCard
        v-for="(value,index) in categories"
        :key="value"
        :name="value.name"
        :productAmount="value.amount"
      />
    </div>
  </div>
</template>
