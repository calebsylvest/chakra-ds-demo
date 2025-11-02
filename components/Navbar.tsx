import Link from "next/link";
import { useRouter } from "next/router";
import { Button, IconButton, HStack, Box } from "@chakra-ui/react";
import { RiChromeLine } from "react-icons/ri";

const Navbar = () => {
  const router = useRouter();

  return (
    <Box as="header" p={2}>
      <HStack justify="space-between" align="center" gap={4}>
        {/* Left Navigation */}
        <HStack gap={4} align="center">
          <IconButton
            aria-label="Home"
            variant="solid"
            bg="gray.900"
            color="white"
            rounded="l2"
            size="sm"
            minW="32px"
            h="32px"
            px={2.5}
            onClick={() => router.push("/")}
          >
            {/* @ts-ignore - react-icons type issue */}
            <RiChromeLine />
          </IconButton>
        <Button
          asChild
          variant="ghost"
          colorPalette="red"
          size="md"
          height="40px"
          px={4}
          rounded="l2"
        >
          <Link href="/">Home</Link>
        </Button>
        <Button
          asChild
          variant="ghost"
          colorPalette="red"
          size="md"
          height="40px"
          px={4}
          rounded="l2"
        >
          <Link href="/about">About</Link>
        </Button>
        <Button
          asChild
          variant="ghost"
          colorPalette="red"
          size="md"
          height="40px"
          px={4}
          rounded="l2"
        >
          <Link href="/users">Users List</Link>
        </Button>
        <Button
          asChild
          variant="ghost"
          colorPalette="red"
          size="md"
          height="40px"
          px={4}
          rounded="l2"
        >
          <Link href="/api/users">Users API</Link>
        </Button>
      </HStack>

      {/* Right Navigation */}
      <HStack gap={4} align="center">
        <Button
          asChild
          variant="ghost"
          colorPalette="red"
          size="md"
          height="40px"
          px={4}
          rounded="l2"
        >
          <Link href="#">Login</Link>
        </Button>
        <Button
          asChild
          variant="ghost"
          colorPalette="red"
          size="md"
          height="40px"
          px={4}
          rounded="l2"
        >
          <Link href="#">Create Account</Link>
        </Button>
      </HStack>
    </HStack>
  </Box>
  );
};

export default Navbar;

