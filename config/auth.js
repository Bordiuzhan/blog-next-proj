import GoogleProvider from 'next-auth/providers/google';
import Credentials from 'next-auth/providers/credentials';
import { users } from '@/data/users';

export const authConfig = {
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_SECRET,
    }),
    Credentials({
      credentials: {
        email: { label: 'email', type: 'email', required: true },
        password: { label: 'password', type: 'password', required: true },
      },
      async authorize(credential) {
        if (!credential?.email || !credential.password) return null;

        const currentUser = users.find(
          (user) => user.email === credential.email
        );

        if (currentUser && currentUser.password === credential.password) {
          const { password, ...userWithoutPass } = currentUser;
          return userWithoutPass;
        }
        return null;
      },
    }),
  ],
  pages:{
    signIn:"/signin"
  }
};
