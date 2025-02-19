export default ({ config }) => ({
  ...config,
  name: "Storybook Tutorial Template",
  slug: "storybook-tutorial-template",
  owner: "abidki_786",
  extra: {
    storybookEnabled: process.env.STORYBOOK_ENABLED,
    eas: {
      projectId: "f895726a-7e4a-4163-853a-a7978858b068",
    },
  },
  android: {
    package: "com.lambdatest.yourapp",
    versionCode: 1,
  },
  ios: {
    bundleIdentifier: "com.lambdatest.yourapp",
  },
});
