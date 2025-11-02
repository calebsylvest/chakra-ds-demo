import Link from "next/link";
import { Button } from "@chakra-ui/react";
import Layout from "../components/Layout";

const IndexPage = () => (
  <Layout title="Home | Next.js + TypeScript Example">
    <h1>Hello Next.js 👋</h1>
    <Button asChild>
      <Link href="/about">About</Link>
    </Button>
  </Layout>
);

export default IndexPage;
