import NextLink from 'next/link'
import { Box, Container, Heading } from '@chakra-ui/layout'
import {
  Button,
  Image,
  useColorModeValue,
  Link,
  List,
  ListItem,
  Icon
} from '@chakra-ui/react'
import Section from '../components/section'
import Paragraph from '../components/paragraph'
import { ChevronRightIcon } from '@chakra-ui/icons'
import Layout from '../components/layouts/article'
import { BioSection, BioYear } from '../components/bio'
import { IoLogoInstagram, IoLogoGithub, IoLogoDiscord } from 'react-icons/io5'
import React from 'react'

const Page: React.FC = () => {
  return (
    <Layout>
      <Container>
        <Box
          borderRadius="lg"
          bg={useColorModeValue('whiteAlpha.500', 'whiteAlpha.200')}
          p={3}
          mb={6}
          textAlign="center"
        >
          Hello, I&apos;m a full-stack developer based in New York
        </Box>
        <Box display={{ md: 'flex' }}>
          <Box flexGrow={1}>
            <Heading as="h2" variant="page-title">
              Kyle Tran
            </Heading>
            <p> Web, Blockchain, and Game Developer </p>
            <p>College Student </p>
          </Box>
          <Box
            flexShrink={0}
            mt={{ base: 4, md: 0 }}
            ml={{ md: 6 }}
            textAlign="center"
          >
            <Image
              borderColor="whiteAlpha.800"
              borderWidth={2}
              borderStyle="solid"
              display="inline-block"
              borderRadius="full"
              objectFit="cover"
              boxSize="150px"
              src="/images/kien2.png"
              alt="Profile Image"
            />
          </Box>
        </Box>
        <Section delay={0.1}>
          <Heading as="h3" variant="section-title">
            Work
          </Heading>
          <Paragraph>
            I&apos;m a junior at Hamilton College majoring in Computer Science
            and Math.
          </Paragraph>
          <Box textAlign="center" my={4}>
            <NextLink href="/works">
              <Button rightIcon={<ChevronRightIcon />} colorScheme="teal">
                My Portfolio
              </Button>
            </NextLink>
          </Box>
        </Section>

        <Section delay={0.2}>
          <Heading as="h3" variant="section-title">
            Bio
          </Heading>
          {/* <BioSection>
            <BioYear>2002</BioYear>
            Born in Hanoi, Vietnam
          </BioSection> */}
          <BioSection>
            <BioYear>2017</BioYear>
            Started programming with Python and C++
          </BioSection>
          <BioSection>
            <BioYear>2020</BioYear>
            Picked up web development
          </BioSection>
          <BioSection>
            <BioYear>2021</BioYear>
            Learned about game development using C# and Unity
          </BioSection>
          <BioSection>
            <BioYear>2021</BioYear>
            Started exploring blockchain and writing smart contracts
          </BioSection>
          <BioSection>
            <BioYear>2021-2025</BioYear>
            Pursuing double degree in Computer Science and Math
          </BioSection>
          <BioSection>
            <BioYear>2023</BioYear>
            Doing research on Genetic Programming
          </BioSection>
        </Section>

        <Section delay={0.3}>
          <Heading as="h3" variant="section-title">
            On the Web
          </Heading>
          <List>
            <ListItem>
              <Link href="https://github.com/kitan23" target="_blank">
                <Button
                  variant="ghost"
                  colorScheme="teal"
                  leftIcon={<Icon as={IoLogoGithub} />}
                >
                  @kitan23
                </Button>
              </Link>
            </ListItem>
            <ListItem>
              <Link
                href="https://www.linkedin.com/in/kien-tran-6615b3216/"
                target="_blank"
              >
                <Button
                  variant="ghost"
                  colorScheme="teal"
                  leftIcon={<Icon as={IoLogoDiscord} />}
                >
                  Linkedin
                </Button>
              </Link>
            </ListItem>
            <ListItem>
              <Link href="https://www.instagram.com/kien_tr32/" target="_blank">
                <Button
                  variant="ghost"
                  colorScheme="teal"
                  leftIcon={<Icon as={IoLogoInstagram} />}
                >
                  Instagram
                </Button>
              </Link>
            </ListItem>
            <ListItem>
              <Link
                href="https://www.facebook.com/profile.php?id=100006404467962"
                target="_blank"
              >
                <Button
                  variant="ghost"
                  colorScheme="teal"
                  leftIcon={<Icon as={IoLogoDiscord} />}
                >
                  Facebook
                </Button>
              </Link>
            </ListItem>
          </List>
        </Section>
      </Container>
    </Layout>
  )
}

export default Page
