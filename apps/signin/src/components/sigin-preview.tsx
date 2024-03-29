/* eslint-disable react/no-unescaped-entities */
import { Box, FormLabel, Input, Link, Text } from '@chakra-ui/react'
import { Button, Title } from '@acme/ui'

// FormPreview is a component that is used to preview what the form will look like when it is integrated with the AD B2C custom policy.
const SigninPreview = () => {
  const highlightError = {
    '&.highlightError': {
      borderColor: 'brand.error',
    },
  }

  return (
    <form>
      <Box my={10}>
        {/* .intro */}
        <Title color='brand.700'>
          {/* AD B2C expects a h2 element here and Title component by default is set to h2 */}
          Sign in with your email address
        </Title>
      </Box>
      <Box mb={1} color='brand.error' className='italic'>
        {/* .error pageLevel */}
        <Text></Text>
      </Box>
      <Box>
        {/* .entry */}
        <Box mt={3}>
          {/* .entry-item */}
          <FormLabel className='text-lg'>Email Address</FormLabel>
          <Box mb={1} color='brand.error' className='italic'>
            {/* .error pageLevel */}
            <Text></Text>
          </Box>
          <Input type='email' mt={2} sx={highlightError} />
        </Box>
        <Box mt={3}>
          {/* .entry-item */}
          <Box className='flex justify-between'>
            <FormLabel className='text-lg'>Password</FormLabel>
            <Link color='brand.link'>Forgot your password?</Link>
          </Box>
          <Box mb={1} color='brand.error' className='italic'>
            {/* .error pageLevel */}
            <Text></Text>
          </Box>
          <Input type='password' mt={2} sx={highlightError} />
        </Box>
        <Box></Box>
        <Box mt={4}>
          <Button className='btn-rose'>Sign In</Button>
        </Box>
      </Box>
      <Box my={8}>
        <Title color='gray.600' level={2} fontSize='3xl'>
          OR
        </Title>
      </Box>
      <Box>
        <Text color='gray.600' className='flex justify-between'>
          Don't have an account?
          <Link color='brand.link' ml={3}>
            Sign up now
          </Link>
        </Text>
      </Box>
    </form>
  )
}

export default SigninPreview
