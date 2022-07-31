import React from "react";
import Navbar from "../components/Navbar";
import Products from "../components/Products";
import Footer from "../components/Footer";
import {
  Select,
  Stack,
  InputGroup,
  InputLeftAddon,
  Input,
  Box,
  Divider,
  useColorModeValue,
  SimpleGrid,
  Flex,
  Center,
} from "@chakra-ui/react";
const ProductList = () => {
  return (
    <>
      <Navbar />
      <Center>
        <SimpleGrid
          templateColumns={{ sm: "1fr", md: "1fr 1fr 1fr " }}
          gap={6}
          py={"20"}
        >
          <InputGroup bg={useColorModeValue("gray.200", "gray.900")}>
            <InputLeftAddon children="Fliter Products" />
            <Select placeholder="Color">
              <option value="option1">RED</option>
              <option value="option2">Blue</option>
              <option value="option3">White</option>
              <option value="option3">Gray</option>
            </Select>
          </InputGroup>
          <InputGroup bg={useColorModeValue("gray.200", "gray.900")}>
            <InputLeftAddon children="Size" />
            <Select>
              <option value="option1">L</option>
              <option value="option2">XL</option>
              <option value="option3">XXL</option>
              <option value="option3">XXXL</option>
            </Select>
          </InputGroup>

          <InputGroup bg={useColorModeValue("gray.200", "gray.900")}>
            <InputLeftAddon children="Fliter Products" maxW={"80"} />
            <Select>
              <option value="option1">NEWST</option>
              <option value="option2">OLDEST</option>
            </Select>
          </InputGroup>
        </SimpleGrid>
      </Center>
      <Products />

      <Footer />
    </>
  );
};

export default ProductList;
