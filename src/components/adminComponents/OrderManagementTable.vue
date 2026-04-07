<script setup>
import { defineProps } from 'vue';

const props = defineProps({
  orders: Array
})

// const statusColor = (status) => {
//   const statusMap = {
//     available: { bgColor: "bg-success", textColor: "text-white", text: "Active" },

//     slightlyAvailable: { bgColor: "bg-warning", textColor: "text-dark", text: "Low stock" },

//     unavailable: { bgColor: "bg-danger", textColor: "text-white", text: "Unavailable" },


//   };

//   return statusMap[status] ?? { bgColor: "bg-secondary", textColor: "text-white" };
// };

// 
</script>

<template>
   <div class="table-responsive">
      <table class="table table-hover">
          <thead>
              <tr>
                  <th>Order ID</th>
                  <th>Customer</th>
                  <th>Date</th>
                  <th>Items</th>
                  <th>Total</th>
                  <th>Payment</th>
                  <th>Status</th>
                  <th>Actions</th>
              </tr>
          </thead>
          <tbody>
              <tr v-for="(value,data) in orders" :key="value">
                  <td>#{{ value.orderId }}</td>
                  <td>{{ value.customer }}</td>
                  <td>{{ value.date }}</td>
                  <td>{{ value.items }}</td>
                  <td>${{ value.totalPrice }}</td>
                  <td><span class="badge bg-success">Paid</span></td>
                  <td><span class="badge-status bg-success text-white">Delivered</span></td>
                  <td>
                      <button class="btn btn-sm btn-outline-primary">View</button>
                  </td>
              </tr>
              <!-- <tr>
                  <td>#ORD-001</td>
                  <td>John Doe</td>
                  <td>Jan 5, 2026</td>
                  <td>2 items</td>
                  <td>$2,849</td>
                  <td><span class="badge bg-warning text-dark">Pending</span></td>
                  <td><span class="badge-status bg-warning text-dark">Pending</span></td>
                  <td>
                      <button class="btn btn-sm btn-outline-primary">View</button>
                  </td>
              </tr> -->
          </tbody>
      </table>
    </div>
</template>
