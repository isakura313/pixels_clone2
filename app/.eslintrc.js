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
 ],
};
