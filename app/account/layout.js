import Link from 'next/link';

export default function AccountLayout({
  children,
}) {
  return (
    <div>
      <h1>Account</h1>
      <ul>
        <li>
          <Link href="/account">Profile</Link>
          <Link href="/account/myPosts">My posts</Link>
        </li>
      </ul>
      {children}
    </div>
  );
}
