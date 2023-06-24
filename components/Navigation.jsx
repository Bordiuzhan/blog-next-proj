'use client';
import { ApiError } from 'next/dist/server/api-utils';
import Link from 'next/link';
import { signOut, useSession } from 'next-auth/react';

import { usePathname } from 'next/navigation';

const Navigation = ({ navLinks }) => {
  const pathname = usePathname();

  // використовується для  ApiError
  const session = useSession();
 
  return (
    <>
      {navLinks.map((link) => {
        const isActive = pathname === link.href;

        return (
          <Link
            key={link.label}
            href={link.href}
            className={isActive ? 'active' : ''}
          >
            {link.label}
          </Link>
        );
      })}
      {session?.data && <Link href="/profile"  className={pathname === "/profile" ? 'active' : ''}>Profile</Link>}
      {session?.data ? (
        <Link href="#" onClick={() => signOut({ callbackUrl: "/" })}>
          Sign Out
        </Link>
      ) : (
        <Link href="/signin" className={pathname === "/signin" ? 'active' : ''}>SignIn</Link>
      )}
    </>
  );
};

export { Navigation };
