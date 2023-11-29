// SignupTestApi is a component that resembles the markup of sigup form that AD B2C will return.
// It is used to test the API markup locally.
export const SignupTestApi = () => {
  return (
    <>
      <div>
        <h1>User Details</h1>
      </div>
      <div>
        <button id='cancel'>Cancel</button>
      </div>
      <div>
        <p className='highlightError' style={{ display: 'none' }}>
          Please provide the following details.
        </p>
      </div>

      <form>
        <div id='requiredFieldMissing' style={{ display: 'none' }}>
          A required field is missing. Please fill out all required fields and
          try again.
        </div>
        <div id='fieldIncorrect' style={{ display: 'none' }}>
          One or more fields are filled out incorrectly. Please check your
          entries and try again.
        </div>
        <div
          id='claimVerificationServerError'
          style={{ display: 'none' }}
        ></div>
        <div id='attributeList'>
          <ul>
            <li>
              <div>
                <label id='emailVerificationControl_label'></label>
                <div></div>

                <div id='emailVerificationControl'>
                  <div>
                    <div
                      id='emailVerificationControl_info_message'
                      style={{ display: 'none' }}
                    >
                      Verification is necessary. Please click Send button.
                    </div>
                  </div>
                  <div>
                    <div
                      id='emailVerificationControl_success_message'
                      style={{ display: 'none' }}
                    ></div>
                  </div>
                  <div>
                    <div
                      id='emailVerificationControl_error_message'
                      style={{ display: 'none' }}
                    ></div>
                  </div>

                  <ul>
                    <li style={{ display: 'inline' }}>
                      <div>
                        <div></div>
                        <input
                          id='email'
                          type='email'
                          placeholder='Email Address'
                        />
                        <span>*</span>
                        <a href='javascript:void(0)'>What is this?</a>
                      </div>
                    </li>
                    <li style={{ display: 'none' }}>
                      <div>
                        <div></div>
                        <input
                          id='emailVerificationCode'
                          type='text'
                          disabled={true}
                          placeholder='Verification Code'
                        />
                        <span>*</span>
                        <a href='javascript:void(0)'>What is this?</a>
                      </div>
                    </li>
                  </ul>

                  <div style={{ display: 'none' }}></div>
                  <div>
                    <button
                      id='emailVerificationControl_but_send_code'
                      type='button'
                      style={{ display: 'inline' }}
                    >
                      Send verification code
                    </button>
                    <button
                      id='emailVerificationControl_but_verify_code'
                      type='button'
                      style={{ display: 'none' }}
                    >
                      Verify code
                    </button>
                    <button
                      id='emailVerificationControl_but_send_new_code'
                      type='button'
                      style={{ display: 'none' }}
                    >
                      Send new code
                    </button>
                    <button
                      id='emailVerificationControl_but_change_claims'
                      type='button'
                      style={{ display: 'none' }}
                    >
                      Change e-mail
                    </button>
                  </div>
                </div>
                <a href='javascript:void(0)'>What is this?</a>
              </div>
            </li>
            <li>
              <div>
                <div></div>
                <input
                  id='newPassword'
                  type='password'
                  disabled={true}
                  placeholder='New Password'
                />
                <span>*</span>
                <a href='javascript:void(0)'>What is this?</a>
              </div>
            </li>
            <li>
              <div>
                <div></div>
                <input
                  id='reenterPassword'
                  type='password'
                  disabled={true}
                  placeholder='Confirm New Password'
                />
                <span>*</span>
                <a href='javascript:void(0)'>What is this?</a>
              </div>
            </li>
            <li>
              <div>
                <div></div>
                <input
                  id='givenName'
                  type='text'
                  disabled={true}
                  placeholder='Given Name'
                />
                <a href='javascript:void(0)'>What is this?</a>
              </div>
            </li>
            <li>
              <div>
                <div></div>
                <input
                  id='surname'
                  type='text'
                  disabled={true}
                  placeholder='Surname'
                />
                <a href='javascript:void(0)'>What is this?</a>
              </div>
            </li>
            <li>
              <div>
                <div></div>
                <input
                  id='displayName'
                  type='text'
                  disabled={true}
                  placeholder='Display Name'
                />
                <a href='javascript:void(0)'>What is this?</a>
              </div>
            </li>
            <li>
              <div>
                <div></div>
                <input
                  id='extension_ProfilePicture'
                  type='text'
                  disabled={true}
                  placeholder='Profile Picture'
                />
                <a href='javascript:void(0)'>What is this?</a>
              </div>
            </li>
          </ul>
        </div>
        <div>
          <button id='continue' type='submit'>
            Create
          </button>
        </div>

        <div>
          <div id='verifying_blurb'></div>
        </div>
      </form>
    </>
  )
}
