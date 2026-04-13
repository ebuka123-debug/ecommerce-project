<script setup>
import InventoryManagementCard from '@/components/adminComponents/InventoryManagementCard.vue';
import InventoryManagementTable from '@/components/adminComponents/InventoryManagementTable.vue';
import { ref } from 'vue';

// const inventoryManagement = ref([
//   totalStockValue: {}
// ])
const inventory = ref([
  {
    name: "Canon EOS R5",
    sku: "CAM-R5-001",
    currentStock: "8 units",
    status: "low"
  },
  {
    name: "Sony A7 III",
    sku: "CAM-A7-003",
    currentStock: "0 units",
    status: "none"
  }

])

</script>
<template>
  <!-- Inventory Section -->
    <div id="inventory-section" class="section-content">
      <h4 class="mb-4">Inventory Management</h4>
        <div class="row g-4 mb-4">
          <!-- Total Stock Value -->
          <div class="col-md-4">
            <InventoryManagementCard
              :title="`Total Stock Value`"
              :content="`$100.9M`"
            />
          </div>
          <!-- Low Stock -->
          <div class="col-md-4">
            <InventoryManagementCard
              :title="`Low Stock`"
              :content="`7`"
              :text-color = "`text-warning`"
            />
          </div>
          <div class="col-md-4">
            <InventoryManagementCard
              :title="`Out Of Stock`"
              :content="`2`"
              :text-color = "`text-danger`"
            />
          </div>
        </div>
        <div class="table-card p-4">
          <h5 class="mb-3">Stock Alerts</h5>
          <InventoryManagementTable :inventory="inventory"/>
        </div>
    </div>
</template>
