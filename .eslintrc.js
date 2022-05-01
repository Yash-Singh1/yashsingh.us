module.exports = {
  extends: [
    'plugin:react/recommended',
    'plugin:react-hooks/recommended',
    'plugin:@next/next/recommended',
    'eslint:recommended',
    'plugin:unicorn/recommended',
    'plugin:eslint-comments/recommended',
    'next/core-web-vitals',
    'prettier',
    'plugin:storybook/recommended',
  ],
  rules: {
    'unicorn/prefer-module': 'off',
    'unicorn/filename-case': 'off',
    'unicorn/prevent-abbreviations': 'off',
    'unicorn/no-array-reduce': 'off',
    'unicorn/no-nested-ternary': 'off',
    'unicorn/prefer-array-find': 'error',
    'unicorn/no-null': 'off',
    'unicorn/no-array-callback-reference': 'off',
    'unicorn/no-new-array': 'off',
    'eslint-comments/no-unused-disable': 'error',
    'no-unused-vars': [
      'error',
      {
        varsIgnorePattern: '^_',
      },
    ],
    'no-empty': ['error', { allowEmptyCatch: true }],
    '@next/next/no-img-element': 'off', // TODO: Enable when AVIF file format has better compatibility
  },
  globals: {
    JSX: 'readonly',
  },
  parserOptions: {
    ecmaVersion: '2022',
  },
};
