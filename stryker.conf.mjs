// @ts-check
/** @type {import('@stryker-mutator/api/core').PartialStrykerOptions} */
const config = {
  packageManager: "npm",
  reporters: ["html", "clear-text", "progress"],
  testRunner: "jest",
  coverageAnalysis: "perTest",
  mutate: [
    'app/**/*.js',
    '!app/**/*.{test,spec}.js'
  ],
};
export default config;
