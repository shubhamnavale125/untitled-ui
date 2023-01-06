import React from 'react';
import { ColorType } from '../../../types/colors';
import { Icon } from '../../icon';
import { Typography, TypographySizeType } from '../../typography';
import { ButtonProps, shapes, sizes } from '../button.d';

/**
 * @param {ButtonProps} props
 * @returns Button component
 * @description This component is used to render a button
 * @example <Button color="primary" size="medium" onClick={handleClick}>Click Me</Button>
 */

export const Button: React.FC<ButtonProps> = ({
  label,
  variant = 'contained',
  color = 'primary',
  icon,
  endIcon,
  href,
  shape = 'square',
  className = '',
  size = 'md',
  disabled = false,
  online = false,
  ...restProps
}) => {
  const typoClassName = `group-hover:text-${color}-800 group-disabled:text-${color}-300`;
  const iconClassName = `group-hover:stroke-${color}-800 group-disabled:stroke-${color}-300`;
  const variants = {
    contained: {
      buttonClass: `bg-${color}-600 hover:bg-${color}-700 focus:ring-4 ring-${color}-100 disabled:bg-${color}-200`,
      typoClass: ``,
      iconClass: ``,
      typoColor: `white` as ColorType,
    },
    outlined: {
      buttonClass: `bg-white border border-${color}-300 hover:bg-${color}-50 focus:ring-4 ring-${color}-100 disabled:border-${color}-200`,
      typoClass: typoClassName,
      iconClass: iconClassName,
      typoColor: `${color}-700` as ColorType,
    },
    light: {
      buttonClass: `bg-${color}-50 hover:bg-${color}-100 focus:ring-4 ring-${color}-100 disabled:bg-${color}-25`,
      typoClass: typoClassName,
      iconClass: iconClassName,
      typoColor: `${color}-700` as ColorType,
    },
    text: {
      buttonClass: `hover:bg-${color}-50`,
      typoClass: typoClassName,
      iconClass: iconClassName,
      typoColor: `${color}-700` as ColorType,
    },
    link: {
      buttonClass: `cursor-pointer`,
      typoClass: typoClassName,
      iconClass: iconClassName,
      typoColor: `${color}-700` as ColorType,
    },
  };
  const { buttonClass, typoClass, typoColor, iconClass } = variants[variant];
  const classes = `group disabled:cursor-not-allowed ${buttonClass} ${shapes[shape]} ${className}`;

  const typoSize: Record<string, string> = {
    sm: 'sm',
    md: 'sm',
    lg: 'md',
    xl: 'md',
    '2xl': 'lg',
  };
  const statusDotColor = {
    contained: 'white',
    outlined: 'success-500',
    light: 'success-500',
    text: 'success-500',
    link: 'success-500',
  };

  const iconSize = size === '2xl' ? 24 : 20;

  const children = (
    <div className={`flex flex-row items-center ${sizes[size]}`}>
      {icon && (
        <Icon
          name={icon}
          color={typoColor}
          size={iconSize}
          className={iconClass}
        />
      )}
      {online && (
        <div
          className={`w-1.5 h-1.5 bg-${
            disabled ? `${color}-300` : statusDotColor[variant]
          } rounded-full`}
        />
      )}
      <Typography
        color={typoColor}
        className={typoClass}
        size={typoSize[size] as TypographySizeType}
      >
        {label}
      </Typography>
      {endIcon && (
        <Icon
          name={endIcon}
          color={typoColor}
          size={iconSize}
          className={iconClass}
        />
      )}
    </div>
  );

  return variant === 'link' ? (
    <a className={classes} href={href} {...restProps}>
      {children}
    </a>
  ) : (
    <button className={classes} {...restProps} disabled={disabled}>
      {children}
    </button>
  );
};
