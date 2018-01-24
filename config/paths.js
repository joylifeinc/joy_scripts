let path = require('path');
const projectRoot = process.cwd();
const selfRoot = path.resolve(__dirname, '..');

const resolveProjectDirectory = relativePath => 
  path.resolve(projectRoot, relativePath)

const resolveSelfDirectory = relativePath => 
  path.resolve(selfRoot, relativePath)

module.exports = {
  // Helper Functions 
  resolveProjectDirectory,
  resolveSelfDirectory,
  // Project Paths
  projectRoot,
  projectSource: resolveProjectDirectory('src'),
  tsConfig: resolveProjectDirectory('tsconfig.json'),

  // Joy Scripts Paths
  webpackConfig: resolveSelfDirectory('config/webpack.config.js'),
  webpackConfigBase: resolveSelfDirectory('config/webpack.config.base.js'),
  webpackConfigProd: resolveSelfDirectory('config/webpack.config.prod.js'),
  webpackConfigDev: resolveSelfDirectory('config/webpack.config.dev.js'),
  prettierConfig: resolveSelfDirectory('config/.prettierrc'),
  prettierIgnore: resolveSelfDirectory('config/.prettierignore'),
  tsLintConfig: resolveSelfDirectory('config/tslint.json')
}