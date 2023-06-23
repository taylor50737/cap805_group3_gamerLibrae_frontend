module.exports = {
  env: { browser: true, es2020: true },
  extends: [
    'airbnb',
    'airbnb/hooks',
    'eslint:recommended',
    'plugin:react/recommended',
    'plugin:react/jsx-runtime',
    'plugin:react-hooks/recommended',
  ],
  parserOptions: { ecmaVersion: 'latest', sourceType: 'module' },
  settings: { react: { version: '18.2' } },
  plugins: ['react-refresh'],
  rules: {
    'react-refresh/only-export-components': 'warn',
    rules: {
      'react/react-in-jsx-scope': 0,
    },
  },
  'lint-staged': {
    '*.{js,css,ts,tsx,jsx}': ['prettier --write', 'eslint --fix'],
  },
};
