const Koa = require('Koa');
const app = new Koa();

app.use(async (ctx) => {
    if (ctx.url === '/index') {
        ctx.cookies.set(
            'Name', 'SunYu', {
                domain: 'localhost', // 域名
                maxAge: 1000 * 60 *60, // 有效时间
                expires: new Date('2020-05-19'),
                httpOnly: false,
                overwrite: false,
            }
        );
        ctx.body = '设置Cookies成功';
    } else {
        let name = '未设置';
        if (ctx.cookies.get('Name')) {
            name = ctx.cookies.get('Name');
        }
        ctx.body = `Hello ${name}`;
    }
});

app.listen(4399);