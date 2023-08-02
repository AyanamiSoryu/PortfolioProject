// import type { StorybookConfig } from "@storybook/react-webpack5";
// import originWebpackConfig from '../webpack.config.mjs'
//
// const config: StorybookConfig = {
//   stories: ["../src/**/*.mdx", "../src/**/*.stories.@(js|jsx|mjs|ts|tsx)"],
//   webpackFinal: (config) => {
//     // const fileLoaderRule = config.module.rules.find(rule => rule.test && rule.test.test('.Icon'));
//     // fileLoaderRule.exclude = /\.svg$/;
//
//     const newConfig = {
//       ...config,
//       module: {
//         ...config.module,
//         rules: [
//           ...config.module.rules,
//           ...originWebpackConfig.module.rules
//         ]
//       }
//     }
//     console.log(config)
//     return newConfig;
//   },
//   addons: [
//     "@storybook/addon-links",
//     "@storybook/addon-essentials",
//     "@storybook/addon-onboarding",
//     "@storybook/addon-interactions",
//     '@storybook/preset-scss',
//   ],
//   framework: {
//     name: "@storybook/react-webpack5",
//     options: {},
//   },
//   docs: {
//     autodocs: "tag",
//   },
//
// };
// export default config;

import type { StorybookConfig } from "@storybook/react-webpack5";

const config: StorybookConfig = {
  stories: ["../src/**/*.mdx", "../src/**/*.stories.@(js|jsx|mjs|ts|tsx)"],
  webpackFinal: config => {
    // Default rule for images /\.(svg|ico|jpg|jpeg|png|gif|eot|otf|webp|ttf|woff|woff2|cur|ani|pdf)(\?.*)?$/
    // @ts-ignore
    const fileLoaderRule = config.module.rules.find(rule => rule.test && rule.test.test('.svg'));
    // @ts-ignore
    fileLoaderRule.exclude = /\.svg$/;

    config.module.rules.push({
      test: /\.svg$/,
      enforce: 'pre',
      options: {
        replaceAttrValues: {
          black: 'currentColor',
          "#000": 'currentColor',
        }
      },
      loader: '@svgr/webpack',
    });

    return config;
  },
  addons: [
    "@storybook/addon-links",
    "@storybook/addon-essentials",
    "@storybook/addon-onboarding",
    "@storybook/addon-interactions",
    '@storybook/preset-scss',
    "storybook-css-modules",
  ],
  framework: {
    name: "@storybook/react-webpack5",
    options: {},
  },
  docs: {
    autodocs: "tag",
  },

};
export default config;

