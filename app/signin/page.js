import { GoogleButton } from '@/components/GoogleButton';
import { SignInForm } from '@/components/SigninForm';

export default async function Signin() {
  return (
    <div className="stack">
      <h1>Sign in</h1>
      <SignInForm />
      <div>or</div>
      <GoogleButton/>
    </div>
  );
}
