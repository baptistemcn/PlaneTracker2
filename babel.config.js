/* eslint-disable no-undef */
module.exports = function (api) {
  api.cache(true);
  return {
    presets: ["babel-preset-expo"],
    plugins: [
      ["nativewind/babel"],
      [
        "module-resolver",
        {
          alias: {
            "@assets": "./src/assets",
            "@authentication": "./src/authentication",
            "@components": "./src/components",
            "@i18n": "./src/i18n",
            "@styles": "./src/styles",
            "@theme": "./src/theme",
            "@types": "./src/types",
            "@ui": "./src/ui",
            "@utils": "./src/utils",
          },
          extensions: [".ts", ".tsx"],
        },
      ],
    ],
  };
};
