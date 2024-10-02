import { createContext, useState } from "react";

export const CartContext = createContext();

//Proveedor: basicamente es el componente que provee nuestros datos
//Consumidores: son los componentes que aprovechan estos datos

export const CartProvider = ({ children }) => {
  //Estado Global
  const [cartState, setCartState] = useState([]);

  const addItem = (product, qtyItem) => {
    // setCartState(cartState + 1);
    const existingProduct = cartState.find((item) => item.id === product.id);

    if (existingProduct) {
      setCartState(
        cartState.map((item) =>
          item.id === product.id ? { ...item, qtyItem: item.qtyItem + 1 } : item
        )
      );
    } else {
      setCartState([...cartState, { ...product, qtyItem: qtyItem }]);
    }
  };

  const removeItem = (product) => {
    const existingProduct = cartState.find((item) => item.id === product.id);

    if (existingProduct) {
      if (existingProduct.qtyItem === 1) {
        setCartState(cartState.filter((item) => item.id !== product.id));
      } else {
        setCartState(
          cartState.map((item) =>
            item.id === product.id
              ? { ...item, qtyItem: item.qtyItem - 1 }
              : item
          )
        );
      }
    }
  };

  return (
    <CartContext.Provider
      value={{
        cartState,
        setCartState,
        addItem,
        removeItem,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};
