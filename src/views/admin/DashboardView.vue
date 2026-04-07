<script setup>
import { ref } from 'vue';
// import { RouterLink } from 'vue-router';
import StatsCard from '@/components/adminComponents/StatsCard.vue';
import RecentOrders from '@/components/adminComponents/RecentOrders.vue';
import ActivityItemCard from '@/components/adminComponents/ActivityItemCard.vue';
import TopSellingProductCard from '@/components/adminComponents/TopSellingProductCard.vue';
const stats = ref(

  [
    {
      title: "Total Revenue",
      value: "$100,000",
      iconBgColor: "bg-primary",
      iconColor: "text-primary",
      icon: "bi bi-currency-dollar",
      percentage: "20%",
      percentageColor: "text-success",
      percentageDescription: "decrease" //usually decrease or increase
    },

    {
      title: "Total Orders",
      value: "1,254",
      iconBgColor: "bg-success",
      iconColor: "text-success",
      icon: "bi bi-cart-check",
      percentage: "8.2%",
      percentageColor: "text-success",
      percentageDescription: "decrease" //usually decrease or increase
    },

    {
      title: "Total Products",
      value: "342",
      iconBgColor: "bg-info",
      iconColor: "text-info",
      icon: "bi bi-box-seam",
      percentage: "0%",
      percentageColor: "text-info",
      percentageDescription: "decrease" //usually decrease or increase
    },
    {
      title: "Total Customers",
      value: "892",
      iconBgColor: "bg-warning",
      iconColor: "text-warning",
      icon: "bi bi-people",
      percentage: "15.3%",
      percentageColor: "text-success",
      percentageDescription: "decrease" //usually decrease or increase
    },


  ]

)

const orders = ref([
  {
    orderId: "ORD-001",
    customer: "John doe",
    product: "MacBook Pro 16",
    amount: "2,000",
    status: "Delivered"
  },
  {
    orderId: "ORD-002",
    customer: "Jane Smith",
    product: "Beats Headphones",
    amount: "350",
    status: "Pending"
  },
  {
    orderId: "ORD-003",
    customer: "Mike Johnson",
    product: "Canon EOS R5",
    amount: "3,899",
    status: "Shipped"
  },
  {
    orderId: "ORD-004",
    customer: "Sarah Williams",
    product: "Dell XPS 13",
    amount: "1,299",
    status: "Processing"
  },
  {
    orderId: "ORD-005",
    customer: "Tom Brown",
    product: "Sony WH-1000XM5",
    amount: "399",
    status: "Cancelled"
  },



])

const topSellingProducts = ref(
  [
    {
      product: "MacBook Pro",
      amountSold: "245 sold",
      price: "2,499",
      image: "/src/assets/images/macbook.jpg"
    },

    {
      product: "Iphone 17",
      amountSold: "100,189 sold",
      price: "1,150",
      image: "/src/assets/images/iphone17.jpg"
    },

    {
      product: "Canon Camera",
      amountSold: "156 sold",
      price: "3,899",
      image: "/src/assets/images/visual-reality.jpg"
    },

    {
      product: "Beat Headphones",
      amountSold: "142 sold",
      price: "1,299",
      image: "/src/assets/images/headphone2.jpg"
    }



  ]

)
const a = ref("Top")

</script>
<template>
<!-- Dashboard Section -->
  <div id="dashboard-section" class="section-content">
    <!-- Stats Cards -->
    <div class="row g-4 mb-4">
      <StatsCard :statsContent = 'value'
        v-for="value in stats"
        :key="value"
      />
    </div>
    <div class="row g-4">
      <!-- Recent Orders -->
      <div class="col-12 col-lg-8">
        <div class="table-card p-4">
          <div class="d-flex justify-content-between align-items-center mb-3">
              <h5 class="mb-0">Recent Orders</h5>
              <a href="#orders" class="btn btn-sm btn-outline-primary">View All</a>
          </div>

          <div class="table-responsive">
              <RecentOrders :recentOrders="orders"/>
          </div>
        </div>
      </div>

      <!-- Recent Activity -->
      <div class="col-12 col-lg-4">
        <div class="table-card p-4">
            <h5 class="mb-3">Recent Activity</h5>
            <!-- Activities -->
              <!-- New Order placed -->
              <ActivityItemCard
                :activityTitle="`New Order placed`"
                :activityDescription="`Order #ORD-005 • 2 mins ago`"
                :activityIcon = "`bi bi-cart-plus`"
                :activityIconColor = "`text-success`"
              />
              <!-- New customer registered -->
              <ActivityItemCard
                :activityTitle="`New customer registered`"
                :activityDescription="`Sarah Williams • 15 mins ago`"
                :activityIcon = "`bi bi-person-plus`"
                :activityIconColor = "`text-primary`"
              />
              <!-- Product stock updated -->
              <ActivityItemCard
                :activityTitle="`Product stock updated`"
                :activityDescription="`MacBook Pro • 1 hour ago`"
                :activityIcon = "`bi bi-box-seam`"
                :activityIconColor = "`text-info`"
              />
              <!-- New review received -->
              <ActivityItemCard
                :activityTitle="`New review received`"
                :activityDescription="`Canon EOS R5 • 3 hours ago`"
                :activityIcon = "`bi bi-star`"
                :activityIconColor = "`text-warning`"
              />
              <!-- Order shipped -->
              <ActivityItemCard
                :activityTitle="`Order shipped`"
                :activityDescription="`Order #ORD-003 • 5 hours ago`"
                :activityIcon = "`bi bi-truck`"
                :activityIconColor = "`text-success`"
              />
        </div>
      </div>
    </div>
      <div class="row mt-4">
        <div class="col-12">
          <div class="table-card p-4">
              <h5 class="mb-3">Top Selling Products</h5>
              <div class="row g-3">
                  <!-- <div class="col-12 col-md-6 col-lg-3">
                      <div class="card border">
                          <div class="card-body d-flex flex-column align-items-center text-center">
                              <img src="/src/assets/images/headphone.jpg" class="img-fluid rounded mb-2" style="height: 120px; object-fit: cover;">
                              <h6 class="mb-1">MacBook Pro</h6>
                              <p class="text-muted small mb-2">245 sold</p>
                              <span class="badge bg-success">$2,499</span>
                          </div>
                      </div>
                  </div> -->
                  <TopSellingProductCard
                    v-for="(product,data) in topSellingProducts"
                    :key="data"
                    :description="product.product"
                    :amountSold="product.amountSold"
                    :price="product.price"
                    :image="product.image"
                  />

              </div>
          </div>
        </div>
      </div>
  </div>
</template>


