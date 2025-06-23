import React from 'react'
import Layout from '../components/layouts/article'
import { Container, Heading, List, ListItem } from '@chakra-ui/react'
import { AwardItem } from '../components/award-item'
import { Meta } from '../components/work'

const Awards: React.FC = () => {
  return (
    <Layout title="awards">
      <Heading as="h3" fontSize={20} mb={5}>
        Awards
      </Heading>
      <Container>
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
          name="Finalist in Business Challenge
"
          title="Web Developer and IT"
          time="April 2021"
        />
        <AwardItem
          name="Finalist in 2020 ASEAN-wide Ending Plastic Pollution Innovation Challenge
"
          title="Mobile App Developer"
          time="September 2020"
        />
      </Container>

      <Heading as="h3" fontSize={20} mb={5}>
        Relevant Coursework
      </Heading>
      <Container>
        <List spacing={3}>
          <ListItem>
            <Meta color="purple">Computer Science</Meta>
            <span>
              Computer Science for All, Design Principles, Principles of
              Programming Language, Data Structure and Algorithm, Computer
              Organization and Architecture (Assembly x86), Theory of
              Computation, Algorithms, Dev Accesible User Interface, Operating
              Systems, Artificial Intelligence
            </span>
          </ListItem>
          <ListItem>
            <Meta color="purple">Math</Meta>
            <span>
              Multivariable, Linear Algebra, Real Analysis, Modern Algebra,
              Linear Optimization, Graph Theory
            </span>
          </ListItem>
        </List>
      </Container>
    </Layout>
  )
}

export default Awards
