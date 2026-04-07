<script setup>
import { defineProps } from 'vue';
defineProps({
  isOpen: Boolean
})
</script>
<template>
  <div class="sidebar" :class="{ show: isOpen }" id="sidebar">
    <div class="sidebar-header">
        <h4 class="mb-0"><i class="bi bi-lightning-charge-fill"></i> Specs Admin</h4>
        <small class="text-white-50">Electronics Store</small>
    </div>
    <div class="sidebar-menu">
        <RouterLink to="/admin" class="active">
            <i class="bi bi-speedometer2"></i> Dashboard
        </RouterLink>
        <a href="../admin/products.html">
            <i class="bi bi-box-seam"></i> Products
        </a>
        <a href="../admin/orders.html">
            <i class="bi bi-cart-check"></i> Orders
        </a>
        <a href="../admin/customers.html">
            <i class="bi bi-people"></i> Customers
        </a>
        <a href="../admin/categories.html">
            <i class="bi bi-tags"></i> Categories
        </a>
        <a href="../admin/inventory.html">
            <i class="bi bi-box2"></i> Inventory
        </a>
        <a href="../admin/analytics.html">
            <i class="bi bi-graph-up"></i> Analytics
        </a>
        <a href="../admin/reviews.html">
            <i class="bi bi-star"></i> Reviews
        </a>
        <a href="../admin/settings.html">
            <i class="bi bi-gear"></i> Settings
        </a>
    </div>
  </div>
</template>
<style scoped>
  .sidebar {
      position: fixed;
      top: 0;
      left: 0;
      height: 100vh;
      width: var(--sidebar-width);
      background: var(--sidebar-bg);
      color: white;
      overflow-y: auto;
      transition: all 0.3s;
      z-index: 1000;
  }

  .sidebar-header {
      padding: 1.5rem 1rem;
      border-bottom: 1px solid rgba(255,255,255,0.1);
  }

  .sidebar-menu {
      padding: 1rem 0;
  }

  .sidebar-menu a {
      display: flex;
      align-items: center;
      padding: 0.75rem 1.5rem;
      color: rgba(255,255,255,0.8);
      text-decoration: none;
      transition: all 0.3s;
  }

  .sidebar-menu a:hover,
  .sidebar-menu a.active {
      background: var(--hover-bg);
      color: white;
      border-left: 3px solid var(--primary-color);
  }

  .sidebar-menu i {
      width: 20px;
      margin-right: 0.75rem;
      font-size: 1.1rem;
  }

  @media (max-width: 768px) {
           .sidebar {
                left: -250px;  /* ✅ Also works */
            }

            .sidebar.show {
                left: 0;
                box-shadow: 2px 0 10px rgba(0,0,0,0.3);
            }

            .main-content {
                margin-left: 0;
            }

            .mobile-toggle {
                display: block;
            }

            .top-navbar {
                padding: 0.75rem 1rem;
            }

            .top-navbar h5 {
                font-size: 1rem;
            }

            .top-navbar .input-group {
                display: none;
            }

            .content-area {
                padding: 1rem;
            }

            .stat-card .card-body h3 {
                font-size: 1.5rem;
            }

            .stat-icon {
                width: 45px;
                height: 45px;
                font-size: 1.2rem;
            }

            .table-responsive {
                font-size: 0.875rem;
            }

            .table-card {
                padding: 1rem !important;
            }

            .btn-sm {
                padding: 0.25rem 0.5rem;
                font-size: 0.75rem;
            }
        }


        /* Overlay for mobile sidebar */
        .sidebar-overlay {
            display: none;
            position: fixed;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            background: rgba(0,0,0,0.5);
            z-index: 999;


            /*z-index: 999;   change this to 1000 means sidebar is above overlay */
        }

        .sidebar-overlay.show {
            display: block;
        }


</style>
