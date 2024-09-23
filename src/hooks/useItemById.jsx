import React, { useEffect, useState } from "react";
import { getProductById } from "../services/products.service";

export const useItemById = (id) => {
  const [product, setProduct] = useState({});
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    getProductById(id)
      .then((res) => {
        setProduct(res.data);
      })
      .catch((error) => console.log(error))
      .finally(() => setLoading(false));
  }, []);

  return { product, loading };
};
