var koa = require('koa');
var mongo = require('..');
var router = require('koa-grace-router');

var app = koa();

app.use(mongo(app, {
  connect:'mongodb://localhost:27017/blog',
  root:'./example/model/mongo'
}))

app.use(router(app, {
  root: './example/controller'
}));

app.listen(3000, function() {
  console.log('Listening on 3000!');
});