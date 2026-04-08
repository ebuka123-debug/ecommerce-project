<script setup>
import { defineProps } from 'vue';
const props = defineProps({
  customers: Array
})

const avatar = (index) => {
  if ( index % 2 === 0) {
    return "/src/assets/images/avatar2.png";
  } else {
    return "/src/assets/images/avatar.png"
 }
}

const statusColor = (status) => {
  const statusMap = {
    active: { bgColor: "bg-success", textColor: "text-white", text: "Active" },
    inactive: { bgColor: "bg-danger", textColor: "text-white", text: "Inactive" }

  }

  return statusMap[status] ?? {bgColor: "bg-secondary", textColor: "text-white"}
}
</script>

<template>
  <div class="table-responsive">
    <table class="table table-hover">
      <thead>
          <tr>
              <th>Customer</th>
              <th>Email</th>
              <th>Phone number</th>
              <th>Orders</th>
              <th>Total spent</th>
              <th>Status</th>
              <th>Actions</th>
          </tr>
      </thead>
      <tbody>
        <tr v-for="(value,index) in customers" :key="value">
          <td>
              <div class="d-flex align-items-center">
                  <!-- <img src="https://ui-avatars.com/api/?name=Jane+Smith" class="rounded-circle me-2" width="35" height="35"> -->
                  <img :src="avatar(index)" class="rounded-circle me-2" width="35" height="35">
                  <span>{{ value.name }}</span>
              </div>
          </td>
          <td>{{ value.email }}</td>
          <td>{{ value.phoneNumber }}</td>
          <td>{{ value.orders }}</td>
          <td>${{ value.totalSpent }}</td>
          <td><span :class="[statusColor(value.status).bgColor,statusColor(value.status).textColor]" class="badge mt-1">{{ statusColor(value.status).text }}</span></td>
          <td>
              <button class="btn btn-sm btn-outline-primary">View</button>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>
