<script setup>
import ProductManagementTable from '@/components/adminComponents/ProductManagementTable.vue';
import { ref } from 'vue';

const products = ref(
  [
  {
    productImage: "/src/assets/images/macbook.jpg",
    productName: "MacBook Pro 16",
    category: "laptops",
    price: "2,499",
    stock: "225",
    status: "available"
  },
  {
    productImage: "/src/assets/images/iphone17.jpg",
    productName: "Iphone 17 pro",
    category: "Phones",
    price: "1,150",
    stock: "25",
    status: "slightlyAvailable"
  },
  {
    productImage: "/src/assets/images/headphone2.jpg",
    productName: "Beat by dre",
    category: "Headphones",
    price: "350",
    stock: "0",
    status: "unavailable"
  },


]
)
</script>
<template>
  <!-- Products Section -->
  <div id="products-section" class="section-content">
      <div class="d-flex justify-content-between align-items-center mb-4">
          <h4>Products Management</h4>
          <button class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#addProductModal">
            <i class="bi bi-plus-circle me-2"></i>Add Product
          </button>
      </div>
      <div class="table-card p-4">
        <div class="d-flex justify-content-between mb-3">
          <div class="input-group" style="max-width: 300px;">
              <span class="input-group-text"><i class="bi bi-search"></i></span>
              <input type="text" class="form-control" placeholder="Search products...">
          </div>
          <select class="form-select" style="max-width: 200px;">
              <option>All Categories</option>
              <option>Laptops</option>
              <option>Cameras</option>
              <option>Headphones</option>
          </select>
        </div>
        <ProductManagementTable :products="products"/>
      </div>
  </div>

   <!-- Add Product Modal -->
    <div class="modal fade" id="addProductModal" tabindex="-1">
      <div class="modal-dialog modal-lg">
          <div class="modal-content">
              <div class="modal-header">
                  <h5 class="modal-title">Add New Product</h5>
                  <button type="button" class="btn-close" data-bs-dismiss="modal"></button>
              </div>
              <div class="modal-body">
                  <form>
                      <div class="row g-3">
                          <div class="col-12">
                              <label class="form-label">Product Name</label>
                              <input type="text" class="form-control" placeholder="Enter product name">
                          </div>
                          <div class="col-md-6">
                              <label class="form-label">Category</label>
                              <select class="form-select">
                                  <option>Select Category</option>
                                  <option>Laptops</option>
                                  <option>Cameras</option>
                                  <option>Headphones</option>
                              </select>
                          </div>
                          <div class="col-md-6">
                              <label class="form-label">Brand</label>
                              <input type="text" class="form-control" placeholder="Enter brand">
                          </div>
                          <div class="col-md-4">
                              <label class="form-label">Price</label>
                              <input type="number" class="form-control" placeholder="0.00">
                          </div>
                          <div class="col-md-4">
                              <label class="form-label">Stock Quantity</label>
                              <input type="number" class="form-control" placeholder="0">
                          </div>
                          <div class="col-md-4">
                              <label class="form-label">SKU</label>
                              <input type="text" class="form-control" placeholder="Enter SKU">
                          </div>
                          <div class="col-12">
                              <label class="form-label">Description</label>
                              <textarea class="form-control" rows="3" placeholder="Enter product description"></textarea>
                          </div>
                          <div class="col-12">
                              <label class="form-label">Product Images</label>
                              <input type="file" class="form-control" multiple>
                          </div>
                      </div>
                  </form>
              </div>
              <div class="modal-footer">
                  <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Cancel</button>
                  <button type="button" class="btn btn-primary">Add Product</button>
              </div>
          </div>
      </div>
    </div>
  <!-- Edit Product Modal -->
       <div class="modal fade" id="editProductModal" tabindex="-1">
        <div class="modal-dialog modal-lg">
            <div class="modal-content">
                <div class="modal-header">
                    <h5 class="modal-title">Edit Product</h5>
                    <button type="button" class="btn-close" data-bs-dismiss="modal"></button>
                </div>
                <div class="modal-body">
                    <form>
                        <div class="row g-3">
                            <div class="col-12">
                                <label class="form-label">Product Name</label>
                                <input type="text" class="form-control" placeholder="Enter product name">
                            </div>
                            <div class="col-md-6">
                                <label class="form-label">Category</label>
                                <select class="form-select">
                                    <option>Select Category</option>
                                    <option>Laptops</option>
                                    <option>Cameras</option>
                                    <option>Headphones</option>
                                </select>
                            </div>
                            <div class="col-md-6">
                                <label class="form-label">Brand</label>
                                <input type="text" class="form-control" placeholder="Enter brand">
                            </div>
                            <div class="col-md-4">
                                <label class="form-label">Price</label>
                                <input type="number" class="form-control" placeholder="0.00">
                            </div>
                            <div class="col-md-4">
                                <label class="form-label">Stock Quantity</label>
                                <input type="number" class="form-control" placeholder="0">
                            </div>
                            <div class="col-md-4">
                                <label class="form-label">SKU</label>
                                <input type="text" class="form-control" placeholder="Enter SKU">
                            </div>
                            <div class="col-12">
                                <label class="form-label">Description</label>
                                <textarea class="form-control" rows="3" placeholder="Enter product description"></textarea>
                            </div>
                            <div class="col-12">
                                <label class="form-label">Product Images</label>
                                <input type="file" class="form-control" multiple>
                            </div>
                        </div>
                    </form>
                </div>
                <div class="modal-footer">
                    <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Cancel</button>
                    <button type="button" class="btn btn-primary">Save Changes</button>
                </div>
            </div>
        </div>
    </div>
</template>
