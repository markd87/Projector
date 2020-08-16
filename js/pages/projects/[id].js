import NextLink from "next/link";
import { GET_PROJECTS, ONE_PROJECT_QUERY } from "../../utils/queries";
import client from "../../lib/apollo-client";
import Layout from "../../components/layout";
import {
  Box,
  Link,
  Heading,
  Text,
  Badge,
  List,
  ListItem,
  CircularProgress,
  CircularProgressLabel,
  Stack,
} from "@chakra-ui/core";

export default function Project({ projectData }) {
  return (
    <Layout>
      <Stack isInline>
        <Box
          color="orange.500"
          fontWeight="semibold"
          letterSpacing="wide"
          fontSize="xl"
          textTransform="uppercase"
        >
          {projectData.name}
        </Box>
        <CircularProgress value={40} color="green" size="3xl" marginLeft="15px">
          <CircularProgressLabel>40%</CircularProgressLabel>
        </CircularProgress>
      </Stack>
      <Stack isInline>
        {projectData.project_areas.map((area) => (
          <Badge key={area.area.id}>{area.area.name}</Badge>
        ))}
      </Stack>

      <Heading as="h2" size="1xl" marginY="2rem">
        {projectData.start_date} - {projectData.end_date}
      </Heading>
      <Heading as="h2" size="1xl">
        Members
      </Heading>
      <List>
        {projectData.user_projects.map((user) => (
          <ListItem key={user.member.id} marginY="1rem">
            <NextLink
              href="/members/[id]"
              as={"/members/" + user.member.id}
              passHref
            >
              <Link color="teal.500">{user.member.full_name}</Link>
            </NextLink>
          </ListItem>
        ))}
      </List>
      <Heading as="h2" size="1xl">
        Description
      </Heading>
      <Box marginY="1rem">
        <Text>{projectData.description}</Text>
      </Box>
    </Layout>
  );
}

export async function getStaticPaths() {
  // Return a list of possible value for id
  const projectsQuery = await client.query({
    query: GET_PROJECTS,
  });

  const paths = projectsQuery.data.projects.map((project) => ({
    params: { id: project.code },
  }));

  return {
    paths,
    fallback: false,
  };
}

export async function getStaticProps({ params }) {
  // Fetch necessary data for the blog post using params.id
  const project = await client.query({
    query: ONE_PROJECT_QUERY,
    variables: { id: params.id },
  });

  const projectData = project.data.projects[0];

  return {
    props: {
      projectData,
    },
    revalidate: 60,
  };
}
