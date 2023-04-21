import { Box, Button, Center, Flex, Heading, Text, VStack } from "@chakra-ui/react";
import React from "react";

export const About = () => {
  return (
    <VStack minHeight="600px" align="center" justifyContent="center">
      <Box>
        <Heading as="h1" size="2xl">
          Welcome to Gotham Coffee Shop
        </Heading>
        <Center>
        <Text fontSize="xl">We are in buisness since 1950.</Text>
        </Center>
      </Box>
      <Flex
        mt={10}
        alignItems="center"
        direction={{ base: "column", md: "row" }}
        gap="10px"
      >
        <Button variant="outline" colorScheme="pink">
          Continue Shopping
        </Button>
        <Button variant="outline" colorScheme="pink">
          Learn More
        </Button>
      </Flex>
    </VStack>
  );
};
