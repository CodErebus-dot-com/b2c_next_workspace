import SigninPreview from './sigin-preview'
import SignupPreview from './signup-preview'
import { useRouter } from 'next/router'

// DummyApi component is a component that acts as a source for the API component.
const DummyApi = function DummyApi() {
  const router = useRouter()
  const signinPath = router.pathname === '/signin'

  return (
    <div id='dummy-api'>
      {signinPath ? <SigninPreview /> : <SignupPreview />}
    </div>
  )
}

export default DummyApi
