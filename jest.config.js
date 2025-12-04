export default {
  testEnvironment: 'jsdom',
  setupFilesAfterEnv: ['<rootDir>/src/setupTests.js'],
  collectCoverage: true,
  collectCoverageFrom: [
    'src/**/*.{js,jsx}',
    '!src/main.jsx',
    '!src/setupTests.js',
  ],
  coverageReporters: ['json-summary', 'text', 'lcov', 'junit'],
  coverageThreshold: {
    global: {
      statements: 50,
    },
  },
  reporters: ['default', ['jest-junit', { outputFile: 'junit.xml' }]],
  transform: {
    '^.+\\.(js|jsx)$': 'babel-jest',
  },
  moduleFileExtensions: ['js', 'jsx', 'json'],
  collectCoverageFrom: ['src/**/*.{js,jsx}'],
  coveragePathIgnorePatterns: ['src/main.jsx', 'src/setupTests.js'],
  coverageProvider: 'babel',
  all: true, // <- collect coverage for all files, even untested
};
