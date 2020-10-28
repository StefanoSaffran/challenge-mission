/* eslint @typescript-eslint/no-var-requires: 0  */
/* eslint import/no-extraneous-dependencies: 0  */
const { override, addBabelPlugin } = require('customize-cra');

module.exports = override(
  addBabelPlugin([
    'babel-plugin-root-import',
    {
      rootPathSuffix: 'src',
    },
  ]),
);
