import { Box, Heading, List, ListItem } from '@chakra-ui/react'
import { Meta } from './work'
import React from 'react'
import { ChevronRightIcon } from '@chakra-ui/icons'

interface Props {
  name: string
  title: string
  time: string
}
export const AwardItem: React.FC<Props> = ({ name, title, time }) => {
  return (
    <Box mb={10}>
      <Heading display="inline-block" as="h3" fontSize={20} mb={4}>
        <ChevronRightIcon />
        {name}
      </Heading>

      <List>
        <ListItem>
          <Meta color="green">Time</Meta>
          <span>{time}</span>
        </ListItem>
        <ListItem>
          <Meta color="green">Title</Meta>
          <span>{title}</span>
        </ListItem>
      </List>
    </Box>
  )
}
