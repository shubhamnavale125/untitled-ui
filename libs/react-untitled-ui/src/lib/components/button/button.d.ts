import { PrimaryColorType } from '../../types/colors.d';

/**
 * @params EndIcon - The icon to be displayed at the end of the button
 * @params StartIcon - The icon to be displayed at the start of the button
 * @params children - The content of the button
 * @params className - Override or extend the styles applied to the component
 * @params color - Color of the button. It supports those theme colors that make sense for this component.
 * @params fullWidth - If true, the button will take up the full width of its container.
 * @params href - The URL to link to when the button is clicked.
 * @params shape - Shape of the button. It supports those theme shapes that make sense for this component.
 * @params size - Size of the button. It supports those theme sizes that make sense for this component.
 * @params variant - Variant of the button. It supports those theme variants that make sense for this component.
 */
export interface ButtonProps
  extends HTMLAttributes<HTMLButtonElement | HTMLAnchorElement> {
  endIcon?: IconType;
  icon?: IconType;
  label: string;
  className?: string;
  color?: Exclude<PrimaryColorType, 'white' | 'black'>;
  href?: string;
  shape?: 'rounded' | 'square';
  size?: 'sm' | 'md' | 'lg' | 'xl' | '2xl';
  variant?: 'contained' | 'outlined' | 'light' | 'text' | 'link';
  disabled?: boolean;
  online?: boolean;
}
export const sizes: Record<string, string> = {
  sm: 'px-[7px] py-1 gap-2',
  md: 'px-2 py-[5px] gap-2',
  lg: 'px-[9px] py-[5px] gap-2',
  xl: 'px-2.5 py-1.5 gap-2',
  '2xl': 'px-3.5 py-2 gap-3',
};

export const shapes = {
  rounded: 'rounded-full',
  square: 'square',
  default: 'rounded',
};
