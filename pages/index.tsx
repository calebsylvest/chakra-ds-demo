import Link from "next/link";
import { Button, Container, Box, Group } from "@chakra-ui/react";
import Layout from "../components/Layout";

const IndexPage = () => (
  <Layout title="Home | Next.js + TypeScript Example">
    <Box as="main">
      <Box as="section" py={8}>
        <Container maxW="container.xl">
          <h1>Hello Next.js 👋</h1>
          <p>This is the home page</p>
        </Container>
      </Box>

      <Box as="section" py={8}>
        <Container maxW="container.xl">
          <Group>
            <Button>Click me</Button>
            <Button>Click me</Button>
          </Group>
        </Container>
      </Box>

    </Box>
  </Layout>
);

export default IndexPage;
