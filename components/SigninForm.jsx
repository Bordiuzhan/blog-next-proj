'use client';

import { useRouter } from 'next/navigation';
import { signIn } from 'next-auth/react';
import { Notify } from 'notiflix';
import { GoogleButton } from './GoogleButton';

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

  return (<>
    <div className="main"> 
    <form onSubmit={handleSubmit} className="form">
      <label for="chk" aria-hidden="true">Log in</label>
      <input
        type="email"
        name="email"
        placeholder="Some email@mail.com"
        required
      />
      <input type="password" name="password" placeholder="******" required />
      <button>Sign In</button>
    </form><span>or</span>
     <GoogleButton/></div>
     </>
  );


//   <div className="main">  	
// 		<input type="checkbox" id="chk" aria-hidden="true">

// 			<div className="login">
// 				<form className="form" onSubmit={handleSubmit}>
// 					<label for="chk" aria-hidden="true">Log in</label>
// 					<input className="input" type="email" name="email" placeholder="Email" required>
// 					<input className="input" type="password" name="password" placeholder="Password" required>
// 					<button>Log in</button>
// 				</form>
// 			</div>

//       <div className="register">
// 				<form className="form">
// 					<label for="chk" aria-hidden="true">Register</label>
// 					<input className="input" type="text" name="txt" placeholder="Username" required="">
// 					<input className="input" type="email" name="email" placeholder="Email" required="">
// 					<input className="input" type="password" name="password" placeholder="Password" required="">
// 					<button>Register</button>
// 				</form>
// 			</div>
// 	</div>
};

export { SignInForm };
