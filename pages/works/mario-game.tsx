import { Container, Badge, Link, List, ListItem } from '@chakra-ui/react'
import { ExternalLinkIcon } from '@chakra-ui/icons'
import { Title, Meta } from '../../components/work'
import Youtube from 'react-youtube'
import P from '../../components/paragraph'
import Layout from '../../components/layouts/article'
import React from 'react'

const NetflixClone: React.FC = () => {
  const opts = {
    height: '390',
    width: '100%',
    playerVars: {
      autoplay: 1
    }
  }
  return (
    <Layout title="covid-tracker">
      <Container>
        <Title>
          {' '}
          Mario Game <Badge>2021</Badge>
        </Title>
        <P>A 8-bit Mario game created with Unity and C#</P>

        <List ml={4} my={4}>
          <ListItem>
            <Meta color="green">Link to Github repo</Meta>
            <Link
              href="https://github.com/kitan23/Mario-Game/tree/main"
              target="_blank"
            >
              https://github.com/kitan23/Mario-Game/tree/main{' '}
              <ExternalLinkIcon mx="2px" />
            </Link>
          </ListItem>
          <ListItem>
            <Meta color="green">Platform</Meta>
            <span>Platform Game</span>
          </ListItem>
          <ListItem>
            <Meta color="green">Stack</Meta>
            <span>Unity, C#</span>
          </ListItem>
        </List>
        <Youtube videoId="tI_VpxxEOI8" opts={opts} />
      </Container>
    </Layout>
  )
}

export default NetflixClone
