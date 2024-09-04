import React, { useState } from "react";
import { ChakraProvider } from "@chakra-ui/react";
import NavBar from "./components/NavBar/NavBar";
import ItemListContainer from "./components/ItemListContainer/ItemListContainer";

const App = () => {
  
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
