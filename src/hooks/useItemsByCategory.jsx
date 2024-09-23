import React, { useState, useEffect } from "react";
import { getProductsByCategory } from "../services/products.service";

export const useItemsByCategory = (categoryId) => {
  const [productsData, setProductsData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    getProductsByCategory(categoryId)
      .then((res) => {
        setProductsData(res.data.products);
      })
      .catch((error) => {
        console.log(error);
      })
      .finally(() => setLoading(false));
  }, [categoryId]);
  return { productsData, loading };
};
