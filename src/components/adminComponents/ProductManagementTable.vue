<script setup>
import { defineProps } from 'vue';

const props = defineProps({
  products: Array
})

const statusColor = (status) => {
  const statusMap = {
    available: { bgColor: "bg-success", textColor: "text-white", text: "Active" },

    slightlyAvailable: { bgColor: "bg-warning", textColor: "text-dark", text: "Low stock" },

    unavailable: { bgColor: "bg-danger", textColor: "text-white", text: "Unavailable" },


  };

  return statusMap[status] ?? { bgColor: "bg-secondary", textColor: "text-white" };
};
</script>
<template>
   <div class="table-responsive">
      <table class="table table-hover">
        <thead>
            <tr>
                <th>Image</th>
                <th>Product Name</th>
                <th>Category</th>
                <th>Price</th>
                <th>Stock</th>
                <th>Status</th>
                <th>Actions</th>
            </tr>
        </thead>
        <tbody>
            <tr v-for="(value,data) in products" :key="value">
                <td><img :src="value.productImage" class="product-img"></td>
                <td>{{ value.productName }}</td>
                <td>{{ value.category }}</td>
                <td>${{ value.price }}</td>
                <td>{{ value.stock }}</td>
                <td><span :class="[statusColor(value.status).bgColor, statusColor(value.status).textColor]" class="badge bg-success">{{ statusColor(value.status).text }}</span></td>
                <td>
                    <button class="btn btn-sm btn-outline-primary me-1" data-bs-toggle="modal" data-bs-target="#editProductModal"><i class="bi bi-pencil"></i></button>
                    <button class="btn btn-sm btn-outline-danger"><i class="bi bi-trash"></i></button>
                </td>
            </tr>
            <!-- <tr>
                <td><img src="/src/assets/images/headphone.jpg" class="product-img"></td>
                <td>Beats Studio Pro</td>
                <td>Headphones</td>
                <td>$350</td>
                <td>45</td>
                <td><span class="badge bg-success">Active</span></td>
                <td>
                    <button class="btn btn-sm btn-outline-primary" data-bs-toggle="modal" data-bs-target="#editProductModal"><i class="bi bi-pencil"></i></button>
                    <button class="btn btn-sm btn-outline-danger"><i class="bi bi-trash"></i></button>
                </td>
            </tr> -->
            <!-- <tr>
                <td><img src="/src/assets/images/headphone.jpg" class="product-img"></td>
                <td>Canon EOS R5</td>
                <td>Cameras</td>
                <td>$3,899</td>
                <td>8</td>
                <td><span class="badge bg-warning text-dark">Low Stock</span></td>
                <td>
                    <button class="btn btn-sm btn-outline-primary" data-bs-toggle="modal" data-bs-target="#editProductModal"><i class="bi bi-pencil"></i></button>
                    <button class="btn btn-sm btn-outline-danger"><i class="bi bi-trash"></i></button>
                </td>
            </tr> -->
        </tbody>
      </table>
    </div>
</template>

