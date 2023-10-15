import { initTRPC } from '@trpc/server';

const t = initTRPC.create();

export const trpcRouter = t.router;
export const trpcProcedure = t.procedure;
