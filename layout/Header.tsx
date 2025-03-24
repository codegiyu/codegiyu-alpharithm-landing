'use client';

import { AlphaBtn } from '@/components/atoms/AlphaBtn';
import { Logo, Menu } from '@/components/icons';
import { Button } from '@/components/ui/button';
import { Sheet, SheetClose, SheetContent, SheetTitle, SheetTrigger } from '@/components/ui/sheet';
import { XIcon } from 'lucide-react';
import Link from 'next/link';
import { useState } from 'react';

const navLinks: NavLinkProps[] = [
  { href: '#', text: 'Models' },
  { href: '#', text: 'Pricing' },
  { href: '#', text: 'About Us' },
  { href: '#', text: 'Contact Us' },
  { href: '#', text: 'Custom Models' },
];

export const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

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

        <div className="hidden lg:flex items-center gap-3">
          <AlphaBtn variant="outline" text="Login" href="#" />
          <AlphaBtn variant="secondary" text="Get Started Now" href="#" />
        </div>

        <Sheet open={menuOpen} onOpenChange={setMenuOpen}>
          <SheetTrigger className="w-fit lg:hidden outline-none" asChild>
            <AlphaBtn
              variant="ghost"
              size="icon"
              className="hover:bg-transparent"
              onClick={() => setMenuOpen(prev => !prev)}>
              <i className="text-2xl text-white">
                <Menu />
              </i>
            </AlphaBtn>
          </SheetTrigger>
          <SheetContent
            side="left"
            className="w-full h-screen grid grid-cols-[auto_1fr] border-none bg-transparent"
            aria-describedby={undefined}>
            <SheetTitle className="sr-only">Mobile Menu</SheetTitle>
            <section className="w-[250px] h-full flex-none bg-white py-8 md:py-10">
              <div className="h-full flex flex-col justify-between">
                <div className="grid gap-8">
                  <div className="center-container w-full flex items-center justify-between">
                    <Link href="/" className="text-[2rem] text-white">
                      <Logo />
                    </Link>
                    <Button variant="ghost" className="p-2" onClick={() => setMenuOpen(false)}>
                      <XIcon className="size-5 text-red-700" />
                    </Button>
                  </div>
                  <div className="ul grid gap-1">
                    {navLinks.map((item, idx) => (
                      <NavLink key={idx} {...item} />
                    ))}
                    <div className="center-container grid gap-1 mt-2">
                      <AlphaBtn variant="default" text="Login" href="#" className="w-full" />
                      <AlphaBtn
                        variant="default"
                        text="Get Started Now"
                        href="#"
                        className="w-full"
                      />
                    </div>
                  </div>
                </div>
                <div className="center-container">
                  <p className="text-sm text-gray2">&copy; Copyright {new Date().getFullYear()}</p>
                </div>
              </div>
            </section>
            <SheetClose className="h-full w-full flex-1"></SheetClose>
          </SheetContent>
        </Sheet>
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
    <li className="list-none w-full lg:w-fit py-3 lg:py-0 px-4 lg:px-0 hover:bg-light-blue/15 lg:hover:bg-transparent">
      <Link href={href} className="w-full">
        <p className="font-figtree text-[1rem] leading-5 text-dark-1 lg:text-white">{text}</p>
      </Link>
    </li>
  );
}
