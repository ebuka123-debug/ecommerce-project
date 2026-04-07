<script setup>

</script>
<template>
    <nav class="top-navbar">
      <div class="d-flex justify-content-between align-items-center">
          <div class="d-flex align-items-center">
              <button class="btn btn-link mobile-toggle"  onclick="toggleSidebar()">
                  <i class="bi bi-list fs-4"></i>
              </button>
              <h5 class="mb-0 ms-2">Dashboard</h5>
          </div>
          <div class="d-flex align-items-center gap-3">
              <div class="input-group d-none d-md-flex" style="max-width: 300px;">
                  <span class="input-group-text bg-white border-end-0">
                      <i class="bi bi-search"></i>
                  </span>
                  <input type="text" class="form-control border-start-0" placeholder="Search...">
              </div>
              <div class="position-relative">
                  <i class="bi bi-bell fs-5"></i>
                  <span class="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger" style="font-size: 0.6rem;">5</span>
              </div>
              <div class="dropdown d-none d-md-block">
                  <a href="#" class="d-flex align-items-center text-decoration-none dropdown-toggle" data-bs-toggle="dropdown">
                      <!-- <img src="https://ui-avatars.com/api/?name=Admin&background=7c3aed&color=fff" class="rounded-circle me-2" width="35" height="35"> -->
                      <img src="/src/assets/images/avatar.png" class="rounded-circle me-2" width="35" height="35">
                      <span>Admin</span>
                  </a>
                  <ul class="dropdown-menu dropdown-menu-end">
                      <li><a class="dropdown-item" href="#"><i class="bi bi-person me-2"></i>Profile</a></li>
                      <li><a class="dropdown-item" href="#"><i class="bi bi-gear me-2"></i>Settings</a></li>
                      <li><hr class="dropdown-divider"></li>
                      <li><a class="dropdown-item" href="#"><i class="bi bi-box-arrow-right me-2"></i>Logout</a></li>
                  </ul>
              </div>
              <!-- Mobile menu icon -->
              <div class="dropdown d-md-none">
                  <button class="btn btn-link text-dark" data-bs-toggle="dropdown">
                      <i class="bi bi-three-dots-vertical fs-5"></i>
                  </button>
                  <ul class="dropdown-menu dropdown-menu-end">
                      <li><a class="dropdown-item" href="#"><i class="bi bi-person me-2"></i>Profile</a></li>
                      <li><a class="dropdown-item" href="#"><i class="bi bi-gear me-2"></i>Settings</a></li>
                      <li><hr class="dropdown-divider"></li>
                      <li><a class="dropdown-item" href="#"><i class="bi bi-box-arrow-right me-2"></i>Logout</a></li>
                  </ul>
              </div>
          </div>
      </div>
    </nav>
</template>
