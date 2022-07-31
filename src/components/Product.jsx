import React from "react";
import {
  Box,
  Image,
  useColorModeValue,
  Stack,
  Text,
  Heading,
  IconButton,
  Flex,
} from "@chakra-ui/react";

import {
  AiOutlineSearch,
  AiOutlineShoppingCart,
  AiOutlineHeart,
} from "react-icons/ai";
import { motion } from "framer-motion";

const Product = ({ item }) => {
  return (
    <Box
      as={motion.div}
      whileHover={{ scale: [null, 1.2, 1] }}
      transition={{ duration: 0.3 }}
      role={"group"}
      p={6}
      maxW={"300px"}
      w={"full"}
      bg={useColorModeValue("white", "gray.800")}
      boxShadow={"2xl"}
      rounded={"2xl"}
      pos={"relative"}
      zIndex={1}
      cursor={"pointer"}
      _hover={{
        bg: useColorModeValue("gray.200", "gray.700"),
      }}
      _focus={{ boxShadow: "outline" }}
    >
      <Flex gap={"1"}>
        <IconButton
          rounded={"full"}
          borderRadius={"full"}
          aria-label="Search database"
          icon={<AiOutlineHeart />}
        />
        <IconButton
          rounded={"full"}
          borderRadius={"full"}
          aria-label="Search"
          icon={<AiOutlineSearch />}
        />
      </Flex>
      <Image boxSize="200px" objectFit="contain" src={item} alt="product" />

      <Stack pt={10} align={"center"}>
        <Heading fontSize={"x-large"} fontFamily={"body"} fontWeight={500}>
          Nice Chair, pink
        </Heading>

        <Stack direction={"row"} align={"center"} spacing={"8"}>
          <Text fontWeight={800} fontSize={"xl"}>
            $57
          </Text>
          <Text textDecoration={"line-through"} color={"gray.600"}>
            $199
          </Text>
          <IconButton
            rounded={"full"}
            borderRadius={"full"}
            aria-label="Cart"
            icon={<AiOutlineShoppingCart />}
          />
        </Stack>
      </Stack>
    </Box>
  );
};

export default Product;
