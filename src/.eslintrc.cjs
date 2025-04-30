module.exports = {
    root: true, // Ensures ESLint picks up the config at the root of the directory
    env: {
      browser: true,
      node: true,
      es2021: true,
    },
    parser: '@babel/eslint-parser', // or '@typescript-eslint/parser' for TypeScript
    parserOptions: {
      requireConfigFile: false, // allows parsing without a Babel config
      ecmaVersion: 12,
      sourceType: 'module',
      ecmaFeatures: {
        jsx: true,
      },
    },
    extends: [
      'eslint:recommended',
      'plugin:react/recommended',
      'plugin:jsx-a11y/recommended',
      'plugin:import/errors',
      'plugin:import/warnings',
      'plugin:prettier/recommended', // Prettier should be last to override formatting rules
    ],
    plugins: ['react', 'jsx-a11y', 'import', 'prettier'],
    rules: {
      'prettier/prettier': ['error'],
      'react/prop-types': 'off', // turn off if using TypeScript or prefer not to use PropTypes
      'react/react-in-jsx-scope': 'off', // not required with React 17+
      'no-console': 'warn',
      'no-unused-vars': ['warn', { argsIgnorePattern: '^_' }],
      'import/order': [
        'error',
        {
          groups: [['builtin', 'external'], 'internal', ['sibling', 'parent'], 'index'],
          'newlines-between': 'always',
        },
      ],
    },
    settings: {
      react: {
        version: 'detect',
      },
    },
  };
  