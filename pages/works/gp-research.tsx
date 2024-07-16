import { Container, Badge, Link, List, ListItem } from '@chakra-ui/react'
import { ExternalLinkIcon } from '@chakra-ui/icons'
import { Title, WorkImage, Meta } from '../../components/work'
import P from '../../components/paragraph'
import Layout from '../../components/layouts/article'

const GPResearch: React.FC = () => {
  return (
    <Layout title="gp-research">
      <Container>
        <Title>
          Genetic Programming Research <Badge>2023</Badge>
        </Title>
        <P>
          Under the guidance of Dr. Helmuth, I conducted advanced research on
          the Lexicase Selection method in genetic programming. I successfully
          implemented Probabilistic Lexicase into the CBGP and PushGP systems,
          achieving a 40% increase in efficiency for probability distribution
          and parent selection by utilizing innovative weighted and ranked
          shuffling techniques. By optimizing runtime through the implementation
          of grouping techniques and leveraging Clojure core concepts, such as
          lazy sequences and immutability, I enhanced computational efficiency
          by 15%. I designed and executed experiments on 20 composite problems
          using High Performance Computers, systematically recording and
          analyzing millions of runs to compare the performance of Probabilistic
          Lexicase against traditional parent selection methods, demonstrating
          superior diversity and selection efficiency. Additionally, I led and
          presented my findings at two Push Language Discourse sessions,
          disseminating research outcomes and technical insights to an audience
          of professors and PhD candidates, fostering academic discourse and
          collaboration.
        </P>
        <List ml={4} my={4}>
          <ListItem>
            <Meta color="green">Website</Meta>
            <Link href="https://github.com/kitan23/cbgp-lite" target="_blank">
              https://github.com/kitan23/cbgp-lite <ExternalLinkIcon mx="2px" />
            </Link>
          </ListItem>
          <ListItem>
            <Meta color="green">Languages</Meta>
            <span>Clojure, Python</span>
          </ListItem>
        </List>
        <WorkImage src="/images/works/flame_graph.png" alt="GP Research" />
        <WorkImage src="/images/works/tables.png" alt="GP Research" />
      </Container>
    </Layout>
  )
}

export default GPResearch
