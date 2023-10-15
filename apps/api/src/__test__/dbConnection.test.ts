import { it, expect } from 'vitest';

import { connectDB } from '../db/connect';

it('connects to mongodb', () => {
  expect(async () => {
    await connectDB({});
  }).not.toThrow();
});
