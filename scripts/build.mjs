import { mkdir, copyFile } from 'node:fs/promises';
await mkdir(new URL('../dist/', import.meta.url), { recursive: true });
await copyFile(new URL('../src/server.mjs', import.meta.url), new URL('../dist/server.mjs', import.meta.url));
console.log('Built dist/server.mjs. No deployment performed.');
