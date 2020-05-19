const Koa = require('koa');
const app = new Koa();

app.use(async(ctx) => {
    ctx.body = 'Hello World';
});

app.listen(4399);

console.log('第一次起KOA服务');