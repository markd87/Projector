import { useState, useCallback } from "react";
import NextLink from "next/link";
import { Box, Link, Heading, List, ListItem } from "@chakra-ui/core";
import { Input, Button } from "@chakra-ui/core";

export default function Projects({ projects }) {
  const [query, setQuery] = useState("");
  const [results, setResults] = useState(projects);
  const handleChange = useCallback((event) => {
    const query = event.target.value;
    setQuery(query);
    if (query.length) {
      let filteredList = projects.filter((item) =>
        item.name.toLowerCase().includes(query.toLowerCase())
      );
      setResults(filteredList);
    } else {
      setResults(projects);
    }
  });

  return (
    <Box margin="20px">
      <Box display="flex" justifyContent="space-between">
        <Heading as="h2" color="orange.500">
          Projects
        </Heading>
        <NextLink href="/addProject" passHref>
          <Button size="md">+</Button>
        </NextLink>
      </Box>
      <Input placeholder="Search project" onChange={handleChange} />
      <List>
        {results.map((project) => (
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
