import { Box } from "@chakra-ui/react";
import NavBar from "../components/NavBar/NavBar";

const MainLayout = ({ children }) => {
  return (
    <Box>
      <NavBar />
      {children}
    </Box>
  );
};

export default MainLayout;
