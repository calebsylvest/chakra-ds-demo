import { Box, HStack, Separator, Text, VStack, Button, IconButton } from "@chakra-ui/react";
import Link from "next/link";
import { useRouter } from "next/router";
import { RiChromeLine } from "react-icons/ri";
import { 
  RiFacebookFill, 
  RiInstagramFill, 
  RiLinkedinFill, 
  RiTwitterFill 
} from "react-icons/ri";

const Footer = () => {
  const router = useRouter();

  return (
    <Box as="footer" py={8} px={4} bg="white">
      <VStack gap={6} align="stretch">
        {/* Top Row */}
        <HStack justify="space-between" align="center" flexWrap="wrap" gap={4}>
          {/* Left: Logo Button */}
          <HStack gap={4} align="center">
            <Button
              variant="solid"
              bg="gray.900"
              color="white"
              rounded="l2"
              size="sm"
              minW="auto"
              h="32px"
              px={2.5}
              onClick={() => router.push("/")}
            >
              {/* @ts-ignore - react-icons type issue */}
              <RiChromeLine size={16} style={{ marginRight: "8px" }} />
              <Text fontSize="sm" fontWeight="semibold">
                Logo
              </Text>
            </Button>

            {/* Navigation Links */}
            <HStack gap={2} align="center">
              <Button
                asChild
                variant="ghost"
                colorPalette="gray"
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
                colorPalette="gray"
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
                colorPalette="gray"
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
                colorPalette="gray"
                size="md"
                height="40px"
                px={4}
                rounded="l2"
              >
                <Link href="/api/users">Users API</Link>
              </Button>
            </HStack>
          </HStack>

          {/* Right: Social Media Icons */}
          <HStack gap={4} align="center">
            <IconButton
              aria-label="Facebook"
              variant="ghost"
              colorPalette="gray"
              size="md"
              onClick={() => window.open("#", "_blank", "noopener,noreferrer")}
            >
              {/* @ts-ignore - react-icons type issue */}
              <RiFacebookFill size={20} />
            </IconButton>
            <IconButton
              aria-label="Instagram"
              variant="ghost"
              colorPalette="gray"
              size="md"
              onClick={() => window.open("#", "_blank", "noopener,noreferrer")}
            >
              {/* @ts-ignore - react-icons type issue */}
              <RiInstagramFill size={20} />
            </IconButton>
            <IconButton
              aria-label="LinkedIn"
              variant="ghost"
              colorPalette="gray"
              size="md"
              onClick={() => window.open("#", "_blank", "noopener,noreferrer")}
            >
              {/* @ts-ignore - react-icons type issue */}
              <RiLinkedinFill size={20} />
            </IconButton>
            <IconButton
              aria-label="Twitter"
              variant="ghost"
              colorPalette="gray"
              size="md"
              onClick={() => window.open("#", "_blank", "noopener,noreferrer")}
            >
              {/* @ts-ignore - react-icons type issue */}
              <RiTwitterFill size={20} />
            </IconButton>
          </HStack>
        </HStack>

        {/* Separator */}
        <Separator />

        {/* Bottom Row */}
        <HStack justify="space-between" align="center" flexWrap="wrap" gap={4}>
          <Text
            fontSize="md"
            fontWeight="medium"
            color="gray.700"
            lineHeight="24px"
          >
            © 2025 Logo, Inc. All rights reserved.
          </Text>
          <Box />
        </HStack>
      </VStack>
    </Box>
  );
};

export default Footer;

