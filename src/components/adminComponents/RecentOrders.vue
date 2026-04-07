<script setup>
  const props = defineProps({
    recentOrders: Array
  });

const statusColor = (status) => {
  const statusMap = {
    delivered:  { bgColor: "bg-success", textColor: "text-white" },
    pending:    { bgColor: "bg-warning", textColor: "text-dark" },
    shipped:    { bgColor: "bg-info",    textColor: "text-white" },
    processing: { bgColor: "bg-primary", textColor: "text-white" },
    cancelled:  { bgColor: "bg-danger",  textColor: "text-white" },
  };

  return statusMap[status] ?? { bgColor: "bg-secondary", textColor: "text-white" };
};
</script>
<template>
    <table class="table table-hover">
      <thead>
          <tr>
              <th>Order ID</th>
              <th>Customer</th>
              <th>Product</th>
              <th>Amount</th>
              <th>Status</th>
              <th>Action</th>
          </tr>
      </thead>
      <tbody>
        <tr v-for="value in recentOrders" :key="value.orderId">
            <td>#{{ value.orderId }}</td>
            <td>{{ value.customer }}</td>
            <td>{{ value.product }}</td>
            <td>${{ value.amount }}</td>
            <td><span :class="[statusColor(value.status.toLowerCase()).bgColor, statusColor(value.status.toLowerCase()).textColor]" class="badge-status">{{ value.status }}</span></td>
            <td><button class="btn btn-sm btn-outline-secondary">View</button></td>
        </tr>
        <!-- <tr>
            <td>#ORD-002</td>
            <td>Jane Smith</td>
            <td>Beats Headphones</td>
            <td>$350</td>
            <td><span class="badge-status bg-warning text-dark">Pending</span></td>
            <td><button class="btn btn-sm btn-outline-secondary">View</button></td>
        </tr> -->
        <!-- <tr>
            <td>#ORD-003</td>
            <td>Mike Johnson</td>
            <td>Canon EOS R5</td>
            <td>$3,899</td>
            <td><span class="badge-status bg-info text-white">Shipped</span></td>
            <td><button class="btn btn-sm btn-outline-secondary">View</button></td>
        </tr> -->
        <!-- <tr>
            <td>#ORD-004</td>
            <td>Sarah Williams</td>
            <td>Dell XPS 13</td>
            <td>$1,299</td>
            <td><span class="badge-status bg-primary text-white">Processing</span></td>
            <td><button class="btn btn-sm btn-outline-secondary">View</button></td>
        </tr> -->
        <!-- <tr>
            <td>#ORD-005</td>
            <td>Tom Brown</td>
            <td>Sony WH-1000XM5</td>
            <td>$399</td>
            <td><span class="badge-status bg-danger text-white">Cancelled</span></td>
            <td><button class="btn btn-sm btn-outline-secondary">View</button></td>
        </tr> -->
      </tbody>
    </table>
</template>
