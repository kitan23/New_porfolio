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
          A research on Plexicase (Probabilistic Lexicase), a parent selection
          method that combines Lexicase Selection and probabilistic sampling. I
          implemented Plexicase in Code-Building GP and Clojush and optimized
          the runtime by tweaking Clojure&apos;s core concepts of lazy sequences
          and data types. Also, I ran tests on High Performance Cluster,
          recorded, and compared the success rates and run time of Lexicase and
          Plexicase on different composite problems. From the results, I
          designed and implemented different variants to further improve
          performance and address more specific problems.
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
