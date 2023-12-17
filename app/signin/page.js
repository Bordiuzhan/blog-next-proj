import { GoogleButton } from '@/components/GoogleButton';
import { SignInForm } from '@/components/SigninForm';

export const metadata = {
  title: 'Sign in',
};

export default async function Signin() {
  return (
    <div className="stack">
      <SignInForm />
    </div>
  );
}
