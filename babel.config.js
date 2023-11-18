/* eslint-disable no-undef */
module.exports = function (api) {
  api.cache(true);
  return {
    presets: ["babel-preset-expo"],
    plugins: [
      [
        "module-resolver",
        {
          alias: {
            "@i18n": "./src/i18n",
          },
          extensions: [".ts", ".tsx"],
        },
      ],
    ],
  };
};
