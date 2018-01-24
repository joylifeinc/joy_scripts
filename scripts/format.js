const { spawnSync } = require('child_process');
const { prettierConfig, prettierIgnore, projectRoot, projectSource } = require('../config/paths');

const formatArgs = [
  '--write',
  '--config', 
  prettierConfig,
  '--ignore-path',
  prettierIgnore,
  `${projectSource}/**/*.{tsx,jsx,js,json}`
];

const result = spawnSync('node_modules/.bin/prettier', formatArgs, {
  env: process.env,
  cwd: projectRoot,
  stdio: 'inherit'
});

if (result.error) {
  console.error('Command failed with error:\n');
  console.error(result.error);
  process.exit(1);
};