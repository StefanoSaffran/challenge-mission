/* eslint @typescript-eslint/no-var-requires: 0  */
/* eslint import/no-extraneous-dependencies: 0  */
const { override, addBabelPlugin } = require('customize-cra');

const isDevelopment = process.env.NODE_ENV === 'development';

module.exports = override(
  isDevelopment &&
  addBabelPlugin([
    'babel-plugin-root-import',
    {
      rootPathSuffix: 'src',
    },
  ]),
);
