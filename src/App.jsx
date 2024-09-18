import React from "react";
import { ChakraProvider } from "@chakra-ui/react";
import MainLayout from "./layouts/MainLayout";
import { Home } from "./pages";
const App = () => {
  return (
    <ChakraProvider>
      <MainLayout>
        <Home />
      </MainLayout>
    </ChakraProvider>
  );
};

export default App;
