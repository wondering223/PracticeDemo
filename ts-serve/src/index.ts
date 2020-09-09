import Koa from "koa";
import bodify from "koa-body";
import Router from "koa-router";

const app = new Koa();

app.use(
  bodify({
    multipart: true,
    strict: false,
  })
);

const router = new Router();

router.get("/abc", (ctx) => {
  ctx.body = "abc";
});

app.use(router.routes())

app.listen(3000,()=>console.log("server start 3000........."))

