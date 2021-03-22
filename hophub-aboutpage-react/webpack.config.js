const { merge } = require("webpack-merge");
const singleSpaDefaults = require("webpack-config-single-spa-react");

module.exports = (webpackConfigEnv, argv) => {
  const defaultConfig = singleSpaDefaults({
    orgName: "HopHub",
    projectName: "hophub-aboutpage-react",
    webpackConfigEnv,
    argv,
  });

  return merge(defaultConfig, {
    // modify the webpack config however you'd like to by adding to this object
    module: {
      rules: [
        {
          test: /\.(jpe?g|png|gif|svg)$/i,
          loader: "file-loader",
          options: {
            name: "/src/img/[name].[ext]",
          },
        },
      ],
    },
  });
};
