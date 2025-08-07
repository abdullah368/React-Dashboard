import {
  Box,
  VStack,
  HStack,
  Input,
  Heading,
  Button,
} from '@chakra-ui/react';
import { Field } from '@chakra-ui/react'; // Assuming you're using a custom Field abstraction



const AddUser = () => {
  return (
    <Box minH="100vh" p={10} bg="gray.50">
      <Box maxW="4xl" mx="auto" bg="white" p={8} borderRadius="md" boxShadow="lg">
        <Heading mb={6} size="lg" textAlign="center">
          Add New User
        </Heading>

        <VStack spacing={6} width="full">
          <HStack gap={10} width="full">
            <Field.Root required>
              <Field.Label>
                Name <Field.RequiredIndicator />
              </Field.Label>
              <Input placeholder="John Doe" variant="subtle" />
            </Field.Root>

            <Field.Root required>
              <Field.Label>
                Email <Field.RequiredIndicator />
              </Field.Label>
              <Input placeholder="me@example.com" variant="outline" />
            </Field.Root>
          </HStack>

          <HStack gap={10} width="full">
            <Field.Root required>
              <Field.Label>
                Date of Birth <Field.RequiredIndicator />
              </Field.Label>
              <Input type="date" variant="subtle" />
            </Field.Root>

            <Field.Root required>
              <Field.Label>
                Mobile Number <Field.RequiredIndicator />
              </Field.Label>
              <Input placeholder="+91 9876543210" variant="outline" />
            </Field.Root>
          </HStack>

          <HStack gap={10} width="full">
            <Field.Root required>
              <Field.Label>
                Username <Field.RequiredIndicator />
              </Field.Label>
              <Input placeholder="johndoe123" variant="subtle" />
            </Field.Root>
          </HStack>

          <Button colorScheme="teal" width="full" mt={4}>
            Submit
          </Button>
        </VStack>
      </Box>
    </Box>
  );
};

export default AddUser;
