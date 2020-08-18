import { useState, useCallback } from "react";

import NextLink from "next/link";
import {
  Box,
  Link,
  Heading,
Input,
  List,
  ListItem,
} from "@chakra-ui/core";

export default function Areas({ areas }) {
  const [query, setQuery] = useState("");
  const [results, setResults] = useState(areas);
  const handleChange = useCallback((event) => {
    const query = event.target.value;
    setQuery(query);
    if (query.length) {
      let filteredList = areas.filter((item) =>
        item.name.toLowerCase().includes(query.toLowerCase())
      );
      setResults(filteredList);
    } else {
      setResults(areas);
    }
  });
  return (
    <Box margin="20px">
      <Heading as="h2" color="red.500">
        Areas
      </Heading>
      <Input placeholder="Search area" onChange={handleChange} />

      <List>
        {results.map((area) => (
          <ListItem key={area.id}>
            <NextLink
              href="/areas/[id]"
              as={"/areas/" + area.id}
              passHref
            >
              <Link color="teal.500"> {area.name}</Link>
            </NextLink>
          </ListItem>
        ))}
      </List>
    </Box>
  );
}
