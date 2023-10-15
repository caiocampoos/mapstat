import path from 'path';

import dotenv from 'dotenv';

const root = path.join.bind(process.cwd());
dotenv.config({
  path: root('/.env')
});