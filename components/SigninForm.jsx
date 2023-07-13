'use client';

import { useRouter } from 'next/navigation';
import { signIn } from 'next-auth/react';
import { Notify } from 'notiflix';

const SignInForm = () => {
  const router = useRouter();

  const handleSubmit = async (event) => {
    event.preventDefault();

    const formData = new FormData(event.currentTarget);

    try {
      const res = await signIn('credentials', {
        email: formData.get('email'),
        password: formData.get('password'),
        redirect: false,
      });

      if (res?.ok && !res.error) {
        Notify.success('Wellcome!');
        return router.push('/account');
      }
    } catch (error) {
      if (error instanceof AxiosError) {
        Notify.failure('Something went wrong');
      }
    }
  };

  return (
    <form onSubmit={handleSubmit} className="login-form">
      <input
        type="email"
        name="email"
        placeholder="Some email@mail.com"
        required
      />
      <input type="password" name="password" placeholder="******" required />
      <button>Sign In</button>
    </form>
  );
};

export { SignInForm };
