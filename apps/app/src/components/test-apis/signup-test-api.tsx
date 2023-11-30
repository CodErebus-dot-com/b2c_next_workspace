// SignupTestApi is a component that resembles the markup of sigup form that AD B2C will return.
// It is used to test the API markup locally.
export const SignupTestApi = () => {
  return (
    // <>
    //   <div>
    //     <button id='cancel'>Cancel</button>
    //   </div>
    //   <div>
    //     <p classNameName='highlightError' style={{ display: 'none' }}>
    //       Please provide the following details.
    //     </p>
    //   </div>

    //   <form>
    //     <div id='passwordEntryMismatch' style={{ display: 'none' }}>
    //       The password entry fields do not match. Please enter the same password
    //       in both fields and try again.
    //     </div>
    //     <div id='requiredFieldMissing' style={{ display: 'none' }}>
    //       A required field is missing. Please fill out all required fields and
    //       try again.
    //     </div>
    //     <div id='fieldIncorrect' style={{ display: 'none' }}>
    //       One or more fields are filled out incorrectly. Please check your
    //       entries and try again.
    //     </div>
    //     <div
    //       id='claimVerificationServerError'
    //       style={{ display: 'none' }}
    //     ></div>
    //     <div id='attributeList'>
    //       <ul>
    //         <li>
    //           <div>
    //             <label id='emailVerificationControl_label'></label>
    //             <div></div>
    //             <div id='emailVerificationControl'>
    //               <div>
    //                 <div
    //                   id='emailVerificationControl_info_message'
    //                   style={{ display: 'none' }}
    //                 >
    //                   Verification is necessary. Please click Send button.
    //                 </div>
    //               </div>
    //               <div>
    //                 <div
    //                   id='emailVerificationControl_success_message'
    //                   style={{ display: 'none' }}
    //                 ></div>
    //               </div>
    //               <div>
    //                 <div
    //                   id='emailVerificationControl_error_message'
    //                   style={{ display: 'none' }}
    //                 ></div>
    //               </div>

    //               <ul>
    //                 <li style={{ display: 'inline' }}>
    //                   <div>
    //                     <div></div>
    //                     <input
    //                       id='email'
    //                       type='email'
    //                       placeholder='Email Address'
    //                     />
    //                     <span>*</span>
    //                     <a href='javascript:void(0)'>What is this?</a>
    //                   </div>
    //                 </li>
    //                 <li style={{ display: 'none' }}>
    //                   <div>
    //                     <div></div>
    //                     <input
    //                       id='emailVerificationCode'
    //                       type='text'
    //                       disabled={true}
    //                       placeholder='Verification Code'
    //                     />
    //                     <span>*</span>
    //                     <a href='javascript:void(0)'>What is this?</a>
    //                   </div>
    //                 </li>
    //               </ul>

    //               <div style={{ display: 'none' }}></div>
    //               <div>
    //                 <button
    //                   id='emailVerificationControl_but_send_code'
    //                   type='button'
    //                   style={{ display: 'inline' }}
    //                 >
    //                   Send verification code
    //                 </button>
    //                 <button
    //                   id='emailVerificationControl_but_verify_code'
    //                   type='button'
    //                   style={{ display: 'none' }}
    //                 >
    //                   Verify code
    //                 </button>
    //                 <button
    //                   id='emailVerificationControl_but_send_new_code'
    //                   type='button'
    //                   style={{ display: 'none' }}
    //                 >
    //                   Send new code
    //                 </button>
    //                 <button
    //                   id='emailVerificationControl_but_change_claims'
    //                   type='button'
    //                   style={{ display: 'none' }}
    //                 >
    //                   Change e-mail
    //                 </button>
    //               </div>
    //             </div>
    //             <a href='javascript:void(0)'>What is this?</a>
    //           </div>
    //         </li>
    //         <li>
    //           <div>
    //             <div></div>
    //             <input
    //               id='newPassword'
    //               type='password'
    //               disabled={true}
    //               placeholder='New Password'
    //             />
    //             <span>*</span>
    //             <a href='javascript:void(0)'>What is this?</a>
    //           </div>
    //         </li>
    //         <li>
    //           <div>
    //             <div></div>
    //             <input
    //               id='reenterPassword'
    //               type='password'
    //               disabled={true}
    //               placeholder='Confirm New Password'
    //             />
    //             <span>*</span>
    //             <a href='javascript:void(0)'>What is this?</a>
    //           </div>
    //         </li>
    //         <li>
    //           <div>
    //             <div></div>
    //             <input
    //               id='givenName'
    //               type='text'
    //               disabled={true}
    //               placeholder='Given Name'
    //             />
    //             <a href='javascript:void(0)'>What is this?</a>
    //           </div>
    //         </li>
    //         <li>
    //           <div>
    //             <div></div>
    //             <input
    //               id='surname'
    //               type='text'
    //               disabled={true}
    //               placeholder='Surname'
    //             />
    //             <a href='javascript:void(0)'>What is this?</a>
    //           </div>
    //         </li>
    //         <li>
    //           <div>
    //             <div></div>
    //             <input
    //               id='displayName'
    //               type='text'
    //               disabled={true}
    //               placeholder='Display Name'
    //             />
    //             <a href='javascript:void(0)'>What is this?</a>
    //           </div>
    //         </li>
    //         <li>
    //           <div>
    //             <div></div>
    //             <input
    //               id='extension_ProfilePicture'
    //               type='text'
    //               disabled={true}
    //               placeholder='Profile Picture'
    //             />
    //             <a href='javascript:void(0)'>What is this?</a>
    //           </div>
    //         </li>
    //       </ul>
    //     </div>
    //     <div>
    //       <button id='continue' type='submit'>
    //         Create
    //       </button>
    //     </div>

    //     <div>
    //       <div id='verifying_blurb'></div>
    //     </div>
    //   </form>
    // </>
    // <>
    //   <div>
    //     <button id='cancel'>Cancel</button>
    //   </div>
    //   <div>
    //     <p>Please provide the following details.</p>
    //   </div>
    //   <form id='attributeVerification'>
    //     <div id='passwordEntryMismatch' style={{ display: 'none' }}>
    //       The password entry fields do not match. Please enter the same password
    //       in both fields and try again.
    //     </div>
    //     <div id='requiredFieldMissing' style={{ display: 'none' }}>
    //       A required field is missing. Please fill out all required fields and
    //       try again.
    //     </div>
    //     <div id='fieldIncorrect' style={{ display: 'none' }}>
    //       One or more fields are filled out incorrectly. Please check your
    //       entries and try again.
    //     </div>
    //     <div
    //       id='claimVerificationServerError'
    //       style={{ display: 'none' }}
    //     ></div>
    //     <div id='attributeList'>
    //       <ul>
    //         <li>
    //           <div>
    //             <label id='emailVerificationControl_label'></label>
    //             <div></div>
    //             <div id='emailVerificationControl'>
    //               <div>
    //                 <div
    //                   id='emailVerificationControl_info_message'
    //                   style={{ display: 'none' }}
    //                 >
    //                   Verification is necessary. Please click Send button.
    //                 </div>
    //               </div>
    //               <div>
    //                 <div
    //                   id='emailVerificationControl_success_message'
    //                   style={{ display: 'none' }}
    //                 ></div>
    //               </div>
    //               <div>
    //                 <div
    //                   id='emailVerificationControl_error_message'
    //                   style={{ display: 'none' }}
    //                 ></div>
    //               </div>
    //               <ul>
    //                 <li>
    //                   <div>
    //                     <div></div>
    //                     <input
    //                       id='email'
    //                       type='email'
    //                       placeholder='Email Address'
    //                     />
    //                     <a href='javascript:void(0)'>What is this?</a>
    //                   </div>
    //                 </li>
    //                 <li>
    //                   <div>
    //                     <div></div>
    //                     <input
    //                       id='emailVerificationCode'
    //                       type='text'
    //                       placeholder='Verification Code'
    //                       style={{ display: 'none' }}
    //                     />
    //                     <a href='javascript:void(0)'>What is this?</a>
    //                   </div>
    //                 </li>
    //               </ul>
    //               <div style={{ display: 'none' }}></div>
    //               <div>
    //                 <button id='emailVerificationControl_but_send_code'>
    //                   Send verification code
    //                 </button>
    //                 <button
    //                   id='emailVerificationControl_but_verify_code'
    //                   style={{ display: 'none' }}
    //                 >
    //                   Verify code
    //                 </button>
    //                 <button
    //                   id='emailVerificationControl_but_send_new_code'
    //                   style={{ display: 'none' }}
    //                 >
    //                   Send new code
    //                 </button>
    //                 <button
    //                   id='emailVerificationControl_but_change_claims'
    //                   style={{ display: 'none' }}
    //                 >
    //                   Change e-mail
    //                 </button>
    //               </div>
    //             </div>
    //             <a href='javascript:void(0)'>What is this?</a>
    //           </div>
    //         </li>
    //         <li>
    //           <div>
    //             <div></div>
    //             <input
    //               id='newPassword'
    //               type='password'
    //               placeholder='New Password'
    //             />
    //             <a href='javascript:void(0)'>What is this?</a>
    //           </div>
    //         </li>
    //         <li>
    //           <div>
    //             <div></div>
    //             <input
    //               id='reenterPassword'
    //               type='password'
    //               placeholder='Confirm New Password'
    //             />
    //             <a href='javascript:void(0)'>What is this?</a>
    //           </div>
    //         </li>
    //         <li>
    //           <div>
    //             <div></div>
    //             <input id='givenName' type='text' placeholder='Given Name' />
    //             <a href='javascript:void(0)'>What is this?</a>
    //           </div>
    //         </li>
    //         <li>
    //           <div>
    //             <div></div>
    //             <input id='surname' type='text' placeholder='Surname' />
    //             <a href='javascript:void(0)'>What is this?</a>
    //           </div>
    //         </li>
    //         <li>
    //           <div>
    //             <div></div>
    //             <input
    //               id='displayName'
    //               type='text'
    //               placeholder='Display Name'
    //             />
    //             <a href='javascript:void(0)'>What is this?</a>
    //           </div>
    //         </li>
    //         <li>
    //           <div>
    //             <div></div>
    //             <input
    //               id='extension_ProfilePicture'
    //               type='text'
    //               placeholder='Profile Picture'
    //             />
    //             <a href='javascript:void(0)'>What is this?</a>
    //           </div>
    //         </li>
    //       </ul>
    //     </div>
    //     <div>
    //       <button id='continue'>Create</button>
    //     </div>

    //     <div>
    //       <div id='verifying_blurb'></div>
    //     </div>
    //   </form>
    // </>
    <>
      <div>
        <button>Cancel</button>
      </div>
      <div style={{ display: 'none' }}>
        <p>Please provide the following details.</p>
      </div>
      <form>
        <div className='error pageLevel' style={{ display: 'none' }}>
          The password entry fields do not match. Please enter the same password
          in both fields and try again.
        </div>
        <div className='error pageLevel' style={{ display: 'none' }}>
          A required field is missing. Please fill out all required fields and
          try again.
        </div>
        <div className='error pageLevel' style={{ display: 'none' }}>
          One or more fields are filled out incorrectly. Please check your
          entries and try again.
        </div>
        <div className='error pageLevel' style={{ display: 'none' }}></div>
        <div>
          <ul>
            <li>
              <div className='attrEntry'>
                <label
                  id='emailVerificationControl_label'
                  htmlFor='emailVerificationControl'
                ></label>
                <div className='error itemLevel' role='alert'></div>
                <div
                  className='verificationControlContent'
                  id='emailVerificationControl'
                >
                  <div className='verificationInfoText'>
                    <div
                      id='emailVerificationControl_info_message'
                      aria-hidden='true'
                      role='alert'
                      aria-label='Verification is necessary. Please click Send button.'
                      style={{ display: 'none' }}
                    >
                      Verification is necessary. Please click Send button.
                    </div>
                  </div>
                  <div className='verificationSuccessText'>
                    <div
                      id='emailVerificationControl_success_message'
                      aria-hidden='true'
                      role='alert'
                      aria-label=''
                      style={{ display: 'none' }}
                    ></div>
                  </div>
                  <div className='verificationErrorText error'>
                    <div
                      id='emailVerificationControl_error_message'
                      aria-hidden='true'
                      role='alert'
                      aria-label=''
                      style={{ display: 'none' }}
                    ></div>
                  </div>
                  <ul>
                    <li
                      className='EmailBox email'
                      aria-hidden='false'
                      style={{ display: 'inline' }}
                    >
                      <div className='attrEntry'>
                        <div className='error itemLevel' role='alert'></div>
                        <input type='email' placeholder='Email' />
                        <a>What is this?</a>
                      </div>
                    </li>
                    <li
                      className='TextBox VerificationCode'
                      aria-hidden='true'
                      style={{ display: 'none' }}
                    >
                      <div className='attrEntry'>
                        <div className='error itemLevel' role='alert'></div>
                        <input
                          id='emailVerificationCode'
                          className='textInput'
                          type='text'
                          placeholder='Verification Code'
                          aria-label='Verification Code'
                          title='Enter your verification code'
                          aria-required='true'
                          autoComplete='off'
                          disabled={true}
                        />
                        <a
                          className='helpLink tiny'
                          href='javascript:void(0)'
                          data-help='Enter your verification code'
                        >
                          What is this?
                        </a>
                      </div>
                    </li>
                  </ul>
                  <div
                    className='working'
                    style={{ display: 'none' }}
                    aria-hidden='true'
                  ></div>
                  <div className='buttons'>
                    <button
                      className='sendCode'
                      id='emailVerificationControl_but_send_code'
                      type='button'
                      aria-label='Send verification code'
                      aria-hidden='false'
                      style={{ display: 'inline' }}
                    >
                      Send verification code
                    </button>
                    <button
                      className='verifyCode'
                      id='emailVerificationControl_but_verify_code'
                      type='button'
                      aria-label='Verify code'
                      aria-hidden='true'
                      style={{ display: 'none' }}
                    >
                      Verify code
                    </button>
                    <button
                      className='sendNewCode'
                      id='emailVerificationControl_but_send_new_code'
                      type='button'
                      aria-label='Send new code'
                      aria-hidden='true'
                      style={{ display: 'none' }}
                    >
                      Send new code
                    </button>
                    <button
                      className='changeClaims'
                      id='emailVerificationControl_but_change_claims'
                      type='button'
                      aria-label='Change e-mail Email Address'
                      aria-hidden='true'
                      style={{ display: 'none' }}
                    >
                      Change e-mail
                    </button>
                  </div>
                </div>
                <a className='helpLink tiny' href='javascript:void(0)'>
                  What is this?
                </a>
              </div>
            </li>
            {/* <li className='Password'>
              <div className='attrEntry'>
                <div className='error itemLevel' role='alert'></div>
                <input
                  id='newPassword'
                  className='textInput'
                  type='password'
                  placeholder='New Password'
                  aria-label='New Password'
                  title='Enter new password'
                  autoComplete='new-password'
                  aria-required='true'
                />
                <a
                  className='helpLink tiny'
                  href='javascript:void(0)'
                  data-help='Enter new password'
                >
                  What is this?
                </a>
              </div>
            </li>
            <li className='Password'>
              <div className='attrEntry'>
                <div className='error itemLevel' role='alert'></div>
                <input
                  id='reenterPassword'
                  className='textInput'
                  type='password'
                  placeholder='Confirm New Password'
                  aria-label='Confirm New Password'
                  title='Confirm new password'
                  autoComplete='new-password'
                  aria-required='true'
                />
                <a
                  className='helpLink tiny'
                  href='javascript:void(0)'
                  data-help='Confirm new password'
                >
                  What is this?
                </a>
              </div>
            </li>
            <li className='TextBox'>
              <div className='attrEntry'>
                <div className='error itemLevel' role='alert'></div>
                <input
                  id='givenName'
                  className='textInput'
                  type='text'
                  placeholder='Given Name'
                  aria-label='Given Name'
                  title='Your given name (also known as first name).'
                />
                <a
                  className='helpLink tiny'
                  href='javascript:void(0)'
                  data-help='Your given name (also known as first name).'
                >
                  What is this?
                </a>
              </div>
            </li>
            <li className='TextBox'>
              <div className='attrEntry'>
                <div className='error itemLevel' role='alert'></div>
                <input
                  id='surname'
                  className='textInput'
                  type='text'
                  placeholder='Surname'
                  aria-label='Surname'
                  title='Your surname (also known as family name or last name).'
                />
                <a
                  className='helpLink tiny'
                  href='javascript:void(0)'
                  data-help='Your surname (also known as family name or last name).'
                >
                  What is this?
                </a>
              </div>
            </li>
            <li className='TextBox'>
              <div className='attrEntry'>
                <div className='error itemLevel' role='alert'></div>
                <input
                  id='displayName'
                  className='textInput'
                  type='text'
                  placeholder='Display Name'
                  aria-label='Display Name'
                  title='Your display name.'
                />
                <a
                  className='helpLink tiny'
                  href='javascript:void(0)'
                  data-help='Your display name.'
                >
                  What is this?
                </a>
              </div>
            </li>
            <li className='TextBox'>
              <div className='attrEntry'>
                <div className='error itemLevel' role='alert'></div>
                <input
                  id='extension_ProfilePicture'
                  className='textInput'
                  type='text'
                  placeholder='Profile Picture'
                  aria-label='Profile Picture'
                />
                <a className='helpLink tiny' href='javascript:void(0)'>
                  What is this?
                </a>
              </div>
            </li> */}
          </ul>
        </div>
        <div>
          <button type='submit'>Create</button>
        </div>

        <div>
          <div></div>
        </div>
      </form>
    </>
  )
}
