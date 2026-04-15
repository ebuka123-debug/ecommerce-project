<script setup>

const props = defineProps({
  reviewData: Object
})

const statusColor = (status) => {
  const statusMap = {
    approved: { bgColor: "bg-success", textColor: "text-white", text: "Approved" },
    pending: { bgColor: "bg-warning", textColor: "text-dark", text: "Pending" }
  }

  return statusMap[status] ?? { bgColor: "bg-secondary", textColor: "text-white", }
}
</script>
<template>
    <div class="list-group-item">
      <div class="d-flex justify-content-between align-items-start mb-2">
          <div>
              <h6 class="mb-1">{{ reviewData.product }}</h6>
              <div class="text-warning">
                  <i class="bi bi-star-fill me-1"></i>
                  <i class="bi bi-star-fill me-1"></i>
                  <i class="bi bi-star-fill me-1"></i>
                  <i class="bi bi-star-fill me-1"></i>
                  <i class="bi bi-star-fill me-1"></i>
              </div>
          </div>
          <span :class="[statusColor(reviewData.status).bgColor,statusColor(reviewData.status).textColor]" class="badge bg-success">
            {{ statusColor(reviewData.status).text }}
          </span>
      </div>
      <p class="mb-2">{{ reviewData.comment }}</p>
      <small class="text-muted">By {{ reviewData.username }} • {{ reviewData.date }}</small>
      <div v-if="reviewData.status === 'approved'" class="mt-2">
          <button class="btn btn-sm btn-outline-primary me-2">View</button>
          <button class="btn btn-sm btn-outline-danger">Delete</button>
      </div>
      <div v-if="reviewData.status === 'pending'" class="mt-2">
        <button class="btn btn-sm btn-success me-2">Approve</button>
        <button class="btn btn-sm btn-outline-danger">Reject</button>
      </div>
    </div>
</template>
