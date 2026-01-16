module.exports = (api) => {
  api.cache(true);
  return {
    presets: [["babel-preset-expo", { jsxRuntime: "automatic" }]],
    plugins: [
      [
        "@tamagui/babel-plugin",
        {
          components: ["tamagui"],
          config: "./tamagui.config.ts",
          logTimings: true,
          disableExtraction: process.env.NODE_ENV === "development",
        },
      ],

      [
        "react-native-unistyles/plugin",
        {
          /**
           * pass root folder of your application all files under this folder will be processed by the Babel plugin
           * if you need to include more folders, or customize discovery process check available babel options
           */
          root: "./app/",
        },
      ],

      // NOTE: this is only necessary if you are using reanimated for animations
      "react-native-reanimated/plugin",
    ],
  };
};
