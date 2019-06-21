module.exports = {
  branches: 100,
  'check-coverage': true,
  extends: '@istanbuljs/nyc-config-typescript',
  functions: 100,
  include: ['src/**'],
  lines: 100,
  reporter: ['html', 'lcov']
}
