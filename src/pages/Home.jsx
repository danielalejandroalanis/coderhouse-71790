import { ItemListContainer, Loader } from "../components";
import { useItems } from "../hooks";

export const Home = () => {
  const { productsData, loading } = useItems();
  return loading ? <Loader /> : <ItemListContainer products={productsData} />;
};
