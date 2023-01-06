import React from 'react';
import { Icon } from '../../icon';
import { Typography } from '../../typography';
import {
  activeClass,
  AvatarProps,
  iconSize,
  shapes,
  sizes,
  statusColors,
} from '../avatar.d';

export const Avatar: React.FC<AvatarProps> = ({
  src,
  size = 'md',
  shape = 'circle',
  onClick,
  status = 'away',
  type = 'image',
  name = '',
  className,
  ...restProps
}) => {
  const shortName = name
    .split(/\s+/)
    .map((i) => i.slice(0, 1).toUpperCase())
    .slice(0, 2)
    .join('');
  return (
    <div
      className={`relative inline-block ${onClick ? 'cursor-pointer' : ''} ${
        sizes[size]
      } ${shapes[shape]} ${className}`}
      onClick={onClick}
    >
      <div
        className={`flex items-center justify-center w-full h-full ${shapes[shape]} overflow-hidden bg-gray-50 hover:ring hover:ring-gray-100`}
      >
        {type === 'image' && (
          <img
            {...restProps}
            className={`w-full h-full`}
            src={src}
            alt={name}
          />
        )}
        {type === 'placeholder' && (
          <Icon name="user-01" color="gray-600" size={iconSize[size]} />
        )}
        {type === 'name' && (
          <Typography
            color="gray-600"
            type={size === '2xl' ? 'display' : 'text'}
            size={size === '2xl' ? 'xs' : size}
          >
            {shortName}
          </Typography>
        )}
      </div>
      {status !== 'away' && (
        <span
          className={`absolute bottom-0 right-0 block rounded-full ring-2 ring-white ${
            shape === 'square'
              ? 'translate-y-1/2 translate-x-1/2 transform'
              : `${statusColors[status]} ${activeClass[size]}`
          }
          `}
        >
          {shape === 'square' && (
            <span
              className={`block rounded-full ${statusColors[status]} ${activeClass[size]}`}
            />
          )}
        </span>
      )}
    </div>
  );
};
