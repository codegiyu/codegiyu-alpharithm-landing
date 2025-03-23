import type { SVGProps } from 'react';
const SvgCatalog = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    // width="1em"
    height="1em"
    fill="none"
    viewBox="0 0 45 44"
    {...props}>
    <path
      fill="#A4BCFD"
      d="M22.75 0C10.6 0 .75 9.85.75 22s9.85 22 22 22c10.901 0 19.95-7.928 21.696-18.333h-.158c-1.628 6.325-7.37 11-14.205 11-8.1 0-14.666-6.567-14.666-14.667S21.983 7.333 30.083 7.333c6.834 0 12.577 4.675 14.205 11h.158C42.7 7.928 33.65 0 22.75 0"
    />
    <path
      fill="#3538CD"
      d="M.75 22c0-12.15 9.85-22 22-22 10.9 0 19.95 7.928 21.696 18.333H29.62c-1.628-6.325-7.37-11-14.204-11C7.317 7.333.75 13.9.75 22M.75 22c0 12.15 9.85 22 22 22 10.9 0 19.95-7.928 21.696-18.333H29.62c-1.628 6.325-7.37 11-14.204 11C7.317 36.667.75 30.1.75 22"
    />
  </svg>
);
export default SvgCatalog;
