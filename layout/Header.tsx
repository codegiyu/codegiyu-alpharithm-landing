import { AlphaBtn } from '@/components/atoms/AlphaBtn';
import { Logo } from '@/components/icons';
import Link from 'next/link';

const navLinks: NavLinkProps[] = [
  { href: '#', text: 'Models' },
  { href: '#', text: 'Pricing' },
  { href: '#', text: 'About Us' },
  { href: '#', text: 'Contact Us' },
  { href: '#', text: 'Custom Models' },
];

export const Header = () => {
  return (
    <header className="w-full bg-transparent py-10">
      <section className="center-container flex items-center justify-between">
        <Link href="/" className="text-[3rem] text-white">
          <Logo />
        </Link>

        <nav className="hidden lg:block w-fit">
          <ul className="flex items-center gap-6">
            {navLinks.map((item, idx) => (
              <NavLink key={idx} {...item} />
            ))}
          </ul>
        </nav>

        <div className="flex items-center gap-3">
          <AlphaBtn variant="outline" text="Login" href="#" />
          <AlphaBtn variant="secondary" text="Get Started Now" href="#" />
        </div>
      </section>
    </header>
  );
};

interface NavLinkProps {
  href: string;
  text: string;
}

function NavLink({ href, text }: NavLinkProps) {
  return (
    <li className="w-full lg:w-fit">
      <Link href={href} className="w-full">
        <p className="font-figtree text-[1rem] leading-5 text-white">{text}</p>
      </Link>
    </li>
  );
}
