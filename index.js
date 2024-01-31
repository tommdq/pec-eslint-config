module.exports = {
  extends: ['standard', 'prettier', 'plugin:@typescript-eslint/eslint-recommended'],
  parser: '@typescript-eslint/parser',
  env: {
    jest: true,
    browser: true,
    es6: true,
    node: true
  },
  rules: {
    '@typescript-eslint/no-explicit-any': 'off',
    '@typescript-eslint/no-unused-vars': ['error'],
    'no-unused-vars': 'off',
    'no-use-before-define': 'off',
    'object-curly-spacing': 'error',
    'no-multiple-empty-lines': 'warn',
    semi: 'error',
    camelcase: 'off'
  },
  settings: {
    react: {
      version: 'detect'
    }
  }
}
