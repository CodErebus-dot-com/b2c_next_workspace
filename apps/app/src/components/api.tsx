import { SigninTestApi, SignupTestApi } from './test-apis'
import { useRouter } from 'next/router'

const Api = () => {
  const router = useRouter()
  const signinPath = router.pathname === '/signin'

  return (
    <div id='api' role='main'>
      {process.env['NEXT_PUBLIC_NODE_ENV'] === 'development' &&
        (signinPath ? <SigninTestApi /> : <SignupTestApi />)}
    </div>
  )
}

export default Api
