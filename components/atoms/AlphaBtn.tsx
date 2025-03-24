import { ButtonHTMLAttributes, Ref } from 'react';
import { Button, buttonVariants } from '../ui/button';
import { VariantProps } from 'class-variance-authority';
import Link from 'next/link';

export interface AlphaBtnProps
  extends ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  text?: string;
  href?: string;
}

export const AlphaBtn = (
  { text, href, children, ...props }: AlphaBtnProps,
  ref?: Ref<HTMLButtonElement>
) => {
  const Wrapper = !!href ? Link : 'div';

  return (
    <Wrapper href={href ?? ''} className="">
      <Button ref={ref} {...props}>
        {children ? children : <span className="">{text}</span>}
      </Button>
    </Wrapper>
  );
};
