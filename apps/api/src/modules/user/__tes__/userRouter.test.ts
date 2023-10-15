import request from 'supertest';
import { expect, test } from 'vitest';

import app from '../../../server';

//* @todo learn how to mock trpc procedures /
test('basic trpc prcedures test', async () => {
  const response = await request(app.callback()).get(
    '/trpc/user/text?input=vemnenem',
  ).set({ 'content-type': 'aplication/json' });

  // this test tests nothing in the moment, need to setup vitest to run trpc procedures 
  expect(response.statusCode).toBe(400);
});
