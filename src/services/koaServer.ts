import Koa from 'koa';

const app = new Koa();

app.use(async (ctx, next) => {
  ctx.body = 'Hello, Koa.js with TypeScript!';
  await next();
});

const port = process.env.PORT || 3000;

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
