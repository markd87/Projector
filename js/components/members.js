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

export default function Members({ members }) {
  return (
    <Box margin="20px">
      <Heading as="h2" color="blue.500">
        Members
      </Heading>
      <List>
        {members.map((member) => (
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
