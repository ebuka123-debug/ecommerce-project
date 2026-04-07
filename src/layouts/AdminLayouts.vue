<script setup>
import { RouterView } from 'vue-router';
import '@/assets/styles/admin-utilities.css'
import AdminSidebar from '@/components/adminComponents/AdminSidebar.vue';
import Navbar from '@/components/adminComponents/Navbar.vue';

</script>



<template>
  <div class="admin-layout">
    <AdminSidebar />  <!-- admins sidebar -->
    <!-- <main> -->
      <div class="main-content">
        <Navbar />
        <div class="content-area">
          <RouterView />
        </div>
      </div>
    <!-- <main> -->
  </div>
</template>

<!-- <script setup>
import AdminSidebar from '@/components/AdminSidebar.vue'
</script> -->
