import {
  Container,
  Badge,
  Link,
  List,
  ListItem,
  SimpleGrid
} from '@chakra-ui/react'
import { ExternalLinkIcon } from '@chakra-ui/icons'
import { Title, WorkImage, Meta } from '../../components/work'
import P from '../../components/paragraph'
import Layout from '../../components/layouts/article'
import React from 'react'

const OptRag: React.FC = () => {
  return (
    <Layout title="OPT-RAG">
      <Container>
        <Title>
          OPT-RAG: International Student Visa Assistant <Badge>2025</Badge>
        </Title>
        <P>
          OPT-RAG is a sophisticated Retrieval-Augmented Generation (RAG) 
          application designed to help international students navigate complex 
          visa-related issues, OPT applications, and other immigration concerns. 
          The system leverages advanced AI technology to provide accurate, 
          context-aware responses by retrieving relevant information from 
          official documentation and immigration policies. Built with a 
          microservices architecture, the application features a FastAPI backend 
          for document processing and query handling, a Streamlit frontend for 
          user interaction, and a comprehensive monitoring stack for observability.
        </P>
        <List ml={4} my={4}>
          <ListItem>
            <Meta color="green">Source Code</Meta>
            <Link
              href="https://github.com/kitan23/LLM-Agent-for-Visa"
              target="_blank"
            >
              https://github.com/kitan23/LLM-Agent-for-Visa{' '}
              <ExternalLinkIcon mx="2px" />
            </Link>
          </ListItem>
          <ListItem>
            <Meta color="green">Platform</Meta>
            <span>Web Application (Kubernetes/Docker)</span>
          </ListItem>
          <ListItem>
            <Meta color="green">Technology Stack</Meta>
            <span>FastAPI, Streamlit, OpenAI GPT-4, FAISS, Docker, Kubernetes, NGINX</span>
          </ListItem>
          <ListItem>
            <Meta color="green">Key Features</Meta>
            <List spacing={3} pl={4}>
              <ListItem>
                <strong>RAG Pipeline:</strong> Advanced retrieval-augmented generation 
                system that processes official immigration documents and provides 
                contextually accurate responses.
              </ListItem>
              <ListItem>
                <strong>Document Processing:</strong> Automated PDF processing and 
                vector embedding generation for efficient content retrieval.
              </ListItem>
              <ListItem>
                <strong>Microservices Architecture:</strong> Scalable system with 
                FastAPI backend, Streamlit frontend, and NGINX API gateway.
              </ListItem>
              <ListItem>
                <strong>Comprehensive Monitoring:</strong> Full observability stack 
                with Prometheus metrics, Grafana dashboards, and Jaeger tracing.
              </ListItem>
              <ListItem>
                <strong>Cloud-Native Deployment:</strong> Kubernetes-ready with 
                persistent storage, secrets management, and automated scaling.
              </ListItem>
              <ListItem>
                <strong>Multiple Model Support:</strong> Supports both OpenAI API 
                and local language models for flexible deployment options.
              </ListItem>
            </List>
          </ListItem>
          <ListItem>
            <Meta color="green">Architecture</Meta>
            <List spacing={2} pl={4}>
              <ListItem>• Frontend: Streamlit UI for user interaction</ListItem>
              <ListItem>• Backend: FastAPI with RAG pipeline components</ListItem>
              <ListItem>• Storage: FAISS vector database for document embeddings</ListItem>
              <ListItem>• Gateway: NGINX for load balancing and routing</ListItem>
              <ListItem>• Monitoring: Prometheus, Grafana, and Jaeger stack</ListItem>
              <ListItem>• Infrastructure: Kubernetes with persistent volumes</ListItem>
            </List>
          </ListItem>
        </List>
        <WorkImage
          src="/images/works/opt-rag-architecture.png"
          alt="OPT-RAG System Architecture"
        />
        <WorkImage
          src="/images/works/opt-rag-ui.png"
          alt="OPT-RAG User Interface"
        />
        <WorkImage
          src="/images/works/opt-rag-dashboard.png"
          alt="OPT-RAG Monitoring Dashboard"
        />
        <WorkImage
          src="/images/works/opt-rag-query.png"
          alt="OPT-RAG Query Interface"
        />
      </Container>
    </Layout>
  )
}

export default OptRag 