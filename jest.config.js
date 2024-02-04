module.exports = {
    testEnvironment: 'jest-environment-jsdom',
    moduleNameMapper: {
        "\\.(css|scss)$": "identity-obj-proxy"
      },
    setupFilesAfterEnv: ['<rootDir>/.jest/setup-tests.js'],
    "transformIgnorePatterns": [
        "/node_modules/(?!(react-toastify)/)"
    ],
    verbose: true,
}