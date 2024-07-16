import {
  Container,
  Badge,
  Link,
  List,
  ListItem,
  SimpleGrid
} from '@chakra-ui/react'
import { ExternalLinkIcon } from '@chakra-ui/icons'
import { Title, WorkImage, Meta } from '../../components/work'
import P from '../../components/paragraph'
import Layout from '../../components/layouts/article'
import React from 'react'

const DailyInspo: React.FC = () => {
  return (
    <Layout title="Daily Inspo">
      <Container>
        <Title>
          Daily Inspo: Daily Inspirational Quotes <Badge>2024</Badge>
        </Title>
        <P>
          Daily Inspo is a motivational app designed to inspire and uplift users
          through powerful quotes and sayings. Offering a curated selection of
          thoughts from some of the world's most influential thinkers, Daily
          Inspo provides personalized daily quotes to enhance every user's day.
          With an intuitive swipe card interface, users can explore, save, and
          share inspirational quotes seamlessly. The app focuses on user
          experience with a clean, aesthetic interface that makes daily
          interactions enjoyable and engaging.
        </P>
        <List ml={4} my={4}>
          <ListItem>
            <Meta color="green">Platform</Meta>
            <span>iOS</span>
          </ListItem>
          <ListItem>
            <Meta color="green">Technology</Meta>
            <span>SwiftUI, Firebase</span>
          </ListItem>
          <ListItem>
            <Meta color="green">Features</Meta>
            <List spacing={3} pl={4}>
              <ListItem>
                <strong>Personalized Daily Quotes:</strong> Choose quotes that
                match your mood from categories like Motivation, Life Lessons,
                Happiness, and more.
              </ListItem>
              <ListItem>
                <strong>Favorite and Save:</strong> Easily save and manage your
                collection of inspirational quotes.
              </ListItem>
              <ListItem>
                <strong>Customizable Notifications:</strong> Never miss your
                daily dose of inspiration with tailored reminders.
              </ListItem>
              <ListItem>
                <strong>Beautiful, User-Friendly Interface:</strong> Navigate
                effortlessly through a clean and intuitive interface.
              </ListItem>
              <ListItem>
                <strong>Share the Inspiration:</strong> Spread motivation by
                sharing quotes with friends and family directly from the app.
              </ListItem>
              <ListItem>
                <strong>No Account Required:</strong> Immediate access to all
                features without the need for signup or login.
              </ListItem>
            </List>
          </ListItem>
        </List>
        <SimpleGrid columns={[1, 1, 2]} gap={6}>
          <WorkImage
            src="/images/works/daily-inspo-1.png"
            alt="Daily Inspo UI"
          />
          <WorkImage
            src="/images/works/daily-inspo-2.png"
            alt="Daily Inspo Quotes"
          />
          <WorkImage
            src="/images/works/daily-inspo-3.png"
            alt="Daily Inspo Settings"
          />
          <WorkImage
            src="/images/works/daily-inspo-4.png"
            alt="Daily Inspo Settings"
          />
        </SimpleGrid>
      </Container>
    </Layout>
  )
}

export default DailyInspo
