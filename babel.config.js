module.exports = {
  presets: [
    [
      "@babel/preset-env",
      {
        "targets": {
          "node": "current"
        }
      }
    ],
    "@babel/preset-typescript" // Menambahkan preset TypeScript untuk mengatasi penggunaan TypeScript dalam Vue 3
  ],
  plugins: [
    "@babel/plugin-transform-runtime", // Menambahkan plugin transform-runtime untuk mengatasi penggunaan async/await
    "@babel/plugin-transform-typescript", // Menambahkan plugin transform-typescript untuk mengatasi penggunaan TypeScript dalam Vue 3
    [
      "@babel/plugin-transform-react-jsx",
      {
        "runtime": "automatic" // Mengatur runtime ke 'automatic' untuk mendukung JSX yang digunakan dalam Vue 3
      }
    ],
    "@babel/plugin-proposal-class-properties",
    "@babel/plugin-proposal-private-methods"
  ]
};
