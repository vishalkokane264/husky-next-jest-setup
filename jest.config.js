module.exports = {
  collectCoverage: true, // Enables coverage collection
  collectCoverageFrom: ["src/**/*.{js,jsx,ts,tsx}"], // Specifies files to collect coverage from
  coverageThreshold: {
    global: {
      lines: 50, // Minimum 50% line coverage required
      statements: 50,
      branches: 50,
      functions: 50,
    },
  },
  coverageDirectory: "coverage", // Output folder for coverage reports
  coverageReporters: ["json", "text", "lcov"], // Generates coverage reports
  testEnvironment: "jsdom", // Required for testing React components
  moduleFileExtensions: ["js", "ts"],
};
