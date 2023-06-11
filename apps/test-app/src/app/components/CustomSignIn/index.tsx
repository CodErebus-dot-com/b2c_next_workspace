/* eslint-disable react/no-unescaped-entities */
import { Box, Button, FormLabel, Heading, Input, Link, Text } from "@chakra-ui/react";

const CustomSignIn = () => {
  return (
    <Box>
      <form>
        <Box>
          <Heading>
            Sign in with your email address
          </Heading>
        </Box>
        <Box>
          <Text></Text>
        </Box>
        <Box>
          <Box>
            <FormLabel>Email Address</FormLabel>
            <Box>
              <Text></Text>
            </Box>
            <Input type="email" id="email" />
          </Box>
          <Box>
            <Box>
              <FormLabel>Password</FormLabel>
              <Link>Forgot your password?</Link>
            </Box>
            <Box>
              <Text></Text>
            </Box>
            <Input type="password"  id="password"/>
          </Box>
          <Box></Box>

          <Box>
            <Button>
              Sign in
            </Button>
          </Box>
        </Box>
        <Box>
          <Heading>OR</Heading>
        </Box>
        <Box>
          <Text>
            Don't have an account?
            <Link>
              Sign up now
            </Link>
          </Text>
        </Box>
      </form>
    </Box>
  );
};

export default CustomSignIn
