import { basename, resolve, dirname } from 'path';
import { fileURLToPath } from 'url';

const __dirname = dirname(fileURLToPath(import.meta.url));
const projectFolder = basename(resolve(__dirname, '../')) !== 'node_modules' ? `./tmp/` : './';

export const packagePath = (folder) => resolve(__dirname, folder);

export const projectPath = (folder) => resolve(projectFolder, folder);
