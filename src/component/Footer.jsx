import { Box, Flex, Link, SimpleGrid, VStack } from '@chakra-ui/react'
import React from 'react'

export const Footer = () => {
    const dummyLink=new Array(12).fill(0).map((_,i)=>`Link ${i+1}`);

  return (
    
    <VStack py={10} bg="gray.200" mt={4}>
     <Flex align="center" justify="center">
        <SimpleGrid column={{base:2,md:3,lg:4}}>
{dummyLink.map((el)=>(
    <Link>{el}</Link>
))}
        </SimpleGrid>

     </Flex>
    </VStack>
   
  )
}
