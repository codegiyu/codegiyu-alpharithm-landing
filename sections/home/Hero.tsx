import { AlphaBtn } from '@/components/atoms/AlphaBtn';
import { Header } from '@/layout/Header';

export const Hero = () => {
  return (
    <section className="bg-dark-blue overflow-hidden">
      <Header />
      <section className="w-full pb-[7.25rem] relative">
        <div className="center-container relative z-[2]">
          <div className="w-full max-w-headings-width mx-auto grid gap-6">
            <div className="grid gap-2 justify-items-center">
              <h6 className="w-fit font-jakarta text-[1rem] leading-[2.375rem] -tracking-[2%] font-bold text-very-light-blue">
                Leverage on Automation
              </h6>
              <h1 className="lg:w-[90%] font-figtree text-center text-4xl leading-12 lg:text-[4.75rem] lg:leading-[5.125rem] -tracking-[2%] font-semibold text-white">
                AI Models for Business Solutions
              </h1>
            </div>
            <p className="font-jakarta text-base lg:text-[1.375rem] lg:leading-[2.375rem] -tracking-[2%] text-center text-white">
              Leverage the power of AI to automate, analyze, and optimize your workflows. Our
              specialized models are designed to fit different business needs
            </p>
            <div className="w-full flex justify-center">
              <AlphaBtn variant="secondary" size="lg" text="Get Started Now" />
            </div>
          </div>
        </div>
        <div className="w-[66%] aspect-square rounded-full absolute left-[20%] top-[70%] bg-light-blue blur-[195px] z-0" />
      </section>
    </section>
  );
};
