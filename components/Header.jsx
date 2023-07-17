import { Navigation } from './Navigation';

const navItem = [
  { label: 'Home', href: '/' },
  { label: 'Blog', href: '/blog' },
];

const Header = () => {
  return (
    <header>
      <Navigation navLinks={navItem} />
    </header>
  );
};
export { Header };
