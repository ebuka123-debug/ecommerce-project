import { ref, computed } from 'vue'
import { defineStore } from 'pinia'

export const useCartStore = defineStore('cart', () => {

  //Data containg products present in the cart
  const items = ref(JSON.parse(localStorage.getItem("cart")) || [])

  //This gives the total number of items in cart
  const totalItems = computed(() =>
    items.value.reduce((total, product) => total + product.quantity, 0)
  )

  //this gives the sub total of prices of items in cart
  const totalPriceOfItems = computed(() => {
    const total = items.value
      .filter(element => element)
      .map(element => element.quantity * element.price)
      .reduce((sum, itemPrice) => sum + itemPrice, 0)

    return total.toLocaleString('en-US', {
      minimumFractionDigits: 2,
      maximumFractionDigits: 2
    })
  })

  //remove item from cart
  function removeItem(productId) {
    items.value = items.value.filter(item => item.id !== productId)
    localStorage.setItem('cart', JSON.stringify(items.value))
  }

  function addCart(product) {

    items.value.push(product)

    localStorage.setItem("cart", JSON.stringify(items.value));

  }

  //Edit the cart details in the local storage
  function editItem(productId, updatedProduct) {
    items.value = items.value.map(item => item.id === productId ? updatedProduct : item)
    localStorage.setItem("cart", JSON.stringify(items.value))
  }

  //remove the quantiy of product clicked to be removed, by subtracting 1 from the quantity
  function minusOnclickevent(productId) {
    const product = items.value.find(item => item.id === productId)
    if (product && product.quantity > 1) {
      product.quantity--
      localStorage.setItem('cart', JSON.stringify(items.value))
    }
  }

  //adding to the quantiy of product clicked, by adding 1 to the quantity
  function plusOnclickevent(productId) {
    const product = items.value.find(item => item.id === productId)
    if (product) {
      product.quantity++
      localStorage.setItem('cart', JSON.stringify(items.value))
    }
  }

  function productExistInCart (productId) {
    return items.value.some(item => item.id === productId)
  }


  return {
    items,
    totalItems,
    totalPriceOfItems,
    addCart,
    removeItem,
    editItem,
    minusOnclickevent,
    plusOnclickevent,
    productExistInCart

  }
})
