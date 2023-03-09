"use client";

import {
  Box,
  Container,
  Grid,
  Heading,
  HStack,
  SimpleGrid,
  Text,
} from "@chakra-ui/react";
import Image from "next/image";
import img from "../../public/logo2.png";
import React from "react";
import Link from "next/link";

export default function Footer() {
  return (
    <>
      <Box background='gray.700'>
        <Container maxW='1200px'>
          <SimpleGrid
            paddingY='20px'
            columns={[1,1,4]}
            gap='40px'
            textAlign='left'
            color='white'
          >
            <Box >
              <Heading fontSize='20px'>About US</Heading>
              
                <Image width={100} src={img} alt='Panaverse'></Image>
              
              <Text pt='5px'
              pr='20px' fontSize='sm'>
                The internet is without a doubt the most important technological
                development in human history. 
              </Text>
            </Box>
            <Box >
              <Heading fontSize='20px' >Links</Heading>
              <Grid pt='20px' fontSize='sm'>
                <Link href='/'>Home</Link>
                <Link href='/About'>About</Link>
                <Link href='/Courses'>Courses</Link>
                <Link href='/News'>News</Link>
                <Link href='/Contact'>Contact</Link>
              </Grid>
            </Box>
            <Box >
              <Heading fontSize='20px'>Follow Us</Heading>
              <Grid pt='20px' fontSize='sm'>
                <HStack>
                  <Box>
                <Link href='/'>Facebook</Link>
                </Box>
                </HStack>
                <Link href='/'>Twitter</Link>
                <Link href='/'>YouTube</Link>
                <Link href='/'>Github</Link>
                <Link href='/'>Linkdin</Link>
              </Grid>
            </Box>
            <Box >
              <Heading fontSize='20px' pb='15px'>Contact Us</Heading>
              <Grid pt='20px' fontSize='sm'>
                <Link href='/'>+92 21 1234567</Link>
                <Link href='/'>abcsd_edghr@gmail.com</Link>
                <Link href='/'>panaverse.co</Link>
                <Text> Site Area, New Karchi.Pakistan</Text>
              </Grid>
              
            </Box>
          </SimpleGrid>
          
        </Container>
        <Box bg='blue.300'w='auto' textAlign='center'>
            <Text> 
            &#169; Copy rights are reserved by Asif Raza </Text>
          </Box>
      </Box>
    </>
  );
}
