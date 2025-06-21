'use client';

import { AlphaBtn } from '@/components/atoms/AlphaBtn';
import { useRef, useState } from 'react';
import { Swiper, SwiperSlide, SwiperRef } from 'swiper/react';
import { Mousewheel, Manipulation, A11y, Pagination, Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import Image from 'next/image';

const businessNeedsList: BusinessNeedProps[] = [
  {
    title: 'Market Prediction',
    text: 'Use AI insights for smarter business decisions and stay competitive.',
    img: '/images/market-prediction.png',
  },
  {
    title: 'Finance',
    text: 'Our AI models analyze financial data for confident inverstments.',
    img: '/images/finance.png',
  },
  {
    title: 'Data Analytics',
    text: 'Transform data into insights with AI analytics that enhance decisions.',
    img: '/images/data-analytics.png',
  },
  {
    title: 'Content Generation',
    text: 'Create quality content easily with AI that knows your brand and audience.',
    img: '/images/content-generation.png',
  },
  {
    title: 'Customer Support',
    text: 'Use AI chatbots for instant, personalized customer support.',
    img: '/images/customer-support.png',
  },
];

export const BusinessNeeds = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const swiperRef = useRef<SwiperRef>(null);

  const goToSlide = (num: number) => {
    console.log({ num, swiper: swiperRef.current });
    if (!swiperRef.current) {
      return;
    }

    swiperRef.current.swiper.slideToLoop(num, 1200);
  };

  return (
    <section className="w-full py-[5.75rem] grid gap-[2rem] overflow-hidden">
      <div className="center-container grid gap-8">
        <div className="w-full max-w-headings-width mx-auto grid gap-2">
          <h2 className="md:w-[85%] mx-auto font-figtree text-3xl leading-9 lg:text-[3.125rem] lg:leading-[3.875rem] font-semibold -tracking-[2%] text-center text-dark-3">
            AI Models tailored for your business needs
          </h2>
          <p className="font-jakarta text-base lg:text-[1.375rem] lg:leading-[2.375rem] font-medium -tracking-[2%] text-center text-grey-2">
            Leverage the power of AI to automate, analyze, and optimize your workflows. Our
            specialized models are designed to fit different business needs
          </p>
        </div>

        <div className="w-fit mx-auto hidden lg:flex items-center gap-1 border border-[#E4E4E7] rounded-[12px] p-1">
          {businessNeedsList.map(({ title }, idx) => (
            <AlphaBtn
              key={idx}
              text={title}
              variant={idx === activeIndex ? 'default' : 'ghost'}
              size="average"
              className="transition-all ease-in duration-300"
              onClick={() => goToSlide(idx)}
            />
          ))}
        </div>
      </div>

      <div className="w-full overflow-hidden">
        <Swiper
          modules={[Mousewheel, Manipulation, A11y, Pagination, Navigation]}
          loop={true}
          centeredSlides={true}
          slidesPerView={'auto'}
          spaceBetween={28}
          onSwiper={swiper => {
            swiperRef.current = { swiper };
          }}
          onSlideChange={swiper => setActiveIndex(swiper.realIndex || 0)}
          className="w-full h-auto flex justify-center flex-nowrap">
          {businessNeedsList.map((item, idx) => (
            <SwiperSlide
              key={idx}
              className={`w-[72vw]! transition-all duration-[1200ms] ease-in-out bg-light-grey rounded-[12px] ${idx === activeIndex ? 'animate-[slide-up_500ms_ease-in-out_forwards] duration-500' : ''} mt-[4rem]`}>
              <BusinessNeed key={idx} {...item} />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};

interface BusinessNeedProps {
  title: string;
  text: string;
  img: string;
}

function BusinessNeed({ title, text, img }: BusinessNeedProps) {
  return (
    <div
      className={`flex flex-col-reverse md:grid md: grid-cols-2 md:items-stretch overflow-hidden`}>
      <div className="w-full h-fit md:h-full py-6 px-4 lg:px-8 xl:px-12 1440:px-[3.375rem] grid items-center">
        <div className="grid gap-4">
          <h6 className="font-inter text-sm lg:text-xl leading-5 lg:leading-6 font-semibold -tracking-[2%] text-grey-2">
            {title}
          </h6>
          <h3 className="font-figtree text-xl lg:text-[2.6875rem] leading-[1.187] -tracking-[2%] lg:font-semibold text-dark-3">
            {text}
          </h3>
          <AlphaBtn text="Learn More" />
        </div>
      </div>

      <div className="w-full h-fit md:h-full md:pt-[0.625rem]">
        <div className="w-full relative md:left-7 md:top-[1.625rem]">
          <Image
            src={img}
            alt={title}
            width={520.6}
            height={513.77}
            className="w-full object-cover"
          />
        </div>
      </div>
    </div>
  );
}
