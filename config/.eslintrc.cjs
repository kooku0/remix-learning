/**
 * This is intended to be a basic starting point for linting in your app.
 * It relies on recommended configs out of the box for simplicity, but you can
 * and should modify this configuration to best suit your team's needs.
 */

/** @type {import('eslint').Linter.Config} */
module.exports = {
  root: true,
  env: {
    browser: true,
    commonjs: true,
    es6: true,
  },
  ignorePatterns: [
    'node_modules',
    '.pnp.cjs',
    '.pnp.loader.mjs',
    'public',
    'build',
    'polyfill',
    '**/nshc/module/*',
    'ajv/',
    'pnpm-lock.yaml',
  ],
  extends: [
    'eslint:recommended',
    'airbnb',
    'plugin:@typescript-eslint/recommended',
    'plugin:react/recommended',
    'plugin:react-hooks/recommended',
    'plugin:@tanstack/eslint-plugin-query/recommended',
    'plugin:jest/recommended',
    'plugin:testing-library/react',
    'plugin:jsx-a11y/recommended',
    'plugin:perfectionist/recommended-natural',
    'plugin:prettier/recommended',
    'plugin:storybook/recommended',
  ],
  overrides: [
    // React
    {
      files: ['**/*.{js,jsx,ts,tsx}'],
      settings: {
        formComponents: ['Form'],
        'import/resolver': {
          typescript: {},
        },
        linkComponents: [
          { linkAttribute: 'to', name: 'Link' },
          { linkAttribute: 'to', name: 'NavLink' },
        ],
        react: {
          version: 'detect',
        },
      },
    },

    // Typescript
    {
      files: ['**/*.{ts,tsx}'],
      parser: '@typescript-eslint/parser',
      settings: {
        'import/internal-regex': '^~/',
        'import/resolver': {
          node: {
            extensions: ['.ts', '.tsx'],
          },
          typescript: {
            alwaysTryTypes: true,
          },
        },
      },
    },

    // Node
    {
      env: {
        node: true,
      },
      files: ['.eslintrc.cjs'],
    },
  ],
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 'latest',
    sourceType: 'module',
  },
  plugins: [
    '@typescript-eslint',
    'unused-imports',
    'react',
    'react-hooks',
    '@tanstack/query',
    'prettier',
    'jest',
    'testing-library',
    'perfectionist',
  ],

  rules: {
    '@typescript-eslint/consistent-type-imports': 'error',
    '@typescript-eslint/no-shadow': 'error',
    '@typescript-eslint/no-use-before-define': 'off',
    '@typescript-eslint/no-unused-vars': 'off',
    camelcase: [
      'error',
      {
        allow: [
          // 서버 api 대응
          '_v1',
          '_v2',
        ],
        properties: 'never',
      },
    ],
    'comma-dangle': ['error', 'only-multiline'],
    'import/extensions': [
      'error',
      'ignorePackages',
      {
        js: 'never',
        jsx: 'never',
        ts: 'never',
        tsx: 'never',
      },
    ],

    'import/no-extraneous-dependencies': 'off',

    'import/no-unresolved': 'off',
    'import/order': 'off',
    'import/prefer-default-export': 'off',

    'jest/no-identical-title': 'off',
    'jsx-a11y/anchor-is-valid': [
      'error',
      {
        components: [],
      },
    ],
    'jsx-a11y/click-events-have-key-events': 'off',
    'jsx-a11y/interactive-supports-focus': 'off',
    'jsx-a11y/label-has-associated-control': [
      2,
      {
        labelAttributes: ['htmlFor'],
      },
    ],

    'no-console': 'off',
    'no-return-await': 'off',
    'no-shadow': 'off',
    'no-use-before-define': 'off',
    'perfectionist/sort-array-includes': 'off',

    'perfectionist/sort-enums': 'off',
    'perfectionist/sort-imports': [
      'error',
      {
        'custom-groups': {
          type: {
            react: 'react',
          },
          value: {
            react: ['react', 'react-*'],
            remix: ['@remix-*'],
            'test-helper': ['@test/**'],
          },
        },
        groups: [
          'type',
          'test-helper',
          'react',
          'remix',
          ['builtin', 'external'],
          'internal-type',
          'internal',
          ['parent-type', 'sibling-type', 'index-type'],
          ['parent', 'sibling', 'index'],
          'side-effect',
          'style',
          'object',
          'unknown',
        ],
        'internal-pattern': ['@/**'],
        'newlines-between': 'always',
        order: 'asc',
        'read-tsconfig': false,
        type: 'natural',
      },
    ],

    'perfectionist/sort-interfaces': 'off',
    'perfectionist/sort-jsx-props': [
      'error',
      {
        'always-on-top': ['key', 'ref', 'id', 'name', 'children'],
        callback: 'last',
        order: 'asc',
        shorthand: 'first',
        type: 'natural',
      },
    ],
    'perfectionist/sort-map-elements': 'off',
    'perfectionist/sort-object-types': 'off',

    'perfectionist/sort-objects': 'off',

    'perfectionist/sort-union-types': 'off',
    'prettier/prettier': 'error',
    'react/jsx-filename-extension': [
      'warn',
      {
        extensions: ['.js', '.jsx', '.ts', '.tsx'],
      },
    ],
    'react/prop-types': 'off',
    'react/react-in-jsx-scope': 'off',
    'react/require-default-props': 'off',
    'unused-imports/no-unused-imports': 'error',
    'unused-imports/no-unused-vars': [
      'error',
      {
        args: 'after-used',
        argsIgnorePattern: '^_',
        vars: 'all',
        varsIgnorePattern: '^_',
      },
    ],
  },
};
