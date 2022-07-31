import React from "react";
import { useLocation } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import {
  Box,
  SimpleGrid,
  Image,
  useColorModeValue,
  Heading,
  Text,
  HStack,
  Input,
  Button,
  Flex,
  Stack,
  useNumberInput,
  Select,
} from "@chakra-ui/react";
import { motion } from "framer-motion";
import Slider from "react-slick";

const Product = () => {
  const location = useLocation();

  const { getInputProps, getIncrementButtonProps, getDecrementButtonProps } =
    useNumberInput({
      step: 1,
      defaultValue: 1,
      min: 1,
      max: 20,
    });

  const inc = getIncrementButtonProps();
  const dec = getDecrementButtonProps();
  const input = getInputProps();

  return (
    <>
      <Navbar />
      <Box
        height={"100hv"}
        width={"full"}
        //   overflow={"hidden"}
        p={"20"}
      >
        <SimpleGrid columns={{ base: 1, md: 2 }}>
          <Box
            as={motion.div}
            whileHover={{ scale: [null, 1.2, 1] }}
            transition={{ duration: 0.3 }}
            role={"group"}
            p={"6"}
            maxW={"400px"}
            bg={useColorModeValue("white", "gray.800")}
            boxShadow={"2xl"}
            rounded={"2xl"}
            cursor={"pointer"}
            _hover={{
              bg: useColorModeValue("gray.200", "gray.700"),
            }}
            _focus={{ boxShadow: "outline" }}
          >
            <Image
              src="https://cdn.picpng.com/t_shirts/t-shirts-view-30703.png"
              alt="payment"
            />
          </Box>

          <Box textAlign={"start"}>
            <Heading>LOUNGEWEAR LOVE</Heading>
            <Text>
              "Sed ut perspiciatis unde omnis iste natus error sit voluptatem
              accusantium doloremque laudantium, totam rem aperiam, eaque ipsa
              quae ab illo inventore veritatis et quasi architecto beatae vitae
              dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit
              aspernatur aut odit aut fugit, sed quia consequuntur magni dolores
              eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam
              est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci
              velit, sed quia non numquam eius modi tempora incidunt ut labore
              et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima
              veniam, quis nostrum exercitationem ullam corporis suscipit
              laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem
              vel eum iure reprehenderit qui in ea voluptate velit esse quam
              nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo
              voluptas nulla pariatur?"
            </Text>
            <Stack direction={"row"}>
              <Text fontSize={"3xl"}>$</Text>
              <Text fontSize={"6xl"} fontWeight={800}>
                79
              </Text>
            </Stack>
            {/*  */}
            <Flex gap="2" m={"6"}>
              <Flex gap={"2"}>
                <Text fontSize="xl">Color</Text>
                <Button bg={"red"} rounded="full" size="xs"></Button>
                <Button bg={"blue"} rounded="full" size="xs"></Button>
                <Button bg={"yellow"} rounded="full" size="xs"></Button>
              </Flex>

              <Box>
                <Select placeholder="Size" maxW="200" rounded={"full"}>
                  <option value="option1">L</option>
                  <option value="option2">XL</option>
                  <option value="option3">XXL</option>
                </Select>
              </Box>
            </Flex>
            {/*  */}

            <Flex gap="2">
              <HStack maxW={"40"}>
                <Button {...dec} rounded={"full"}>
                  -
                </Button>
                <Input rounded={"full"} {...input} />
                <Button {...inc} rounded={"full"}>
                  +
                </Button>
              </HStack>

              <Button
                borderRadius={"full"}
                fontSize={"sm"}
                fontWeight={600}
                color={"white"}
                bg={"black"}
                href={"#"}
                _hover={{
                  bg: "grey.800",
                }}
              >
                ADD TO CART
              </Button>
            </Flex>
          </Box>
        </SimpleGrid>
      </Box>
      <Footer />
    </>
  );
};

export default Product;
