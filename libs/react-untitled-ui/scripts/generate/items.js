const items = [
  {
    option: 'Component',
    defaultCase: '(camelCase)',
    entry: {
      folderPath: './scripts/generate/templates/component',
    },
    stringReplacers: [{ question: 'Enter component name', slot: '__component__' }],
    dynamicReplacers: [{ slot: '__test__', slotValue: 'test' }],
    output: {
      path: './src/components/__component__(camelCase)',
      overwrite: false,
    },
  },
  {
    option: 'Component Storybook Story',
    defaultCase: '(camelCase)',
    entry: {
      folderPath: './scripts/generate/templates/storybook',
    },
    stringReplacers: [{ question: 'Enter component name', slot: '__component__' }],
    output: {
      path: './src/storybook/__component__(camelCase)',
      overwrite: false,
    },
  },
];

exports.items = items;
