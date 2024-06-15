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
          I developed a comprehensive full-stack note-taking application using
          the MERN stack (MongoDB, Express.js, React.js, Node.js), designed to
          enhance user productivity and learning management. The project
          involved implementing a robust back-end server with Node.js and
          Express, featuring secure RESTful APIs for creating, reading,
          updating, and deleting notes, and supported by MongoDB for scalable
          data storage. On the front-end, I created a dynamic and responsive
          interface with React, incorporating React Hooks and Context API for
          efficient state management, and integrated Material-UI for a sleek,
          modern user experience. The application allows users to attach
          documents and track their learning progress, featuring real-time note
          editing, tagging, and categorization for streamlined information
          retrieval. Additionally, I incorporated user authentication and
          authorization using JSON Web Tokens (JWT) to ensure secure access and
          data integrity. The application was deployed on cloud platforms,
          implementing CI/CD pipelines for seamless updates and maintenance, and
          ensured cross-device compatibility with responsive design techniques.
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
