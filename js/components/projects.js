import NextLink from "next/link";
import {
  Box,
  Link,
  Heading,
  Flex,
  Button,
  List,
  ListItem,
} from "@chakra-ui/core";
import { Badge } from "@chakra-ui/core";

export default function Projects({ projects }) {
  return (
    <Box margin="20px">
      <Heading as="h2" color="orange.500">
        Projects
      </Heading>
      <List>
        {projects.map((project) => (
          <ListItem key={project.code}>
            <NextLink
              href="/projects/[id]"
              as={"/projects/" + project.code}
              passHref
            >
              <Link color="teal.500">{project.name}</Link>
            </NextLink>
          </ListItem>
        ))}
      </List>
    </Box>
  );
}
