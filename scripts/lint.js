const { spawnSync } = require('child_process');
const { tsLintConfig, tsConfig, projectSource, projectRoot } = require('../config/paths');

const lintArgs = [
  '--fix',
  '--config',
  tsLintConfig,
  '--project',
  tsConfig
];

const result = spawnSync('node_modules/.bin/tslint', lintArgs, {
  env: process.env,
  cwd: projectRoot,
  stdio: 'inherit'
});

if (result.error) {
  console.error('Command failed with error:\n');
  console.error(result.error);
  process.exit(1);
};