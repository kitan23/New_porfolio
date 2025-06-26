import { Container, Heading, SimpleGrid } from '@chakra-ui/react'
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
  return (
    <Container>
      <Heading as="h3" fontSize={20} mb={5}>
        Works
      </Heading>
      <SimpleGrid columns={[1, 1, 2]} gap={6}>
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
            id="vbt-system"
            title="VBT Athletic Training System"
            thumbnail={VBTLogo}
          />
        </Section>
        <Section>
          <WorkGridItem
            id="gp-research"
            title="GP Research"
            thumbnail={GPLogo}
          />
        </Section>
        <Section>
          <WorkGridItem
            id="google-dinosaur"
            title="Google Dinosaur in Assembly x86"
            thumbnail={GoogleDinosaurLogo}
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
            id="mario-game"
            title="Mario Game"
            thumbnail={MarioGame}
          />
        </Section>
        <Section>
          <WorkGridItem
            id="uber-blockchain"
            title="Uber Blockchain"
            thumbnail={UberLogo}
          />
        </Section>
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
      </SimpleGrid>
    </Container>
  )
}

export default Works
