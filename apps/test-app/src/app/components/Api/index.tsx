// const Api = () => <div id="api" role="main"></div>


// Temporary, should be removed.
const TestApi = () => {
	return (
		// <div className="container">
		// 	<p className="para-1">Para 1</p>
		// 	<p className="para-2">Para 2</p>
		// </div>

		<div>
			<form>
				<div>
				<h2>
					Sign in with your email address
				</h2>
				</div>
				<div>
				<p></p>
				</div>
				<div>
				<div>
					<label>Email Address</label>
					<div>
					<p></p>
					</div>
					<input type="email" id="email" />
				</div>
				<div>
					<div>
					<label>Password</label>
					<a>Forgot your password?</a>
					</div>
					<div>
					<p></p>
					</div>
					<input type="password"  id="password"/>
				</div>
				<div></div>

				<div>
					<button>
					Sign in
					</button>
				</div>
				</div>
				<div>
				<h2>OR</h2>
				</div>
				<div>
				<p>
					Don't have an account?
					<a>
					Sign up now
					</a>
				</p>
				</div>
			</form>
			</div>
	)
}
const Api = () => {
	return (
		<div id="api">
		{
			process.env['NEXT_PUBLIC_NODE_ENV'] === 'development' && <TestApi />
		}
		</div>
	)
}

export default Api