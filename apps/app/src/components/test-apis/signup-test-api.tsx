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
        <div style={{ display: 'none' }}>
          The password entry fields do not match. Please enter the same password
          in both fields and try again.
        </div>
        <div style={{ display: 'none' }}>
          A required field is missing. Please fill out all required fields and
          try again.
        </div>
        <div style={{ display: 'none' }}>
          One or more fields are filled out incorrectly. Please check your
          entries and try again.
        </div>
        <div style={{ display: 'none' }}></div>
        <div>
          <ul>
            <li>
              <div>
                {/* <label></label> */}
                <div></div>
                <div>
                  <div>
                    <div style={{ display: 'none' }}>
                      Verification is necessary. Please click Send button.
                    </div>
                  </div>
                  <div>
                    <div style={{ display: 'none' }}></div>
                  </div>
                  <div>
                    <div style={{ display: 'none' }}></div>
                  </div>
                  <ul>
                    <li style={{ display: 'inline' }}>
                      <div>
                        <label>Email Address</label>
                        <div></div>
                        <input type='email' placeholder='Email' />
                        <a>What is this?</a>
                      </div>
                    </li>
                    <li style={{ display: 'none' }}>
                      <div>
                        <label>Verification Code</label>
                        <div></div>
                        <input
                          type='text'
                          placeholder='Verification Code'
                          disabled={true}
                        />
                        <a href='javascript:void(0)'>What is this?</a>
                      </div>
                    </li>
                  </ul>
                  <div style={{ display: 'none' }}></div>
                  <div>
                    <button type='button' style={{ display: 'inline' }}>
                      Send verification code
                    </button>
                    <button type='button' style={{ display: 'none' }}>
                      Verify code
                    </button>
                    <button type='button' style={{ display: 'none' }}>
                      Send new code
                    </button>
                    <button type='button' style={{ display: 'none' }}>
                      Change e-mail
                    </button>
                  </div>
                </div>
                <a href='javascript:void(0)'>What is this?</a>
              </div>
            </li>
            <li>
              <div>
                <label>New Password</label>
                <div></div>
                <input type='password' placeholder='New Password' />
                <a href='javascript:void(0)'>What is this?</a>
              </div>
            </li>
            <li>
              <div>
                <label>Confirm New Password</label>
                <div></div>
                <input type='password' placeholder='Confirm New Password' />
                <a href='javascript:void(0)'>What is this?</a>
              </div>
            </li>
            <li>
              <div>
                <label>Given Name</label>
                <div></div>
                <input type='text' placeholder='Given Name' />
                <a href='javascript:void(0)'>What is this?</a>
              </div>
            </li>
            <li>
              <div>
                <label>Surname</label>
                <div></div>
                <input type='text' placeholder='Surname' />
                <a href='javascript:void(0)'>What is this?</a>
              </div>
            </li>
            <li>
              <div>
                <label>Display Name</label>
                <div></div>
                <input type='text' placeholder='Display Name' />
                <a href='javascript:void(0)'>What is this?</a>
              </div>
            </li>
            <li>
              <div>
                <label>Profile Picture</label>
                <div></div>
                <input type='text' placeholder='Profile Picture' />
                <a href='javascript:void(0)'>What is this?</a>
              </div>
            </li>
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
