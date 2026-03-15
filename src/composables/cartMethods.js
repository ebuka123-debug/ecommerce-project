export function useCart() {
  const productExistInCartStatus = (token, data) => {
    return data.some(item => item.id === token)
  }

  return { productExistInCartStatus }

}

//adds product to cart and save it to local storage
export function addCart(product) {

    let cart = JSON.parse(localStorage.getItem("cart")) || [];

    cart.push(product);

    localStorage.setItem("cart", JSON.stringify(cart));

}

//Edit the cart details in the local storage
export function editItem(productId,updatedProduct) {

    const cart = JSON.parse(localStorage.getItem("cart"));

    const newCart = [];
    cart.forEach(item => {
        if (item.id === productId) {
            newCart.push(updatedProduct);
        } else{
            newCart.push(item);
        }
    });


    localStorage.setItem("cart", JSON.stringify(newCart));
}

//minus button click event
export function minusOnclickevent(productQuantity,item,itemId) {
  // console.log("you clicked the minus button");
  const cart = JSON.parse(localStorage.getItem("cart"));
  const product = cart.find(content => content.id === itemId)
  // console.log(product.quantity);
  //  console.log("e don hit here");
  if (product.quantity > 1) {
    const updatedQuantity = product.quantity - 1;
    productQuantity.value = updatedQuantity;

    item.quantity = updatedQuantity;
    editItem(itemId, item)

  }

}

//plus button click event
export function plusOnclickevent(productQuantity,item,itemId) {

  // console.log("you clicked the plus button");
  const cart = JSON.parse(localStorage.getItem("cart"));
  const product = cart.find(content => content.id === itemId)
  // console.log(product.quantity);
  //  console.log("e don hit here");
  if (product.quantity >= 1) {
    const updatedQuantity = product.quantity + 1;
    productQuantity.value = updatedQuantity;

    item.quantity = updatedQuantity;
    editItem(itemId, item)


  }

}
