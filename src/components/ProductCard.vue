<script setup>

const props = defineProps({
  id: Number,
  image: String,
  title: String,
  description: String,
  price: Number,
  discountPercentage: Number,

})

const emit = defineEmits(['save-product-clicked'])

</script>

<template>
  <div class="card border">
    <div class="card-body">
      <div class="card-img mb-4">
          <img :src="image" class="img-fluid" alt="">
      </div>
      <p class="card-text text-ash product-title product-title-clamp"><b>{{ title }}</b></p>
      <p class="text-silver product-description">
          {{ description }}
      </p>
      <p class="">
          <font-awesome-icon :icon="['fa','star']" class="text-gold"/>
          <font-awesome-icon :icon="['fa','star']" class="text-gold"/>
          <font-awesome-icon :icon="['fa','star']" class="text-gold"/>
          <font-awesome-icon :icon="['fa','star']" class="text-gold"/>
          <font-awesome-icon :icon="['fa','star']" class="text-ash"/>
      </p>
      <p class="card-text"><b class="ms-md-3 text-silver">${{ price }}</b> <del class="ms-4 text-ash">${{ (price / (1 - discountPercentage / 100)).toFixed(2) }}</del></p>
      <RouterLink v-if="id" :to="`/product/${id}`" @click="emit('save-product-clicked',id)" class="btn btn-sm btn-red w-100 add">Buy now</RouterLink>
    </div>
  </div>
</template>

<style scoped>

.product-title{
        overflow: hidden;
    text-overflow: ellipsis;
    display:-webkit-box;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
}

.product-description{
    overflow: hidden;
    text-overflow: ellipsis;
    display:-webkit-box;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
}

.product-title-clamp{
    overflow: hidden;
    text-overflow: ellipsis;
    display:-webkit-box;
    -webkit-line-clamp: 1;
    -webkit-box-orient: vertical;
}

.card{
    transition: all 0.3s ease-in-out 0s;
}

.card:hover{
    border: 0px;
    transform: scale(1.03);
    box-shadow: 0 0.5rem 1rem rgba(0, 0, 0, 0.08) !important;
    cursor: pointer;
}

.card-img{
    height: 30%;
    overflow: hidden;
    /* border: 1px solid black; */
}

.card img{
    width: 100%;
    height: 100%;
    object-fit: cover;
}

.card{
    height: 415px;
}

</style>
