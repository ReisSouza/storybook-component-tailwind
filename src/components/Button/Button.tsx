import clsx from 'clsx';
import { CSSProperties, ElementType, forwardRef, ReactElement } from 'react';

import { PolymorphicComponentPropsWithRef, PolymorphicRef } from '@/types/polymorphism';
import S from './Button.module.css';

type Size = 'small' | 'medium' | 'large';
type Variant = 'primary' | 'secondary' | 'rounded' | 'revert';
type Props = {
  size?: Size;
  label: string;
  onPress?: () => void;
  icon?: JSX.Element;
  hasIconLeft?: boolean;
  hasIconRight?: boolean;
  backgroundColor?: CSSProperties['backgroundColor'];
  variant?: Variant;
};

type ButtonProps<T extends ElementType> = PolymorphicComponentPropsWithRef<T, Props>;

type ButtonComponent = <T extends ElementType = 'button'>(props: ButtonProps<T>) => ReactElement | null;

const Button: ButtonComponent = forwardRef(function Button<T extends ElementType = 'button'>(
  {
    as,
    label,
    icon,
    onPress,
    hasIconLeft,
    hasIconRight,
    backgroundColor,
    size = 'medium',
    variant = 'primary',
    className: propClassName = '',
    ...props
  }: ButtonProps<T>,
  ref: PolymorphicRef<T>,
) {
  const Component = as || 'button';

  const asSize = {
    small: S.Small,
    medium: S.Medium,
    large: S.Large,
  };

  const asVariant = {
    primary: S.Primary,
    secondary: S.Secondary,
    rounded: S.Rounded,
    revert: S.Revert,
  };

  const className = clsx([S.Button, propClassName, asSize[size], asVariant[variant]]);

  return (
    <Component {...props} className={className} ref={ref} onClick={() => onPress()} style={{ backgroundColor }}>
      {hasIconLeft && icon} {label} {hasIconRight && icon}
    </Component>
  );
});

export default Button;
