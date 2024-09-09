import { useRef } from "react";

import { Box, Button } from "@chakra-ui/react";
import NavBar from "../components/NavBar/NavBar";

//useRef es un hook que nos permite acceder a un elemento del DOM
//genera una referencia de algun elemento que nosotros elijamos y luego coloca ese elemento con la referencia dentro del DOM

//Primera premisa: ACCESO INDISCRIMINADO AL DOM REAL ES CAAAROOOO (en términos de performance)
//React hace una copia del DOM REAL y lo guarda en memoria en algo que se llama DOM VIRTUAL.

const MainLayout = ({ children }) => {
    const footerRef = useRef(null); //Creamos la referencia
    
    //ESTO DA ERROR: porque estamos intentando asignar valores directamente al DOM REAL antes de que React renderice el componente
    //Event Loop
    //Execution Context
    //Microtask vs Macrotask
    //Callback Queue
    //Estados en Javascript
    //footerRef.current.innerHTML = "Texto cambiado";
  const handleClick = () => {
    footerRef.current.innerHTML = "Texto cambiado";
    footerRef.current.setAttribute("style", "color: red");
  };

  return (
    <Box>
      <NavBar />
      {children}
      {/* <footer ref={footerRef}>Este es mi footer</footer>
      <Button onClick={handleClick} marginBottom={"40px"}>
        Cambiar texto
      </Button> */}
    </Box>
  );
};

export default MainLayout;
