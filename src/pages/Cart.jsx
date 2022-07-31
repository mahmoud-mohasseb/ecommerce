import React from "react";
import {
  Button,
  Box,
  Flex,
  HStack,
  Input,
  Text,
  useNumberInput,
  Divider,
  Image,
  Grid,
  SimpleGrid,
  useColorModeValue,
  Stack,
} from "@chakra-ui/react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import StripeCheckout from "react-stripe-checkout";
import { useNavigate } from "react-router-dom";

const Cart = () => {
  const navigate = useNavigate();
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
        {/* <SimpleGrid
          //   columns={{ base: 1, md: 2 }}
          //   templateRows="repeat(2, 1fr)"
          templateColumns="repeat(2, 1fr)"
        > */}
        <Flex direction={{ base: "column", md: "row" }}>
          <Box
            role={"group"}
            flex="1"
            p={"6"}
            maxW={"850px"}
            bg={useColorModeValue("white", "gray.800")}
            boxShadow={"2xl"}
            rounded={"2xl"}
            cursor={"pointer"}
          >
            <Button
              borderRadius={"full"}
              fontSize={"sm"}
              fontWeight={600}
              color={"white"}
              bg={"black"}
              m={"3"}
              href={"#"}
              _hover={{
                bg: "grey.800",
              }}
              onClick={() => navigate("/")}
            >
              Continue Shopping
            </Button>
            {/*  */}
            <Stack columnGap={"6"}>
              {/*  */}
              <Box
                role={"group"}
                p={"6"}
                bg={useColorModeValue("white", "gray.800")}
                boxShadow={"2xl"}
                rounded={"2xl"}
                cursor={"pointer"}
              >
                <SimpleGrid minChildWidth="120px" spacing="40px">
                  <Image
                    boxSize="150px"
                    objectFit="cover"
                    src="https://i.ibb.co/cXFnLLV/3.png"
                    alt="Dan Abramov"
                  />
                  <Stack>
                    <Stack direction={"row"}>
                      <Text fontWeight={"bold"}>Product :</Text>
                      <Text>AUTUMN Price</Text>
                    </Stack>

                    <Stack direction={"row"}>
                      <Text fontWeight={"bold"}>ID :</Text>
                      <Text>79fsnfndnjfdf</Text>
                    </Stack>

                    <Stack direction={"row"}>
                      <Button bg={"blue"} rounded="full" size="xs"></Button>
                    </Stack>

                    <Stack direction={"row"}>
                      <Text fontWeight={"bold"}>Size :</Text>
                      <Text>M</Text>
                    </Stack>
                  </Stack>
                  {/*  */}
                  <Stack>
                    <HStack maxW={"40"}>
                      <Button {...dec} rounded={"full"}>
                        -
                      </Button>
                      <Input
                        rounded={"full"}
                        {...input}
                        variant={"unstyled"}
                        textAlign={"center"}
                      />
                      <Button {...inc} rounded={"full"}>
                        +
                      </Button>
                    </HStack>
                    <Stack direction={"row"} p={"9"}>
                      <Text fontWeight={"bold"}>Price :</Text>
                      <Text fontSize={"3xl"}>$</Text>
                      <Text fontSize={"3xl"} fontWeight={800}>
                        79
                      </Text>
                    </Stack>
                  </Stack>
                </SimpleGrid>
              </Box>
              {/*  */}
              <Box
                role={"group"}
                p={"6"}
                bg={useColorModeValue("white", "gray.800")}
                boxShadow={"2xl"}
                rounded={"2xl"}
                cursor={"pointer"}
              >
                <SimpleGrid minChildWidth="120px" spacing="40px">
                  <Image
                    boxSize="150px"
                    objectFit="cover"
                    src="https://i.ibb.co/cXFnLLV/3.png"
                    alt="Dan Abramov"
                  />
                  <Stack>
                    <Stack direction={"row"}>
                      <Text fontWeight={"bold"}>Product :</Text>
                      <Text>AUTUMN Price</Text>
                    </Stack>

                    <Stack direction={"row"}>
                      <Text fontWeight={"bold"}>ID :</Text>
                      <Text>79fsnfndnjfdf</Text>
                    </Stack>

                    <Stack direction={"row"}>
                      <Button bg={"red"} rounded="full" size="xs"></Button>
                    </Stack>

                    <Stack direction={"row"}>
                      <Text fontWeight={"bold"}>Size :</Text>
                      <Text>M</Text>
                    </Stack>
                  </Stack>
                  {/*  */}
                  <Stack>
                    <HStack maxW={"40"}>
                      <Button {...dec} rounded={"full"}>
                        -
                      </Button>
                      <Input
                        rounded={"full"}
                        {...input}
                        variant={"unstyled"}
                        textAlign={"center"}
                      />
                      <Button {...inc} rounded={"full"}>
                        +
                      </Button>
                    </HStack>
                    <Stack direction={"row"} p={"9"}>
                      <Text fontWeight={"bold"}>Price :</Text>
                      <Text fontSize={"3xl"}>$</Text>
                      <Text fontSize={"3xl"} fontWeight={800}>
                        79
                      </Text>
                    </Stack>
                  </Stack>
                </SimpleGrid>
              </Box>
            </Stack>
          </Box>

          {/*  */}
          <Box
            borderRadius="lg"
            m={"20"}
            borderWidth="1px"
            role={"group"}
            p={"6"}
            maxW={"350px"}
            maxH={"350px"}
            bg={useColorModeValue("white", "gray.800")}
            boxShadow={"2xl"}
            cursor={"pointer"}
          >
            <Text fontFamily="Cormorant">ODER SUMMARY</Text>
            <Divider variant={"dashed"} orientation="horizontal" m={"2"} />
            {/* <Flex gap={"150"}>
              <Text fontFamily="Cormorant">Subtotal</Text>
              <Text fontFamily="Cormorant">70</Text>
            </Flex> */}
            <Grid templateColumns="repeat(2, 1fr)">
              <Text fontFamily="Cormorant">Subtotal</Text>
              <Text fontFamily="Cormorant">70</Text>
            </Grid>
            <Divider variant={"dashed"} orientation="horizontal" m={"2"} />
            <Grid templateColumns="repeat(2, 1fr)">
              <Text fontFamily="Cormorant">Estimiting Shopping</Text>
              <Text fontFamily="Cormorant">40</Text>
            </Grid>
            <Divider variant={"dashed"} orientation="horizontal" m={"2"} />
            <Grid templateColumns="repeat(2, 1fr)">
              <Text fontFamily="Cormorant">Shipping Discount</Text>
              <Text fontFamily="Cormorant">-5</Text>
            </Grid>
            <Divider orientation="horizontal" m={"2"} />
            <Grid templateColumns="repeat(2, 1fr)">
              <Text fontFamily="Cormorant">Total</Text>
              <Text fontFamily="Cormorant">200</Text>
            </Grid>

            <StripeCheckout
              name="The Market"
              image="https://avatars.githubusercontent.com/u/66387837?v=4"
              billingAddress
              shippingAddress
              // description={`Your total is $${cart.total}`}
              // amount={cart.total * 100}
              // token={onToken}
              // stripeKey={KEY}
            >
              <Button
                borderRadius={"full"}
                fontSize={"sm"}
                fontWeight={600}
                color={"white"}
                bg={"black"}
                href={"#"}
                m={"10"}
                _hover={{
                  bg: "grey.800",
                }}
              >
                CHECKOUT NOW
              </Button>
            </StripeCheckout>
          </Box>
        </Flex>
        {/* </SimpleGrid> */}
      </Box>
      <Footer />
    </>
  );
};

export default Cart;
