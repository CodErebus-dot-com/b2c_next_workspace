/* eslint-disable react/no-unescaped-entities */
import { Box, FormLabel, Input, Link, Text } from "@chakra-ui/react"
import { Button, Title } from "@acme/ui";

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
        <Title color="teal.500"> {/* AD B2C expects a h2 element here and Title component by default is set to h2 */}
          Sign in with your email address
        </Title>
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
          <Button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
            Sign In
          </Button>
        </Box>
      </Box>
      <Box my={4}>
        <Title color="gray.600" level={2} fontSize="3xl">OR</Title>
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
