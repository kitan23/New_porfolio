import React, { useState } from 'react'
import {
  Box,
  Button,
  FormControl,
  FormErrorMessage,
  FormLabel,
  Heading,
  Input,
  VStack
} from '@chakra-ui/react'
import * as Yup from 'yup'
import { Field, Form, Formik } from 'formik'

const Contact: React.FC = () => {
  const EMAIL_REGEX = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i

  const formValidationSchema = Yup.object().shape({
    name: Yup.string()
      .min(6, 'Name cannot be shorter than 6 characters')
      .max(30, 'Name cannot be longer than 30 characters')
      .required('Please fill out your name'),
    email: Yup.string()
      .min(6, 'Email cannot be shorter than 6 characters')
      .max(30, 'Email cannot be longer than 30 characters')
      .matches(EMAIL_REGEX, 'Please enter a valid email')
      .required('Please fill out your email'),
    message: Yup.string()
      .min(6, 'Message cannot be shorter than 6 characters')
      .required('Please enter your message')
  })

  const handleSubmitForm = async (values, { resetForm }) => {
    try {
      console.log('Success')
      resetForm({})
    } catch (error) {
      console.log(error)
    }
  }

  return (
    <Box>
      <Heading as="h3" fontSize={20} mb={5}>
        Get in touch with me
      </Heading>

      <Formik
        initialValues={{ name: '', email: '', subject: '', message: '' }}
        onSubmit={handleSubmitForm}
        validationSchema={formValidationSchema}
      >
        <Form>
          <VStack spacing={5}>
            <Field name="name">
              {({ form, field }: any) => (
                <FormControl isInvalid={form.errors.name}>
                  <FormLabel>Name</FormLabel>
                  <Input type="text" placeholder="Name" id="name" {...field} />
                  <FormErrorMessage>{form.errors.name}</FormErrorMessage>
                </FormControl>
              )}
            </Field>
            <Field name="email">
              {({ form, field }: any) => (
                <FormControl isInvalid={form.errors.email}>
                  <FormLabel>Email</FormLabel>
                  <Input
                    type="email"
                    placeholder="Email"
                    id="email"
                    {...field}
                  />
                  <FormErrorMessage>{form.errors.email}</FormErrorMessage>
                </FormControl>
              )}
            </Field>

            <Field name="subject">
              {({ field }) => (
                <FormControl>
                  <FormLabel>Subject</FormLabel>
                  <Input
                    type="text"
                    placeholder="Subject"
                    id="subject"
                    {...field}
                  />
                </FormControl>
              )}
            </Field>
            <Field name="message">
              {({ form, field }) => (
                <FormControl isInvalid={form.errors.message}>
                  <FormLabel>Message</FormLabel>
                  <Input
                    placeholder="Please enter your message"
                    as="textarea"
                    id="message"
                    height="300px"
                    {...field}
                  />
                  <FormErrorMessage>{form.errors.message}</FormErrorMessage>
                </FormControl>
              )}
            </Field>
            <Button type="submit" size="md" colorScheme="green">
              Submit
            </Button>
          </VStack>
        </Form>
      </Formik>
    </Box>
  )
}

export default Contact
