import React from 'react';
import { Button } from '../../button';
import { ButtonGroupProps } from '../buttonGroup.d';

export const ButtonGroup: React.FC<ButtonGroupProps> = ({
  items,
  color = 'primary',
  size = 'md',
  variant = 'contained',
  endIcon,
  icon,
  className,
  orientation = 'horizontal',
}) => {
  let extraBorder =
    variant !== 'outlined'
      ? `border-r focus:border-r-0 border-${color}-700`
      : '';
  let firstBtnClassName = 'rounded-r-none';
  let midBtnClassName = `rounded-none border-l-0 ${
    variant === 'outlined' ? 'focus:border-l' : ''
  }`;
  let lastBtnClassName = `rounded-l-none border-l-0 ${
    variant === 'outlined' ? 'focus:border-l' : ''
  }`;
  let flexDirection = 'flex-row';
  if (orientation === 'vertical') {
    firstBtnClassName = 'rounded-b-none';
    midBtnClassName = `rounded-none border-t-0 ${
      variant === 'outlined' ? 'focus:border-t' : ''
    }`;
    lastBtnClassName = `rounded-t-none border-t-0 ${
      variant === 'outlined' ? 'focus:border-t' : ''
    }`;
    flexDirection = 'flex-col';
    extraBorder =
      variant !== 'outlined'
        ? `border-b focus:border-b-0 border-${color}-700`
        : '';
  }
  firstBtnClassName = `${firstBtnClassName} ${extraBorder}`;
  midBtnClassName = `${midBtnClassName} ${extraBorder}`;
  return (
    <div className={`inline-flex ${flexDirection} ${className}`} role="group">
      {items.map((props, index, array) => {
        let btnClassName = '';
        if (array.length > 1) {
          if (index === 0) {
            btnClassName = firstBtnClassName;
          } else if (index === array.length - 1) {
            btnClassName = lastBtnClassName;
          } else {
            btnClassName = midBtnClassName;
          }
        }
        return (
          <Button
            {...{
              color,
              size,
              variant,
              icon,
              endIcon,
              ...props,
            }}
            className={`${btnClassName} focus:z-10`}
          />
        );
      })}
    </div>
  );
};
