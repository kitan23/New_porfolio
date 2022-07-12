import { Container, Badge, Link, List, ListItem } from '@chakra-ui/react'
import { ExternalLinkIcon } from '@chakra-ui/icons'
import { Title, WorkImage, Meta } from '../../components/work'
import P from '../../components/paragraph'
import Layout from '../../components/layouts/article'

const NetflixClone: React.FC = () => {
  return (
    <Layout title="note-app">
      <Container>
        <Title>
          {' '}
          Note taking app <Badge>2021</Badge>
        </Title>
        <P>
          A Mern-stack note taking app created with MongoDB, Express, React,
          Node.js
        </P>
        <List ml={4} my={4}>
          <ListItem>
            <Meta color="green">Website</Meta>
            <Link
              href="https://condescending-ride-d0b655.netlify.app/"
              target="_blank"
            >
              https://condescending-ride-d0b655.netlify.app/{' '}
              <ExternalLinkIcon mx="2px" />
            </Link>
          </ListItem>
          <ListItem>
            <Meta color="green">Platform</Meta>
            <span>Web App</span>
          </ListItem>
          <ListItem>
            <Meta color="green">Stack</Meta>
            <span>MongoDB, Express, ReactJS, Node</span>
          </ListItem>
        </List>
        <WorkImage src="/images/works/note-app.png" alt="Note app" />
        <WorkImage src="/images/works/note-app1.png" alt="Note app" />
      </Container>
    </Layout>
  )
}

export default NetflixClone
