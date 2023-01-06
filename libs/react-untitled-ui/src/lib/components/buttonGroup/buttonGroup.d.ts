import { ButtonProps } from '../button/button';

export interface ButtonGroupProps
  extends Pick<
    ButtonProps,
    'color' | 'size' | 'variant' | 'icon' | 'endIcon' | 'label'
  > {
  items: Array<Omit<ButtonProps, 'color' | 'size' | 'variant' | 'shape'>>;
  className?: string;
  orientation?: 'horizontal' | 'vertical';
}
