import { ref } from "vue";
//This funtion fetches the product from the api
export function useProducts() {
  const products = ref([]);   //Products variable
  const loading = ref(false);   //loading variable is set to false at first
  const fetchProducts = async () => {
    try {
      loading.value = true; //Set the loading value to true, this shows that it is still fetching the data of products
      const res = await fetch("https://dummyjson.com/products");

      const data = await res.json();

      products.value = data.products;
      console.log(products.value);

      localStorage.setItem("Product-data", JSON.stringify(products.value));

    }
    catch (error) {
      console.log(error);
    }
    finally {
      loading.value = false;  //After the data is fetched we set the loading back to false
    }

  }

  return {loading,products,fetchProducts}
}

