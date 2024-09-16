import { useEffect, useState } from "react";
import ItemListContainer from "../components/ItemListContainer/ItemListContainer";
import { getAllProducts } from "../services/products.service";
import { Box } from "@chakra-ui/react";
import Loader from "../components/Loader/Loader";
const Home = () => {
  const [productsData, setProductsData] = useState([]);
  const [loading, setLoading] = useState(true);
  // useEffect --> hook que nos sirve para ejecutar acciones asegurando que el componente ya esta renderizado (ya esta en el DOM)
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

  return loading ? (
    <Loader />
  ) : (
    <ItemListContainer products={productsData} />
  );
};

export default Home;
