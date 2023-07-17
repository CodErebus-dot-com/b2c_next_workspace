/* eslint-disable react/no-unescaped-entities */
import { Box, Button, FormLabel, Heading, Input, Link, Text } from "@chakra-ui/react";

const CustomForm = () => {
  return (
    <form>
      <Box> {/* .intro */}
        <Heading>
          Sign in with your email address
        </Heading>
      </Box>
      <Box> {/* .error pageLevel */}
        <Text></Text>
      </Box>
      <Box> {/* .entry */}
        <Heading as='h4' size='md'>
          Test Subtitle
        </Heading>
        <Box> {/* .entry-item */}
          <FormLabel>Email Address</FormLabel>
          <Box> {/* .error itemLevel */}
            <Text></Text>
          </Box>
          <Input type="email" />
        </Box>
        <Box> {/* .entry-item */}
          <Box> 
            <FormLabel>Password</FormLabel>
            <Link>Forgot your password?</Link>
          </Box>
          <Box> {/* .error itemLevel */}
            <Text></Text>
          </Box>
          <Input type="password" />
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
  );
};

export default CustomForm;
