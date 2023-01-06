const { createGlobPatternsForDependencies } = require('@nrwl/react/tailwind');
const { join } = require('path');
const theme = require('./theme.json');
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    join(
      __dirname,
      '{src,pages,components}/**/*!(*.stories|*.spec).{ts,tsx,html}'
    ),
    ...createGlobPatternsForDependencies(__dirname),
  ],
  purge: [
    join(
      __dirname,
      '{src,pages,components}/**/*!(*.stories|*.spec).{ts,tsx,html}'
    ),
    ...createGlobPatternsForDependencies(__dirname),
  ],

  theme: {
    extend: {
      colors: theme.colors,
      fontFamily: {
        Inter: ['Inter', 'sans-serif'],
      },
    },
  },

  safelist: [
    {
      pattern:
        /(bg|border|text|stroke)-gray-(blue|cool|modern|neutral|iron|true|warm)-(25|50|100|200|300|400|500|600|700|800|900)/,
      variants: ['lg', 'hover', 'focus', 'lg:hover', 'checked', 'peer-checked'],
    },
    {
      pattern:
        /(bg|border|text|stroke)-gray-(blue|cool|modern|neutral|iron|true|warm)/,
      variants: ['lg', 'hover', 'focus', 'lg:hover', 'checked', 'peer-checked'],
    },
    {
      pattern:
        /(bg|border|text|stroke)-(white|black|gray|primary|error|warning|success)/,
      variants: ['lg', 'hover', 'focus', 'lg:hover', 'checked', 'peer-checked'],
    },
    {
      pattern:
        /(bg|border|text|stroke)-(white|black|gray|primary|error|warning|success)-(25|50|100|200|300|400|500|600|700|800|900)/,
      variants: ['lg', 'hover', 'focus', 'lg:hover', 'checked', 'peer-checked'],
    },
    {
      pattern:
        /(bg|border|text|stroke)-(moss|green|teal|cyan|blue|indigo|violet|purple|fuchsia|pink|rose|orange|yellow)/,
      variants: ['lg', 'hover', 'focus', 'lg:hover', 'checked', 'peer-checked'],
    },
    {
      pattern:
        /(bg|border|text|stroke)-(moss|green|teal|cyan|blue|indigo|violet|purple|fuchsia|pink|rose|orange|yellow)-(25|50|100|200|300|400|500|600|700|800|900)/,
      variants: ['lg', 'hover', 'focus', 'lg:hover', 'checked', 'peer-checked'],
    },
    {
      pattern: /(bg|border|text|stroke)-(green|blue)-light/,
      variants: ['lg', 'hover', 'focus', 'lg:hover', 'checked', 'peer-checked'],
    },
    {
      pattern:
        /(bg|border|text|stroke)-(green|blue)-light-(25|50|100|200|300|400|500|600|700|800|900)/,
      variants: ['lg', 'hover', 'focus', 'lg:hover', 'checked', 'peer-checked'],
    },
    {
      pattern: /(bg|border|text|stroke)-(blue|orange)-dark/,
      variants: ['lg', 'hover', 'focus', 'lg:hover', 'checked', 'peer-checked'],
    },
    {
      pattern:
        /(bg|border|text|stroke)-(blue|orange)-dark-(25|50|100|200|300|400|500|600|700|800|900)/,
      variants: ['lg', 'hover', 'focus', 'lg:hover', 'checked', 'peer-checked'],
    },
    {
      pattern: /text-(xs|sm|base|lg|xl|2xl|3xl|4xl|5xl|6xl|7xl|8xl|9xl)/,
    },
    {
      pattern:
        /font-(thin|extralight|light|regular|medium|semibold|bold|extrabold|black)/,
    },
  ],
  storybook: {
    executor: '@nrwl/storybook:storybook',
    options: {
      styles: ['libs/shared/ui-components/.storybook/styles.css'],
      uiFramework: '@storybook/angular',
      port: 4400,
      config: {
        configFolder: 'libs/shared/ui-components/.storybook',
      },
      projectBuildConfig: 'shared-ui-components:build-storybook',
    },
    configurations: {
      ci: {
        quiet: true,
      },
    },
  },
  plugins: [require('@tailwindcss/forms')],
};
