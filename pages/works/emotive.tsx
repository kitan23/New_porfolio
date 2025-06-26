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

const Work: React.FC = () => (
  <Layout title="Emotive">
    <Container>
      <Title>
        Emotive: Emotion Recognition in Speech <Badge>2024</Badge>
      </Title>
      <P>
        A deep learning project focused on recognizing human emotions from speech.
        By systematically experimenting with various neural network architectures
        and employing advanced data augmentation, we developed a Bidirectional
        LSTM model that achieved 72% accuracy on the RAVDESS dataset,
        significantly outperforming other models and setting a new benchmark for
        our research.
      </P>
      <List ml={4} my={4}>
        <ListItem>
          <Meta color="green">Contribution</Meta>
          <span>
            Model Development, Data Augmentation, Feature Extraction, Literature
            Review
          </span>
        </ListItem>
        <ListItem>
          <Meta color="green">Stack</Meta>
          <span>Python, TensorFlow, Keras, Scikit-learn, Librosa, NumPy</span>
        </ListItem>
        <ListItem>
          <Meta color="green">Github</Meta>
          <Link
            href="https://github.com/Kien-K-Tran/speech-emotion-recognition"
            target="_blank"
          >
            speech-emotion-recognition <ExternalLinkIcon mx="2px" />
          </Link>
        </ListItem>
        <ListItem>
          <Meta color="green">Presentation</Meta>
          <Link href="/emotive-presentation.pdf" target="_blank">
            View Presentation <ExternalLinkIcon mx="2px" />
          </Link>
        </ListItem>
      </List>

      <SectionTitle>Project Overview</SectionTitle>
      <P>
        The objective of this project was to build and train a neural network to
        classify human speech data by emotion. We used the audio-only portion of
        the RAVDESS dataset. The project was divided into several milestones:
        literature review, data collection and analysis, data augmentation,
        feature extraction, model building, and evaluation.
      </P>

      <SectionTitle>Data Processing &amp; Feature Extraction</SectionTitle>
      <P>
        A key part of the project was careful data handling. We augmented the
        initial 1,440 audio files to a robust dataset of 12,000 files by adding
        noise, stretching, shifting, and changing pitch. This 8-fold increase
        in data was a major factor in our model&apos;s success. For feature
        extraction, we chose Mel Frequency Cepstral Coefficients (MFCCs),
        extracting 40 coefficients per file to capture the essential
        characteristics of the speech signals.
      </P>

      <SectionTitle>Model Exploration and Results</SectionTitle>
      <P>
        We built and evaluated six different models to find the best
        architecture for this task. The performance of each model is as follows:
      </P>
      <List ml={4} my={4}>
        <ListItem>
          <strong>k-Nearest Neighbors:</strong> 55% accuracy (baseline)
        </ListItem>
        <ListItem>
          <strong>Multilayer Perceptron (MLP):</strong> 56% accuracy
        </ListItem>
        <ListItem>
          <strong>Convolutional Neural Network (CNN):</strong> 45% accuracy
        </ListItem>
        <ListItem>
          <strong>Long Short-Term Memory (LSTM):</strong> 54% accuracy
        </ListItem>
        <ListItem>
          <strong>Hybrid CNN+LSTM:</strong> 64% accuracy
        </ListItem>
        <ListItem>
          <strong>Bidirectional LSTM:</strong> 72% accuracy (best performing)
        </ListItem>
      </List>
      <P>
        Our findings showed that the Bidirectional LSTM outperformed all other
        models. We hypothesize that its ability to process sequences in both
        forward and backward directions allows it to capture more contextual
        information from the audio, leading to a more accurate emotion
        classification. The hybrid CNN+LSTM also showed promise, effectively
        combining the spatial feature extraction of CNNs with the temporal
        modeling of LSTMs.
      </P>

      <WorkImage
        src="/images/works/emotive-performance.png"
        alt="Model Performance Comparison"
      />
      <WorkImage
        src="/images/works/MFCC_technique.png"
        alt="MFCC Technique"
      />
      <WorkImage
        src="/images/works/confusion-matrix.png"
        alt="Confusion Matrix"
      />
    </Container>
  </Layout>
)

export default Work 