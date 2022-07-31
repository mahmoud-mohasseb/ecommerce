import {
  Flex,
  Box,
  FormControl,
  FormLabel,
  Input,
  InputGroup,
  HStack,
  InputRightElement,
  Stack,
  Button,
  Heading,
  Text,
  useColorModeValue,
  Link,
  SimpleGrid,
  IconButton,
} from "@chakra-ui/react";
import { useState } from "react";
import { ViewIcon, ViewOffIcon } from "@chakra-ui/icons";
import { MdArrowBackIos } from "react-icons/md";
import { useNavigate } from "react-router-dom";

export default function Register() {
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setshowConfirmPassword] = useState(false);
  const navigate = useNavigate();

  return (
    <SimpleGrid columns={{ base: 1, md: 2 }}>
      <Box
        w="100%"
        h="100%"
        bgPosition={"center"}
        bgImage="url('https://images.pexels.com/photos/6984661/pexels-photo-6984661.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940')"
        bgRepeat="no-repeat"
      >
        <Stack py={12} px={6}>
          <Flex>
            <IconButton
              // variant="outline"
              colorScheme={"yellow"}
              rounded={"full"}
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
            <Heading fontSize={"4xl"} textAlign={"center"}>
              Sign up
            </Heading>
            <Text fontSize={"lg"} color={"gray.600"}>
              to enjoy all of our cool features ✌️
            </Text>
          </Stack>
          <Box
            rounded={"3xl"}
            bg={useColorModeValue("white", "gray.700")}
            boxShadow={"lg"}
            p={6}
          >
            <Stack spacing={4}>
              <HStack>
                <Box>
                  <FormControl id="firstName" isRequired>
                    <FormLabel>First Name</FormLabel>
                    <Input type="text" rounded={"full"} />
                  </FormControl>
                </Box>
                <Box>
                  <FormControl id="lastName">
                    <FormLabel>Last Name</FormLabel>
                    <Input type="text" rounded={"full"} />
                  </FormControl>
                </Box>
              </HStack>
              <FormControl id="email" isRequired>
                <FormLabel>Email address</FormLabel>
                <Input type="email" rounded={"full"} />
              </FormControl>
              <FormControl id="password" isRequired>
                <FormLabel>Password</FormLabel>
                <InputGroup>
                  <Input
                    type={showPassword ? "text" : "password"}
                    rounded={"full"}
                  />
                  <InputRightElement h={"full"}>
                    <Button
                      rounded={"full"}
                      variant={"ghost"}
                      onClick={() =>
                        setShowPassword((showPassword) => !showPassword)
                      }
                    >
                      {showPassword ? <ViewIcon /> : <ViewOffIcon />}
                    </Button>
                  </InputRightElement>
                </InputGroup>
              </FormControl>
              {/*  */}
              <FormControl id="password" isRequired>
                <FormLabel>Confirm Password</FormLabel>
                <InputGroup>
                  <Input
                    type={showConfirmPassword ? "text" : "password"}
                    rounded={"full"}
                  />
                  <InputRightElement h={"full"}>
                    <Button
                      rounded={"full"}
                      variant={"ghost"}
                      onClick={() =>
                        setshowConfirmPassword(
                          (showConfirmPassword) => !showConfirmPassword
                        )
                      }
                    >
                      {showConfirmPassword ? <ViewIcon /> : <ViewOffIcon />}
                    </Button>
                  </InputRightElement>
                </InputGroup>
              </FormControl>
              <Stack spacing={10} pt={2}>
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
                  Sign up
                </Button>
              </Stack>
              <Stack pt={6}>
                <Text align={"center"}>
                  Already a user? <Link color={"blue.400"}>Login</Link>
                </Text>
              </Stack>
            </Stack>
          </Box>
        </Stack>
      </Flex>
    </SimpleGrid>
  );
}
