import axios from "axios";

export async function getAllProducts() {
  return await axios.get("https://dummyjson.com/products");
}

export async function getProductById(id) {
  return await axios.get(`https://dummyjson.com/products/${id}`);
}

export async function getAllCategories() {
  return await axios.get("https://dummyjson.com/products/categories");
}

export async function getProductsByCategory(categoryId) {
  return await axios.get(
    `https://dummyjson.com/products/category/${categoryId}`
  );
}
