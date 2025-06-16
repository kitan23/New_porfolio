import { Container, Badge, Link, List, ListItem } from '@chakra-ui/react'
import { ExternalLinkIcon } from '@chakra-ui/icons'
import { Title, WorkImage, Meta } from '../../components/work'
import P from '../../components/paragraph'
import Layout from '../../components/layouts/article'

const GoogleDinosaur: React.FC = () => {
  return (
    <Layout title="Google Dinosaur Assembly">
      <Container>
        <Title>
          Google Dinosaur: Low-Level Assembly Implementation <Badge>2022</Badge>
        </Title>
        <P>
          Engineered a recreation of Google&apos;s iconic Dinosaur game using pure x86 Assembly 
          language, demonstrating mastery of low-level systems programming and hardware interfacing. This 
          project required direct manipulation of CPU registers, memory addressing, and BIOS interrupts 
          to achieve real-time graphics rendering and responsive gameplay without any high-level language 
          abstractions or operating system support.
        </P>
        <P>
          The implementation features a sophisticated interrupt-driven architecture that manages game state, 
          collision detection, and audio feedback through direct hardware manipulation. By leveraging VGA 
          mode 13h graphics and optimizing memory access patterns, I achieved smooth real-time gameplay while 
          maintaining strict memory constraints. The project showcases advanced assembly techniques including 
          stack management, register optimization, and direct I/O port communication for keyboard input 
          and PC speaker audio generation.
        </P>
        <List ml={4} my={4}>
          <ListItem>
            <Meta color="green">Source Code</Meta>
            <Link
              href="https://github.com/kitan23/Google-Dinosaur"
              target="_blank"
            >
              https://github.com/kitan23/Google-Dinosaur <ExternalLinkIcon mx="2px" />
            </Link>
          </ListItem>
          <ListItem>
            <Meta color="green">Platform</Meta>
            <span>DOS/x86 Architecture</span>
          </ListItem>
          <ListItem>
            <Meta color="green">Technology</Meta>
            <span>x86 Assembly, DOSCADE, VGA Graphics, BIOS Interrupts</span>
          </ListItem>
          <ListItem>
            <Meta color="green">Technical Achievements</Meta>
            <List spacing={2} pl={4}>
              <ListItem>• Interrupt-driven game loop with real-time rendering</ListItem>
              <ListItem>• Direct VGA memory manipulation for pixel-level graphics control</ListItem>
              <ListItem>• Optimized collision detection using bitwise operations</ListItem>
              <ListItem>• Hardware-based audio through PC speaker interrupt programming</ListItem>
              <ListItem>• Memory-efficient sprite rendering with custom compression</ListItem>
              <ListItem>• Keyboard input handling via BIOS interrupt 16h</ListItem>
            </List>
          </ListItem>
          <ListItem>
            <Meta color="green">Low-Level Implementation</Meta>
            <List spacing={2} pl={4}>
              <ListItem>• Direct CPU register manipulation for performance optimization</ListItem>
              <ListItem>• Custom memory management within 640KB DOS limitations</ListItem>
              <ListItem>• Stack-based game state management without heap allocation</ListItem>
              <ListItem>• Precise timing control using system timer interrupts</ListItem>
            </List>
          </ListItem>
        </List>
        <WorkImage src="/images/works/google-dinosaur.jpeg" alt="Google Dinosaur Assembly Implementation" />
        <WorkImage src="/images/works/doscade.png" alt="DOSCADE" />
      </Container>
    </Layout>
  )
}

export default GoogleDinosaur
