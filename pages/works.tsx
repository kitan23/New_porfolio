import { Container, Heading, SimpleGrid } from '@chakra-ui/react'
import Section from '../components/section'
import { WorkGridItem } from '../components/grid-item'
import Airbnb from '../public/images/works/airbnb-logo.png'
import Netflix from '../public/images/works/netflix-logo.png'
import CovidTracker from '../public/images/works/covid-tracker-logo.png'
import NoteApp from '../public/images/works/note-app-logo.png'
import MarioGame from '../public/images/works/mario-logo.png'
import UberLogo from '../public/images/works/uber-logo.png'
import GPLogo from '../public/images/works/gp-logo.png'

const Works = () => {
  return (
    <Container>
      <Heading as="h3" fontSize={20} mb={5}>
        Works
      </Heading>
      <SimpleGrid columns={[1, 1, 2]} gap={6}>
        <Section>
          <WorkGridItem
            id="gp-research"
            title="GP Research"
            thumbnail={GPLogo}
          />
        </Section>
        <Section>
          <WorkGridItem
            id="uber-blockchain"
            title="Uber Blockchain"
            thumbnail={UberLogo}
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
        <Section>
          <WorkGridItem
            id="covid-tracker"
            title="Covid Tracker"
            thumbnail={CovidTracker}
          />
        </Section>
        <Section>
          <WorkGridItem
            id="note-app"
            title="Note Taking App"
            thumbnail={NoteApp}
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
    </Container>
  )
}

export default Works
