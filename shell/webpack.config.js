const HtmlWebpackPlugin = require("html-webpack-plugin");
const {
  container: { ModuleFederationPlugin },
} = require("webpack");
const path = require("path");
const deps = require("./package.json").dependencies;

module.exports = {
  entry: "./src/index",
  mode: "development",
  devServer: {
    contentBase: path.join(__dirname, "dist"),
    open: true,
    port: 3000,
    historyApiFallback: true,
    hot: false,
    hotOnly: false,
    headers: {
      "Access-Control-Allow-Origin": "*",
      "Access-Control-Allow-Methods": "GET, POST, PUT, DELETE, PATCH, OPTIONS",
      "Access-Control-Allow-Headers":
        "X-Requested-With, content-type, Authorization",
    },
  },
  resolve: {
    extensions: [".js", ".mjs", ".jsx", ".css"],
    alias: {
      events: "events",
    },
  },
  output: {
    publicPath: "auto",
    chunkFilename: "[id].[contenthash].js",
  },
  module: {
    rules: [
      {
        test: /\.m?js$/,
        type: "javascript/auto",
        resolve: {
          fullySpecified: false,
        },
      },
      {
        test: /\.jsx?$/,
        loader: "babel-loader",
        exclude: /node_modules/,
        options: {
          presets: ["@babel/preset-react"],
        },
      },
    ],
  },
  plugins: [
    new ModuleFederationPlugin({
      name: "shell",
      filename: "remoteEntry.js",
      remotes: {
        shell: "shell@http://localhost:3000/remoteEntry.js",
        dashboard: "dashboard@http://localhost:3001/remoteEntry.js",
        about: "about@http://localhost:3002/remoteEntry.js",
      },
      exposes: {
        "./AppShell": "./src/AppShell",
        "./SharedButton": "./src/SharedButton",
      },
      shared: [
        {
          ...deps,
          react: {
            singleton: true,
            requiredVersion: deps.react,
          },
          grommet: {
            singleton: true,
            requiredVersion: deps.grommet,
          },
          "grommet-icons": {
            singleton: true,
            requiredVersion: deps["grommet-icons"],
          },
          "styled-components": {
            singleton: true,
            requiredVersion: deps["styled-components"],
          },
          "react-dom": {
            singleton: true,
            requiredVersion: deps["react-dom"],
          },
        },
      ],
    }),
    new HtmlWebpackPlugin({
      template: "./public/index.html",
    }),
  ],
};
