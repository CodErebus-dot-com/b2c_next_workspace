import { extendTheme } from "@chakra-ui/react";

const colors = {
  brand: {
    900: "#1a365d",
    800: "#153e75",
    700: "#2a69ac",
    link: "#3366cc",
    error: "#af0808",
  },
};

const breakpoints = {};

const theme = extendTheme({
  colors,
  breakpoints,
});

export default theme;
