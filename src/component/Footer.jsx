import { Box, Button, Flex, HStack, Link, SimpleGrid, Text, VStack } from "@chakra-ui/react";
import React from "react";

export const Footer = () => {
  const dummyLink = new Array(12).fill(0).map((_, i) => `Link ${i + 1}`);

  return (
    <VStack py={10} bg="gray.200" mt={4}>
      <Flex align="center" justify="center">
        <SimpleGrid spacing="2rem" columns={{ base: 2, md: 3, lg: 4 }}>
          {dummyLink.map((el) => (
            <Link>
            <Button variant={"ghost"}>{el}</Button>
            </Link>
          ))}
        </SimpleGrid>
      </Flex>
      <HStack>
        <Text>&copy:{new Date().getFullYear()} Gotham Coffee Shop</Text>
        <Text>|</Text>
        <Text> All right reserved</Text>
      </HStack>
    </VStack>
  );
};
