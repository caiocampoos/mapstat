"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const koa_1 = __importDefault(require("koa"));
const koa_router_1 = __importDefault(require("koa-router"));
const koa_bodyparser_1 = __importDefault(require("koa-bodyparser"));
const cors_1 = __importDefault(require("@koa/cors"));
const app = new koa_1.default();
const router = new koa_router_1.default();
1;
app.use((0, cors_1.default)({ credentials: true }));
app.use((0, koa_bodyparser_1.default)());
app.use(router.routes());
app.use(router.allowedMethods());
router.get('/', async (ctx, next) => {
    if (ctx.path === '/') {
        ctx.body = 'lets map!';
        return;
    }
    await next();
});
exports.default = app;
//# sourceMappingURL=server.js.map