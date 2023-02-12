// eslint-disable-next-line @nrwl/nx/enforce-module-boundaries
import {
  colors,
  defaultTheme,
  safelist,
} from '../../libs/react-untitled-ui/src';

export { safelist };
export const theme = {
  extend: {
    ...defaultTheme,
    colors: {
      ...colors,
      black: '#000',
      primary: {
        '25': '#d00',
        '50': '#d00',
        '100': '#d00',
        '200': '#d00',
        '300': '#d00',
        '400': '#d00',
        '500': '#d00',
        '600': '#d00',
        '700': '#d00',
        '800': '#d00',
        '900': '#d00',
        DEFAULT: '#d00',
      },
    },
  },
};
