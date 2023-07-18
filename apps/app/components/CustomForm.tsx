/* eslint-disable react/no-unescaped-entities */
import { Box, Button, FormLabel, Heading, Input, Link, Text } from "@chakra-ui/react"

const CustomForm = () => {
  const highlightError = { 
    '&.highlightError': { 
      borderColor: 'red.500',
      boxShadow: '0 0 0 1px red.500', 
    }
  }

  return (
    <form>
      <Box my={4}> {/* .intro */}
        <Heading fontSize="2xl" color="teal.500">
          Sign in with your email address
        </Heading>
      </Box>
      <Box mb={1} color="red.500"> {/* .error pageLevel */}
        <Text></Text>
      </Box>
      <Box> {/* .entry */}
        <Box mt={3}> {/* .entry-item */}
          <FormLabel>Email Address</FormLabel>
          <Box mb={1} color="red.500"> {/* .error pageLevel */}
            <Text></Text>
          </Box>
          <Input type="email" mt={2} sx={highlightError} />
        </Box>
        <Box mt={3}> {/* .entry-item */}
          <Box> 
            <FormLabel>Password</FormLabel>
            <Link color="blue.500">Forgot your password?</Link>
          </Box>
          <Box mb={1} color="red.500"> {/* .error pageLevel */}
            <Text></Text>
          </Box>
          <Input type="password" mt={2} sx={highlightError} />
        </Box>
        <Box></Box>

        <Box mt={4}>
          <Button colorScheme="teal">
            Sign in
          </Button>
        </Box>
      </Box>
      <Box my={4}>
        <Heading color="gray.600">OR</Heading>
      </Box>
      <Box>
        <Text color="gray.600">
          Don't have an account?
          <Link color="blue.500" ml={3}>
            Sign up now
          </Link>
        </Text>
      </Box>
    </form>
  );
};

export default CustomForm;
