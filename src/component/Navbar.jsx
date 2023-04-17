import { CloseIcon, HamburgerIcon } from "@chakra-ui/icons";
import { Box, Button, Flex, IconButton } from "@chakra-ui/react";
import React from "react";
import { Link } from "react-router-dom";
import { useBoolean } from "@chakra-ui/react";

const links = [
  {
    to: "/",
    label: "Home",
  },
  {
    to: "/about",
    label: "About",
  },
  {
    to: "/contact",
    label: "Contact",
  },
  {
    to: "/login",
    label: "Login",
  },
];

export const Navbar = () => {
  const [flag, setFlag] = useBoolean(false);

  return (
    <Box h="10vh" bgColor="teal" color="white">
      <Box pos="fixed" top="1rem" right="1rem" align="center">
        <Flex display={{ base: "none", md: "flex" }}>
          {links.map((link) => (
            <Link to={link.to}>
              <Button _hover="black" variant="ghost">
                {link.label}
              </Button>
            </Link>
          ))}
        </Flex>
        <IconButton
          onClick={setFlag.on}
          display={{ base: "block", md: "none" }}
          icon={<HamburgerIcon />}
        ></IconButton>
      </Box>
      {flag && (
        <Box
          display={{ base: "block", md: "none" }}
          pos="fixed"
          w="100vw"
          h="100vh"
          bgColor="white"
          zIndex="20"
          overflow="auto"
        >
          <Flex>
            <Box pos="fixed" top="1rem" right="1rem">
              <IconButton
                onClick={setFlag.off}
                icon={<CloseIcon />}
              ></IconButton>
            </Box>
          </Flex>

          <Flex direction="column" align="center" marginTop="3rem">
            {links.map((link) => (
              <Link to={link.to}>
                <Button variant="ghost">{link.label}</Button>
              </Link>
            ))}
          </Flex>
        </Box>
      )}
    </Box>
  );
};
