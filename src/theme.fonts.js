import { extendTheme } from "@chakra-ui/react";

const theme = extendTheme({
  fonts: {
    heading: `'Heading Font Name', sans-serif`,
    body: `'Body Font Name', sans-serif`,
    Cormorant: `'Cormorant SC', serif`,
    Roboto: `'Roboto Condensed', sans`,
    Pacifico: `'Pacifico', cursive;`,
    Sacramento: `'Sacramento', cursive;`,
  },
});

export default theme;
