import React from "react";
import {
  Box,
  Flex,
  Text,
  Button,
  Heading,
  IconButton,
  useColorModeValue,
  Stack,
  Popover,
  PopoverTrigger,
  Link,
  useBreakpointValue,
  Collapse,
  useDisclosure,
  Badge,
  Avatar,
} from "@chakra-ui/react";
import { AiOutlineMenuUnfold, AiFillCloseCircle } from "react-icons/ai";
import { BsBasket3 } from "react-icons/bs";
import { useNavigate } from "react-router-dom";

const DesktopNav = () => {
  const linkColor = useColorModeValue("gray.600", "gray.200");
  const linkHoverColor = useColorModeValue("gray.800", "white");
  return (
    <Stack direction={"row"} spacing={4}>
      {/* {NAVITEMS.map((navItem) => (
        <Box key={navItem.label}>
          <Popover trigger={"hover"} placement={"bottom-start"}>
            <PopoverTrigger>
              <Link
                p={8}
                py={10}
                href={navItem.href ?? "#"}
                fontSize={"inherit"}
                fontWeight={"semibold"}
                fontFamily={"Cormorant"}
                color={linkColor}
                _hover={{
                  textDecoration: "none",
                  color: linkHoverColor,
                }}
              >
                {navItem.label}
              </Link>
            </PopoverTrigger>
          </Popover>
        </Box>
      ))} */}
    </Stack>
  );
};

const MobiletopNav = () => {
  //   const { isOpen, onToggle } = useDisclosure();
  const textcolor = useColorModeValue("gray.600", "gray.200");
  return (
    <Stack
      bg={useColorModeValue("white", "gray.800")}
      p={4}
      display={{ md: "none" }}
    >
      {NAVITEMS.map((navItem) => (
        <Stack spacing={4}>
          <Flex
            py={2}
            as={Link}
            justify={"space-between"}
            align={"center"}
            _hover={{
              textDecoration: "none",
            }}
          >
            <Text fontWeight={600} color={textcolor}>
              {navItem.label}
            </Text>
          </Flex>
        </Stack>
      ))}
      <Stack
        flex={{ base: 1, md: 0 }}
        justify={"center"}
        direction={"column"}
        spacing={6}
      >
        {/* <Box>
          <IconButton
            backgroundColor={"gray.200"}
            variant={"ghost"}
            borderRadius={"full"}
            //   as={"a"}
          >
            <BsBasket3 size={"20"} />
          </IconButton>
        </Box> */}
        <Flex>
          <IconButton
            // display={{ base: "none", md: "inline-flex" }}
            variant={"ghost"}
            borderRadius={"full"}
            // as={"a"}
          >
            <BsBasket3 size={"20"} />
          </IconButton>
          <Box ml="1" fontSize="0.8em" colorScheme="green">
            <Badge colorScheme="green" rounded={"full"} ml="-2" zIndex={"2"}>
              23
            </Badge>
          </Box>
          <Stack spacing={"6"}>
            <Button as={"a"} fontSize={"sm"} fontWeight={400} variant={"link"}>
              Sign In
            </Button>
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
              Sign Up
            </Button>
          </Stack>
        </Flex>
        {/*  */}
      </Stack>
    </Stack>
  );
};

const Navbar = () => {
  const { isOpen, onToggle } = useDisclosure();
  const navigate = useNavigate();
  return (
    <Box>
      <Flex
        as="header"
        position="fixed"
        w="100%"
        zIndex={"2"}
        bg={useColorModeValue("white", "gray.800")}
        color={useColorModeValue("gray.600", "white")}
        minH={"60px"}
        py={{ base: 4 }}
        px={{ base: 4 }}
        borderBottom={0.4}
        shadow={"sm"}
        borderStyle={"inherit"}
        borderColor={useColorModeValue("gray.200", "gray.900")}
        align={"center"}
      >
        <Flex
          flex={{ base: 1, md: "auto" }}
          ml={{ base: -2 }}
          display={{ base: "flex", md: "none" }}
        >
          <IconButton
            onClick={onToggle}
            borderRadius={"full"}
            icon={
              isOpen ? (
                <AiFillCloseCircle w={6} h={6} />
              ) : (
                <AiOutlineMenuUnfold w={6} h={6} />
              )
            }
            variant={"ghost"}
            aria-label={"Toggle Navigation"}
          />
        </Flex>
        <Flex flex={{ base: 1 }} justify={{ base: "center", md: "start" }}>
          <Text
            textAlign={useBreakpointValue({ base: "center", md: "left" })}
            fontFamily={"heading"}
            color={useColorModeValue("gray.800", "white")}
          >
            <Heading fontFamily={"Cormorant"}>The Market</Heading>
          </Text>

          <Flex display={{ base: "none", md: "flex" }} ml={10}>
            <DesktopNav />
          </Flex>
        </Flex>

        <Stack
          flex={{ base: 1, md: 0 }}
          justify={"flex-end"}
          direction={"row"}
          spacing={6}
        >
          {/*  */}
          <Flex>
            <IconButton
              display={{ base: "none", md: "inline-flex" }}
              variant={"ghost"}
              borderRadius={"full"}
              // as={"a"}
            >
              <BsBasket3 size={"20"} />
            </IconButton>
            <Box ml="1" fontSize="0.8em" colorScheme="green">
              <Badge
                display={{ base: "none", md: "inline-flex" }}
                colorScheme="green"
                rounded={"full"}
                ml="-2"
                zIndex={"2"}
              >
                23
              </Badge>
            </Box>
          </Flex>
          {/*  */}

          <Button
            as={"a"}
            display={{ base: "none", md: "inline-flex" }}
            fontSize={"sm"}
            fontWeight={400}
            variant={"link"}
            href={"/login"}
          >
            Sign In
          </Button>
          <Button
            onClick={() => {
              navigate("/Register");
            }}
            display={{ base: "none", md: "inline-flex" }}
            borderRadius={"full"}
            fontSize={"sm"}
            fontWeight={600}
            color={"white"}
            bg={"black"}
            href={"/Register"}
            _hover={{
              bg: "gray.400",
            }}
          >
            Sign Up
          </Button>
        </Stack>
      </Flex>

      <Collapse in={isOpen} animateOpacity>
        <MobiletopNav />
      </Collapse>
    </Box>
  );
};
const NAVITEMS = [
  {
    label: "Home",
    href: "/",
  },
  {
    label: "Product ",
    href: "/find",
  },
  {
    label: "offers",
    href: "/offers",
  },
  {
    label: "New Design",
    href: "/New",
  },
];
export default Navbar;
