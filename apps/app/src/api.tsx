import { forwardRef, useState } from 'react'
const TestApi = () => {
	return (
		// <div className="container">
		// 	<p>Para 1</p>
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
					<input type="email" />
				</div>
				<div>
					<div>
					<label>Password</label>
					<a>Forgot your password?</a>
					</div>
					<div>
					<p></p>
					</div>
					<input type="password" />
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

// const Api = forwardRef<HTMLDivElement, {}>(function Api(_,ref) {
// 	const [shouldRenderTestApi, setShouldRenderTestApi] = useState(false);

// 	useEffect(() => {
// 		if (process.env.NEXT_PUBLIC_NODE_ENV === 'development') {
// 		  // Simulate delayed rendering of TestApi after the initial render
// 		  setTimeout(() => {
// 			setShouldRenderTestApi(true);
// 		  }, 1000); // Adjust the delay as needed
// 		}
// 	  }, []);

// 	return (
// 		<div id="api" ref={ref} role="main" >
// 		{
// 			process.env['NEXT_PUBLIC_NODE_ENV'] === 'development' && shouldRenderTestApi && <TestApi />
// 		}
// 		</div>
// 	)
// })





const Api = forwardRef<HTMLDivElement, { onRenderTestApi: () => void }>(function Api({ onRenderTestApi }, ref) {
	console.log(process.env['NEXT_PUBLIC_NODE_ENV'])
	const [shouldRenderTestApi, setShouldRenderTestApi] = useState(false);

	// if (process.env['NEXT_PUBLIC_NODE_ENV'] === 'development') {
	// 	setTimeout(() => {
	// 		setShouldRenderTestApi(true);
	// 		onRenderTestApi(); // Notify the parent component that TestApi has been rendered
	// 	}, 1000);
	// }

	return (
		<div id="api" ref={ref} role="main">
		{/* {process.env['NEXT_PUBLIC_NODE_ENV'] === 'development' && shouldRenderTestApi && <TestApi />} */}
		</div>
	);
});

export default Api