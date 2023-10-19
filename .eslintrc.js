module.exports = {
  env: {
    browser: true,
    node: true,
    jquery: true,
  },
  globals: {
    NodeJS: true,
    JQuery: true,
    $: 'readonly',
  },
  extends: ['eslint:recommended', 'airbnb'],
  plugins: ['pug'],
  rules: {
    'no-underscore-dangle': 0,
    'import/no-unresolved': 'off',
    'import/extensions': 0,
  },
};
