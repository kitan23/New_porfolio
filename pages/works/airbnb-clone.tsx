import { Container, Badge, Link, List, ListItem } from "@chakra-ui/react";
import { ExternalLinkIcon } from "@chakra-ui/icons";
import { Title, WorkImage, Meta } from "../../components/work";
import P from '../../components/paragraph'; 
import Layout from "../../components/layouts/article";

const AirbnbClone: React.FC = () => {
   return (
      <Layout title="airbnb-clone">
         <Container>
            <Title> Airbnb Clone <Badge>2021</Badge></Title>
            <P>
               An Airbnb Clone website created with Tailwind Css and NextJs
            </P>
            <List ml={4} my={4}>
               <ListItem>
                  <Meta>Website</Meta>
                  <Link href="https://airbnb-clone-mu-five.vercel.app/" target="_blank">
                     https://airbnb-clone-mu-five.vercel.app/ <ExternalLinkIcon mx="2px"/>
                  </Link>
               </ListItem>
               <ListItem>
                  <Meta>Platform</Meta>
                  <span>Web App</span>
               </ListItem>
               <ListItem>
                  <Meta>Stack</Meta>
                  <span>Express, Tailwind Css</span>
               </ListItem>
            </List>
            <WorkImage src="/images/works/airbnb-clone-1.png" alt="Airbnb clone"/>
            <WorkImage src="/images/works/airbnb-clone-2.png" alt="Airbnb clone"/>
         </Container>
      </Layout>
   )
}

export default AirbnbClone;
