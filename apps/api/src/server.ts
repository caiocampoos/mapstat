import Koa, { Request } from 'koa';
import Router from 'koa-router';
import bodyParser from 'koa-bodyparser';
import cors from '@koa/cors';


const app = new Koa();
const router = new Router();
1
  app.use(cors({ credentials: true }));
  app.use(bodyParser());
  app.use(router.routes());
  app.use(router.allowedMethods());
  
  //// healthcheck endpoint
  router.get('/', async (ctx: { path: string; body: string; }, next: () => any) => {
    if (ctx.path === '/') {
      ctx.body = 'lets map!';
      return;
    }
    await next();
  });

export default app;