import { afterAll, beforeAll } from "vitest";
import { setup, teardown } from "vitest-mongodb";

beforeAll(async () => {
  await setup({ type: "replSet", serverOptions: { replSet: { count: 2 } } });
});

afterAll(async () => {
  await teardown();
});