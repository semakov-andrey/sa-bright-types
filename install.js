#!/usr/bin/env node

import fs from 'fs';
import copydir from 'copy-dir';
import { program } from 'commander';
import { installPackageJSON } from './install.package.js';
import { packagePath, projectPath } from './utils.js';

const DEFAULT_PATH = './src/utils';
program.option('-p, --path <path>', 'path');
program.parse(process.argv);
const { path } = program.opts();

const files = packagePath('types');
const target = projectPath(path ?? DEFAULT_PATH);

if (!fs.existsSync(target)) fs.mkdirSync(target, { recursive: true });
copydir.sync(files, target);

installPackageJSON(path);