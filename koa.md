## koa
[Koa 框架教程](http://www.ruanyifeng.com/blog/2017/08/koa.html)
### 一、基本用法
- 1.1 架设 HTTP 服务
```js
const Koa = require('koa');
const app = new Koa();

app.listen(3000);
```
- 1.2 Context 对象
```js
const Koa = require('koa');
const app = new Koa();

const main = ctx => {
  ctx.response.body = 'Hello World';
};

app.use(main);
app.listen(3000);
```
- 1.3 HTTP Response 的类型
```js
const main = ctx => {
  if (ctx.request.accepts('xml')) {
    ctx.response.type = 'xml';
    ctx.response.body = '<data>Hello World</data>';
  } else if (ctx.request.accepts('json')) {
    ctx.response.type = 'json';
    ctx.response.body = { data: 'Hello World' };
  } else if (ctx.request.accepts('html')) {
    ctx.response.type = 'html';
    ctx.response.body = '<p>Hello World</p>';
  } else {
    ctx.response.type = 'text';
    ctx.response.body = 'Hello World';
  }
};
```
- 1.4 网页模板
```js
const fs = require('fs');

const main = ctx => {
  ctx.response.type = 'html';
  ctx.response.body = fs.createReadStream('./demos/template.html');
};
```
### 二、路由
- 2.1 原生路由
```js
const main = ctx => {
  if (ctx.request.path !== '/') {
    ctx.response.type = 'html';
    ctx.response.body = '<a href="/">Index Page</a>';
  } else {
    ctx.response.body = 'Hello World';
  }
};
```
- 2.2 koa-route 模块
```js
const route = require('koa-route');

const about = ctx => {
  ctx.response.type = 'html';
  ctx.response.body = '<a href="/">Index Page</a>';
};

const main = ctx => {
  ctx.response.body = 'Hello World';
};

app.use(route.get('/', main));
app.use(route.get('/about', about));
```
- 2.3 静态资源
```js
const path = require('path');
const serve = require('koa-static');

const main = serve(path.join(__dirname));
app.use(main);
```
- 2.4 重定向
```js
const redirect = ctx => {
  ctx.response.redirect('/');
  ctx.response.body = '<a href="/">Index Page</a>';
};

app.use(route.get('/redirect', redirect));
```
### 三、中间件
- 3.1 Logger 功能
```js
const main = ctx => {
  console.log(`${Date.now()} ${ctx.request.method} ${ctx.request.url}`);
  ctx.response.body = 'Hello World';
};
```
- 3.2 中间件的概念
```js
const logger = (ctx, next) => {
  console.log(`${Date.now()} ${ctx.request.method} ${ctx.request.url}`);
  next();
}
app.use(logger);
```
- 3.3 中间件栈
```js
//先进后出执行
const one = (ctx, next) => {
  console.log('>> one');
  next();
  console.log('<< one');
}

const two = (ctx, next) => {
  console.log('>> two');
  next(); 
  console.log('<< two');
}

const three = (ctx, next) => {
  console.log('>> three');
  next();
  console.log('<< three');
}

app.use(one);
app.use(two);
app.use(three);
```
- 3.4 异步中间件
```js
const fs = require('fs.promised');
const Koa = require('koa');
const app = new Koa();

const main = async function (ctx, next) {
  ctx.response.type = 'html';
  ctx.response.body = await fs.readFile('./demos/template.html', 'utf8');
};

app.use(main);
app.listen(3000);
```
- 3.5 中间件的合成
```js
const compose = require('koa-compose');

const logger = (ctx, next) => {
  console.log(`${Date.now()} ${ctx.request.method} ${ctx.request.url}`);
  next();
}

const main = ctx => {
  ctx.response.body = 'Hello World';
};

const middlewares = compose([logger, main]);
app.use(middlewares);
```
### 四、错误处理
- 4.1 500 错误
```js
const main = ctx => {
  ctx.throw(500);
};  
```
- 4.2 404错误
```js
const main = ctx => {
  ctx.response.status = 404;
  ctx.response.body = 'Page Not Found';
};
```
- 4.3 处理错误的中间件
```js
const handler = async (ctx, next) => {
  try {
    await next();
  } catch (err) {
    ctx.response.status = err.statusCode || err.status || 500;
    ctx.response.body = {
      message: err.message
    };
  }
};

const main = ctx => {
  ctx.throw(500);
};

app.use(handler);
app.use(main);
```
- 4.4 error 事件的监听
```js
const main = ctx => {
  ctx.throw(500);
};

app.on('error', (err, ctx) =>
  console.error('server error', err);
);
```
- 4.5 释放 error 事件
```js
const handler = async (ctx, next) => {
  try {
    await next();
  } catch (err) {
    ctx.response.status = err.statusCode || err.status || 500;
    ctx.response.type = 'html';
    ctx.response.body = '<p>Something wrong, please contact administrator.</p>';
    ctx.app.emit('error', err, ctx);
  }
};

const main = ctx => {
  ctx.throw(500);
};

app.on('error', function(err) {
  console.log('logging error ', err.message);
  console.log(err);
});
```
### 五、Web App功能
- 5.1  Cookies
```js
const main = function(ctx) {
  const n = Number(ctx.cookies.get('view') || 0) + 1;
  ctx.cookies.set('view', n);
  ctx.response.body = n + ' views';
}
```
- 5.2 表单
```js
const koaBody = require('koa-body');

const main = async function(ctx) {
  const body = ctx.request.body;
  if (!body.name) ctx.throw(400, '.name required');
  ctx.body = { name: body.name };
};

app.use(koaBody());
```
- 5.3 文件上传
```js
const os = require('os');
const path = require('path');
const koaBody = require('koa-body');

const main = async function(ctx) {
  const tmpdir = os.tmpdir();
  const filePaths = [];
  const files = ctx.request.body.files || {};

  for (let key in files) {
    const file = files[key];
    const filePath = path.join(tmpdir, file.name);
    const reader = fs.createReadStream(file.path);
    const writer = fs.createWriteStream(filePath);
    reader.pipe(writer);
    filePaths.push(filePath);
  }

  ctx.body = filePaths;
};

app.use(koaBody({ multipart: true }));
```