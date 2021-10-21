module.exports = {
  preset: 'jest-playwright-preset',
  testRegex: './*\\.spec\\.js$',
  testResultsProcessor: "jest-bamboo-reporter",
  setupFilesAfterEnv: ["expect-playwright"]
}