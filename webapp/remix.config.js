/**
 * @type {import('@remix-run/dev').AppConfig}
 */
const opts = {
  cacheDirectory: "./node_modules/.cache/remix",
  ignoredRouteFiles: ["**/.*", "**/*.css", "**/*.test.{js,jsx,ts,tsx}"],
};
if (process.env.ON_NETLIFY !== undefined) {
  console.log("Running on netlify. Setting up server build target.");
  opts.serverBuildTarget = "netlify";
  opts.server = "./server.js";
}
module.exports = opts;
