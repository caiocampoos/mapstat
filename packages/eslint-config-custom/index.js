module.exports = {
  extends: [
    'next',
    'turbo', 
    'prettier',
  ],
  rules: {
    '@next/next/no-html-link-for-pages': 'off',
    'quotes': ['error', 'single', { 'avoidEscape': true }],
    'jsx-quotes': [2, 'prefer-single'],
    'no-console': 2,
    'no-return-await': 0,
    'import/no-duplicates': 1,
    'import/order': [
      2,
      {
        alphabetize: {
          order: 'asc',
          caseInsensitive: true,
        },
        groups: ['builtin', 'external', 'internal', 'parent', 'sibling', 'index'],
        'newlines-between': 'always',

        pathGroupsExcludedImportTypes: [],
      },
    ],
    'no-await-in-loop': 0,
    'no-unused-vars': [
      0,
      {
        ignoreRestSiblings: true,
      },
    ],
  },

  parserOptions: {
    babelOptions: {
      presets: [require.resolve('next/babel')],
    },
  },
};
