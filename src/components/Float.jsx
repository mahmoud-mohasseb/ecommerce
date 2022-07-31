import React from "react";
import { Box, Stack, useColorMode, IconButton } from "@chakra-ui/react";
import { FaFacebookF } from "react-icons/fa";
import { BsTwitter } from "react-icons/bs";
import { AiFillYoutube } from "react-icons/ai";
import { MdDarkMode, MdLightMode } from "react-icons/md";

const Float = () => {
  const { colorMode, toggleColorMode } = useColorMode();
  return (
    <Box position={"fixed"} top={"300px"} zIndex={"2"} left={"2"}>
      <Stack
        flex={{ base: 1, md: 0 }}
        justify={"center"}
        direction={"column"}
        spacing={6}
        py={"2"}
        w={"10"}
        borderRadius={"2xl"}
        align="center"
      >
        <FaFacebookF size={"30"} />
        <BsTwitter size={"30"} />
        <AiFillYoutube size={"30"} />
        <IconButton borderRadius={"full"} onClick={toggleColorMode}>
          {colorMode === "light" ? (
            <MdDarkMode size={"20"} />
          ) : (
            <MdLightMode size={"20"} />
          )}
        </IconButton>
      </Stack>
    </Box>
  );
};

export default Float;
