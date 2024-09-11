import React from "react";
import { ChakraProvider } from "@chakra-ui/react";
import MainLayout from "./layouts/MainLayout";
import Home from "./pages/Home";

const App = () => {
  // //Promesa básica
  // // const ejemploPromesa = new Promise((resolve, reject) => {
  // //   const exito = false;
  // //   if (exito) {
  // //     resolve("La promesa se cumple correcta");
  // //   } else {
  // //     reject("La promesa no se cumple");
  // //   }
  // // });
  // //.then y .catch
  // // ejemploPromesa
  // //   .then((res) => {
  // //     console.log(res);
  // //   })
  // //   .catch((error) => {
  // //     // throw new Error(error);
  // //     console.error(error);
  // //   })
  // //   .finally(() => {
  // //     console.log("Termine el proceso de validacion de la promesa");
  // //   });

  // //Promesa asincrona
  // const promesaAsincrona = new Promise((resolve, reject) => {
  //   console.log("Aqui comienza mi promesa...");
  //   setTimeout(() => {
  //     const exito = true;
  //     if (exito) {
  //       resolve("Resuelto exitosamente");
  //     } else {
  //       reject("Error en la promesa");
  //     }
  //   }, 3000);
  // });
  // promesaAsincrona
  //   .then((res) => {
  //     console.log(res);
  //   })
  //   .catch((error) => {
  //     console.error(error);
  //   });

  // console.log(promesaAsincrona); //3ero
  // console.log("Otra tarea"); //Primero
  // console.log(2 + 2); // Segundo
  // for (let i = 0; i <= 3; i++) {
  //   console.log("Iteracion" + i);
  // }

  //Try/cacth

  // const promesaTryCatch = new Promise((resolve, reject) => {
  //   try {
  //     const exito = true;
  //     if (exito) resolve("Exito");
  //   } catch (error) {
  //     reject("Error");
  //   }
  // });

  return (
    <ChakraProvider>
      <MainLayout>
        <Home />
      </MainLayout>
    </ChakraProvider>
  );
};

export default App;
