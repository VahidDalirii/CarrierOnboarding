module.exports = {
  name: 'e2e',
  displayName: 'e2e',
  preset: 'jest-playwright-preset',
  verbose: true,
  rootDir: '../',
  testMatch: ['<rootDir>/e2e/tests/*.ts'],
  transform: {
    '^.+\\.ts$': 'ts-jest',
  },
};
