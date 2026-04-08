<script setup>
import { ref } from 'vue';
import CustomerReviewCard from '@/components/adminComponents/CustomerReviewCard.vue';

const reviews = ref([
  {
    product: "MacBook Pro 16",
    comment: "Excellent laptop! Very fast and the display is amazing. Highly recommend for professionals.",
    username: "John Doe",
    date: "Jan 5, 2026",
    rating: "5",
    status: "approved"
  },
  {
    product: "Beats Studio Pro",
    comment: "Great sound quality and comfortable to wear for long periods. Battery life is impressive.",
    username: "Jane Smith",
    date: "Jan 5, 2026",
    rating: "4",
    status: "pending"
  },

])
</script>
<template>
  <!-- Reviews Section -->
  <div id="reviews-section" class="section-content">
    <h4 class="mb-4">Customer Reviews</h4>
    <div class="table-card p-4">
      <div class="d-flex gap-2 mb-3">
        <button class="btn btn-sm btn-outline-secondary active">All Reviews</button>
        <button class="btn btn-sm btn-outline-secondary">Pending</button>
        <button class="btn btn-sm btn-outline-secondary">Approved</button>
      </div>
      <div class="list-group">
        <CustomerReviewCard
          v-for="(value,index) in reviews"
          :key="value"
          :reviewData="value"
        />
      </div>
    </div>
  </div>
</template>
