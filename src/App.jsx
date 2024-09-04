import React, { useState } from "react";
import { ChakraProvider } from "@chakra-ui/react";
import NavBar from "./components/NavBar/NavBar";
import ItemListContainer from "./components/ItemListContainer/ItemListContainer";

const App = () => {
  //Un estado es un valor que nosotros podemos definir y que puede mutar (cambiar) en el tiempo. El cambio se produce generalmente cuando algo sucede en mi aplicación, por ejemplo se lanza un evento
  //Para crear un estado en React debemos utilizar el hook (funcion de React) llamado useState

  //Se desestructuran 2 valores de un array que provienen de la funcion useState. El primer valor es el valor de mi estado, el segundo, es mi funcion actualizadora de ese estado
  // const [example, setExample] = useState();
  //Para darle un valor inical debo pasarle ese valor como argumento a la funcion useState
  const [count, setCount] = useState(0);

  const handleAddItem = () => {
    if (count === 10) return;
    setCount(count + 1);
  };

  const handleRemoveItem = () => {
    if (count === 0) return;
    setCount(count - 1);
  };

  return (
    <ChakraProvider>
      <NavBar />
      <ItemListContainer greeting="Bienvenidos a mi tienda" />
      <div
        style={{
          fontSize: "4rem",
          display: "flex",
          flexDirection: "column",
          justifyContent: "flex-start",
          alignItems: "flex-start",
        }}
      >
        Valor del Estado: {count}
        <div style={{ display: "flex" }}>
          <button onClick={handleAddItem}>+</button>
          <button onClick={handleRemoveItem}>-</button>
        </div>
      </div>
    </ChakraProvider>
  );
};

export default App;
