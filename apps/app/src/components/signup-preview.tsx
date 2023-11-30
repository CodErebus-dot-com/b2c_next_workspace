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
      boxShadow: '0 0 0 1px brand.error',
    },
  }

  const isHidden = {
    '&.hidden': {
      display: 'none',
    },
  }

  return (
    <>
      <Box>
        <Button className='m-4 btn-slate'>Cancel</Button>
      </Box>
      <Box>
        <Text sx={isHidden}>Please provide the following details.</Text>
      </Box>
      <form>
        <Box sx={isHidden}>
          The password entry fields do not match. Please enter the same password
          in both fields and try again.
        </Box>
        <Box sx={isHidden}>
          A required field is missing. Please fill out all required fields and
          try again.
        </Box>
        <Box sx={isHidden}>
          One or more fields are filled out incorrectly. Please check your
          entries and try again.
        </Box>
        <Box sx={isHidden}></Box>
        <Box>
          <UnorderedList styleType='none'>
            <ListItem>
              <Box>
                <FormLabel>Email Address</FormLabel>
                <Box></Box>
                <Box>
                  <Box>
                    <Box sx={isHidden}>
                      Verification is necessary. Please click Send button.
                    </Box>
                  </Box>
                  <Box>
                    <Box sx={isHidden}></Box>
                  </Box>
                  <Box>
                    <Box sx={isHidden}></Box>
                  </Box>
                  <UnorderedList styleType='none' mx={0}>
                    <ListItem>
                      <Box className='relative flex'>
                        <Box></Box>
                        <Input
                          type='email'
                          placeholder='Email Address'
                          sx={highlightError}
                          className='px-0 mr-4 my-2'
                        />
                        <Link as='a' display='none'>
                          What is this?
                        </Link>
                      </Box>
                    </ListItem>
                    <ListItem sx={isHidden}>
                      <Box>
                        <Box></Box>
                        <Input
                          type='text'
                          className='px-0 my-2 mr-4'
                          disabled={true}
                          sx={highlightError}
                          placeholder='Send Verification Code'
                        />
                        <Link as='a' display='none'>
                          What is this?
                        </Link>
                      </Box>
                    </ListItem>
                  </UnorderedList>
                  <Box sx={isHidden}></Box>
                  <Box className='flex justify-center'>
                    <Button
                      id='emailVerificationControl_but_send_code'
                      className='my-8 btn-rose'
                    >
                      Send verification code
                    </Button>
                    <Button
                      id='emailVerificationControl_but_verify_code'
                      className='my-8 mx-2 btn-blue'
                      sx={isHidden}
                    >
                      Verify code
                    </Button>
                    <Button
                      id='emailVerificationControl_but_send_new_code'
                      className='my-8 mx-2 btn-blue'
                      sx={isHidden}
                    >
                      Send new code
                    </Button>
                    <Button
                      id='emailVerificationControl_but_change_claims'
                      sx={isHidden}
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
            {/* <ListItem>
              <Box className='relative flex'>
                <Box></Box>
                <Input
                  type='password'
                  placeholder='New Password'
                  className='px-0 my-2 mr-4'
                  sx={highlightError}
                />
                <Link as='a' display='none'>
                  What is this?
                </Link>
              </Box>
            </ListItem>
            <ListItem>
              <Box className='relative flex'>
                <Box></Box>
                <Input
                  type='password'
                  placeholder='Confirm New Password'
                  className='px-0 my-2 mr-4'
                  disabled={true}
                  sx={highlightError}
                />
                <Link as='a' display='none'>
                  What is this?
                </Link>
              </Box>
            </ListItem>
            <ListItem>
              <Box className='flex'>
                <Box></Box>
                <Input
                  type='text'
                  disabled={true}
                  placeholder='Given Name'
                  className='px-0 mr-4 my-2'
                  sx={highlightError}
                />
                <Link as='a' display='none'>
                  What is this?
                </Link>
              </Box>
            </ListItem>
            <ListItem>
              <Box className='flex'>
                <Box></Box>
                <Input
                  type='text'
                  disabled={true}
                  placeholder='Given Name'
                  className='px-0 mr-4 my-2'
                  sx={highlightError}
                />
                <Link as='a' display='none'>
                  What is this?
                </Link>
              </Box>
            </ListItem>
            <ListItem>
              <Box className='flex'>
                <Box></Box>
                <Input
                  type='text'
                  disabled={true}
                  placeholder='Display Name'
                  className='px-0 mr-4 my-2'
                  sx={highlightError}
                />
                <Link as='a' display='none'>
                  What is this?
                </Link>
              </Box>
            </ListItem>
            <ListItem>
              <Box className='flex'>
                <Box></Box>
                <Input
                  type='text'
                  disabled={true}
                  placeholder='Profile Picture'
                  className='px-0 mr-4 my-2'
                  sx={highlightError}
                />
                <Link as='a' display='none'>
                  What is this?
                </Link>
              </Box>
            </ListItem> */}
          </UnorderedList>
        </Box>
        <Box className='flex justify-center'>
          <Button className='my-8 btn-blue'>Create</Button>
        </Box>
        <Box>
          <Box></Box>
        </Box>
      </form>
    </>
  )
}

export default SignupPreview
