import React from 'react';
import { PrimaryColorType } from '../../../types/colors.d';
import { Typography } from '../../typography';
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
  size = 'md',
  icon,
  endIcon,
  href,
  shape = 'square',
  className = '',
  disabled = false,
  online = false,
  ...restProps
}) => {
  const variants = {
    contained: {
      button: `bg-${color}-600 hover:bg-${color}-700 focus:ring-4 ring-${color}-100 disabled:bg-${color}-200`,
      typo: ``,
      icon: ``,
    },
    outlined: {
      button: `bg-white border border-${color}-300 hover:bg-${color}-50 focus:ring-4 ring-${color}-100 disabled:border-${color}-200`,
      typo: ``,
      icon: ``,
    },
    light: {
      button: `bg-${color}-50 hover:bg-${color}-100 focus:ring-4 ring-${color}-100 disabled:bg-${color}-25`,
      typo: ``,
      icon: ``,
    },
    text: {
      button: `hover:bg-${color}-50`,
      typo: ``,
      icon: ``,
    },
    link: {
      button: `cursor-pointer`,
      typo: ``,
      icon: ``,
    },
  };
  const classes = `group disabled:cursor-not-allowed ${variants[variant].button} ${shapes[shape]} ${className}`;

  const typoClassName =
    variant !== 'contained' ? `group-hover:text-${color}-800 group-disabled:text-${color}-300` : '';
  const iconClassName =
    variant !== 'contained'
      ? `group-hover:stroke-${color}-800 group-disabled:stroke-${color}-300`
      : '';
  const typoColor = variant === 'contained' ? 'white' : (`${color}-700` as PrimaryColorType);
  const typoSize = size === '2xl' ? 'lg' : size === 'xl' || size === 'lg' ? 'md' : 'sm';
  const iconSize = size === '2xl' ? 24 : 20;

  const statusDotColor =
    variant === 'contained' ? 'white' : disabled ? `${color}-300` : 'success-500';

  const children = (
    <div className={`flex flex-row items-center ${sizes[size]}`}>
      {online && <div className={`w-1.5 h-1.5 bg-${statusDotColor} rounded-full`} />}
      <Typography color={typoColor} className={typoClassName} size={typoSize}>
        {label}
      </Typography>
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
