import {
  Box,
  Button,
  Center,
  Flex,
  Image,
 
  Spacer,
  Text,
} from "@chakra-ui/react";
import React from "react";

export const ProductCard = ({ id, title, description, image, price }) => {
  return (
    <Box borderWidth="1px" borderRadius="lg" p={4}>
      <Center>
        <Image src={image} objectFit="cover" alt="" />
      </Center>
      <Flex direction={"column"} justifyContent="space-between" marginTop={4}>
        <Box>
          <Text>{title}</Text>
          <Text noOfLines={2}>{description}</Text>
        </Box>
        <Spacer/>
        <Flex align="center" mt={4} justifyContent="space-around">
          <Text>{price}</Text>
          <Button variant="outline" colorScheme="pink">
            Add To Cart
          </Button>
        </Flex>
      </Flex>
    </Box>
  );
};
