import type { ConfigAPI, TransformOptions } from '@babel/core';

const config = (api: ConfigAPI): TransformOptions => {
  api.cache(true);

  const plugins: TransformOptions['plugins'] = [];

  return {
    presets: [['babel-preset-expo', { jsxImportSource: 'nativewind' }], 'nativewind/babel'],
    plugins,
  };
};

export default config;
