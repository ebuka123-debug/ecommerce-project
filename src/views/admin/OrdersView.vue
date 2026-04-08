<script setup>
import OrderManagementTable from '@/components/adminComponents/OrderManagementTable.vue';
import { ref } from 'vue';

const orders = [
  {
    orderId: "ORD-001",
    customer: "John Doe",
    date: "Jan 5, 2026",
    items: "2 items",
    totalPrice: "2,849",
    payment: "paid",
    status: "delivered"
  },
  {
    orderId: "ORD-002",
    customer: "John",
    date: "Jan 5, 2026",
    items: "10 items",
    totalPrice: "10,849",
    payment: "paid",
    status: "pending"
  },
  {
    orderId: "ORD-003",
    customer: "Michael",
    date: "Jan 5, 2026",
    items: "23 items",
    totalPrice: "10,050",
    payment: "pending",
    status: "pending"
  },
  {
    orderId: "ORD-004",
    customer: "Abobo Emeka",
    date: "Jan 5, 2026",
    items: "123 items",
    totalPrice: "100,050",
    payment: "paid",
    status: "processing"
  },
  {
    orderId: "ORD-005",
    customer: "Edoziem",
    date: "Jan 5, 2026",
    items: "123 items",
    totalPrice: "100,050",
    payment: "paid",
    status: "shipped"
  },


//   Order ID	Customer	Date	Items	Total	Payment	Status	Actions
// #				$
// Paid
// Delivered
]
</script>

<template>
  <!-- orders section -->
    <div id="orders-section" class="section-content">
      <h4 class="mb-4">Orders Management</h4>
      <div class="table-card p-4">
        <div class="d-flex gap-2 mb-3">
          <button class="btn btn-sm btn-outline-secondary active">All Orders</button>
          <button class="btn btn-sm btn-outline-secondary">Pending</button>
          <button class="btn btn-sm btn-outline-secondary">Processing</button>
          <button class="btn btn-sm btn-outline-secondary">Shipped</button>
          <button class="btn btn-sm btn-outline-secondary">Delivered</button>
        </div>
        <OrderManagementTable :orders="orders"/>
      </div>
    </div>
</template>
