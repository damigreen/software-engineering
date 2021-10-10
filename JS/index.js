const http = require('http');
const https = require('https');
const Koa = require('koa');
const app = new Koa();

app.use(ctx => {
  console.log('Hello Koa');
  ctx.body = 'Hello Koa'
});


// Convert Time to seconds
// value: 3 unit: weeks
const timeToSeconds = (value, unit) =>  {
  const timeValues = {
      seconds: 1,
      minutes: 60,
      hours: 60 * 60,
      days: 60 * 60 * 24,
      weeks: 60 * 60 * 24 * 7,
      years: 60 * 60 * 24 * 365.25,
  };

  return parseFloat(value) * timeValues[unit];
}
console.log(timeToSeconds(2, "weeks"))


// app.listen(3009);
http.createServer(app.callback()).listen(3009);
https.createServer(app.callback()).listen(3008);