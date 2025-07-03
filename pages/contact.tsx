import React from 'react'
import {
  Box,
  Button,
  FormControl,
  FormErrorMessage,
  FormLabel,
  Heading,
  Input,
  VStack,
  useToast,
  Container,
  Text,
  useColorModeValue,
  Flex,
  Icon,
  SimpleGrid,
  Textarea
} from '@chakra-ui/react'
import { FaEnvelope, FaGithub, FaLinkedin } from 'react-icons/fa'
import * as Yup from 'yup'
import { Field, Form, Formik } from 'formik'
import Layout from '../components/layouts/article'

const Contact: React.FC = () => {
  const EMAIL_REGEX = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i

  const toast = useToast({
    title: 'Redirecting to email...',
    status: 'loading',
    duration: 5000,
    isClosable: true,
    position: 'top'
  })

  const formValidationSchema = Yup.object().shape({
    name: Yup.string()
      .min(2, 'Name must be at least 2 characters')
      .max(50, 'Name cannot be longer than 50 characters')
      .required('Please fill out your name'),
    email: Yup.string()
      .matches(EMAIL_REGEX, 'Please enter a valid email')
      .required('Please fill out your email'),
    message: Yup.string()
      .min(10, 'Message must be at least 10 characters')
      .required('Please enter your message')
  })

  const handleSubmitForm = async (values, { resetForm }) => {
    try {
      toast()
      window.open(
        `mailto:kyletran3202@gmail.com?subject=${encodeURIComponent(
          values.subject || 'Contact from Portfolio'
        )}&body=${encodeURIComponent(values.name)} (${encodeURIComponent(
          values.email
        )}): ${encodeURIComponent(values.message)}`
      )
      resetForm({})
    } catch (error) {
      console.log(error)
    }
  }

  const inputBg = useColorModeValue('white', 'whiteAlpha.100')
  const borderColor = useColorModeValue('gray.200', 'whiteAlpha.300')

  return (
    <Layout title="contact">
      <Container maxW="container.lg" py={8}>
        {/* Header Section */}
        <Box textAlign="center" mb={12}>
          {/* <Heading 
            as="h1" 
            fontSize={{ base: "3xl", md: "4xl", lg: "5xl" }} 
            fontWeight="bold"
            bgGradient="linear(to-r, teal.400, teal.600)"
            bgClip="text"
            mb={4}
          >
            Get In Touch
          </Heading> */}
          <Text 
            fontSize={{ base: "lg", md: "xl" }} 
            color={useColorModeValue('gray.600', 'gray.300')}
            maxW="2xl"
            mx="auto"
            lineHeight="tall"
          >
            Have a project in mind? Want to collaborate? Or just want to say hello? 
            I'd love to hear from you!
          </Text>
        </Box>

        <SimpleGrid columns={[1, 1, 2]} gap={12} alignItems="start">
          {/* Contact Form */}
          <Box>
            <Heading as="h2" fontSize="2xl" mb={6} color="teal.500">
              Send a Message
            </Heading>
            
            <Formik
              initialValues={{ name: '', email: '', subject: '', message: '' }}
              onSubmit={handleSubmitForm}
              validationSchema={formValidationSchema}
            >
              <Form>
                <VStack spacing={6}>
                  <Field name="name">
                    {({ form, field }: any) => (
                      <FormControl isInvalid={form.errors.name && form.touched.name}>
                        <FormLabel fontWeight="medium">Name</FormLabel>
                        <Input 
                          type="text" 
                          placeholder="Your full name" 
                          id="name" 
                          bg={inputBg}
                          borderColor={borderColor}
                          _hover={{ borderColor: 'teal.300' }}
                          _focus={{ borderColor: 'teal.500', boxShadow: '0 0 0 1px teal.500' }}
                          size="lg"
                          {...field} 
                        />
                        <FormErrorMessage>{form.errors.name}</FormErrorMessage>
                      </FormControl>
                    )}
                  </Field>

                  <Field name="email">
                    {({ form, field }: any) => (
                      <FormControl isInvalid={form.errors.email && form.touched.email}>
                        <FormLabel fontWeight="medium">Email</FormLabel>
                        <Input
                          type="email"
                          placeholder="your.email@example.com"
                          id="email"
                          bg={inputBg}
                          borderColor={borderColor}
                          _hover={{ borderColor: 'teal.300' }}
                          _focus={{ borderColor: 'teal.500', boxShadow: '0 0 0 1px teal.500' }}
                          size="lg"
                          {...field}
                        />
                        <FormErrorMessage>{form.errors.email}</FormErrorMessage>
                      </FormControl>
                    )}
                  </Field>

                  <Field name="subject">
                    {({ field }) => (
                      <FormControl>
                        <FormLabel fontWeight="medium">Subject</FormLabel>
                        <Input
                          type="text"
                          placeholder="What's this about?"
                          id="subject"
                          bg={inputBg}
                          borderColor={borderColor}
                          _hover={{ borderColor: 'teal.300' }}
                          _focus={{ borderColor: 'teal.500', boxShadow: '0 0 0 1px teal.500' }}
                          size="lg"
                          {...field}
                        />
                      </FormControl>
                    )}
                  </Field>

                  <Field name="message">
                    {({ form, field }) => (
                      <FormControl isInvalid={form.errors.message && form.touched.message}>
                        <FormLabel fontWeight="medium">Message</FormLabel>
                        <Textarea
                          placeholder="Tell me about your project, idea, or just say hello..."
                          id="message"
                          rows={6}
                          bg={inputBg}
                          borderColor={borderColor}
                          _hover={{ borderColor: 'teal.300' }}
                          _focus={{ borderColor: 'teal.500', boxShadow: '0 0 0 1px teal.500' }}
                          resize="vertical"
                          {...field}
                        />
                        <FormErrorMessage>{form.errors.message}</FormErrorMessage>
                      </FormControl>
                    )}
                  </Field>

                  <Button 
                    type="submit" 
                    size="lg" 
                    colorScheme="teal"
                    width="full"
                    fontSize="md"
                    py={6}
                    transition="all 0.2s ease-in-out"
                    _hover={{ 
                      transform: 'translateY(-2px)', 
                      shadow: 'lg' 
                    }}
                  >
                    Send Message
                  </Button>
                </VStack>
              </Form>
            </Formik>
          </Box>

          {/* Contact Info */}
          <Box>
            <Heading as="h2" fontSize="2xl" mb={6} color="teal.500">
              Other Ways to Connect
            </Heading>
            
            <VStack spacing={6} align="stretch">
              <Box 
                p={6} 
                bg={useColorModeValue('gray.50', 'whiteAlpha.100')} 
                borderRadius="xl"
                borderLeft="4px solid"
                borderLeftColor="teal.400"
              >
                <Flex align="center" mb={4}>
                  <Icon as={FaEnvelope} color="teal.500" boxSize={5} mr={3} />
                  <Heading as="h3" fontSize="lg">Email</Heading>
                </Flex>
                <Text color={useColorModeValue('gray.600', 'gray.300')}>
                  kyletran3202@gmail.com
                </Text>
                <Text fontSize="sm" color={useColorModeValue('gray.500', 'gray.400')} mt={2}>
                  Best way to reach me for opportunities and collaborations
                </Text>
              </Box>

              <Box 
                p={6} 
                bg={useColorModeValue('gray.50', 'whiteAlpha.100')} 
                borderRadius="xl"
                borderLeft="4px solid"
                borderLeftColor="teal.400"
              >
                <Flex align="center" mb={4}>
                  <Icon as={FaGithub} color="teal.500" boxSize={5} mr={3} />
                  <Heading as="h3" fontSize="lg">GitHub</Heading>
                </Flex>
                <Text 
                  as="a" 
                  href="https://github.com/kitan23" 
                  target="_blank"
                  color="teal.500"
                  _hover={{ textDecoration: 'underline' }}
                >
                  github.com/kitan23
                </Text>
                <Text fontSize="sm" color={useColorModeValue('gray.500', 'gray.400')} mt={2}>
                  Check out my latest projects and contributions
                </Text>
              </Box>

              <Box 
                p={6} 
                bg={useColorModeValue('gray.50', 'whiteAlpha.100')} 
                borderRadius="xl"
                borderLeft="4px solid"
                borderLeftColor="teal.400"
              >
                <Flex align="center" mb={4}>
                  <Icon as={FaLinkedin} color="teal.500" boxSize={5} mr={3} />
                  <Heading as="h3" fontSize="lg">LinkedIn</Heading>
                </Flex>
                <Text 
                  as="a" 
                  href="https://www.linkedin.com/in/ktran23" 
                  target="_blank"
                  color="teal.500"
                  _hover={{ textDecoration: 'underline' }}
                >
                  linkedin.com/in/ktran23
                </Text>
                <Text fontSize="sm" color={useColorModeValue('gray.500', 'gray.400')} mt={2}>
                  Let's connect professionally
                </Text>
              </Box>
            </VStack>
          </Box>
        </SimpleGrid>
      </Container>
    </Layout>
  )
}

export default Contact
