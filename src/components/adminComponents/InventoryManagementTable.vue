<script setup>
import { defineProps } from 'vue';

const props = defineProps(
  {
    inventory: Array
  }
)

const statusColor = (status) => {
  const statusMap = {
    low: { bgColor: "bg-warning", textColor: "text-dark", text: "Low Stock" },
    none: { bgColor: "bg-danger", textColor: "text-white", text: "Out Of Stock" },

  }

  return statusMap[status] ?? { bgColor: "bg-secondary", textColor: "text-white"}
}
</script>

<template>
   <div class="table-responsive">
      <table class="table table-hover">
        <thead>
            <tr>
                <th>Product</th>
                <th>SKU</th>
                <th>Current Stock</th>
                <th>Status</th>
                <th>Action</th>
            </tr>
        </thead>
        <tbody>
            <tr v-for="(value,stock) in inventory" key="value">
              <td>{{ value.name }}</td>
              <td>{{ value.sku }}</td>
              <td>{{ value.currentStock }}</td>
              <td><span :class="[statusColor(value.status).bgColor,statusColor(value.status).textColor]" class="badge">{{ statusColor(value.status).text }}</span></td>
              <td><button class="btn btn-sm btn-primary">Restock</button></td>
            </tr>

        </tbody>
      </table>
    </div>
</template>
