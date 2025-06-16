import { Container, Badge, Link, List, ListItem } from '@chakra-ui/react'
import { ExternalLinkIcon } from '@chakra-ui/icons'
import { Title, WorkImage, Meta } from '../../components/work'
import Youtube from 'react-youtube'
import P from '../../components/paragraph'
import Layout from '../../components/layouts/article'
import React from 'react'

const VBTSystem: React.FC = () => {
  const opts = {
    height: '390',
    width: '100%',
    playerVars: {
      autoplay: 0
    }
  }

  return (
    <Layout title="VBT System">
      <Container>
        <Title>
          Velocity-Based Training System for Hamilton College Athletics <Badge>2025</Badge>
        </Title>
        <P>
          Led the development of a custom Velocity-Based Training (VBT) system as part of a 4-person team 
          to revolutionize athletic performance monitoring at Hamilton College. Our solution addressed 
          critical limitations of the existing $500+ Enode Pro system by creating a comprehensive 
          hardware-software platform that delivers superior functionality at a fraction of the cost (~$50).
        </P>
        <P>
          The project combined custom hardware design using Arduino Nano IoT 33 microcontrollers with 
          an intuitive multi-device web application. Our system enables simultaneous monitoring of up to 
          5 athletes, providing real-time velocity tracking, performance analytics, and coaching insights 
          through a streamlined dashboard interface. The hardware features a carbon fiber 3D-printed case 
          with velcro strapping and seamless one-click connectivity, eliminating the calibration nightmares 
          of commercial alternatives.
        </P>
        <List ml={4} my={4}>
          <ListItem>
            <Meta color="green">Client</Meta>
            <span>Hamilton College Athletics Department</span>
          </ListItem>
          <ListItem>
            <Meta color="green">Technology Stack</Meta>
            <span>Arduino Nano IoT 33, React.js, Node.js, Carbon Fiber 3D Printing</span>
          </ListItem>
          <ListItem>
            <Meta color="green">Key Metrics</Meta>
            <List spacing={2} pl={4}>
              <ListItem>• 90% cost reduction ($50 vs $500+ commercial solution)</ListItem>
              <ListItem>• 5× multi-device capacity (vs single-device competitors)</ListItem>
              <ListItem>• One-click setup (vs 10+ step calibration process)</ListItem>
              <ListItem>• Custom PCB design with 24-gauge wire soldering</ListItem>
            </List>
          </ListItem>
          <ListItem>
            <Meta color="green">Core Features</Meta>
            <List spacing={2} pl={4}>
              <ListItem>• Real-time velocity tracking with live dashboard analytics</ListItem>
              <ListItem>• Carbon fiber hardware with seamless wireless connectivity</ListItem>
              <ListItem>• iPad-compatible interface with multithreading architecture</ListItem>
              <ListItem>• Complete documentation and DIY customization support</ListItem>
            </List>
          </ListItem>
        </List>
        
        <WorkImage
          src="/images/works/vbt-hardware.png"
          alt="VBT System Hardware - Arduino and Carbon Fiber Case"
        />
        <WorkImage
          src="/images/works/vbt-hardware-case.png"
          alt="VBT System Hardware - Carbon Fiber Case"
        />
        <WorkImage
          src="/images/works/vbt-dashboard.png"
          alt="VBT Multi-Device Dashboard Interface"
        />
        <Youtube videoId="worZ0PWJrZA" opts={opts} />
      </Container>
    </Layout>
  )
}

export default VBTSystem 