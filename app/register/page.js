import { RegisterForm } from '@/components/RegisterForm';

export const metadata = {
  title: 'Register',
};

export default function Register() {
  return (
    <div className="stack">
      <RegisterForm />
    </div>
  );
}
