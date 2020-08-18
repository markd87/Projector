import { useState, useCallback } from "react";
import NextLink from "next/link";
import {
  Box,
  Link,
  Heading,
  List,
  ListItem,
  Input
} from "@chakra-ui/core";

export default function Members({ members }) {
  const [query, setQuery] = useState("");
  const [results, setResults] = useState(members);
  const handleChange = useCallback((event) => {
    const query = event.target.value;
    setQuery(query);
    if (query.length) {
      let filteredList = members.filter((item) =>
        item.full_name.toLowerCase().includes(query.toLowerCase())
      );
      setResults(filteredList);
    } else {
      setResults(members);
    }
  });

  return (
    <Box margin="20px">
      <Heading as="h2" color="blue.500">
        Members
      </Heading>
      <Input placeholder="Search member" onChange={handleChange} />
      <List>
        {results.map((member) => (
          <ListItem key={member.id}>
            <NextLink
              href="/members/[id]"
              as={"/members/" + member.id}
              passHref
            >
              <Link color="teal.500"> {member.full_name}</Link>
            </NextLink>
          </ListItem>
        ))}
      </List>
    </Box>
  );
}
