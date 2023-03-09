"use client";
import Image from "next/image";

import { Box, Button, Container, Flex, SimpleGrid } from "@chakra-ui/react";
import logo from "../../public/logo4.png";
import React from "react";
import Link from "next/link";

export default function Header() {
  return (
    <>
      <Flex
        boxShadow='lg'
        bg='purple.300'
        px='10px'
        gap={["10px", "20px", "30px"]}
      >
        <Box w={["50px", "70px", "140px"]}>
          <Image src={logo} alt='Panavers DAO'></Image>
        </Box>

        <Flex
          gap={["10px", "20px", "30px"]}
          color='white'
          fontSize={["10px", "12px", "18px"]}
          fontFamily='heading'
          placeItems='center'
        >
          <Link href='/'>Home</Link>
          <Link href='/About'>About</Link>
          <Link href='/Courses'>Courses</Link>
          <Link href='/News'>News</Link>
          <Link href='/Contact'>Contact</Link>
        </Flex>

        <Box alignItems='center' w="100%" display={['none','none','block']} m='auto'>
          <Flex gap={5} float='right' pr='30px' >
            <Button  colorScheme='teal' size={['xs','xs','xs','sm']}>
              <Link href='https://portal.piaic.org/signup' target='_blank'>
                Register
              </Link>
            </Button>
            <Button  colorScheme='teal' size={['xs','xs','xs','sm']}>
              <Link href='https://portal.piaic.org/' target='_blank'>
                Login
              </Link>
            </Button>
          </Flex>
        </Box>
      </Flex>
    </>
  );
}
