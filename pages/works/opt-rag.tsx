import {
  Container,
  Badge,
  Link,
  List,
  ListItem
} from '@chakra-ui/react'
import { ExternalLinkIcon } from '@chakra-ui/icons'
import { Title, WorkImage, Meta, SectionTitle } from '../../components/work'
import P from '../../components/paragraph'
import Layout from '../../components/layouts/article'
import React from 'react'

const OptRag: React.FC = () => {
  return (
    <Layout title="OPT-RAG">
      <Container>
        <Title>
          Retrieval-Augmented Visa Assistant <Badge>2025</Badge>
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
            <Meta color="green">Stack</Meta>
            <span>
              Python, FastAPI, Qwen2.5-1.5B, Kubernetes, Docker, Streamlit
            </span>
          </ListItem>
          <ListItem>
            <Meta color="green">Observability</Meta>
            <span>Prometheus, Grafana, Jaeger</span>
          </ListItem>
          <ListItem>
            <Meta color="green">Source Code</Meta>
            <Link
              href="https://github.com/kitan23/LLM-Agent-for-Visa"
              target="_blank"
            >
              LLM-Agent-for-Visa <ExternalLinkIcon mx="2px" />
            </Link>
          </ListItem>
        </List>

        <SectionTitle>System Architecture</SectionTitle>
        <P>
          The application is deployed as a scalable microservice architecture
          using Kubernetes and Docker Compose. This design integrates a FastAPI
          backend for the core RAG logic, a Streamlit frontend for user
          interaction, and a FAISS vector store for efficient semantic search
          across visa documents. This modular setup allows for independent
          scaling and robust fault tolerance.
        </P>

        <SectionTitle>Key Features</SectionTitle>
        <P>
          The project includes several production-grade features that enhance
          its reliability and flexibility:
        </P>
        <List ml={4} my={4}>
          <ListItem>
            <strong>Local LLM Inference:</strong> Utilizes a locally deployed
            Qwen2.5-1.5B model for all generation tasks, guaranteeing data
            privacy and eliminating reliance on third-party APIs.
          </ListItem>
          <ListItem>
            <strong>Dual-Mode LLM:</strong> Features a modular configuration to
            seamlessly switch between the local model and the OpenAI API,
            supporting both offline, privacy-focused deployments and rapid,
            API-driven development.
          </ListItem>
          <ListItem>
            <strong>Production-Grade Observability:</strong> Implements a
            comprehensive monitoring stack with Prometheus for metrics
            collection, Grafana for real-time dashboards, and Jaeger for
            distributed tracing across all microservices.
          </ListItem>
        </List>
        <WorkImage
          src="/images/works/opt-rag-architecture.png"
          alt="OPT-RAG System Architecture"
        />
        <WorkImage
          src="/images/works/opt-rag-dashboard.png"
          alt="OPT-RAG Monitoring Dashboard"
        />
        <WorkImage
          src="/images/works/opt-rag-ui.png"
          alt="OPT-RAG User Interface"
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