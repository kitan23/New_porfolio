import { Container,Box, Heading, SimpleGrid, Divider } from "@chakra-ui/react";
import Section from '../components/section'
import { WorkGridItem } from "../components/grid-item";
import Airbnb from '../public/images/works/airbnb-logo.png'
import Netflix from '../public/images/works/netflix-logo.png'
import CovidTracker from '../public/images/works/covid-tracker-logo.png'
import NoteApp from '../public/images/works/note-app-logo.png'
import MarioGame from '../public/images/works/mario-logo.png'

const Works = () => {
   return (
      <Container>
         <Heading as="h3" fontSize={20} mb={5}>
            Works
         </Heading>
         <SimpleGrid columns={[1,1,2]} gap={6}>
            <Section>
               <WorkGridItem id="airbnb-clone" title="Airbnb Clone" thumbnail={Airbnb} />
            </Section>
            <Section>
               <WorkGridItem id="netflix-clone" title="Netflix Clone" thumbnail={Netflix} />
            </Section>
            <Section>
               <WorkGridItem id="covid-tracker" title="Covid Tracker" thumbnail={CovidTracker} />
            </Section>
             <Section>
                 <WorkGridItem id="note-app" title="Note Taking App" thumbnail={NoteApp} />
             </Section>
             <Section>
                 <WorkGridItem id="mario-game" title="Mario Game" thumbnail={MarioGame} />
             </Section>
         </SimpleGrid>

      </Container>
   )
}

export default Works; 
