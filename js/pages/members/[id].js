import NextLink from "next/link";
import client from "../../lib/apollo-client";
import { GET_MEMBERS, ONE_MEMBER_QUERY } from "../../utils/queries";
import Layout from "../../components/layout";
import { Box, Link, Heading, List, ListItem, Progress } from "@chakra-ui/core";

export default function Member({ memberData }) {
  return (
    <Layout>
      <Box
        color="orange.500"
        fontWeight="semibold"
        letterSpacing="wide"
        fontSize="xl"
        textTransform="uppercase"
        // ml="2"
      >
        {memberData.full_name}
      </Box>

      <Heading as="h2" size="1xl" marginY="1rem">
        Projects
      </Heading>
      <List>
        {memberData.user_projects.map((project) => (
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

// TODO: fallback to render page, incremental (vercel)
export async function getStaticPaths() {
  // Return a list of possible value for id
  const membersQuery = await client.query({
    query: GET_MEMBERS,
  });

  const paths = membersQuery.data.members.map((member) => ({
    params: { id: member.id.toString() },
  }));

  return {
    paths,
    fallback: false,
  };
}

export async function getStaticProps({ params }) {
  // Fetch necessary data for the blog post using params.id
  const member = await client.query({
    query: ONE_MEMBER_QUERY,
    variables: { id: params.id },
  });

  const memberData = member.data.members[0];

  return {
    props: {
      memberData,
    },
    revalidate: 60,
  };
}
