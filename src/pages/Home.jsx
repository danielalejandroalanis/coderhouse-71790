import { ItemListContainer, Loader } from "../components";
import { PropTypesClass } from "../components/PropTypesClass/PropTypesClass";
import { useItems } from "../hooks";

//DRY --- CleanCode -- Dont repeat yourself

export const Home = () => {
  const { productsData, loading } = useItems();
  return loading ? <Loader /> : <PropTypesClass isValid={false} number={1} label="No es un valor valido" />;
  // <ItemListContainer products={productsData} />
};
