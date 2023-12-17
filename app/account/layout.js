import Link from 'next/link';
export const metadata = {
  title: 'Account',
};

export default function AccountLayout({ children }) {
  return (
    <div>
      <div className="img-hero account">
        <div className="title-wrapper">
          <h1 className="title-hero">Account</h1>
        </div>
      </div>
      <ul className="user-menu-list">
        <li>
          <Link href="/account" className="user-menu-link">
            Profile
          </Link>
        </li>
        <li>
          <Link href="/account/myPosts" className="user-menu-link">
            My posts
          </Link>
        </li>
      </ul>
      {children}
    </div>
  );
}
