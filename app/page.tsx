import { BusinessNeeds } from '@/sections/home/BusinessNeeds';
import { Hero } from '@/sections/home/Hero';
import { Partners } from '@/sections/home/Partners';

export default function Home() {
  return (
    <main className="">
      <Hero />
      <Partners />
      <BusinessNeeds />
    </main>
  );
}
