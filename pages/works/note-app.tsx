import { Container, Badge, Link, List, ListItem } from '@chakra-ui/react'
import { ExternalLinkIcon } from '@chakra-ui/icons'
import { Title, WorkImage, Meta } from '../../components/work'
import P from '../../components/paragraph'
import Layout from '../../components/layouts/article'

const NoteApp: React.FC = () => {
  return (
    <Layout title="note-app">
      <Container>
        <Title>
          {' '}
          Note taking app <Badge>2021</Badge>
        </Title>
        <P>
          A Mern-stack note taking app created with MongoDB, Express, React,
          Node.js. The app allows users to create, read, update, and delete
          notes as well as attaching urls.
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
            <span>Web Application</span>
          </ListItem>
          <ListItem>
            <Meta color="green">Stack</Meta>
            <span>MongoDB, Express, ReactJS, Node</span>
          </ListItem>
          <ListItem>
            <Meta color="green">Source code</Meta>
            <Link
              href="https://github.com/kitan23/Note-app-mern-stack"
              target="_blank"
            >
              https://github.com/kitan23/Note-app-mern-stack
            </Link>
          </ListItem>
        </List>
        <WorkImage src="/images/works/note-app.png" alt="Note app" />
        <WorkImage src="/images/works/note-app1.png" alt="Note app" />
      </Container>
    </Layout>
  )
}

export default NoteApp
