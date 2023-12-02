/* eslint-disable react/no-unescaped-entities */
import {
  Box,
  FormLabel,
  Input,
  Link,
  UnorderedList,
  ListItem,
  Text,
} from '@chakra-ui/react'
import { Button } from '@acme/ui'

// FormPreview is a component that is used to preview what the form will look like when it is integrated with the AD B2C custom policy.
const SignupPreview = () => {
  const highlightError = {
    '&.highlightError': {
      borderColor: 'brand.error',
    },
  }

  return (
    <>
      <Box color='brand.700' className='ml-4'>
        <Text></Text>
      </Box>
      <form>
        <Box color='brand.error' className='italic ml-4 my-4'>
          Error messages will be handled by AD B2C.
        </Box>
        <Box color='brand.error' className='italic ml-4 my-4'></Box>
        <Box color='brand.error' className='italic ml-4 my-4'></Box>
        <Box color='brand.error' className='italic ml-4 my-4'></Box>
        <Box>
          <UnorderedList styleType='none'>
            <ListItem>
              <Box>
                <FormLabel className='text-lg'></FormLabel>
                <Box></Box>
                <Box>
                  <Box>
                    <Box color='brand.error' className='italic ml-4'></Box>
                  </Box>
                  <Box>
                    <Box color='brand.error' className='italic ml-4'></Box>
                  </Box>
                  <Box>
                    <Box color='brand.error' className='italic ml-4'></Box>
                  </Box>
                  <UnorderedList styleType='none' mx={0}>
                    <ListItem>
                      <Box mt={3}>
                        <FormLabel className='text-lg'>Email Address</FormLabel>
                        <Box color='brand.error' className='italic'></Box>
                        <Input
                          type='email'
                          sx={highlightError}
                          className='mr-4 my-1'
                        />
                        <Link as='a' display='none'>
                          What is this?
                        </Link>
                      </Box>
                    </ListItem>
                    <ListItem>
                      <Box mt={3}>
                        <FormLabel className='text-lg'>
                          Send Verification Code
                        </FormLabel>
                        <Box color='brand.error' className='italic'></Box>
                        <Input
                          type='text'
                          className='mr-4 my-1'
                          disabled={true}
                          sx={highlightError}
                        />
                        <Link as='a' display='none'>
                          What is this?
                        </Link>
                      </Box>
                    </ListItem>
                  </UnorderedList>
                  <Box color='brand.error' className='italic'></Box>
                  <Box className='flex justify-center'>
                    <Button
                      id='emailVerificationControl_but_send_code'
                      className='my-8 btn-blue'
                    >
                      Send verification code
                    </Button>
                    <Button
                      id='emailVerificationControl_but_verify_code'
                      className='my-8 mx-2 btn-blue'
                    >
                      Verify code
                    </Button>
                    <Button
                      id='emailVerificationControl_but_send_new_code'
                      className='my-8 mx-2 btn-blue'
                    >
                      Send new code
                    </Button>
                    <Button
                      id='emailVerificationControl_but_change_claims'
                      className='my-8 mx-2 btn-blue'
                    >
                      Change e-mail
                    </Button>
                  </Box>
                </Box>
                <Link as='a' display='none'>
                  What is this?
                </Link>
              </Box>
            </ListItem>
            <ListItem>
              <Box mt={3}>
                <FormLabel className='text-lg'>New Password</FormLabel>
                <Box color='brand.error' className='italic'></Box>
                <Input
                  type='password'
                  className='mr-4 my-1'
                  sx={highlightError}
                />
                <Link as='a' display='none'>
                  What is this?
                </Link>
              </Box>
            </ListItem>
            <ListItem>
              <Box mt={3}>
                <FormLabel className='text-lg'>Confirm New Password</FormLabel>
                <Box color='brand.error' className='italic'></Box>
                <Input
                  type='password'
                  className='mr-4 my-1'
                  disabled={true}
                  sx={highlightError}
                />
                <Link as='a' display='none'>
                  What is this?
                </Link>
              </Box>
            </ListItem>
          </UnorderedList>
        </Box>
        <Box className='my-8 flex justify-center'>
          <Button className='btn-rose'>Create</Button>
          <Button className='btn-slate'>Cancel</Button>
        </Box>
        <Box>
          <Box color='brand.error' className='italic'></Box>
        </Box>
      </form>
    </>
  )
}

export default SignupPreview
