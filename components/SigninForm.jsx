'use client';

import { useRouter } from 'next/navigation';
import { signIn } from 'next-auth/react';
import { Notify } from 'notiflix';

const SignInForm = () => {
  const router = useRouter();

  const handleSubmit = async (event) => {
    event.preventDefault();

    const formData = new FormData(event.currentTarget);

    const res = await signIn('credentials', {
      email: formData.get('email'),
      password: formData.get('password'),
      redirect: false,
    });

    if (res && !res.error) {
      Notify.success('Done!');
      router.push('/profile');
    } else {
      Notify.failure('Something went wrong!');
    }
  };

  return (
    <form onSubmit={handleSubmit} className="login-form">
      <input type="email" name="email" required />
      <input type="password" name="password" required />
      <button type="submit">Sign In</button>
    </form>
  );
};

export { SignInForm };
