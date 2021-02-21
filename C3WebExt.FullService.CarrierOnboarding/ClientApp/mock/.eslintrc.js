module.exports = {
  root: true,
  env: {
    browser: true,
    node: true,
  },
  extends: ['eslint:recommended', 'plugin:prettier/recommended'],
  parserOptions: {
    ecmaVersion: 2020, // Allows for the parsing of modern ECMAScript features
    sourceType: 'module', // Allows for the use of imports
  },
  plugins: ['import', 'prettier'],
  rules: {
    'import/no-unresolved': 'error',
    'import/order': 'error',
    'no-console': 'off',
    'prettier/prettier': 'error',
  },
};
