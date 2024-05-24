import { Container, Badge, Link, List, ListItem } from '@chakra-ui/react'
import { ExternalLinkIcon } from '@chakra-ui/icons'
import { Title, WorkImage, Meta } from '../../components/work'
import P from '../../components/paragraph'
import Layout from '../../components/layouts/article'
import React from 'react'

const UberBlockchain: React.FC = () => {
  return (
    <Layout title="covid-tracker">
      <Container>
        <Title>
          {' '}
          Uber Blockchain <Badge>2022</Badge>
        </Title>
        <P>
          Uber Blockchain is a web app that allows you to book and pay for your
          ride using Ethereum.
        </P>

        <List>
          <ListItem>
            <span>1. Show responsive map and pin locations</span>
          </ListItem>
          <ListItem>
            <span>
              2. Allow conncetion to Metamask to carry out transactions
            </span>
          </ListItem>
          <ListItem>
            <span>
              3. Calculate the cost in ETH using real-time conversion rate
            </span>
          </ListItem>
        </List>

        <List ml={4} my={4}>
          <ListItem>
            <Meta color="green">Website</Meta>
            <Link
              href="https://uber-clone-blockchain-rgr5jqtcu-kitan23.vercel.app/"
              target="_blank"
            >
              https://uber-clone-blockchain-rgr5jqtcu-kitan23.vercel.app/
              <ExternalLinkIcon mx="2px" />
            </Link>
          </ListItem>
          <ListItem>
            <Meta color="green">Platform</Meta>
            <span>Web Application</span>
          </ListItem>
          <ListItem>
            <Meta color="green">Stack</Meta>
            <span>NextJS, Web3, Ethers, Sanity</span>
          </ListItem>
          <ListItem>
            <Meta color="green">Source code</Meta>
            <Link
              href="https://github.com/kitan23/uber-blockchain"
              target="_blank"
            >
              https://github.com/kitan23/uber-blockchain
            </Link>
          </ListItem>
        </List>
        <WorkImage
          src="/images/works/uber-blockchain.png"
          alt="Covid Tracker"
        />
      </Container>
    </Layout>
  )
}

export default UberBlockchain
