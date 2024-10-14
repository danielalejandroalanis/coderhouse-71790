import {
  Box,
  Heading,
  Text,
  Img,
  Flex,
  Center,
  useColorModeValue,
  HStack,
} from "@chakra-ui/react";
import { BsArrowUpRight } from "react-icons/bs";
import { Link } from "react-router-dom";

const Item = ({ item }) => {
  return (
    <Center py={6}>
      <Box
        w="xs"
        rounded={"sm"}
        my={5}
        mx={[0, 5]}
        overflow={"hidden"}
        bg="white"
        border={"1px"}
        borderColor="black"
        boxShadow={useColorModeValue("6px 6px 0 black", "6px 6px 0 cyan")}
      >
        <Box h={"200px"} borderBottom={"1px"} borderColor="black">
          <Img
            src={item.thumbnail}
            roundedTop={"sm"}
            objectFit="cover"
            h="full"
            w="full"
            alt={"Blog Image"}
          />
        </Box>
        <Box p={4}>
          <Heading color={"black"} fontSize={"2xl"} noOfLines={1}>
            {item.title}
          </Heading>
          <Text color={"gray.500"} noOfLines={2}>
            {item.description}
          </Text>
          <Box
            bg="gold"
            display={"inline-block"}
            px={2}
            py={1}
            color="white"
            mb={2}
          >
            <Text fontSize={"xs"} fontWeight="medium">
              ★ {item.rating}
            </Text>
          </Box>
          <Box
            bg="black"
            display={"inline-block"}
            px={2}
            py={1}
            color="white"
            mb={2}
          >
            <Text fontSize={"xs"} fontWeight="medium">
              ${item.price}
            </Text>
          </Box>
        </Box>
        <HStack borderTop={"1px"} color="black">
          <Flex
            p={4}
            alignItems="center"
            justifyContent={"space-between"}
            roundedBottom={"sm"}
            cursor={"pointer"}
            w="full"
          >
            <Link to={`/item/${item.id}`}>
              <Text fontSize={"md"} fontWeight={"semibold"}>
                View more
              </Text>
            </Link>
            <BsArrowUpRight />
          </Flex>
        </HStack>
      </Box>
    </Center>
  );
};

export const ItemListContainer = ({ products }) => {
  return (
    <Flex wrap={"wrap"}>
      {products.map((item) => {
        return <Item key={item.id} item={item} />;
      })}
    </Flex>
  );
};
