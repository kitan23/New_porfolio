import { Container, Badge, Link, List, ListItem } from "@chakra-ui/react";
import { ExternalLinkIcon } from "@chakra-ui/icons";
import { Title, WorkImage, Meta } from "../../components/work";
import P from '../../components/paragraph';
import Layout from "../../components/layouts/article";

const NetflixClone: React.FC = () => {
    return (
        <Layout title="netflix-clone">
            <Container>
                <Title> Netflix Clone <Badge>2021</Badge></Title>
                <P>
                    A Netflix Clone created with ReactJS, which also happens to be my first React project
                </P>
                <List ml={4} my={4}>
                    <ListItem>
                        <Meta>Website</Meta>
                        <Link href="https://kitan23.github.io/movies-info/" target='_blank'>
                            https://kitan23.github.io/movies-info/ <ExternalLinkIcon mx="2px"/>
                        </Link>
                    </ListItem>
                    <ListItem>
                        <Meta>Platform</Meta>
                        <span>Web App</span>
                    </ListItem>
                    <ListItem>
                        <Meta>Stack</Meta>
                        <span>ReactJS</span>
                    </ListItem>
                </List>
                <WorkImage src="/images/works/netflix-clone-1.png" alt="Netflix clone"/>
                <WorkImage src="/images/works/netflix-clone-2.png" alt="Netflix clone"/>
            </Container>
        </Layout>
    )
}

export default NetflixClone;
