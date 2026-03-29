import {existsSync, readFileSync} from 'node:fs'
import { join } from 'node:path'

const CACHE = new Map<string, string>();

function loadSchema(name: string) {
  const path = join(process.cwd(), `graphql/${name}.graphql`);

  if (!existsSync(path)) {
    throw new Error(`Schema file not found: ${path}`);
  }

  return readFileSync(path, 'utf-8');
}

function getSchema(name: string) {
  if (CACHE.get(name)) {
    return CACHE.get(name) as string;
  }
  else {
    const schema = loadSchema(name);
    CACHE.set(name, schema);

    return schema;
  }
}

export default getSchema;
