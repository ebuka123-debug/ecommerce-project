<script setup>
import { defineProps, computed } from 'vue';


const props = defineProps({
  orders: Array,
  typeOfOrder: String
})

const filteredOrders = computed(() =>
  props.typeOfOrder === ''
    ? props.orders
    : props.orders.filter(o => o.status === props.typeOfOrder)
);

const statusColor = (status) => {
  const statusMap = {
    delivered: { bgColor: "bg-success", textColor: "text-white", text: "Delivered" },
    pending: { bgColor: "bg-warning", textColor: "text-dark", text: "Pending" },
    processing: { bgColor: "bg-primary", textColor: "text-white", text: "Processing" },
    shipped: { bgColor: "bg-info", textColor: "text-white", text: "Shipped" },
  };

  return statusMap[status] ?? { bgColor: "bg-secondary", textColor: "text-white" };
};

const paymentColor = (paymentStatus) => {
  const paymentMap = {
    paid: { bgColor: "bg-success", textColor: "text-white", text: "Paid" },
    pending: { bgColor: "bg-warning", textColor: "text-dark", text: "Pending" },

  }

  return paymentMap[paymentStatus]?? { bgColor: "bg-secondary", textColor: "text-white" };
}

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
              <tr v-for="(value,data) in filteredOrders" :key="value" >
                  <td>#{{ value.orderId }}</td>
                  <td>{{ value.customer }}</td>
                  <td>{{ value.date }}</td>
                  <td>{{ value.items }}</td>
                  <td>${{ value.totalPrice }}</td>
                  <td><span :class="[paymentColor(value.payment).bgColor, paymentColor(value.payment).textColor]" class="badge">{{ paymentColor(value.payment).text }}</span></td>
                  <td><span :class="[statusColor(value.status).bgColor, statusColor(value.status).textColor]" class="badge-status">{{ statusColor(value.status).text }}</span></td>
                  <td>
                      <button class="btn btn-sm btn-outline-primary">View</button>
                  </td>
              </tr>
          </tbody>
      </table>
    </div>
</template>
