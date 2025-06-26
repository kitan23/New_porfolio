import { Container, Badge, Link, List, ListItem, SimpleGrid } from '@chakra-ui/react'
import { ExternalLinkIcon } from '@chakra-ui/icons'
import { Title, WorkImage, Meta } from '../../components/work'
import P from '../../components/paragraph'
import Layout from '../../components/layouts/article'
import React from 'react'

const BoxingPredictor: React.FC = () => {
  return (
    <Layout title="Boxing Match Predictor">
      <Container>
        <Title>
          Boxing Match Predictor: ML-Powered Fight Outcome Prediction{' '}
          <Badge>2024</Badge>
        </Title>
        <P>
          A sophisticated machine learning system designed to forecast boxing match 
          outcomes with high precision. The project leverages both deep learning 
          architectures (Multi-Layer Perceptron - MLP) and state-of-the-art gradient 
          boosting techniques (LightGBM) to analyze comprehensive boxer statistics 
          and historical match data. The system employs robust validation methods 
          including k-fold cross-validation to ensure reliable and generalizable 
          predictions.
        </P>
        <P>
          The system combines neural networks and gradient boosting for optimal 
          performance, implementing 5-fold stratified cross-validation for robust 
          model evaluation. It processes extensive boxer statistics and historical 
          match data through a flexible inference system that supports multiple 
          model types and custom data inputs, complete with detailed performance 
          metrics and training progress visualization.
        </P>

        <List ml={4} my={4}>
          <ListItem>
            <Meta color="green">Source Code</Meta>
            <Link
              href="https://github.com/axortiz/DL_Final_Project"
              target="_blank"
            >
              https://github.com/axortiz/DL_Final_Project{' '}
              <ExternalLinkIcon mx="2px" />
            </Link>
          </ListItem>
          <ListItem>
            <Meta color="green">Technology Stack</Meta>
            <span>PyTorch, LightGBM, NumPy, Pandas, Scikit-learn, Matplotlib</span>
          </ListItem>
          <ListItem>
            <Meta color="green">Key Features</Meta>
            <List spacing={2} pl={4}>
              <ListItem>
                <strong>Dual Model Architecture:</strong> Combining <em>neural networks</em> and <em>gradient boosting</em> for enhanced prediction accuracy
              </ListItem>
              <ListItem>
                <strong>Advanced Validation:</strong> Implementing <em>5-fold stratified cross-validation</em> for robust model evaluation
              </ListItem>
              <ListItem>
                <strong>Data Analysis:</strong> Processing comprehensive <em>boxer statistics</em> and <em>historical match data</em> for accurate predictions
              </ListItem>
              <ListItem>
                <strong>Flexible Inference:</strong> Supporting multiple model types with <em>custom data inputs</em> and <em>configurable parameters</em>
              </ListItem>
              <ListItem>
                <strong>Rich Visualization:</strong> Detailed <em>performance metrics</em> and <em>training progress</em> visualization tools
              </ListItem>
            </List>
          </ListItem>
          <ListItem>
            <Meta color="green">Technical Achievements</Meta>
            <List spacing={2} pl={4}>
              <ListItem>
                <strong>Data Pipeline:</strong> Automated <em>normalization</em> and <em>preprocessing</em> for efficient data handling
              </ListItem>
              <ListItem>
                <strong>Training Optimization:</strong> Dynamic <em>learning rate adjustment</em> with <em>adaptive scheduling</em>
              </ListItem>
              <ListItem>
                <strong>Model Management:</strong> Sophisticated <em>checkpoint system</em> for optimal model preservation
              </ListItem>
              <ListItem>
                <strong>Performance:</strong> <em>GPU-accelerated</em> training with LightGBM for high-speed processing
              </ListItem>
              <ListItem>
                <strong>Robustness:</strong> Advanced <em>regularization techniques</em> for reliable predictions
              </ListItem>
            </List>
          </ListItem>
        </List>

        <P style={{ textAlign: 'center', marginTop: '1', marginBottom: '4' }}>
          <strong>Model Architecture</strong>
        </P>
        <WorkImage
          src="/images/works/model_architecture.png"
          alt="Neural Network Architecture: 256→128→64 with BatchNorm and Dropout"
        />
        <P style={{ textAlign: 'center', marginTop: '1', marginBottom: '4' }}>
          <strong>Neural Network Architecture</strong>
        </P>

        <WorkImage
          src="/images/works/boxing_predictor/training_validation_accuracy_mlp.png"
          alt="MLP Model: Training vs Validation Accuracy"
        />
        <P style={{ textAlign: 'center', marginTop: '1', marginBottom: '4' }}>
          <strong>Training and Validation Accuracy Over Time</strong>
        </P>

        <WorkImage
          src="/images/works/boxing_predictor/training_validation_loss_mlp.png"
          alt="MLP Model: Training vs Validation Loss"
        />
        <P style={{ textAlign: 'center', marginTop: '1', marginBottom: '4' }}>
          <strong>Training and Validation Loss Curves</strong>
        </P>

        <WorkImage
          src="/images/works/boxing_predictor/loss_plots.png"
          alt="5-Fold Cross-Validation Loss Analysis"
        />
        <P style={{ textAlign: 'center', marginTop: '1', marginBottom: '4' }}>
          <strong>5-Fold Cross-Validation Performance</strong>
        </P>

        <WorkImage
          src="/images/works/boxing_predictor/lgb_loss_plots.png"
          alt="LightGBM Model Training Progress"
        />

      </Container>
    </Layout>
  )
}

export default BoxingPredictor 