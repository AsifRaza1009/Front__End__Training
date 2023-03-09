"use client";

import {
  Box,
  Button,
  Center,
  Container,
  Heading,
  SimpleGrid,
  Text,
} from "@chakra-ui/react";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import img2 from "../../public/home1.png";
import img3 from "../../public/logo4.png";
import img4 from "../../public/islamabad.jpg";
import img5 from "../../public/karchi.jpg";
import img6 from "../../public/lahore.jpg";
import img7 from "../../public/peshawer.jpg";
import doller from "../../public/Doller.png";

export default function Body() {
  return (
    <>
      <Box
        gap={20}
        m='auto'
        bg='linear-gradient(to right,#E2E8F0,#BEE3F8,#CBD5E0,#B2F5EA,#E6FFFA)'
      >
        <Container maxW='1400px' maxH='auto'>
          <SimpleGrid
            columns={[1, 1, 2]}
            bgSize='cover'
            backgroundImage={"/backg.jpg"}
            backgroundAttachment='fixed'
            color='white'
          >
            <Box m='auto' pt='10px' px='20px' color='white'>
              <Image src={img3} alt='Panaverse'></Image>

              <Heading textAlign='center'>
                Offers a Web 3.0 and Metaverse Devolper Course.
              </Heading>
              <Text textAlign='justify' pt='50px' pb='20px'>
                The Future of the Web is Web 3.0, Metaverse, and Edge Computing.
                Panaverse DAO is a movement to spread these technolgies
                globally. It is community of Web 3 and Metaverse developers,
                designers, trainers, startup founders and service providers.
              </Text>
            </Box>
            <Box m='auto'>
              <Image src={img2} alt='Metaverse'></Image>
            </Box>
          </SimpleGrid>

          <Heading pt='50px' textAlign='center'>
            A Nationwide Program in Islamabad, Karachi, Lahore, and Peshawar.
          </Heading>

          <Center>
            <SimpleGrid columns={[1, 2]} spacing={["25px"]} m='auto' pt='100px'>
              <Box>
                <Image src={img4} alt='UMT Lahore'></Image>
                <Text
                  fontSize='25px'
                  fontWeight='bold'
                  textAlign='center'
                  pt='5px'
                >
                  {" "}
                  Air university Islamabad
                </Text>
              </Box>
              <Box>
                <Image src={img5} alt='CECOS Peshawer'></Image>
                <Text
                  fontSize='25px'
                  textAlign='center'
                  fontWeight='bold'
                  pt='5px'
                >
                  {" "}
                  Bahria Auditorium Karchi
                </Text>
              </Box>
            </SimpleGrid>
          </Center>
          <Center>
            <SimpleGrid columns={[1, 2]} spacing={["25px"]} m='auto' pt='100px'>
              <Box>
                <Image src={img6} alt='UMT Lahore'></Image>
                <Text
                  fontSize='25px'
                  textAlign='center'
                  pt='5px'
                  fontWeight='bold'
                >
                  {" "}
                  UMT Lahore
                </Text>
              </Box>
              <Box>
                <Image src={img7} alt='CICOS Peshawer'></Image>
                <Text
                  fontSize='25px'
                  textAlign='center'
                  pt='5px'
                  fontWeight='bold'
                >
                  {" "}
                  CICOS Peshawer
                </Text>
              </Box>
            </SimpleGrid>
          </Center>

          <Text fontWeight='bold' fontSize={["10px", "20px", "30px"]} pt='20px'>
            Getting Ready for the Next Generation and Future of the Internet -
            Join a 13 Trillion Dollar Industry with 5 Billion Users
          </Text>
          <Box>
            <Center>
              <SimpleGrid gap='25px' columns={[1, 1, 2]} pt='32px'>
                <Box>
                  <Heading textAlign='center'>
                    The Program in a Nutshell: Earn While You Learn
                  </Heading>
                  <Text fontWeight='bold' textAlign='center'>
                    In this brand-new type of curriculum, students will learn
                    how to make money and boost exports in the classroom and
                    will begin doing so within six months of the program’s
                    beginning. It resembles a cross between a corporate venture
                    and an educational project.
                  </Text>
                </Box>
                <Box m='auto'>
                  <Image src={doller} alt='UMT Lahore'></Image>
                </Box>
              </SimpleGrid>
            </Center>
          </Box>
          <Box pt='20px'>
            <Heading> Perception</Heading>
            <Text fontSize='20px' pt='10px' p='10px' textAlign='justify'>
              The internet is without a doubt the most important technological
              development in human history. Web3 and metaverse technologies
              expand the internet as we know it by introducing novel features
              and advancements. Metaverse will make use of all aspects of modern
              technology, including 3D, VR, AR, AI, blockchain, cloud computing,
              voice computing, ambient computing, and more. Citi is the latest
              Wall Street business to give a positive prognosis for Web 3.0 and
              the Metaverse, terms used to depict a future internet vision
              centred on decentralised technologies and virtual worlds. Citi
              stated in a March 2022 research paper that the metaverse economy
              might have a total addressable market of up to $13 trillion and
              five billion people by 2030.
            </Text>
          </Box>
          <Center>
            <Box pt='35px'>
              <Button
                as={Link}
                href='/'
                size='lg'
                pt='5px'
                bg='green.400'
                mx='auto'
                mb='25px'
                color='black'
              >
                {" "}
                More Detail
              </Button>
            </Box>
          </Center>
        </Container>
      </Box>
    </>
  );
}
