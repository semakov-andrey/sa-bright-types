import { readFileSync, existsSync, writeFileSync } from 'fs';
import { packagePath, projectPath } from './utils.js';

const { version } = JSON.parse(readFileSync(packagePath('./package.json')));

const targetj = projectPath('package.json');

export const installPackageJSON = (path) => {
  if (!existsSync(targetj)) return;

  const targetJSON = JSON.parse(readFileSync(targetj));
  const vars = path ? ` --path ${path}` : '';

  const json = {
    ...targetJSON,
    scripts: {
      ...targetJSON.scripts,
      'install-types': `npx sa-bright-types@${ version }${vars}`,
      'update-types': `npx sa-bright-types${vars}`
    }
  };
  
  writeFileSync(targetj, JSON.stringify(json, null, 2) + '\r\n');
};