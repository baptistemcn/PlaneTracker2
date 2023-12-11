module.exports = {
  preset: "jest-expo",
  transformIgnorePatterns: [
      "node_modules/(?!((jest-)?react-native|@react-native(-community)?)|expo(nent)?|@expo(nent)?/.*|@expo-google-fonts/.*|react-navigation|@react-navigation/.*|@unimodules/.*|unimodules|sentry-expo|native-base|react-native-svg|@rneui)",
  ],
  moduleNameMapper: {
    "uuid": require.resolve('uuid'),
  },
  coveragePathIgnorePatterns: ["index.ts", "App.tsx"],
  setupFilesAfterEnv: ["@testing-library/jest-native/extend-expect"],
};