<script setup>
import { ref, computed } from 'vue';
import CustomerReviewCard from '@/components/adminComponents/CustomerReviewCard.vue';

const reviews = ref([
  {
    id: 1,
    product: "MacBook Pro 16",
    comment: "Excellent laptop! Very fast and the display is amazing.",
    username: "John Doe",
    date: "Jan 5, 2026",
    rating: "5",
    status: "approved"
  },
  {
    id: 2,
    product: "Beats Studio Pro",
    comment: "Great sound quality and comfortable to wear for long periods.",
    username: "Jane Smith",
    date: "Jan 5, 2026",
    rating: "4",
    status: "pending"
  },
]);

const defaultTypeOfReview = ref("");
const typesOfReview = ["pending", "approved"];

const filteredReviews = computed(() =>
  defaultTypeOfReview.value === ''
    ? reviews.value
    : reviews.value.filter(r => r.status === defaultTypeOfReview.value)
);
</script>

<template>
  <div id="reviews-section" class="section-content">
    <h4 class="mb-4">Customer Reviews</h4>
    <div class="table-card p-4">
      <div class="d-flex gap-2 mb-3">
        <button
          class="btn btn-sm btn-outline-secondary"
          :class="{ active: defaultTypeOfReview === '' }"
          @click="defaultTypeOfReview = ''"
        >
          All Reviews
        </button>
        <button
          v-for="review in typesOfReview"
          :key="review"
          class="btn btn-sm btn-outline-secondary"
          :class="{ active: defaultTypeOfReview === review }"
          @click="defaultTypeOfReview = review"
        >
          {{ review }}
        </button>
      </div>
      <div class="list-group">
        <CustomerReviewCard
          v-for="value in filteredReviews"
          :key="value.id"
          :review-data="value"
        />
      </div>
    </div>
  </div>
</template>
