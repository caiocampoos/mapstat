import { createKoaMiddleware } from 'trpc-koa-adapter';
import { z } from 'zod';

import { trpcProcedure, trpcRouter } from './../../trpc';
import UserModel from './UserModel';

const userRouter = trpcRouter({
  hello: trpcProcedure
    .input(z.string())
    .query(({ input }) => {
      return {
        greeting: `hello ${input}`,
      };
    }),
  setData: trpcProcedure
    .input(
      z.object({
        name: z.string(),
        email: z.string().email(),
        password: z.string(),
      }),
    )
    .query(async ({ input }) => {
      //** @todo refine a create user method  and serve here*/
      const userModelData = await new UserModel({
        name: input.name,
        email: input.email,
        password: input.password,
      }).save();
      return {
        greeting: userModelData,
      };
    }),
});

export const userTrpcAdapter = createKoaMiddleware({
  router: userRouter,
  prefix: '/trpc/user',
});
