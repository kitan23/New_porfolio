import { Container, Badge, Link, List, ListItem } from '@chakra-ui/react'
import { ExternalLinkIcon } from '@chakra-ui/icons'
import { Title, WorkImage, Meta } from '../../components/work'
import P from '../../components/paragraph'
import Layout from '../../components/layouts/article'
import React from 'react'

const NetflixClone: React.FC = () => {
  return (
    <Layout title="covid-tracker">
      <Container>
        <Title>
          {' '}
          Covid Tracker <Badge>2021</Badge>
        </Title>
        <P>
          A web app that tracks the Covid-19 cases across the world created with
          ReactJS and Firebase
        </P>

        <List>
          <ListItem>
            <span>1. Show Live Cases, Recovered, and Deaths</span>
          </ListItem>
          <ListItem>
            <span>2. Responsive Line Graph</span>
          </ListItem>
          <ListItem>
            <span>3. Table of Statistics of each country</span>
          </ListItem>
          <ListItem>
            <span>4. Clickable circle on map to show Country stats</span>
          </ListItem>
        </List>

        <List ml={4} my={4}>
          <ListItem>
            <Meta color="green">Website</Meta>
            <Link href="https://covid-tracker-43755.web.app/" target="_blank">
              https://covid-tracker-43755.web.app/ <ExternalLinkIcon mx="2px" />
            </Link>
          </ListItem>
          <ListItem>
            <Meta color="green">Platform</Meta>
            <span>Web App</span>
          </ListItem>
          <ListItem>
            <Meta color="green">Stack</Meta>
            <span>ReactJS, Firebase</span>
          </ListItem>
        </List>
        <WorkImage src="/images/works/covid-tracker.png" alt="Covid Tracker" />
      </Container>
    </Layout>
  )
}

export default NetflixClone
