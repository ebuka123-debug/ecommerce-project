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

const defaultTypeOfReview = ref("");
const typesOfReview = [
  "pending",
  "approved"

]

// checks what type of review
//  is clicked and set the default review to what review that is clicked
const reviewClicked = (review) => {
  defaultTypeOfReview.value = review;
}
</script>
<template>
  <!-- Reviews Section -->
  <div id="reviews-section" class="section-content">
    <h4 class="mb-4">Customer Reviews</h4>
    <div class="table-card p-4">
      <div class="d-flex gap-2 mb-3">
        <button
          class="btn btn-sm btn-outline-secondary"
          :class="[defaultTypeOfReview === ``? `active`: ``]"
          @click="defaultTypeOfReview = ``"
        >
          All Reviews
        </button>
        <button
          v-for="review in typesOfReview"
          :key="review"
          class="btn btn-sm btn-outline-secondary"
          @click="reviewClicked(review)"
          :class="[defaultTypeOfReview === review? `active`: ``]"
        >
          {{ review }}
        </button>
        <!-- <button class="btn btn-sm btn-outline-secondary">Pending</button>
        <button class="btn btn-sm btn-outline-secondary">Approved</button> -->
      </div>
      <div class="list-group">
        <CustomerReviewCard
          v-for="(value,index) in reviews"
          v-show="defaultTypeOfReview === '' || defaultTypeOfReview === value.status"
          :key="value"
          :reviewData="value"
        />
      </div>
    </div>
  </div>
</template>
