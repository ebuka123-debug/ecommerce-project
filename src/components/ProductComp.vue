<script setup>
  // import { ref, onMounted } from 'vue';

</script>

<template>
  <!-- <h1>hhh</h1> -->
  <div class="container mt-5">
    <div class="row products-section mb-5 mt-5 d-flex justify-content-center ">
        <ul>
          <li v-for="value in products" :key="value">{{ value }}</li>
        </ul>
    </div>
  </div>
</template>

<style scoped>

</style>
