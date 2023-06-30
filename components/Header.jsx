import { Navigation } from './Navigation';

const navItem = [
  { label: 'Home', href: '/' },
  { label: 'Blog', href: '/blog' },
  { label: 'Add Post', href: '/add' },
  { label: 'About', href: '/about' },
];

const Header = () => {
  return (
    <header>
      <Navigation navLinks={navItem} />
    </header>
  );
};
export { Header };
