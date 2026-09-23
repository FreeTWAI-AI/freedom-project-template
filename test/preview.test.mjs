import test from 'node:test';
import assert from 'node:assert/strict';
import { createPreviewServer } from '../src/server.mjs';

test('the runnable starter exposes a local preview and truthful health, not a fake API', async (t) => {
  const server = createPreviewServer({ projectName: '<script>alert(1)</script>' });
  await new Promise((resolve) => server.listen(0, '127.0.0.1', resolve));
  t.after(() => new Promise((resolve) => server.close(resolve)));
  const origin = `http://127.0.0.1:${server.address().port}`;
  const page = await fetch(origin);
  const html = await page.text();
  assert.equal(page.status, 200);
  assert.match(html, /&lt;script&gt;/);
  assert.doesNotMatch(html, /<script>/);
  assert.equal(page.headers.get('cache-control'), 'no-store');
  assert.deepEqual(await (await fetch(`${origin}/health`)).json(), { status: 'ok', mode: 'local-template-preview' });
  assert.equal((await fetch(`${origin}/api/v1/me`)).status, 404);
  assert.equal((await fetch(origin, { method: 'POST' })).status, 405);
});
