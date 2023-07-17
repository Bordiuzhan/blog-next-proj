'use client';

import { useRouter } from 'next/navigation';
import axios, { AxiosError } from 'axios';
import { signIn } from 'next-auth/react';
import { Notify } from 'notiflix';

const RegisterForm = () => {
  const router = useRouter();

  const handleSubmit = async (event) => {
    event.preventDefault();

    const formData = new FormData(event.currentTarget);

    try {
      const signupResponse = await axios.post('/api/auth/signup', {
        name: formData.get('name'),
        email: formData.get('email'),
        password: formData.get('password'),
      });

      const res = await signIn('credentials', {
        email: signupResponse.data.email,
        password: formData.get('password'),
        redirect: false,
      });

      if (res?.ok && !res.error) {
        Notify.success('Wellcome!');
        return router.push('/account');
      }
    } catch (error) {
      if (error instanceof AxiosError) {
        Notify.failure('Something went wrong!');
      }
    }
  };

  return (
    <form onSubmit={handleSubmit} className="login-form">
      <input type="text" name="name" placeholder="Jon Smeet" required />
      <input
        type="email"
        name="email"
        placeholder="Some email@mail.com"
        required
      />
      <input type="password" name="password" placeholder="******" required />
      <button>Register</button>
    </form>
  );
};

export { RegisterForm };
