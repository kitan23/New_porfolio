import NextLink from 'next/link'
import {
  Box,
  Container,
  Heading,
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
            <p> Web, Mobile, Blockchain, and Game Developer </p>
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
            About Me
          </Heading>
          <Paragraph>
            I&apos;m a builder — from Lego sets to apps, I love creating things that solve real problems. 
            Recently launched Daily Inspo, an AI-powered iOS app that delivers personalized motivation using 
            fine-tuned models. Riding the AI/ML wave to build tools that matter. Let&apos;s connect — I&apos;m 
            always down to chat code, product, or how to get the perfect bánh mì in New York.
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
            Started developing web applications
          </BioSection>
          <BioSection>
            <BioYear>2021</BioYear>
            Learned about game development using C# and Unity
          </BioSection>
          <BioSection>
            <BioYear>2022</BioYear>
            Developed web3 and blockchain applications for a fintech startup
          </BioSection>
          <BioSection>
            <BioYear>2023</BioYear>
            Conducted research on Genetic Programming
          </BioSection>
          <BioSection>
            <BioYear>2024</BioYear>
            Learning about AI, Machine Learning, and Mobile Development
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
                  kitan23
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
