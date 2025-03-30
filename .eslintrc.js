module.exports = {
  extends: ['universe/native', 'plugin:@typescript-eslint/recommended', 'prettier'],
  plugins: ['@typescript-eslint', 'react-native', 'prettier', 'simple-import-sort'],
  parser: '@typescript-eslint/parser',
  rules: {
    'prettier/prettier': 'error',
    'react-native/no-inline-styles': 'off',
    '@typescript-eslint/no-unused-vars': 'warn',
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
