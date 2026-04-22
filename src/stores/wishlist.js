
import { ref, computed } from "vue";
import { defineStore } from "pinia";
export const useWishListStore = defineStore('wishlist',() => {
  const items = ref(JSON.parse(localStorage.getItem("wishlist")) || []);


  function productExistInWishlist (productId){
    return items.value.some(item => Number(item.id) === Number(productId));
  }

  function addToWishlist(product) {
    // wishlist.push(product);
    items.value.push(product)

    localStorage.setItem('wishlist', JSON.stringify(items.value));
  }

  function removeFromWishlist(productId) {
    items.value = items.value.filter(item => Number(item.id) !== Number(productId));
    localStorage.setItem('wishlist', JSON.stringify(items.value));
  }

  return {
    items,
    productExistInWishlist,
    addToWishlist,
    removeFromWishlist
  }
})
