import React, { useEffect, useState } from "react";
import { getAllCategories } from "../services/products.service";

export const useCategory = () => {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    getAllCategories()
      .then((res) => {
        setCategories(res.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  return { categories };
};
