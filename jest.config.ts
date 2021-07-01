export default {
  roots: ['<rootDir>/test'],
  bail: true,
  preset: 'ts-jest',
  verbose: true,
  transform: { '^.+\\.ts$': 'ts-jest' },
  testEnvironment: 'node',
  moduleNameMapper: {
    '@test/(.*)$': '<rootDir>/test/$1',
    '@shared/(.*)$': '<rootDir>/src/shared/$1',
    '@domain/(.*)$': '<rootDir>/src/domain/$1'
  },
  moduleFileExtensions: ['ts', 'js'],
  clearMocks: true,
  collectCoverage: true,
  coverageProvider: 'v8',
  coverageDirectory: 'coverage',
  coverageReporters: ['text', 'lcov', 'json-summary'],
  collectCoverageFrom: ['<rootDir>/src/**/*.ts']
}
