"use client";

import {
  Box,
  Button,
  Center,
  Container,
  Flex,
  Heading,
  SimpleGrid,
  Text,
  Link,
} from "@chakra-ui/react";
import React from "react";
import Image from "next/image";
import logo from "../../public/logo4.png";
import zia from "../../public/Zia.jpg";
import zeeshan from "../../public/zeeshan.jpg";
import Daynial from "../../public/Daniyal.jpg";
import adil from "../../public/adil.jpg";
import hira from "../../public/hira.jpg";


export default function page() {
  return (
    <>
      <Box
        pt='25px'
        bg='linear-gradient(to right,#E2E8F0,#BEE3F8,#CBD5E0,#B2F5EA,#E6FFFA)'
      >
        <Container maxW='1400px' maxH='auto'>
          <SimpleGrid columns={[1, 1, 2]} gap={5} m='auto'>
            <Box m='auto'>
              <Image src={logo} alt='Panaverse'></Image>
            </Box>
            <Box pt='20px' px='-15px'>
              <Text
                fontSize='20px'
                textAlign='justify'
                fontFamily='-moz-initial'
              >
                Under the umbrela PIAIC the main purpose of Panaverse DAO is to
                reshape Pakistan by revolutionizing education, research, and
                business by adopting latest, cutting-edge technologies. Experts
                are calling this the 4th industrial revolution. We want Pakistan
                to become a global hub for Web 3.0 and Metaverse,AI, data
                science, cloud native computing, edge computing, blockchain,
                augmented reality, and internet of things.For achiving this goal
                we have a Highly Trained, Motivaited,Skilled proffessionals.
              </Text>
            </Box>
          </SimpleGrid>
          <Heading pt='32px' textAlign='center' color='purple.900'>
            {" "}
            Faculty Members
          </Heading>

          <SimpleGrid pt='20px' columns={[1, 1, 2]} px={[2, 6, 16]}>
            <Box px={[1, 3, 12]} m='auto'>
              <Heading fontSize='20px'>Zia Khan</Heading>
              <Text textAlign='justify'>
                CEO of Panacloud & Panaverse Volunteer COO, Presidential
                Initiative for AI and Computing (PIAIC). Founding Member,
                Operation Unicorn Movement. Lead Software Developer, Unisoncare
                Corp. Lead Software Engineer, Xenosys Corporation
              </Text>
            </Box>
            <Box m='auto'>
              <Box borderRadius='full' overflow='hidden' w='fit-content'>
                <Image width={200} src={zia} alt='Zia Khan'></Image>
              </Box>
            </Box>
          </SimpleGrid>

          <SimpleGrid pt='20px' columns={[1, 1, 2]} px={[2, 6, 16]}>
            <Box px={[1, 3, 12]} m='auto'>
              <Heading fontSize='20px'>Zeeshan Hanif</Heading>
              <Text textAlign='justify'>
                Head of Software Development at Panacloud Pvt Ltd Chief
                Technology Officer (CTO) Panacloud Pvt Ltd Principal Software
                Engineer 360training.
              </Text>
            </Box>
            <Box m='auto'>
              <Box borderRadius='full' overflow='hidden' w='fit-content'>
                <Image width={200} src={zeeshan} alt='Zeeshan Hanif'></Image>
              </Box>
            </Box>
          </SimpleGrid>
          <SimpleGrid pt='20px' columns={[1, 1, 2]} px={[2, 6, 16]}>
            <Box px={[1, 3, 12]} m='auto'>
              <Heading fontSize='20px'>Daniyal Nagori</Heading>
              <Text textAlign='justify'>
                Director Panacloud. CEO PIAIC. CEO ProStack (Pvt) Ltd Chief
                Technology Officer Travel club IQ.
              </Text>
            </Box>
            <Box m='auto'>
              <Box borderRadius='full' overflow='hidden' w='fit-content'>
                <Image width={200} src={Daynial} alt='Daniyal Aziz'></Image>
              </Box>
            </Box>
          </SimpleGrid>
          <SimpleGrid pt='20px' columns={[1, 1, 2]} px={[2, 6, 16]}>
            <Box px={[1, 3, 12]} m='auto'>
              <Heading fontSize='20px'>Adil Altaf</Heading>
              <Text textAlign='justify'>
                Internet-Scale Multi-Cloud Global App Architect. Full Stack
                Cloud Developer. Continuous Innovation Leader
              </Text>
            </Box>
            <Box m='auto'>
              <Box borderRadius='full' overflow='hidden' w='fit-content'>
                <Image width={200} src={adil} alt='Adil Altaf'></Image>
              </Box>
            </Box>
          </SimpleGrid>
          <SimpleGrid pt='20px' columns={[1, 1, 2]} px={[2, 6, 16]}>
            <Box px={[1, 3, 12]} m='auto'>
              <Heading fontSize='20px'>Hira Khan</Heading>
              <Text textAlign='justify'>
                Director at the Women Empowerment Div. of the Presidential
                Initiative for Artificial Intelligence & Computing (PIAIC).
              </Text>
            </Box>
            <Box m='auto'>
              <Box borderRadius='full' overflow='hidden' w='fit-content'>
                <Image width={200} src={hira} alt='Hira Khan'></Image>
              </Box>
            </Box>
          </SimpleGrid>
        </Container>
      </Box>
    </>
  );
}
