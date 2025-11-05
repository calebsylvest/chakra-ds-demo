import { Box, Button, Code, Container, Flex, Group, Heading, Link, Stack, Text } from "@chakra-ui/react";
import Layout from "../components/Layout";

const IndexPage = () => (
  <Layout title="Chakra Design System Demo">
    <Box as="main">

      <Box as="section" py={12} bg="gray.100">
        <Container maxW="container.xl">
          <Stack gap={4}>
            <Heading as="h1" size="3xl" fontWeight="normal">Kitchen Sink</Heading>
            <Text>This is a demo of the Chakra Design System. It is a collection of components that can be used to build web applications.</Text>
          </Stack>
        </Container>
      </Box>

      <Box as="section" py={20}>
        <Container maxW="container.xl">
          <Stack gap={8}>
            <Flex bg="gray.100" p={4} rounded="md" justify="space-between" align="center">
              <Heading as="h2" fontWeight="normal">Button</Heading>
              <Link href="https://chakra-ui.com/docs/components/button">View in docs</Link>
            </Flex>
            <Flex direction="column" gap={2}>
              <Heading as="h3" size="md" fontWeight="normal">Teal</Heading>
              <Group>
                <Button colorPalette="teal" variant="solid">Click me</Button>
                <Button colorPalette="teal" variant="subtle">Click me</Button>
                <Button colorPalette="teal" variant="surface">Click me</Button>
                <Button colorPalette="teal" variant="outline">Click me</Button>
                <Button colorPalette="teal" variant="ghost">Click me</Button>
                <Button colorPalette="teal" variant="plain">Click me</Button>
              </Group>
            </Flex>
            <Flex direction="column" gap={2}>
              <Heading as="h3" size="md" fontWeight="normal">Gray</Heading>
              <Group>
                <Button variant="solid">Click me</Button>
                <Button variant="subtle">Click me</Button>
                <Button variant="surface">Click me</Button>
                <Button variant="outline">Click me</Button>
                <Button variant="ghost">Click me</Button>
                <Button variant="plain">Click me</Button>
              </Group>
            </Flex>
          </Stack>
        </Container>
      </Box>

      <Box as="section" py={20}>
        <Container maxW="container.xl">
          <Stack gap={8}>
          <Flex bg="gray.100" p={4} rounded="md" justify="space-between" align="center">
            <Heading as="h2" fontWeight="normal">Code</Heading>
            <Link href="https://chakra-ui.com/docs/components/code">View in docs</Link>
          </Flex>
          <Flex direction="column" gap={2}>
            <Heading as="h3" size="md" fontWeight="normal">Default</Heading>
            <Group>
              <Code variant="solid">Hello World</Code>
              <Code variant="outline">Hello World</Code>
              <Code variant="subtle">Hello World</Code>
              <Code variant="surface">Hello World</Code>
            </Group>
          </Flex>
          <Flex direction="column" gap={2}>
            <Heading as="h3" size="md" fontWeight="normal">Teal</Heading>
            <Group>
              <Code colorPalette="teal" variant="solid">Hello World</Code>
              <Code colorPalette="teal" variant="outline">Hello World</Code>
              <Code colorPalette="teal" variant="subtle">Hello World</Code>
              <Code colorPalette="teal" variant="surface">Hello World</Code>
            </Group>
          </Flex>
          </Stack>
        </Container>
      </Box>

    </Box>
  </Layout>
);

export default IndexPage;
