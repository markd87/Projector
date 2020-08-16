import NextLink from "next/link";
import { GET_AREAS, ONE_AREA_QUERY } from "../../utils/queries";
import client from "../../lib/apollo-client";
import Layout from "../../components/layout";
import {
  Box,
  Link,
  Heading,
  List,
  ListItem,
} from "@chakra-ui/core";

export default function Project({ areaData }) {
  return (
    <Layout>
      <Box
        color="orange.500"
        fontWeight="semibold"
        letterSpacing="wide"
        fontSize="xl"
        textTransform="uppercase"
      >
        {areaData.name}
      </Box>

      <Heading as="h2" size="1xl" marginY="1rem">
        Projects
      </Heading>
      <List>
        {areaData.project_areas.map((project) => (
          <ListItem key={project.project.code} marginY="1rem">
            <NextLink
              href="/projects/[id]"
              as={"/projects/" + project.project.code}
              passHref
            >
              <Link color="teal.500"> {project.project.name}</Link>
            </NextLink>
          </ListItem>
        ))}
      </List>
    </Layout>
  );
}

export async function getStaticPaths() {
  // Return a list of possible value for id
  const areasQuery = await client.query({
    query: GET_AREAS,
  });

  const paths = areasQuery.data.area.map((area) => ({
    params: { id: area.id.toString() },
  }));

  return {
    paths,
    fallback: false,
  };
}

export async function getStaticProps({ params }) {
  // Fetch necessary data for the blog post using params.id
  const area = await client.query({
    query: ONE_AREA_QUERY,
    variables: { id: params.id },
  });

  const areaData = area.data.area[0];

  return {
    props: {
      areaData,
    },
    revalidate: 60,
  };
}
