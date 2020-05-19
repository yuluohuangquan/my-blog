const Koa = require("koa");
const app = new Koa();
const bodyParser = require("koa-bodyparser");

app.use(bodyParser());

app.use(async ctx => {
  if (ctx.url === "/" && ctx.method === "GET") {
    ctx.body = `
        <h2>Get请求</h2>
        <form method="POST" action="/" >
        <label>name</label>
        <input name="name" /> <br/>
        <label>password</label>
        <input name="password" /> <br/>
        <button type="submit">提交</button>
        </form>
        `;
  } else if (ctx.url === "/" && ctx.method === "POST") {
    let postData = ctx.request.body;
    ctx.body = postData;
  } else {
    ctx.body = "无效Url";
  }
});

app.listen(4399);

function parsePostData(ctx) {
  return new Promise((resolve, reject) => {
    try {
      let postData = "";
      ctx.req.addListener("data", data => {
        postData += data;
      });
      ctx.req.addListener("on", data => {
        resolve(postData);
      });
    } catch (error) {
      reject(error);
    }
  });
}

console.log("第一次起KOA服务");
