const { spawnSync } = require('child_process');
const { webpackConfigProd, projectRoot, projectSource } = require('../config/paths');

const formatArgs = [
  '--config',
  webpackConfigProd
];

const result = spawnSync('node_modules/.bin/webpack', formatArgs, {
  env: process.env,
  cwd: projectRoot,
  stdio: 'inherit'
});

if (result.error) {
  console.error('Command failed with error:\n');
  console.error(result.error);
  process.exit(1);
};