import { Container, Box, Heading, Text, VStack, HStack, Divider } from "@chakra-ui/react";

const Index = () => {
  return (
    <Container maxW="container.lg" p={4}>
      {/* Header */}
      <Box as="header" mb={6}>
        <Heading as="h1" size="2xl" textAlign="center" mb={2}>
          My Personal Blog
        </Heading>
        <Text textAlign="center" color="gray.600">
          Thoughts, stories and ideas.
        </Text>
      </Box>

      <Divider />

      {/* Main Content */}
      <Box as="main" my={6}>
        <VStack spacing={8} align="stretch">
          <Box as="article" p={5} shadow="md" borderWidth="1px">
            <Heading as="h2" size="xl" mb={2}>
              Sample Blog Post Title
            </Heading>
            <Text fontSize="sm" color="gray.500" mb={4}>
              January 1, 2023
            </Text>
            <Text fontSize="md">
              This is a sample blog post to demonstrate the layout of a blog post. You can write your own content here and style it as you like. 
              Use different headings, paragraphs, and other elements to create a compelling post.
            </Text>
          </Box>
        </VStack>
      </Box>

      <Divider />

      {/* Footer */}
      <Box as="footer" mt={6} py={4} textAlign="center" borderTopWidth="1px">
        <Text fontSize="sm" color="gray.600">
          &copy; {new Date().getFullYear()} My Personal Blog. All rights reserved.
        </Text>
      </Box>
    </Container>
  );
};

export default Index;