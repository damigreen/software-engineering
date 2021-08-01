const http = require('http');
const https = require('https');
const Koa = require('koa');
const app = new Koa();

app.use(ctx => {
  console.log('Hello Koa');
  ctx.body = 'Hello Koa'
});

// app.listen(3009);
http.createServer(app.callback()).listen(3009);
https.createServer(app.callback()).listen(3008);