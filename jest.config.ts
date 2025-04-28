export default {
  clearMocks: true,
  coverageProvider: "v8",
  testEnvironment: "jest-environment-node",
  transform: {
    "^.+\\.(t|j)sx?$": ["@swc/jest"],
  },
};
