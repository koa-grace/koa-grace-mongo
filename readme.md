## koa-grace-mongo

KOA-grace连接数据库的中间件

### Install

    $ npm install koa-grace-mongo --save

### Usage

```
ctrl(app, options)
```
- app: {Object} koa instance.
- options: {Object|String->root}
  - root: {String} mongo model directory
  - connect: {String} model link uri

**app.js**

```
var koa = require('koa');
var ctrl = require('..');
var router = require('koa-grace-router');

var app = koa();

app.use(ctrl(app, {
  root: './example/model'
}));

app.use(router(app, {
  root: './example/controller'
}));

app.listen(3000, function() {
  console.log('Listening on 3000!');
});
```

### Test

    npm test

### License

MIT