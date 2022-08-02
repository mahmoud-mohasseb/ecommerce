import React, { Children } from "react";
import {
  Box,
  chakra,
  Container,
  Heading,
  Link,
  SimpleGrid,
  Stack,
  Text,
  VisuallyHidden,
  Image,
  Input,
  IconButton,
  useColorModeValue,
} from "@chakra-ui/react";
import { FaInstagram, FaTwitter, FaYoutube } from "react-icons/fa";
import { BiMailSend } from "react-icons/bi";

const SocialButton = ({ Children, label, href }) => {
  return (
    <chakra.button
      bg={useColorModeValue("blackAlpha.100", "whiteAlpha.100")}
      rounded={"full"}
      w={8}
      h={8}
      cursor={"pointer"}
      a={"a"}
      href={href}
      display={"inline-flex"}
      alignContent={"center"}
      justifyContent={"center"}
      transition={"background 0.3 ease"}
      _hover={{
        bg: useColorModeValue("blackAlpha.200", "whiteAlpha.200"),
      }}
    >
      <VisuallyHidden>{label}</VisuallyHidden>
      {Children}
    </chakra.button>
  );
};

const Footer = () => {
  return (
    <Box
      bg={useColorModeValue("gray.50", "gray.900")}
      color={useColorModeValue("gray.700", "gray.200")}
    >
      <Container as={Stack} maxW={"6xl"} py={10}>
        <SimpleGrid
          templateColumns={{ sm: "1fr 1fr", md: "2fr 1fr 1fr 2fr" }}
          spacing={8}
        >
          <Stack spacing={6} textAlign={"start"}>
            <Heading fontFamily={"Cormorant"}>The Market</Heading>
            <Text fontSize={"sm"}>The Best Shope Ever </Text>
            <Stack direction={"row"} spacing={6}>
              <IconButton icon={<FaTwitter />} rounded={"full"} />
              <IconButton icon={<FaYoutube />} rounded={"full"} />
              <IconButton icon={<FaInstagram />} rounded={"full"} />
            </Stack>
          </Stack>
          <Stack align={"flex-start"}>
            <Heading as="h5" size="sm">
              Company
            </Heading>
            <Link href={"#"}>About us</Link>
            <Link href={"#"}>Blog</Link>
            <Link href={"#"}>Contact us</Link>
            <Link href={"#"}>Pricing</Link>
            <Link href={"#"}>Testimonials</Link>
          </Stack>
          <Stack align={"flex-start"}>
            <Heading as="h5" size="sm">
              Support
            </Heading>
            <Link href={"#"}>Help Center</Link>
            <Link href={"#"}>Terms of Service</Link>
            <Link href={"#"}>Legal</Link>
            <Link href={"#"}>Privacy Policy</Link>
            <Link href={"#"}>Status</Link>
          </Stack>
          <Stack align={"flex-start"}>
            <Heading as="h3" size="lg">
              Stay up to date
            </Heading>
            <Stack direction={"row"}>
              <Input
                placeholder={"Your email address"}
                rounded={"full"}
                bg={useColorModeValue("blackAlpha.100", "whiteAlpha.100")}
                border={0}
                _focus={{
                  bg: "whiteAlpha.300",
                }}
              />
              <IconButton
                bg={useColorModeValue("black", "gray.200")}
                color={useColorModeValue("white", "gray.200")}
                rounded={"full"}
                icon={
                  <BiMailSend color={useColorModeValue("white", "black")} />
                }
              />
            </Stack>
            <Stack align={"flex-start"}>
              <Heading as="h4" size="sm">
                Payment
              </Heading>
              <Image
                w={"200px"}
                h={"100px"}
                src="https://freepngimg.com/thumb/credit_card/25928-1-credit-card-visa-and-master-card-file-thumb.png"
                alt="payment"
              />
            </Stack>
          </Stack>
        </SimpleGrid>
      </Container>
      <Container
        as={Stack}
        maxW={"6xl"}
        py={4}
        // direction={{ base: "column", md: "row" }}
        spacing={4}
        // justify={{ md: "space-between" }}
        align={{ md: "center" }}
      >
        <Text>
          {" "}
          © {new Date().getFullYear()} RN-CODER Templates. All rights reserved
        </Text>
      </Container>
    </Box>
  );
};

export default Footer;
