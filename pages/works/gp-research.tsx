import { Container, Badge, Link, List, ListItem } from '@chakra-ui/react'
import { ExternalLinkIcon } from '@chakra-ui/icons'
import { Title, WorkImage, Meta } from '../../components/work'
import P from '../../components/paragraph'
import Layout from '../../components/layouts/article'

const GPResearch: React.FC = () => {
  return (
    <Layout title="Genetic Programming Research">
      <Container>
        <Title>
          Advanced Genetic Programming Research <Badge>2023</Badge>
        </Title>
        <P>
          As a Research Assistant under Dr. Helmuth, I led the implementation and enhancement of 
          Probabilistic Lexicase Selection, building upon the groundbreaking work by Ding et al. (2023). 
          My implementation in the Clojure-based CBGP/PushGP systems achieved remarkable results: 
          a 18% increase in median solve-rate across a 10-benchmark symbolic regression suite and 
          a 23% improvement in population diversity. Through innovative optimization techniques, 
          including transients and batched fitness evaluation, I reduced per-generation runtime by 22%, 
          enabling 10× larger hyper-parameter sweeps on our 64-core HPC cluster.
        </P>
        <P>
          The project&apos;s scale was unprecedented, with 2.4 million evolutionary runs automated across 
          20 composite problems using SLURM and Datomic logging. I developed comprehensive Jupyter 
          dashboards for real-time convergence analytics and selection-pressure heatmaps, providing 
          unprecedented insights into evolutionary dynamics. My work extended beyond implementation, 
          as I presented technical talks on genetic programming advancements at Push Language Discourse 
          sessions, engaging faculty and PhD candidates from UMass Amherst and Amherst College.
        </P>
        <List ml={4} my={4}>
          <ListItem>
            <Meta color="green">Research Paper</Meta>
            <Link href="https://arxiv.org/abs/2305.11681" target="_blank">
              Probabilistic Lexicase Selection (Ding et al., 2023) <ExternalLinkIcon mx="2px" />
            </Link>
          </ListItem>
          <ListItem>
            <Meta color="green">Implementation</Meta>
            <Link href="https://github.com/kitan23/cbgp-lite" target="_blank">
              https://github.com/kitan23/cbgp-lite <ExternalLinkIcon mx="2px" />
            </Link>
          </ListItem>
          <ListItem>
            <Meta color="green">Technologies</Meta>
            <span>Clojure, Python, SLURM, Datomic, Jupyter</span>
          </ListItem>
          <ListItem>
            <Meta color="green">Key Achievements</Meta>
            <List spacing={2} pl={4}>
              <ListItem>• 18% increase in median solve-rate</ListItem>
              <ListItem>• 23% improvement in population diversity</ListItem>
              <ListItem>• 22% reduction in per-generation runtime</ListItem>
              <ListItem>• 2.4M evolutionary runs automated</ListItem>
              <ListItem>• 10× larger hyper-parameter sweeps enabled</ListItem>
            </List>
          </ListItem>
        </List>
        <WorkImage src="/images/works/flame_graph.png" alt="Performance Analysis" />
        <WorkImage src="/images/works/tables.png" alt="Research Results" />
      </Container>
    </Layout>
  )
}

export default GPResearch
