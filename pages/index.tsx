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
  Icon,
  Text
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
          borderRadius="xl"
          bg={useColorModeValue(
            'linear-gradient(135deg, rgba(56, 178, 172, 0.1) 0%, rgba(129, 230, 217, 0.1) 100%)',
            'linear-gradient(135deg, rgba(56, 178, 172, 0.2) 0%, rgba(129, 230, 217, 0.2) 100%)'
          )}
          p={4}
          mb={8}
          textAlign="center"
          border="1px solid"
          borderColor={useColorModeValue('teal.100', 'teal.700')}
          shadow="sm"
        >
          <Box fontSize="lg" fontWeight="medium" color={useColorModeValue('gray.700', 'gray.200')}>
            Hello, I&apos;m a{' '}
            <Box as="span" color="teal.500" fontWeight="semibold">ML</Box>
            <Box as="span" color={useColorModeValue('gray.600', 'gray.400')} fontWeight="normal"> / </Box>
            <Box as="span" color="teal.500" fontWeight="semibold">Software Engineer</Box>
            {' '}based in 
            <Box as="span" color="teal.500" fontWeight="semibold"> New York</Box>
          </Box>
        </Box>
        <Box display={{ md: 'flex' }} alignItems="center" mb={8}>
          <Box flexGrow={1}>
            <Heading as="h2" variant="page-title" mb={3}>
              Kyle Tran
            </Heading>
            <Box 
              fontSize="xl" 
              fontWeight="medium" 
              color={useColorModeValue('gray.600', 'gray.300')}
              letterSpacing="tight"
            >
              Machine Learning Engineer & Full-Stack Developer
            </Box>
          </Box>
          <Box
            flexShrink={0}
            mt={{ base: 6, md: 0 }}
            ml={{ md: 8 }}
            textAlign="center"
          >
            <Box
              position="relative"
              display="inline-block"
              _before={{
                content: '""',
                position: 'absolute',
                top: '-4px',
                left: '-4px',
                right: '-4px',
                bottom: '-4px',
                background: useColorModeValue(
                  'linear-gradient(45deg, #38B2AC, #81E6D9)',
                  'linear-gradient(45deg, #319795, #4FD1C7)'
                ),
                borderRadius: 'full',
                zIndex: -1,
                opacity: 0.3
              }}
            >
              <Image
                borderColor={useColorModeValue('white', 'gray.800')}
                borderWidth={4}
                borderStyle="solid"
                display="inline-block"
                borderRadius="full"
                objectFit="cover"
                boxSize="160px"
                src="/images/kien2.png"
                alt="Profile Image"
                shadow="lg"
                transition="transform 0.2s ease-in-out"
                _hover={{ transform: 'scale(1.05)' }}
              />
            </Box>
          </Box>
        </Box>
        <Section delay={0.1}>
          <Heading as="h3" variant="section-title" mb={4}>
            About Me
          </Heading>
          <Box 
            bg={useColorModeValue('gray.50', 'whiteAlpha.100')} 
            p={6} 
            borderRadius="xl" 
            borderLeft="4px solid" 
            borderLeftColor="teal.400"
            mb={6}
          >
                         <Text fontSize="lg" lineHeight="tall" textAlign="justify">
              I&apos;m a builder — from Lego sets to apps, I love creating things that solve real problems. 
              Recently launched <Box as="span" fontWeight="semibold" color="teal.500">Daily Inspo</Box>, an AI-powered iOS app that delivers personalized motivation using 
              fine-tuned models. Riding the AI/ML wave to build tools that matter. Let&apos;s connect — I&apos;m 
              always down to chat code, product, or how to get the perfect bánh mì in New York.
            </Text>
          </Box>
          <Box textAlign="center" my={6}>
            <Button 
              as={NextLink} 
              href="/works" 
              rightIcon={<ChevronRightIcon />} 
              colorScheme="teal"
              size="lg"
              px={8}
              py={6}
              fontSize="md"
              transition="all 0.2s ease-in-out"
              _hover={{ 
                transform: 'translateY(-2px)', 
                shadow: 'lg' 
              }}
            >
              My Portfolio
            </Button>
          </Box>
        </Section>

        <Section delay={0.2}>
          <Heading as="h3" variant="section-title" mb={6}>
            Bio
          </Heading>
          <Box maxW="2xl">
            {/* <BioSection>
              <BioYear>2002</BioYear>
              Born in Hanoi, Vietnam
            </BioSection> */}
            <BioSection>
              <BioYear>2017</BioYear>
              Began software engineering with Python and C++
            </BioSection>
            <BioSection>
              <BioYear>2020</BioYear>
              Built scalable full-stack applications with modern web technologies
            </BioSection>
            <BioSection>
              <BioYear>2021</BioYear>
              Developed cross-platform applications and game engines
            </BioSection>
            <BioSection>
              <BioYear>2022</BioYear>
              Engineered web3 infrastructure for fintech startup
            </BioSection>
            <BioSection>
              <BioYear>2023</BioYear>
              Conducted AI research on Genetic Programming algorithms
            </BioSection>
            <BioSection>
              <BioYear>2024</BioYear>
              Architected end-to-end ML systems and RAG pipelines
            </BioSection>
            <BioSection>
              <BioYear>2025</BioYear>
              ML Engineer - building production AI agents and infrastructure
            </BioSection>
          </Box>
        </Section>

        <Section delay={0.3}>
          <Heading as="h3" variant="section-title" mb={6}>
            On the Web
          </Heading>
          <Box 
            display="grid" 
            gridTemplateColumns={{ base: "1fr", sm: "repeat(2, 1fr)" }} 
            gap={4}
            maxW="md"
          >
            <Button
              as="a"
              href="https://github.com/kitan23"
              target="_blank"
              variant="outline"
              colorScheme="teal"
              size="lg"
              leftIcon={<Icon as={IoLogoGithub} boxSize={5} />}
              justifyContent="flex-start"
              px={6}
              py={6}
              h="auto"
              transition="all 0.2s ease-in-out"
              _hover={{ 
                transform: 'translateY(-2px)', 
                shadow: 'lg',
                borderColor: 'teal.400'
              }}
            >
              <Box textAlign="left">
                <Box fontWeight="semibold">GitHub</Box>
                <Box fontSize="sm" opacity={0.8}>kitan23</Box>
              </Box>
            </Button>
            <Button
              as="a"
              href="https://www.linkedin.com/in/kien-tran-6615b3216/"
              target="_blank"
              variant="outline"
              colorScheme="teal"
              size="lg"
              leftIcon={<Icon as={IoLogoDiscord} boxSize={5} />}
              justifyContent="flex-start"
              px={6}
              py={6}
              h="auto"
              transition="all 0.2s ease-in-out"
              _hover={{ 
                transform: 'translateY(-2px)', 
                shadow: 'lg',
                borderColor: 'teal.400'
              }}
            >
              <Box textAlign="left">
                <Box fontWeight="semibold">LinkedIn</Box>
                <Box fontSize="sm" opacity={0.8}>Connect</Box>
              </Box>
            </Button>
            <Button
              as="a"
              href="https://www.instagram.com/kien_tr32/"
              target="_blank"
              variant="outline"
              colorScheme="teal"
              size="lg"
              leftIcon={<Icon as={IoLogoInstagram} boxSize={5} />}
              justifyContent="flex-start"
              px={6}
              py={6}
              h="auto"
              transition="all 0.2s ease-in-out"
              _hover={{ 
                transform: 'translateY(-2px)', 
                shadow: 'lg',
                borderColor: 'teal.400'
              }}
            >
              <Box textAlign="left">
                <Box fontWeight="semibold">Instagram</Box>
                <Box fontSize="sm" opacity={0.8}>@kien_tr32</Box>
              </Box>
            </Button>
            <Button
              as="a"
              href="https://www.facebook.com/profile.php?id=100006404467962"
              target="_blank"
              variant="outline"
              colorScheme="teal"
              size="lg"
              leftIcon={<Icon as={IoLogoDiscord} boxSize={5} />}
              justifyContent="flex-start"
              px={6}
              py={6}
              h="auto"
              transition="all 0.2s ease-in-out"
              _hover={{ 
                transform: 'translateY(-2px)', 
                shadow: 'lg',
                borderColor: 'teal.400'
              }}
            >
              <Box textAlign="left">
                <Box fontWeight="semibold">Facebook</Box>
                <Box fontSize="sm" opacity={0.8}>Profile</Box>
              </Box>
            </Button>
          </Box>
        </Section>
      </Container>
    </Layout>
  )
}

export default Page
