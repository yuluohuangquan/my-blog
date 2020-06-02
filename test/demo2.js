const Koa = require("koa");
const app = new Koa();

app.use(async ctx => {
  console.log("运行几次");
  const { url, request, query, querystring } = ctx;
  ctx.body = {
    url,
    // request,
    query,
    querystring
  };
});

app.listen(4399);

console.log("demo2");
