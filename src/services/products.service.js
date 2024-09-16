import axios from "axios";

export async function getAllProducts() {
  return await axios.get("https://dummyjson.com/products");
}

//'https://dummyjson.com/products'
// https://dummyjson.com --> nuestra casa/host
// **/products** --> Endpoint // Servicio que vamos a consumir
