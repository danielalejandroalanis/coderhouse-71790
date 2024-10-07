import { ItemListContainer, Loader } from "../components";
import { useItems } from "../hooks";

export const Home = () => {
  const { itemsData, loading } = useItems("products");
  return loading ? <Loader /> : <ItemListContainer products={itemsData} />;
};
