import React from "react";
import { useParams } from "react-router";

import { useItemById } from "../hooks";

import { ItemDetailContainer, Loader } from "../components";

export const ItemDetail = () => {
  const { id } = useParams();

  const { product, loading } = useItemById(id);

  return loading ? <Loader /> : <ItemDetailContainer item={product} />;
};
