import clsx from 'clsx';
import { ElementType, forwardRef, ReactElement, ReactNode } from 'react';
import { PolymorphicComponentPropsWithRef, PolymorphicRef } from '@/types/polymorphism';
import classes from './Button.module.css';

type Props = {
  children: ReactNode;
};

type ButtonProps<T extends ElementType> = PolymorphicComponentPropsWithRef<T, Props>;

type ButtonComponent = <T extends ElementType = 'button'>(props: ButtonProps<T>) => ReactElement | null;

const Button: ButtonComponent = forwardRef(function Button<T extends ElementType = 'button'>(
  { as, children, className: propClassName = '', ...props }: ButtonProps<T>,
  ref: PolymorphicRef<T>,
) {
  const Component = as || 'button';

  const className = clsx(classes.Button, propClassName);

  return (
    <Component {...props} className={className} ref={ref}>
      {children}
    </Component>
  );
});

export default Button;
