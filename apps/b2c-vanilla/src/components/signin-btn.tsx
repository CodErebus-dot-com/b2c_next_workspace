import { signInRedirect } from '@src/authService';
import { Button } from '@acme/ui'

export const SignInButton = () => {
  return (
    <div>
      <Button
        onClick={signInRedirect}
        className="btn-rose"
      >
        Login
      </Button>
    </div>
  )
};
