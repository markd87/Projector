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

export default function Areas({ areas }) {
  return (
    <Box margin="20px">
      <Heading as="h2" color="red.500">
        Areas
      </Heading>
      <List>
        {areas.map((area) => (
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
