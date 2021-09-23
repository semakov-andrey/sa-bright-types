#!/usr/bin/env node

import fs from 'fs';
import copydir from 'copy-dir';
import { program } from 'commander';
import { packagePath, projectPath } from './utils.js';

program.option('-p, --path <path>', 'path', './src/utils');
program.parse(process.argv);
const { path } = program.opts();

const files = packagePath('types');
const target = projectPath(path);

if (!fs.existsSync(target)) fs.mkdirSync(target, { recursive: true });

copydir.sync(files, target);