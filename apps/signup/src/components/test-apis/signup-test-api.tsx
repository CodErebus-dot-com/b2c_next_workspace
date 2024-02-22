// SignupTestApi is a component that resembles the markup of sigup form that AD B2C will return.
// It is used to test the API markup locally.
export const SignupTestApi = () => {
  return (
    <>
      <div style={{ display: "none" }}>
        <p></p>
      </div>
      <form>
        <div className='error'>Error messages will be handled by AD B2C.</div>
        <div style={{ display: "none" }}></div>
        <div style={{ display: "none" }}></div>
        <div style={{ display: "none" }}></div>
        <div>
          <ul>
            <li>
              <div>
                <label></label>
                <div></div>
                <div>
                  <div>
                    <div style={{ display: "none" }}>
                      Verification is necessary. Please click Send button.
                    </div>
                  </div>
                  <div>
                    <div style={{ display: "none" }}></div>
                  </div>
                  <div>
                    <div style={{ display: "none" }}></div>
                  </div>
                  <ul>
                    <li style={{ display: "inline" }}>
                      <div>
                        <label>Email Address</label>
                        <div>Sample input level error</div>
                        <input type='email' className='highlightError' />
                        <a href='/'>What is this?</a>
                      </div>
                    </li>
                    <li style={{ display: "none" }}>
                      <div>
                        <label>Verification Code</label>
                        <div></div>
                        <input type='text' disabled={true} />
                        <a href='/'>What is this?</a>
                      </div>
                    </li>
                  </ul>
                  <div style={{ display: "none" }}></div>
                  <div>
                    <button type='button' style={{ display: "inline" }}>
                      Send verification code
                    </button>
                    <button type='button' style={{ display: "none" }}>
                      Verify code
                    </button>
                    <button type='button' style={{ display: "none" }}>
                      Send new code
                    </button>
                    <button type='button' style={{ display: "none" }}>
                      Change e-mail
                    </button>
                  </div>
                </div>
                <a href='/'>What is this?</a>
              </div>
            </li>
            <li>
              <div>
                <label>New Password</label>
                <div></div>
                <input type='password' />
                <a href='/'>What is this?</a>
              </div>
            </li>
            <li>
              <div>
                <label>Confirm New Password</label>
                <div></div>
                <input type='password' />
                <a href='/'>What is this?</a>
              </div>
            </li>
          </ul>
        </div>
        <div>
          <button type='submit' disabled={true}>
            Create
          </button>
          <button>Cancel</button>
        </div>
        <div>
          <div></div>
        </div>
      </form>
    </>
  );
};
