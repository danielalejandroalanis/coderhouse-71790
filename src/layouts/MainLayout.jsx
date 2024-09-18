import { Box } from "@chakra-ui/react";
import { NavBar } from "../components/NavBar";

// Componente contenedor
// Tenemos el navbar porque es un componente estatico
// children recibe los componentes como si fuese un array [componente1, 2, 3, 4]
// HOC ---> Higher Order Component (similar a HOF Higher Order Function)
const MainLayout = ({ children }) => {
  return (
    <Box>
      <NavBar />
      {children}
    </Box>
  );
};

export default MainLayout;
