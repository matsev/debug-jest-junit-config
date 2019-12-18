module.exports = {
  testMatch: [
    '**/*.spec.js',
  ],
  reporters: [
    'default',
    [ 'jest-junit', {
      outputDirectory: 'test_reports',
      outputName: 'jest-junit.xml',
    } ]
  ]
};
