import { Box } from "@chakra-ui/react";

// Componente contenedor
// Tenemos el navbar porque es un componente estatico
// children recibe los componentes como si fuese un array [componente1, 2, 3, 4]
// HOC ---> Higher Order Component (similar a HOF Higher Order Function)
const MainLayout = ({ children }) => {
  return (
    <Box>
      {children}
    </Box>
  );
};

export default MainLayout;
