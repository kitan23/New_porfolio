import React from 'react'
import Layout from '../components/layouts/article'
import { Container, Heading, List, ListItem, Box, Text, Badge, Flex, useColorModeValue, SimpleGrid, Icon } from '@chakra-ui/react'
import { AwardItem } from '../components/award-item'
import { Meta } from '../components/work'
import { FaTrophy, FaGraduationCap, FaUsers, FaCode } from 'react-icons/fa'

const Awards: React.FC = () => {
  return (
    <Layout title="awards">
      <Container maxW="container.xl" py={8}>
        {/* Header Section */}
        <Box textAlign="center" mb={12}>
          {/* <Heading 
            as="h1" 
            fontSize={{ base: "3xl", md: "4xl", lg: "5xl" }} 
            fontWeight="bold"
            bgGradient="linear(to-r, teal.400, teal.600)"
            bgClip="text"
            mb={4}
          >
            Awards & Recognition
          </Heading> */}
          <Text 
            fontSize={{ base: "lg", md: "xl" }} 
            color={useColorModeValue('gray.600', 'gray.300')}
            maxW="2xl"
            mx="auto"
            lineHeight="tall"
          >
            Academic achievements, competition victories, and leadership recognition 
            showcasing excellence in computer science and mathematics.
          </Text>
        </Box>

        {/* Academic Excellence */}
        <Box mb={12}>
          <Flex align="center" mb={6}>
            <Icon as={FaGraduationCap} color="teal.500" boxSize={6} mr={3} />
            <Heading as="h2" fontSize="2xl" mr={3}>
              Academic Excellence
            </Heading>
            <Badge colorScheme="teal" variant="subtle" px={3} py={1} borderRadius="full">
              Education
            </Badge>
          </Flex>
          <Box 
            bg={useColorModeValue('gray.50', 'whiteAlpha.100')} 
            p={6} 
            borderRadius="xl" 
            borderLeft="4px solid" 
            borderLeftColor="teal.400"
          >
            <AwardItem
              name="Double Honors Degree in Computer Science and Mathematics"
              title="Hamilton College"
              time="2025"
            />
            <AwardItem
              name="Selected Research Presenter - Plexicase Parent Selection in GP"
              title="Hamilton College Research Symposium"
              time="2024"
            />
          </Box>
        </Box>

        {/* Competition Awards */}
        <Box mb={12}>
          <Flex align="center" mb={6}>
            <Icon as={FaTrophy} color="teal.500" boxSize={6} mr={3} />
            <Heading as="h2" fontSize="2xl" mr={3}>
              Competition Awards
            </Heading>
            <Badge colorScheme="gray" variant="subtle" px={3} py={1} borderRadius="full">
              Competitions
            </Badge>
          </Flex>
          <Box 
            bg={useColorModeValue('gray.50', 'whiteAlpha.100')} 
            p={6} 
            borderRadius="xl" 
            borderLeft="4px solid" 
            borderLeftColor="teal.400"
          >
            <AwardItem
              name="Best Use of API - DevFest 2025 at Columbia University"
              title="Team Lead & AI Engineer - DemystifyAI"
              time="2025"
            />
            <AwardItem
              name="1st Runner-Up Of Vietnam Round - Battle of Minds 2021"
              title="Chief Technology Officer"
              time="August 2021"
            />
            <AwardItem
              name="Finalist in Business Challenge"
              title="Web Developer and IT"
              time="April 2021"
            />
            <AwardItem
              name="Finalist in 2020 ASEAN-wide Ending Plastic Pollution Innovation Challenge"
              title="Mobile App Developer"
              time="September 2020"
            />
          </Box>
        </Box>

        {/* Leadership & Community Impact */}
        <Box mb={12}>
          <Flex align="center" mb={6}>
            <Icon as={FaUsers} color="teal.500" boxSize={6} mr={3} />
            <Heading as="h2" fontSize="2xl" mr={3}>
              Leadership & Community Impact
            </Heading>
            <Badge colorScheme="gray" variant="subtle" px={3} py={1} borderRadius="full">
              Leadership
            </Badge>
          </Flex>
          <Box 
            bg={useColorModeValue('gray.50', 'whiteAlpha.100')} 
            p={6} 
            borderRadius="xl" 
            borderLeft="4px solid" 
            borderLeftColor="teal.400"
          >
            <AwardItem
              name="Co-founder & President of App Development Club"
              title="Recognized at Faculty Meeting & Commencement for Community Impact"
              time="2022-2025"
            />
          </Box>
        </Box>

        {/* Academic Coursework */}
        <Box>
          <Flex align="center" mb={6}>
            <Icon as={FaCode} color="teal.500" boxSize={6} mr={3} />
            <Heading as="h2" fontSize="2xl" mr={3}>
              Relevant Coursework
            </Heading>
            <Badge colorScheme="gray" variant="subtle" px={3} py={1} borderRadius="full">
              Curriculum
            </Badge>
          </Flex>
          <SimpleGrid columns={[1, 1, 2]} gap={6}>
            <Box 
              bg={useColorModeValue('gray.50', 'whiteAlpha.100')} 
              p={6} 
              borderRadius="xl" 
              borderLeft="4px solid" 
              borderLeftColor="teal.400"
            >
              <Flex align="center" mb={4}>
                <Meta color="teal">Computer Science</Meta>
              </Flex>
              <Text lineHeight="tall" color={useColorModeValue('gray.700', 'gray.200')}>
                Computer Science for All, Design Principles, Principles of
                Programming Language, Data Structure and Algorithm, Computer
                Organization and Architecture (Assembly x86), Theory of
                Computation, Algorithms, Dev Accessible User Interface, Operating
                Systems, Artificial Intelligence
              </Text>
            </Box>
            <Box 
              bg={useColorModeValue('gray.50', 'whiteAlpha.100')} 
              p={6} 
              borderRadius="xl" 
              borderLeft="4px solid" 
              borderLeftColor="teal.400"
            >
              <Flex align="center" mb={4}>
                <Meta color="teal">Mathematics</Meta>
              </Flex>
              <Text lineHeight="tall" color={useColorModeValue('gray.700', 'gray.200')}>
                Multivariable, Linear Algebra, Real Analysis, Modern Algebra,
                Linear Optimization, Graph Theory
              </Text>
            </Box>
          </SimpleGrid>
        </Box>
      </Container>
    </Layout>
  )
}

export default Awards
