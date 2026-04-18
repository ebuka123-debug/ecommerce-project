export function checkWishlistExist() {
  const productExistInWishlist = (token, data) => {
    return data.some(item => Number(item.id) === Number(token));
  }
  return { productExistInWishlist }
}

export function addWishlist(product) {
  const wishlist = JSON.parse(localStorage.getItem('wishlist')) || [];
  wishlist.push(product);
  localStorage.setItem('wishlist', JSON.stringify(wishlist));
}

export function removeWishlist(productId) {
  let wishlist = JSON.parse(localStorage.getItem('wishlist')) || [];
  wishlist = wishlist.filter(item => Number(item.id) !== Number(productId));
  localStorage.setItem('wishlist', JSON.stringify(wishlist));
}
