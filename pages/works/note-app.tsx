import { Container, Badge, Link, List, ListItem } from '@chakra-ui/react'
import { ExternalLinkIcon } from '@chakra-ui/icons'
import { Title, WorkImage, Meta } from '../../components/work'
import P from '../../components/paragraph'
import Layout from '../../components/layouts/article'

const NoteApp: React.FC = () => {
  return (
    <Layout title="Knowledge Vault">
      <Container>
        <Title>
          Knowledge Vault: Intelligent Learning Management System <Badge>2021</Badge>
        </Title>
        <P>
          I developed a sophisticated knowledge management and learning platform using
          the MERN stack (MongoDB, Express.js, React.js, Node.js), designed to
          revolutionize how users organize, store, and access their learning materials.
          The project features a robust back-end architecture with Node.js and
          Express, implementing secure RESTful APIs for comprehensive knowledge
          management operations, supported by MongoDB's scalable data storage.
          The front-end delivers an intuitive and responsive interface built with React,
          leveraging React Hooks and Context API for seamless state management,
          and enhanced with Material-UI for a premium user experience. The platform
          enables users to create rich knowledge repositories with document attachments,
          progress tracking, and advanced organization features including real-time
          editing, intelligent tagging, and hierarchical categorization for efficient
          information retrieval. Security is paramount, with JWT-based authentication
          and authorization ensuring data privacy and integrity. The application
          is cloud-deployed with automated CI/CD pipelines for continuous improvement
          and features responsive design for optimal cross-device accessibility.
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
