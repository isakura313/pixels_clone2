module.exports = {
 root: true,
 env: {
  browser: true,
 },
 parserOptions: {
  parser: 'babel-eslint',
  sourceType: 'module',
 },
 extends: [
  'airbnb-base',
  'plugin:vue/recommended',
  'prettier/vue',
  'plugin:prettier/recommended',
 ],
 rules: {
  'vue/no-mutating-props': 'warn',
  'vue/max-attributes-per-line': [
   'error',
   {
    singleline: {
     max: 5,
     allowFirstLine: true,
    },
    multiline: {
     max: 3,
     allowFirstLine: true,
    },
   },
  ],
  'comma-dangle': 'off',
  'class-methods-use-this': 'off',
  'import/no-unresolved': 'off',
  'import/extensions': 'off',
  'import/prefer-default-export': 'off',
  'vue/component-name-in-template-casing': [
   'error',
   'PascalCase',
   {
    ignores: [],
   },
  ],
  'prettier/prettier': ['error', { singleQuote: true, endOfLine: 'auto' }],
 },
};
