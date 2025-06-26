import { Heading, Box, Image, Link, Badge } from '@chakra-ui/react'
import NextLink from 'next/link'
import { ChevronRightIcon } from '@chakra-ui/icons'

export const Title = ({ children }) => (
  <Box>
    <NextLink href="/works">
      <Link>Work</Link>
    </NextLink>
    <span>
      &nbsp;
      <ChevronRightIcon />
      &nbsp;
    </span>
    <Heading display="inline-block" as="h3" fontSize={20} mb={4}>
      {children}
    </Heading>
  </Box>
)

export const WorkImage = ({ src, alt }) => (
  <Image borderRadius="lg" w="full" src={src} alt={alt} mb={4} />
)

export const SectionTitle = ({ children }) => (
  <Heading as="h3" variant="section-title" mb={4}>
    {children}
  </Heading>
)

export const Meta = ({ children, color }) => (
  <Badge colorScheme={color || 'green'} mr={2}>
    {children}
  </Badge>
)
