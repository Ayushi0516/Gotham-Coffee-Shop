import { CloseIcon, HamburgerIcon } from "@chakra-ui/icons";
import { Box, Button, Flex, IconButton } from "@chakra-ui/react";
import React from "react";
import { Link } from "react-router-dom";

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
  return (
    <Box>
      <Box pos="fixed" top="1rem" right="1rem" align="center">
        <Flex display={{ base: "none", md: "flex" }}>
          {links.map((link) => (
            <Link to={link.to}>
              <Button variant="ghost">{link.label}</Button>
            </Link>
          ))}
        </Flex>
        <IconButton
          display={{ base: "block", md: "none" }}
          icon={<HamburgerIcon />}
        ></IconButton>
      </Box>
      <Box pos="fixed" w="100vw" h="100vh" bgColor="white"
       zIndex="20" overflow="auto">
        <Flex>
            <Box>
                <IconButton icon={<CloseIcon/>}></IconButton>
            </Box>

        </Flex>
        <Flex>
          <Flex direction="column" align="center">
            {links.map((link) => (
              <Link to={link.to}>
                <Button variant="ghost">{link.label}</Button>
              </Link>
            ))}
          </Flex>
        </Flex>
      </Box>
    </Box>
  );
};
