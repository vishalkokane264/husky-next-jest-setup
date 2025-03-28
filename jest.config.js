module.exports = {
  collectCoverage: true, // Enable coverage collection
  coverageThreshold: {
    global: {
      lines: 10, // Minimum 10% line coverage required
    },
  },
  coverageDirectory: "coverage", // Output folder for coverage reports
  testEnvironment: "jsdom", // Needed for React testing
  moduleFileExtensions: ["js"], // Recognize JS and JSX files
  testMatch: ["**/__tests__/**/*.[jt]s", "**/?(*.)+(spec|test).[tj]s"], // Test file patterns
};
