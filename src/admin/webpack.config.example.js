// "use strict";
// const path = require("path");

// /* eslint-disable no-unused-vars */
// // module.exports = (config, webpack) => {
// // Note: we provide webpack above so you should not `require` it
// // Perform customizations to webpack config
// // Important: return the modified config
// // return config;
// // };

// module.exports = {
//   // other configuration options...
//   resolve: {
//     fallback: {
//       crypto: false,
//     },
//   },
//   // other configuration options...
// };
const path = require("path");

module.exports = {
  // Define your entry point
  entry: "./src/index.js", // Adjust this according to your project structure

  // Define the output options
  output: {
    filename: "bundle.js",
    path: path.resolve(__dirname, "dist"),
  },

  // Adding the resolve fallback configuration
  resolve: {
    fallback: {
      crypto: require.resolve("crypto-browserify"),
    },
  },

  // Define module rules
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
          options: {
            presets: ["@babel/preset-env", "@babel/preset-react"],
          },
        },
      },
      // Add any other loaders as needed
    ],
  },

  // Define any other configurations if necessary
};
