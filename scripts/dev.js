const { spawnSync } = require('child_process');
const { webpackConfigDev, projectRoot, projectSource } = require('../config/paths');

const formatArgs = [
  '--config',
  webpackConfigDev
];

const result = spawnSync('node_modules/.bin/webpack-dev-server', formatArgs, {
  env: process.env,
  cwd: projectRoot,
  stdio: 'inherit'
});

if (result.error) {
  console.error('Command failed with error:\n');
  console.error(result.error);
  process.exit(1);
};