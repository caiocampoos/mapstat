import cors from '@koa/cors';
import Koa from 'koa';
import bodyParser from 'koa-bodyparser';
import Router from 'koa-router';

import { userTrpcAdapter } from './modules/user/userRouter';

const app = new Koa();
const router = new Router();
app.use(cors({ credentials: true }));
app.use(bodyParser());
app.use(router.routes());
app.use(router.allowedMethods());

//// healthcheck endpoint
router.get(
  '/',
  async (ctx: { path: string; body: string }, next: () => any) => {
    if (ctx.path === '/') {
      ctx.body = 'lets map!';
      return;
    }
    await next();
  },
);

app.use(userTrpcAdapter);
export default app;
