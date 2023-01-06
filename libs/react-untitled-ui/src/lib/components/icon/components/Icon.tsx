/* eslint-disable @typescript-eslint/restrict-template-expressions */
import React, { useMemo } from 'react';
import { IconProps } from '../icon.d';
import { iconMap } from './iconMap';

export const Icon: React.FC<IconProps> = ({
  name = 'activity',
  color = 'gray-900',
  size = 20,
  className,
  onClick,
}) => {
  const SVGIcon = useMemo(() => iconMap[name], [name]);
  const isSizeANumber = typeof size === 'number';
  console.log(SVGIcon, name, iconMap, iconMap[name]);
  if (!SVGIcon) {
    return <></>;
  }
  return (
    <SVGIcon
      width={size}
      height={size}
      viewBox="0 0 24 24"
      className={
        (!isSizeANumber ? `w-[${size}px] h-[${size}px]` : '') +
        `stroke-${color} fill-none ${className}`
      }
      onClick={onClick}
    />
  );
};
