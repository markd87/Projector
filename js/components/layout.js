import { Link } from "@chakra-ui/core";
import { Box, Flex, Heading, Text, Button } from "@chakra-ui/core";

export default function Layout({ children, home }) {
  return (
    <>
      <Flex flexDirection="column" alignItems="center" margin={4}>
        <Heading as="h1" size="2xl" marginY="2rem">
          Projector
        </Heading>
        <main>{children}</main>
        {!home && (
          <Link href="/" color="blue.500" marginY='4rem'>
            ← Back to home
          </Link>
        )}
      </Flex>
    </>
  );
}
