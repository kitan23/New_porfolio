import Logo from './logo'
import NextLink from 'next/link'
import {
  Container,
  Box,
  Link,
  Stack,
  Heading,
  Flex,
  Menu,
  MenuItem,
  MenuList,
  MenuButton,
  IconButton,
  useColorModeValue
} from '@chakra-ui/react'
import { HamburgerIcon } from '@chakra-ui/icons'
import ThemeToggleButton from './theme-toggle-button'

const LinkItem = ({ href, path, target, children, ...props }) => {
  const active = path === href
  const inactiveColor = useColorModeValue('gray.600', 'whiteAlpha.900')
  const activeBg = useColorModeValue('teal.500', 'teal.200')
  const activeTextColor = useColorModeValue('white', 'gray.800')
  const hoverBg = useColorModeValue('gray.100', 'whiteAlpha.100')
  const activeHoverBg = useColorModeValue('teal.600', 'teal.300')
  
  return (
    <NextLink href={href} scroll={false} target={target} style={{ textDecoration: 'none' }}>
      <Box
        as="span"
        px={4}
        py={2}
        mx={1}
        bg={active ? activeBg : 'transparent'}
        color={active ? activeTextColor : inactiveColor}
        borderRadius="lg"
        fontWeight={active ? 'semibold' : 'medium'}
        fontSize="sm"
        transition="all 0.2s ease-in-out"
        cursor="pointer"
        position="relative"
        _hover={active ? 
          { 
            bg: activeHoverBg,
            transform: 'translateY(-1px)',
            shadow: 'md'
          } : { 
            bg: hoverBg,
            color: useColorModeValue('gray.800', 'white'),
            transform: 'translateY(-1px)',
            shadow: 'sm'
          }
        }
        _active={{
          transform: 'translateY(0px)',
          shadow: 'none'
        }}
        {...props}
      >
        {children}
      </Box>
    </NextLink>
  )
}

const Navbar = props => {
  const { path } = props

  return (
    <Box
      position="fixed"
      as="nav"
      w="100%"
      bg={useColorModeValue('#ffffff40', '#20202380')}
      css={{ backdropFilter: 'blur(10px)' }}
      zIndex={2}
      {...props}
    >
      <Container
        display="flex"
        p={2}
        maxW="container.md"
        wrap="wrap"
        align="center"
        justify="space-between"
      >
        <Flex align="center" mr={5}>
          <Heading as="h1" size="lg" letterSpacing={'tighter'}>
            <Logo />
          </Heading>
        </Flex>

        <Stack
          direction={{ base: 'column', md: 'row' }}
          display={{ base: 'none', md: 'flex' }}
          width={{ base: 'full', md: 'auto' }}
          alignItems="center"
          flexGrow={1}
          mt={{ base: 4, md: 0 }}
          spacing={1}
        >
          <LinkItem href="/works" path={path}>
            Works
          </LinkItem>
          <LinkItem href="/awards" path={path}>
            Awards
          </LinkItem>
          <LinkItem href="/contact" path={path}>
            Contact
          </LinkItem>
          <LinkItem
            target="_blank"
            href="https://github.com/kitan23"
            path={path}
            display="inline-flex"
            alignItems="center"
            style={{ gap: 4 }}
            pl={2}
          >
            Source
          </LinkItem>
        </Stack>

        <Box flex={1} align="right">
          <ThemeToggleButton />
          <Box ml={2} display={{ base: 'inline-block', md: 'none' }}>
            <Menu isLazy id="navbar-menu">
              <MenuButton
                as={IconButton}
                icon={<HamburgerIcon />}
                variant="outline"
                aria-label="Options"
              />
              <MenuList>
                <MenuItem>
                  <NextLink href="/" style={{ textDecoration: 'none', width: '100%' }}>
                    About
                  </NextLink>
                </MenuItem>
                <MenuItem>
                  <NextLink href="/works" style={{ textDecoration: 'none', width: '100%' }}>
                    Works
                  </NextLink>
                </MenuItem>
                <MenuItem>
                  <NextLink href="/contact" style={{ textDecoration: 'none', width: '100%' }}>
                    Contact
                  </NextLink>
                </MenuItem>
                <MenuItem>
                  <NextLink href="/awards" style={{ textDecoration: 'none', width: '100%' }}>
                    Awards
                  </NextLink>
                </MenuItem>
                <MenuItem>
                  <Link href="https://github.com/kitan23" target="_blank" style={{ textDecoration: 'none', width: '100%' }}>
                    Source
                  </Link>
                </MenuItem>
              </MenuList>
            </Menu>
          </Box>
        </Box>
      </Container>
    </Box>
  )
}

export default Navbar
