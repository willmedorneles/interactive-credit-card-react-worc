module.exports = {
  moduleNameMapper: {
    '\\.(css|less|scss)$': '<rootDir>/src/core/mocks/styleMock.js',
    '\\.(svg)$': '/src/core/mocks/styleMock.js',
  },
  collectCoverageFrom: [
    "src/**/*.js",
    "!src/**/*.lazy.js",
    "!src/core/mocks/**",
    "!src/App.js",
    "!src/**/index.js",
    "!src/**/InitialState.js",
    "!src/reportWebVitals.js",
    "!src/setupTests.js",
  ],
};