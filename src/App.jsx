import React from "react";
import { ChakraProvider } from "@chakra-ui/react";
import NavBar from "./components/NavBar/NavBar";
import ItemListContainer from "./components/ItemListContainer/ItemListContainer";
import MainLayout from "./layouts/MainLayout";

const App = () => {
  //HOC Higher Order Component --> Patron de diseño (parecido a HOF)

  return (
    <ChakraProvider>
      <MainLayout>
        <ItemListContainer greeting="Bienvenidos a mi tienda" />
      </MainLayout>
    </ChakraProvider>
  );
};

export default App;
