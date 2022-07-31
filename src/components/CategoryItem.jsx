import React from "react";
import {
  Box,
  Center,
  useColorModeValue,
  Stack,
  Heading,
  Text,
  Image,
  Button,
} from "@chakra-ui/react";
import { motion } from "framer-motion";

const CategoryItem = ({ item }) => {
  return (
    <Center py={12}>
      <Box
        role={"group"}
        p={6}
        maxW={"330px"}
        w={"full"}
        bg={useColorModeValue("white", "gray.800")}
        boxShadow={"2xl"}
        rounded={"lg"}
        pos={"relative"}
        zIndex={1}
      >
        <Box
          as={motion.div}
          whileHover={{ scale: [null, 1.2, 1] }}
          rounded={"lg"}
          mt={-12}
          pos={"relative"}
          height={"230px"}
          _after={{
            transition: "all .3s ease",
            content: '""',
            w: "full",
            h: "full",
            pos: "absolute",
            top: 5,
            left: 0,
            backgroundImage: `url(${item.img})`,
            filter: "blur(15px)",
            zIndex: -1,
          }}
          _groupHover={{
            _after: {
              filter: "blur(20px)",
            },
          }}
        >
          <Image
            rounded={"lg"}
            height={230}
            width={282}
            objectFit={"cover"}
            src={item.img}
          />
        </Box>
        <Stack pt={10} align={"center"}>
          <Text color={"gray.500"} fontSize={"sm"} textTransform={"uppercase"}>
            Brand
          </Text>
          <Heading fontSize={"2xl"} fontFamily={"Cormorant"} fontWeight={500}>
            {item.title}
          </Heading>
          <Stack direction={"row"} align={"center"}>
            <Text
              color={"gray.500"}
              fontSize={"sm"}
              textTransform={"uppercase"}
            >
              {item.cat}
            </Text>
          </Stack>
          <Button
            display={{ base: "none", md: "inline-flex" }}
            borderRadius={"full"}
            fontSize={"sm"}
            fontWeight={600}
            color={"white"}
            bg={"blackAlpha.400"}
            href={"#"}
            _hover={{
              bg: "black",
            }}
          >
            SHOP NOW
          </Button>
        </Stack>
      </Box>
    </Center>
  );
};

export default CategoryItem;
