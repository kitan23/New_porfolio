import NextLink from 'next/link'
import Image, { StaticImageData } from 'next/image'
import { Box, Text, LinkBox, LinkOverlay } from '@chakra-ui/react'
import { Global } from '@emotion/react'
import React from 'react'

export const GridItem = ({ children, href, title, thumbnail }) => (
  <Box w="100%" textAlign="center">
    <LinkBox cursor="pointer">
      <Image
        src={thumbnail}
        alt={title}
        className="grid-item-thumbnail"
        placeholder="blur"
        loading="lazy"
      />
      <LinkOverlay href={href} target="_blank">
        <Text mt={2}>{title}</Text>
      </LinkOverlay>
      <Text fontSize={14}>{children}</Text>
    </LinkBox>
  </Box>
)

interface WorkItemProps {
  id: string
  title: string
  thumbnail: string | StaticImageData
}
export const WorkGridItem = ({ id, title, thumbnail }: WorkItemProps) => {
  return (
    <NextLink href={`/works/${id}`}>
      <Box w="100%" textAlign="center" cursor="pointer">
        <Box position="relative" width="200px" height="200px" mx="auto" mb={4}>
          <Image
            src={thumbnail}
            alt={title}
            layout="fill"
            objectFit="contain"
            style={{ borderRadius: '8px' }}
          />
        </Box>
        <Text mt={2} fontSize={20} fontWeight="bold">
          {title}
        </Text>
      </Box>
    </NextLink>
  )
}

export const GridItemStyle = () => (
  <Global
    styles={`
      .grid-item-thumbnail {
        border-radius: 12px;
      }
    `}
  />
)
