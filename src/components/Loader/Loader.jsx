import { Flex, Spinner } from "@chakra-ui/react";

export const Loader = () => {
  return (
    <Flex
      height={"90vh"}
      width={"100vw"}
      alignItems={"center"}
      justifyContent={"center"}
    >
      <Spinner
        thickness="4px"
        speed="0.65s"
        emptyColor="gray.200"
        color="blue.500"
        size="xl"
      />
    </Flex>
  );
};
