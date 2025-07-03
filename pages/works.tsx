import { Container, Heading, SimpleGrid, Box, Text, Badge, Flex, useColorModeValue } from '@chakra-ui/react'
import Section from '../components/section'
import { WorkGridItem } from '../components/grid-item'
// import Airbnb from '../public/images/works/airbnb-logo.png'
// import Netflix from '../public/images/works/netflix-logo.png'
// import CovidTracker from '../public/images/works/covid-tracker-logo.png'
import NoteApp from '../public/images/works/note-app-logo.png'
import MarioGame from '../public/images/works/mario-logo.png'
import UberLogo from '../public/images/works/uber-logo.png'
import GPLogo from '../public/images/works/gp-logo.png'
import GoogleDinosaurLogo from '../public/images/works/google-dinosaur-logo.png'
import DailyInspoLogo from '../public/images/works/daily-inspo-logo.png'
import RagOPTLogo from '../public/images/works/rag-opt-logo.png'
import VBTLogo from '../public/images/works/vbt-logo.png'
import BoxingLogo from '../public/images/works/boxing-predictor-logo.png'
import EmotiveLogo from '../public/images/works/emotive-logo.png'

const Works = () => {
  const bgGradient = useColorModeValue(
    'linear-gradient(135deg, rgba(56, 178, 172, 0.05) 0%, rgba(129, 230, 217, 0.05) 100%)',
    'linear-gradient(135deg, rgba(56, 178, 172, 0.1) 0%, rgba(129, 230, 217, 0.1) 100%)'
  )

  return (
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
          My Work
        </Heading> */}
        <Text 
          fontSize={{ base: "lg", md: "xl" }} 
          color={useColorModeValue('gray.600', 'gray.300')}
          maxW="2xl"
          mx="auto"
          lineHeight="tall"
        >
          A collection of projects showcasing my expertise in AI/ML, full-stack development, 
          and innovative problem-solving across various domains.
        </Text>
      </Box>

      {/* Featured Projects */}
      <Box mb={12}>
        <Flex align="center" mb={6}>
          <Heading as="h2" fontSize="2xl" mr={3}>
            Featured Projects
          </Heading>
          <Badge colorScheme="teal" variant="subtle" px={3} py={1} borderRadius="full">
            Latest Work
          </Badge>
        </Flex>
        <SimpleGrid columns={[1, 1, 2]} gap={8} mb={8}>
          <Section>
            <WorkGridItem
              id="emotive"
              title="Emotive"
              thumbnail={EmotiveLogo}
            />
          </Section>
          <Section>
            <WorkGridItem
              id="opt-rag"
              title="OPT-RAG"
              thumbnail={RagOPTLogo}
            />
          </Section>
        </SimpleGrid>
      </Box>

      {/* AI & Machine Learning */}
      <Box mb={12}>
        <Flex align="center" mb={6}>
          <Heading as="h2" fontSize="2xl" mr={3}>
            AI & Machine Learning
          </Heading>
          <Badge colorScheme="purple" variant="subtle" px={3} py={1} borderRadius="full">
            AI/ML
          </Badge>
        </Flex>
        <SimpleGrid columns={[1, 2, 3]} gap={6}>
          <Section>
            <WorkGridItem
              id="daily-inspo"
              title="Daily Inspo"
              thumbnail={DailyInspoLogo}
            />
          </Section>
          <Section>
            <WorkGridItem
              id="boxing-predictor"
              title="Boxing Match Predictor"
              thumbnail={BoxingLogo}
            />
          </Section>
          <Section>
            <WorkGridItem
              id="gp-research"
              title="GP Research"
              thumbnail={GPLogo}
            />
          </Section>
        </SimpleGrid>
      </Box>

      {/* Full-Stack Applications */}
      <Box mb={12}>
        <Flex align="center" mb={6}>
          <Heading as="h2" fontSize="2xl" mr={3}>
            Full-Stack Applications
          </Heading>
          <Badge colorScheme="blue" variant="subtle" px={3} py={1} borderRadius="full">
            Web Dev
          </Badge>
        </Flex>
        <SimpleGrid columns={[1, 2, 3]} gap={6}>
          <Section>
            <WorkGridItem
              id="vbt-system"
              title="VBT Athletic Training System"
              thumbnail={VBTLogo}
            />
          </Section>
          <Section>
            <WorkGridItem
              id="note-app"
              title="Knowledge Vault"
              thumbnail={NoteApp}
            />
          </Section>
          <Section>
            <WorkGridItem
              id="uber-blockchain"
              title="Uber Blockchain"
              thumbnail={UberLogo}
            />
          </Section>
        </SimpleGrid>
      </Box>

      {/* Games & Creative */}
      <Box>
        <Flex align="center" mb={6}>
          <Heading as="h2" fontSize="2xl" mr={3}>
            Games & Creative Projects
          </Heading>
          <Badge colorScheme="orange" variant="subtle" px={3} py={1} borderRadius="full">
            Games
          </Badge>
        </Flex>
        <SimpleGrid columns={[1, 2, 3]} gap={6}>
          <Section>
            <WorkGridItem
              id="google-dinosaur"
              title="Google Dinosaur in Assembly x86"
              thumbnail={GoogleDinosaurLogo}
            />
          </Section>
          <Section>
            <WorkGridItem
              id="mario-game"
              title="Mario Game"
              thumbnail={MarioGame}
            />
          </Section>
        </SimpleGrid>
      </Box>

      {/* Commented out less impactful projects
      <Section>
        <WorkGridItem
          id="covid-tracker"
          title="Covid Tracker"
          thumbnail={CovidTracker}
        />
      </Section>
      <Section>
        <WorkGridItem
          id="airbnb-clone"
          title="Airbnb Clone"
          thumbnail={Airbnb}
        />
      </Section>
      <Section>
        <WorkGridItem
          id="netflix-clone"
          title="Netflix Clone"
          thumbnail={Netflix}
        />
      </Section>
      */}
    </Container>
  )
}

export default Works
