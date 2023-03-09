"use client";

import { data } from "../course";
import {
  Box,
  Button,
  Center,
  Container,
  Flex,
  Heading,
  Link,
  Text,
} from "@chakra-ui/react";

import React from "react";
import Image from "next/image";
import web3 from "../../public/coursespics/metaverse.jpg";
import AI from "../../public/coursespics/AI.jpg";
import BC from "../../public/coursespics/blockchain.jpg";
import CNC from "../../public/coursespics/CNC.png";
import iot from "../../public/coursespics/IOT.png";
import qc from "../../public/coursespics/QC.jpg";

export default function page() {
  return (
    <>
      <Box bgSize='cover' bgAttachment='fixed' bgImage='../back2.jpg'>
        <Container maxW='1400'>
          <Center flexDir='column' pt='40px'>
            <Heading fontSize='4xl' fontWeight='bold' mt='20px'>
              About Programs(All)
            </Heading>
            <Text mt='20px' textAlign='justify' px={[4, 6, 10]}>
              All programs are one year and three month long in duration. Each
              program is divided into five quarters (12 weeks each).Onsite
              Classes are held once in a week. In the initial stages, Onsite
              classes will be held only on once in a week in each city ( Karchi,
              Lahore, Islamabad and Peshawar ). Each onsite class will be 4
              hours in duration per week, and two Online class will be held in
              the week of duration two hour(Zoom Sessions).For a total of 12
              hours per week and 36 hours per quarter. There will 6 sections of
              classes available. Detail of section (Courses) are below.
            </Text>
          </Center>
          <Center flexDir='column'>
            <Heading fontSize='4xl' fontWeight='bold' mt='50px'>
              Program offers
            </Heading>
            <Text mt='20px' fontSize='4xl' textAlign='center'>
              There are 6 different Specilized programs available.
            </Text>
            <Flex gap='40px' mt='50px' direction={["column", "column", "row"]}>
              <Box w='300px' h='300px'>
                <Image src={web3} alt=' Web 3.0 and Metaverse'></Image>
                <Text
                  fontSize='2xl'
                  fontWeight='medium'
                  mt='10px'
                  textAlign='center'
                >
                  1-Web 3.0 and Metaverse Development Program
                </Text>
              </Box>
              <Box w='300px' h='300px'>
                <Image src={AI} alt='Artificial Intelligence'></Image>
                <Text
                  fontSize='2xl'
                  fontWeight='medium'
                  mt='10px'
                  textAlign='center'
                >
                  2-Artificial Intelligence
                </Text>
              </Box>
            </Flex>
          </Center>
          <Center>
            <Flex gap='40px' mt='20px' direction={["column", "column", "row"]}>
              <Box w='300px' h='300px'>
                <Box>
                  <Image src={BC} alt=' BlockChain'></Image>
                </Box>
                <Text
                  fontSize='2xl'
                  fontWeight='medium'
                  mt='10px'
                  textAlign='center'
                >
                  3-BlockChain
                </Text>
              </Box>
              <Box w='300px' h='300px'>
                <Image src={CNC} alt=' Cloud Native computing'></Image>
                <Text
                  fontSize='2xl'
                  fontWeight='medium'
                  mt='10px'
                  textAlign='center'
                >
                  4-CNC
                </Text>
              </Box>
            </Flex>
          </Center>
          <Center>
            <Flex gap='40px' mt='20px' direction={["column", "column", "row"]}>
              <Box w='300px' h='300px'>
                <Image src={iot} alt=' Internet of Things'></Image>
                <Text
                  fontSize='2xl'
                  fontWeight='medium'
                  mt='10px'
                  textAlign='center'
                >
                  5-Internet of Things
                </Text>
              </Box>
              <Box w='300px' h='300px'>
                <Image src={qc} alt=' Quantom computing'></Image>
                <Text
                  fontWeight='medium'
                  fontSize='2xl'
                  mt='10px'
                  textAlign='center'
                >
                  6-Quantom Computing
                </Text>
              </Box>
            </Flex>
          </Center>
          <Center flexDir='column'>
            <Heading fontSize='4xl'>Syllabus</Heading>
            <Text mt='20px' fontSize='2xl'>
              We have divided the Syllabus into two catageries.
            </Text>
            <Flex
              direction={["column", "column", "row"]}
              gap='20px'
              mt='30px'
              textAlign='center'
              color='white'
            >
              <Box boxShadow='dark-lg' w='300px' h='100px' bg='gray.400'>
                <Text mt='20px' fontSize='3xl' fontWeight='medium'>
                  Coure Track.
                </Text>
              </Box>
              <Box boxShadow='dark-lg' w='300px' h='100px' bg='gray.400'>
                <Text mt='20px' fontSize='3xl' fontWeight='medium'>
                  Specilized Track.
                </Text>
              </Box>
            </Flex>
            <Heading
              fontSize='3xl'
              fontWeight='medium'
              mt='40px'
              textAlign='left'
            >
              Coure Track
            </Heading>
            <Text mt='20px' textAlign='center'>
              Coure Track is mandatery for all program. It consist of three
              quarter and duration of each quarter consist of three month
              including the onsite and online classes. Syllabus details of first
              three quarter are as.
            </Text>
          </Center>
          <Center>
            <Flex
              mt='30px'
              gap='20px'
              direction={["column", "column", "column", "row"]}
            >
              <Box
                textAlign='center'
                bg='gray.300'
                px='15px'
                py='30px'
                boxShadow='dark-lg'
                maxW='300px'
                minH='400px'
                borderRadius='20px'
              >
                <Heading>Quarter I</Heading>
                <Text textAlign='left' py='10px'>
                  Object-Oriented Programming using TypeScript.{" "}
                </Text>
                <Text textAlign='left'>
                  1- HTML and CSS by Hira Khan (Watch Recorded Videos).
                </Text>
                <Text textAlign='left'>
                  2-JavaScript and Node.js by Zeeshan Hanif (Watch Recorded
                  Videos).
                </Text>
                <Text textAlign='left'>
                  3-Learn JavaScript and Node.js by Adil altaf, Hira Khan and
                  Daniyal Nagori (Online classes).
                </Text>
                <Text textAlign='left'>
                  4-Learning TypeScript: Enhance Your Web Development Skills.
                </Text>
                <Text textAlign='left'>
                  5-Minimal TypeScript Crash Course For React With Interactive
                  Code Exercises
                </Text>
              </Box>
              <Box
                textAlign='center'
                bg='gray.300'
                px='15px'
                py='30px'
                boxShadow='dark-lg'
                maxW='300px'
                minH='400px'
                borderRadius='20px'
              >
                <Heading>Quarter II</Heading>
                <Text py='10px' textAlign='left'>
                  Developing Planet-Scale Web 2.0 Serverless Cloud Cloud Apps
                  and APIs using Next.js 13 and Cloud Development Kit (CDK) for
                  Terraform
                </Text>
                <Text textAlign='left'>1-Next.js 13 Web Development.</Text>
                <Text textAlign='left'>
                  2-UI/UX Design with Figma, TailwindCSS, and Chakra UI (Remote
                  Zoom Class).
                </Text>
                <Text textAlign='left'>3-API Routes with Next.js</Text>
                <Text textAlign='left'>
                  4-Build a tRPC CRUD API Example with Next.js
                </Text>
                <Text textAlign='left'>5-SQL and Prisma</Text>
                <Text textAlign='left'>
                  6-AWS Application Composer (Remote Zoom Class)
                </Text>
                <Heading
                  fontSize='2xl'
                  fontWeight='bold'
                  textAlign='left'
                  pt='10px'
                >
                  Target of Quarter II
                </Heading>
                <Text textAlign='left' pt='10px'>
                  Earn While You Learn Projects Build Full-Stack Next.js 13
                  Jamstack Templates
                </Text>
              </Box>
              <Box
                textAlign='center'
                bg='gray.300'
                px='15px'
                py='30px'
                boxShadow='dark-lg'
                maxW='300px'
                minH='400px'
                borderRadius='20px'
              >
                <Heading>Quarter III</Heading>
                <Text py='10px' textAlign='left'>
                  Assigned to build a template which we will sell on Theme
                  Forest and Panaverse DAO marketplace. The Panaverse DAO will
                  receive 25% share on the sale of the template which will be
                  used to manage the platform. An additional 15% will be spent
                  on marketing the template. 60% of the revenues will be
                  distributed to the developer through the Panaverse DAO in the
                  form of Panaverse tokens. The Panaverse Full-Stack Template
                  Standard Build QraphQL APIs You will be assigned to build APIs
                  for which you will sell subscriptions on the Panaverse DAO
                  Marketplace.
                </Text>
              </Box>
            </Flex>
          </Center>
        </Container>

        <Container maxW='1400' mt='30px'>
          <Center flexDir='column'>
            <Heading
              fontSize='5xl'
              fontWeight='bold'
              mt='40px'
              textAlign='left'
            >
              Specilized Track
            </Heading>
            <Text mt='20px' textAlign='center'>
              Beside of the above we have Specilized Track for all the Courses.
              Syllabus of Specilized Track for each courses is as given below
            </Text>
          </Center>
          {data.map((elem) => (
            <Box pt='20px' key={elem.id}>
              <Center flexDir='column' mt='50px'>
                <Heading fontSize='3xl' fontWeight='bold' mt='20px'>
                  {elem.heading1}
                </Heading>
                <Text mt='20px' textAlign='center' px={[2, 4, 20]}>
                  {elem.text1}
                </Text>
              </Center>
              <Center>
                <Flex
                  mt='50px'
                  gap='32px'
                  pb='30px'
                  direction={["column", "column", "row"]}
                >
                  <Box
                    textAlign='center'
                    background='gray.300'
                    p='30px'
                    boxShadow='dark-lg'
                    maxW={["300px", "350px", "400px"]}
                    borderRadius='20px'
                    color='blue.700'
                  >
                    <Heading>{elem.heading2} </Heading>
                    <Text pt='10px' textAlign='left'>
                      {elem.text2}
                    </Text>
                  </Box>
                  <Box
                    textAlign='center'
                    p='30px'
                    boxShadow='dark-lg'
                    background='gray.300'
                    maxW={["300px", "350px", "400px"]}
                    borderRadius='20px'
                    color='blue.700'
                  >
                    <Heading color='blue.700'>{elem.heading3}</Heading>
                    <Text pt='10px'>{elem.text3}</Text>
                  </Box>
                </Flex>
              </Center>
            </Box>
          ))}
        </Container>
      </Box>
    </>
  );
}
