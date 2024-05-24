import { Container, Badge, Link, List, ListItem } from '@chakra-ui/react'
import { ExternalLinkIcon } from '@chakra-ui/icons'
import { Title, WorkImage, Meta } from '../../components/work'
import P from '../../components/paragraph'
import Layout from '../../components/layouts/article'

const GoogleDinosaur: React.FC = () => {
  return (
    <Layout title="note-app">
      <Container>
        <Title>
          {' '}
          Google Dinosaur Game Remake <Badge>2022</Badge>
        </Title>
        <P>Classic Google Dinosaur game implemented entirely in Assembly x86</P>
        <List ml={4} my={4}>
          <ListItem>
            <Meta color="green">Platform</Meta>
            <span>DOS</span>
          </ListItem>
          <ListItem>
            <Meta color="green">Stack</Meta>
            <span>Assembly x86</span>
          </ListItem>
          <ListItem>
            <Meta color="green">Source code</Meta>
            <Link
              href="https://github.com/kitan23/Google-Dinosaur"
              target="_blank"
            >
              https://github.com/kitan23/Google-Dinosaur
            </Link>
          </ListItem>
        </List>
        <WorkImage src="/images/works/google-dinosaur.jpeg" alt="Note app" />
      </Container>
    </Layout>
  )
}

export default GoogleDinosaur
