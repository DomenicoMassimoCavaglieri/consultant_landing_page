// babel.config.js
// module.exports = {
//   presets: [['@babel/preset-env', {targets: {node: 'current'}}]],
// };

//babel.config.json
// {
//   "presets": [
//     "@babel/preset-env"
//   ]
// }

// module.exports = {
//   presets: [
//     [
//       "@babel/preset-react",
//       {
//         development: process.env.BABEL_ENV === "development",
//       },
//     ],
//   ],
// };

// module.exports = {
//     presets: [['@babel/preset-react', {targets: {node: 'current'}}]],
//   };

// module.exports = {
//   presets: ['@babel/preset-env', '@babel/preset-react'],
//   "plugins": ["@babel/transform-runtime", "@babel/plugin-syntax-jsx"], 

// };

module.exports = {
  presets: ['@babel/preset-env', '@babel/preset-react'],
  "plugins": [["@babel/transform-runtime"]]
};
