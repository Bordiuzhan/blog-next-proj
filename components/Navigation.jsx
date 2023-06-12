'use client';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

const Navigation = ({ navLinks }) => {
  const pathname = usePathname();
  

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
    </>
  );
};

export { Navigation };
