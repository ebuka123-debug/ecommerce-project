<script setup>
import PeriodAnalyticsCard from '@/components/adminComponents/PeriodAnalyticsCard.vue';
</script>
<template>
  <div id="analytics-section" class="section-content">
    <h4 class="mb-4">Analytics & Reports</h4>
    <div class="row g-4">
      <div class="col-12">
        <div class="table-card p-4">
          <h5 class="mb-3">Sales Overview</h5>
          <!-- charts will be displayed here -->
            <div class="alert alert-info">
              <i class="bi bi-info-circle me-2"></i>
              Sales chart visualization would appear here. Integration with Chart.js or similar library recommended for production.
            </div>
          <!-- Day by day analytics -->
            <div class="row g-3 mt-3">
              <PeriodAnalyticsCard
                :period="`Today`"
                :content="`$804,280`"
                :percentage="`+35%`"
              />
              <PeriodAnalyticsCard
                :period="`This Week`"
                :content="`$4,804,280`"
                :percentage="`+65%`"
              />
              <PeriodAnalyticsCard
                :period="`This Month`"
                :content="`$34,804,280`"
                :percentage="`+85%`"
              />
              <PeriodAnalyticsCard
                :period="`This Year`"
                :content="`$94,804,280`"
                :percentage="`+95%`"
              />
            </div>
        </div>
      </div>
    </div>
  </div>
</template>
