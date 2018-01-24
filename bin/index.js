#!/usr/bin/env node
const script = process.argv.length > 1 ? process.argv[2] : undefined;

switch(script) {
  case 'format':
    require('../scripts/format');
    break;
  case 'lint':
    require('../scripts/lint');
    break;
  case 'build':
    require('../scripts/build');
    break;
  case 'dev':
    require('../scripts/dev');
    break;
  default: 
    console.error(`${script} cannot be found!`);
}

