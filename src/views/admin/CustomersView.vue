<script setup>
import CustomerManagementTable from '@/components/adminComponents/CustomerManagementTable.vue';
import { ref } from 'vue';

const customers = ref([
  {
    name: "Ebuka",
    email: "ebuka111@gamil.com",
    phoneNumber: "+234 7061 761 912",
    orders: "10",
    totalSpent: "50,000",
    status: "active"
  },
  {
    name: "Emeka",
    email: "emekaabobo111@gamil.com",
    phoneNumber: "+234 7061 761 912",
    orders: "10",
    totalSpent: "50,000",
    status: "active"
  },
  {
    name: "Edoziem",
    email: "edoziem111@gamil.com",
    phoneNumber: "+234 7061 761 912",
    orders: "10",
    totalSpent: "50,000",
    status: "active"
  },
  {
    name: "Ebube",
    email: "ebube111@gamil.com",
    phoneNumber: "+234 7061 761 912",
    orders: "10",
    totalSpent: "50,000",
    status: "active"
  },
  {
    name: "John Doe",
    email: "johndoe@gamil.com",
    phoneNumber: "+234 7061 761 912",
    orders: "10",
    totalSpent: "50,000",
    status: "inactive"
  },
])
</script>
<template>
  <div id="orders-section" class="section-content">
    <!-- Customer management -->
    <h4 class="mb-4">Customers Management</h4>
    <div class="table-card p-4">
        <CustomerManagementTable :customers="customers"/>
    </div>
  </div>
</template>
