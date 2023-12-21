/* eslint-disable no-undef */
module.exports = function (api) {
  api.cache(true);
  return {
    presets: ["babel-preset-expo"],
    plugins: [
      ["nativewind/babel"],
      ["transform-inline-environment-variables"],
      [
        "module-resolver",
        {
          alias: {
            "@assets": "./src/assets",
            "@authentication": "./src/authentication",
            "@components": "./src/components",
            "@constants": "./src/constants",
            "@database": "./src/database",
            "@i18n": "./src/i18n",
            "@providers": "./src/providers",
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
