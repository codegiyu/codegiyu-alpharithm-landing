import type { SVGProps } from 'react';
const SvgLogo = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    fill="none"
    viewBox="0 0 48 48"
    {...props}>
    <g clipPath="url(#logo_svg__a)">
      <rect width={48} height={48} fill="currentColor" rx={7.385} />
      <rect width={48} height={48} fill="url(#logo_svg__b)" rx={7.385} />
      <path
        fill="#D0D5DD"
        fillRule="evenodd"
        d="M24 3.058C12.434 3.058 3.058 12.434 3.058 24S12.434 44.942 24 44.942 44.942 35.566 44.942 24 35.566 3.058 24 3.058M2.942 24C2.942 12.37 12.37 2.942 24 2.942S45.058 12.37 45.058 24 35.63 45.058 24 45.058 2.942 35.63 2.942 24"
        clipRule="evenodd"
      />
      <path
        fill="#D0D5DD"
        fillRule="evenodd"
        d="M24 18.117a5.884 5.884 0 1 0 0 11.767 5.884 5.884 0 0 0 0-11.767M18 24a6 6 0 1 1 12 0 6 6 0 0 1-12 0"
        clipRule="evenodd"
      />
      <path
        fill="#D0D5DD"
        fillRule="evenodd"
        d="M24 19.98a4.02 4.02 0 1 0 0 8.039 4.02 4.02 0 0 0 0-8.039M19.864 24a4.136 4.136 0 1 1 8.272 0 4.136 4.136 0 0 1-8.272 0"
        clipRule="evenodd"
      />
      <path fill="#D0D5DD" d="M23.942 0h.116v48h-.116z" />
      <path fill="#D0D5DD" d="M48 23.941v.117H0v-.117z" />
      <path
        fill="#D0D5DD"
        d="M39.903 0h.116v48h-.116zM15.961 0h.117v48h-.117zM31.922 0h.117v48h-.117zM7.98 0h.117v48h-.116z"
      />
      <path
        fill="#D0D5DD"
        d="M48 39.902v.117H0v-.117zM48 15.96v.117H0v-.116zM48 31.922v.116H0v-.116zM48 7.98v.117H0V7.98z"
      />
      <g filter="url(#logo_svg__c)">
        <circle cx={24} cy={24} r={12} fill="#1774FD" />
      </g>
      <path
        fill="currentColor"
        fillOpacity={0.2}
        d="M0 24h48c0 13.255-10.745 24-24 24S0 37.255 0 24"
      />
    </g>
    <rect
      width={46.339}
      height={46.339}
      x={0.831}
      y={0.831}
      stroke="#D0D5DD"
      strokeWidth={1.662}
      rx={6.554}
    />
    <defs>
      <linearGradient
        id="logo_svg__b"
        x1={24}
        x2={24}
        y1={0}
        y2={48}
        gradientUnits="userSpaceOnUse">
        <stop stopColor="currentColor" />
        <stop offset={1} stopColor="#D0D5DD" />
      </linearGradient>
      <clipPath id="logo_svg__a">
        <rect width={48} height={48} fill="currentColor" rx={7.385} />
      </clipPath>
      <filter
        id="logo_svg__c"
        width={57.231}
        height={57.231}
        x={-4.615}
        y={0.923}
        colorInterpolationFilters="sRGB"
        filterUnits="userSpaceOnUse">
        <feFlood floodOpacity={0} result="BackgroundImageFix" />
        <feColorMatrix
          in="SourceAlpha"
          result="hardAlpha"
          values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
        />
        <feOffset dy={5.538} />
        <feGaussianBlur stdDeviation={5.538} />
        <feColorMatrix values="0 0 0 0 0.0627451 0 0 0 0 0.0941176 0 0 0 0 0.156863 0 0 0 0.06 0" />
        <feBlend in2="BackgroundImageFix" result="effect1_dropShadow_1_589" />
        <feColorMatrix
          in="SourceAlpha"
          result="hardAlpha"
          values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
        />
        <feOffset dy={5.538} />
        <feGaussianBlur stdDeviation={8.308} />
        <feColorMatrix values="0 0 0 0 0.0627451 0 0 0 0 0.0941176 0 0 0 0 0.156863 0 0 0 0.1 0" />
        <feBlend in2="effect1_dropShadow_1_589" result="effect2_dropShadow_1_589" />
        <feBlend in="SourceGraphic" in2="effect2_dropShadow_1_589" result="shape" />
      </filter>
    </defs>
  </svg>
);
export default SvgLogo;
