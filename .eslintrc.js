module.exports = {
  extends: ['expo', 'universe/native', 'plugin:@typescript-eslint/recommended', 'prettier'],
  plugins: ['@typescript-eslint', 'react-native', 'prettier', 'simple-import-sort'],
  parser: '@typescript-eslint/parser',
  rules: {
    'import/order': 'off',
    'prettier/prettier': 'error',
    '@typescript-eslint/no-unused-vars': 'error',
    '@typescript-eslint/no-explicit-any': 'error',
    'prefer-const': 'error',
    'camelcase': 'error',
    'react-native/no-inline-styles': 'off',
    'spaced-comment': [
      2,
      'always',
      {
        'markers': ['/'],
      },
    ],
    'quotes': ['error', 'single'],
    'no-duplicate-imports': 'error',
    'simple-import-sort/imports': [
      'error',
      {
        'groups': [
          // 1. Side effect imports at the start. For me this is important because I want to import reset.css and global styles at the top of my main file.
          ['^\\u0000'],
          // 2. `react` and packages: Things that start with a letter (or digit or underscore), or `@` followed by a letter.
          ['^react$', '^next$', '^@?\\w'],
          // 3. Absolute imports and other imports such as Vue-style `@/foo`.
          // Anything not matched in another group. (also relative imports starting with "../")
          ['^@', '^'],
          // 4. relative imports from same folder "./" (I like to have them grouped together)
          ['^\\./'],
          // 6. media imports
          ['^.+\\.(gif|png|svg|jpg)$'],
        ],
      },
    ],
  },
  env: {
    node: true,
    'react-native/react-native': true,
  },
  settings: {
    react: {
      version: 'detect',
    },
  },
};
