import { Container, Badge, Link, List, ListItem } from '@chakra-ui/react'
import { ExternalLinkIcon } from '@chakra-ui/icons'
import { Title, Meta } from '../../components/work'
import Youtube from 'react-youtube'
import P from '../../components/paragraph'
import Layout from '../../components/layouts/article'
import React from 'react'

const MarioGame: React.FC = () => {
  const opts = {
    height: '390',
    width: '100%',
    playerVars: {
      autoplay: 1
    }
  }
  return (
    <Layout title="Mario Game">
      <Container>
        <Title>
          Classic Mario Platformer: From-Scratch Implementation <Badge>2021</Badge>
        </Title>
        <P>
          I developed a fully-featured 2D Mario platformer built entirely from scratch using Unity and C#, 
          demonstrating advanced game development skills and deep understanding of classic platformer mechanics. 
          This project showcases custom physics implementation, sophisticated animation systems, and modular 
          architecture that faithfully recreates the beloved Super Mario Bros experience while maintaining 
          extensibility for future enhancements.
        </P>
        <P>
          The game features a comprehensive state-driven player controller with responsive movement, jumping, 
          and collision detection, complemented by a smooth camera follow system with intelligent level bounds. 
          I implemented authentic Mario mechanics including interactive question blocks with coin spawning, 
          enemy AI with patrol and gravity systems, and complete win/loss conditions. The project demonstrates 
          professional game architecture with organized C# scripts, modular prefab systems, and pixel-perfect 
          graphics with custom animations and audio integration.
        </P>

        <List ml={4} my={4}>
          <ListItem>
            <Meta color="green">Source Code</Meta>
            <Link
              href="https://github.com/kitan23/Mario-Game"
              target="_blank"
            >
              https://github.com/kitan23/Mario-Game <ExternalLinkIcon mx="2px" />
            </Link>
          </ListItem>
          <ListItem>
            <Meta color="green">Platform</Meta>
            <span>Unity 2D Game Engine</span>
          </ListItem>
          <ListItem>
            <Meta color="green">Technology Stack</Meta>
            <span>Unity Engine, C#, Custom Pixel Art, Audio Integration</span>
          </ListItem>
          <ListItem>
            <Meta color="green">Core Features</Meta>
            <List spacing={2} pl={4}>
              <ListItem>• Custom physics and player controller with state machine</ListItem>
              <ListItem>• Interactive question blocks with coin spawning mechanics</ListItem>
              <ListItem>• Enemy AI with patrol, gravity, and defeat logic</ListItem>
              <ListItem>• Smooth camera follow system with level bounds</ListItem>
              <ListItem>• Modular level design with reusable prefabs</ListItem>
              <ListItem>• Complete scene management (Menu, Game, Win/Loss states)</ListItem>
            </List>
          </ListItem>
          <ListItem>
            <Meta color="green">Technical Highlights</Meta>
            <List spacing={2} pl={4}>
              <ListItem>• State-driven animation system (idle, running, jumping, bouncing)</ListItem>
              <ListItem>• Collision detection and physics implementation</ListItem>
              <ListItem>• Parallax backgrounds for enhanced visual depth</ListItem>
              <ListItem>• Extensible architecture for easy content additions</ListItem>
              <ListItem>• Frame-based animations and pixel-perfect rendering</ListItem>
              <ListItem>• Audio feedback system for interactive elements</ListItem>
            </List>
          </ListItem>
        </List>
        <Youtube videoId="tI_VpxxEOI8" opts={opts} />
      </Container>
    </Layout>
  )
}

export default MarioGame
