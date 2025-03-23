import type { SVGProps } from 'react';
const SvgLayers = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    // width="1em"
    height="1em"
    fill="none"
    viewBox="0 0 44 44"
    {...props}>
    <path
      fill="#9E77ED"
      d="M13.278 20.318c.822-3.068 3.976-6.222 7.044-7.044l19.129-5.127c3.068-.822 4.889.999 4.067 4.067l-5.127 19.13c-.822 3.067-3.976 6.221-7.044 7.044l-19.13 5.126c-3.067.822-4.888-.998-4.066-4.067z"
    />
    <path
      fill="#6941C6"
      d="M5.609 12.65c.822-3.069 3.976-6.223 7.044-7.045L31.783.479c3.067-.823 4.888.998 4.066 4.066l-5.126 19.13c-.823 3.067-3.976 6.221-7.045 7.044L4.55 35.845c-3.068.822-4.889-.998-4.067-4.067z"
    />
  </svg>
);
export default SvgLayers;
