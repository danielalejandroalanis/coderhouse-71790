import { useEffect, useState } from "react";
import { doc, getDoc } from "firebase/firestore";
import { db } from "../firebase";

export const useItemById = (id) => {
  const [product, setProduct] = useState({});
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const itemCollection = doc(db, "products", id);
    getDoc(itemCollection)
      .then((snapshot) => {
        setProduct({ id: snapshot.id, ...snapshot.data() });
      })
      .catch((error) => console.error(error))
      .finally(() => setLoading(false));
  }, []);

  return { product, loading };
};
