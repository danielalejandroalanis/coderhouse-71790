import { useEffect, useState } from "react";
import { getAllProducts } from "../services/products.service";
// hook es una funcion de react
// hooks que vienen en el core de React:
//     useState
//     useEffect
//     useContext
//     useLayoutEffect
//     useId
//     useRef

// Custom hook -- funcion de react customizada por nosotros
//     useItems
//     useScreenAnimation
//     usePepitoPerez

export const useItems = () => {
  const [productsData, setProductsData] = useState([]);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    getAllProducts()
      .then((res) => {
        setProductsData(res.data.products);
      })
      .catch((error) => {
        console.log(error);
      })
      .finally(() => setLoading(false));
  }, []);

  return { productsData, loading };
};
