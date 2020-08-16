module.exports = {
  globals: {
      "ts-jest": {
          tsConfig: "tsconfig.json"
      }
  },
  moduleFileExtensions: [
      "ts",
      "js"
  ],
  transform: {
      "^.+\\.ts$": "ts-jest"
  },
 // testMatch: ['**/__tests__/**/*.js?(x)', '**/?(*.)+(spec|test).js?(x)'],

  testEnvironment: "node",
  testRegex: '/__tests__/.*\\.spec\\.ts$',
  testPathIgnorePatterns: ["/lib/", "/node_modules/"],
  moduleFileExtensions: ["ts", "tsx", "js", "jsx", "json", "node"],
  collectCoverage: true,
};