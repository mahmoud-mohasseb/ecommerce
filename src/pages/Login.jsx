import React from "react";
import {
  Box,
  Flex,
  Stack,
  Heading,
  Text,
  Container,
  Input,
  Button,
  SimpleGrid,
  Checkbox,
  FormControl,
  FormLabel,
  Link,
  useColorModeValue,
  IconButton,
} from "@chakra-ui/react";
import { MdArrowBackIos } from "react-icons/md";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const navigate = useNavigate();
  return (
    <Box>
      <SimpleGrid columns={{ base: 1, md: 2 }}>
        <Box
          w="100%"
          h="100%"
          //   bgPosition={"center"}
          bgImage="url('https://static.vecteezy.com/system/resources/previews/001/447/182/non_2x/many-clothes-hanging-on-a-clothes-rack-free-vector.jpg')"
          bgRepeat="no-repeat"
        >
          <Stack py={12} px={6}>
            <Flex>
              <IconButton
                // variant="outline"
                colorScheme={"yellow"}
                rounded={"full"}
                // aria-label="back"
                icon={<MdArrowBackIos />}
                onClick={() => {
                  navigate("/");
                }}
              />
            </Flex>
          </Stack>
          {/* <Heading
            pt={"50"}
            lineHeight={1.1}
            fontSize={{ base: "3xl", sm: "4xl", md: "5xl", lg: "6xl" }}
            fontFamily={"Cormorant"}
          >
            The Market
          </Heading> */}
        </Box>

        <Flex
          minH={"100vh"}
          align={"center"}
          justify={"center"}
          bg={useColorModeValue("gray.50", "gray.800")}
        >
          <Stack spacing={8} mx={"auto"} maxW={"lg"} py={12} px={6}>
            <Stack align={"center"}>
              <Heading fontSize={"4xl"} fontFamily={"Cormorant"}>
                Sign in to your account
              </Heading>
              <Text fontSize={"lg"} color={"gray.600"} fontFamily={"Cormorant"}>
                to Market all of our cool <Link color={"blue.400"}>offers</Link>
              </Text>
            </Stack>
            <Box
              rounded={"3xl"}
              bg={useColorModeValue("white", "gray.700")}
              boxShadow={"lg"}
              p={8}
            >
              <Stack spacing={4}>
                <FormControl id="email">
                  <FormLabel>Email address</FormLabel>
                  <Input type="email" rounded={"full"} />
                </FormControl>
                <FormControl id="password">
                  <FormLabel>Password</FormLabel>
                  <Input type="password" rounded={"full"} />
                </FormControl>
                <Stack spacing={10}>
                  <Stack
                    direction={{ base: "column", sm: "row" }}
                    align={"start"}
                    justify={"space-between"}
                  >
                    <Checkbox>Remember me</Checkbox>
                    <Link color={"blue.400"}>Forgot password?</Link>
                  </Stack>
                  <Button
                    borderRadius={"full"}
                    fontSize={"sm"}
                    fontWeight={600}
                    color={"white"}
                    bg={"black"}
                    href={"#"}
                    _hover={{
                      bg: "gray.800",
                    }}
                  >
                    Sign in
                  </Button>
                </Stack>
              </Stack>
            </Box>
          </Stack>
        </Flex>
      </SimpleGrid>
      {/* </Container> */}
    </Box>
  );
};

export default Login;
