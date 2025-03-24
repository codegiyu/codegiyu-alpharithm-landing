'use client';

import { Catalog, Circooles, Layers, Quotient, Sisyphus } from '@/components/icons';
import { JSX, SVGProps, useMemo } from 'react';
import { motion } from 'motion/react';

const partnerCompanies: CompanyProps[] = [
  { Icon: Layers, name: 'Layers' },
  { Icon: Sisyphus, name: 'Sisyphus' },
  { Icon: Circooles, name: 'Circooles' },
  { Icon: Catalog, name: 'Catalog' },
  { Icon: Quotient, name: 'Quotient' },
];

export const Partners = () => {
  const duplicatedCompanies = useMemo(
    () => (Array(6).fill(partnerCompanies) as CompanyProps[][]).flat(),
    []
  );

  return (
    <section className="w-full py-6 grid gap-8">
      <h5 className="text-center text-base font-medium text-grey-1">
        Join 4,000+ companies already growing
      </h5>
      <div className="w-full overflow-hidden">
        <motion.div
          className="w-fit flex items-center justify-center gap-10 md:gap-16 lg:gap-[6.25rem] xl:gap-36"
          animate={{
            x: ['0%', '-85%'],
            transition: {
              ease: 'linear',
              duration: 120,
              repeat: Infinity,
            },
          }}>
          {duplicatedCompanies.map((companyInfo, idx) => (
            <Company key={idx} {...companyInfo} />
          ))}
        </motion.div>
      </div>
    </section>
  );
};

interface CompanyProps {
  Icon: (props: SVGProps<SVGSVGElement>) => JSX.Element;
  name: string;
}

function Company({ Icon, name }: CompanyProps) {
  return (
    <div className="w-fit flex items-center gap-3">
      <i className="text-[2.75rem]">
        <Icon />
      </i>
      <span className="font-figtree text-[1.75rem] leading-none font-semibold text-dark-2">
        {name}
      </span>
    </div>
  );
}
