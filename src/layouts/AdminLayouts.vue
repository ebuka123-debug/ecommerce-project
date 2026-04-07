<script setup>
import { RouterView } from 'vue-router';
import { ref } from 'vue';
import '@/assets/styles/admin-utilities.css'
import AdminSidebar from '@/components/adminComponents/AdminSidebar.vue';
import Navbar from '@/components/adminComponents/Navbar.vue';

const sidebarOpen = ref(false)

function toggleSidebar() {
  sidebarOpen.value = !sidebarOpen.value
}
</script>



<template>
  <div class="admin-layout">
    <AdminSidebar :is-open="sidebarOpen"/>  <!-- admins sidebar -->
      <!-- Overlay -->
      <div
        class="sidebar-overlay"
        :class="{ show: sidebarOpen }"
        @click="toggleSidebar"
      ></div>


    <!-- <main> -->
      <div class="main-content">
        <Navbar @toggle-sidebar="toggleSidebar" />
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
