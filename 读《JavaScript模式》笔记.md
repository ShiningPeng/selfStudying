## 隐式创建全局变量
```js
function foo() {
  var a = b = 0;
  //等价于 var a = (b = 0);
}
```
- 隐含全局变量严格来说并不是真正的变量，而是全局对象的属性，属性可以通过 delete 操作符来删除，但变量不可以。
- 使用 var 创建的全局变量(这类变量在函数外部创建)不能删除
- 不使用 var 创建的隐式全局变量(尽管在函数内部创建)可以删除

## 单一 var 模式
例：
```js
function foo() {
  var a = 1, b = 2, sum = a + b, obj = {}, i, j;
  //防止逻辑错误，提高代码的可读性
}
```
## for循环
```js
for(var i = 0; i < arr.length;i++){}
```
- 问题：
 - 每次循环迭代都要访问数据的长度，会使代码变慢，特别是当遍历的不是数据，而是HTML容器对象时。如 document.images  页面所有的IMG元素。
 - 每次访问就是在查询活动的DOM， 通常 DOM 操作是非常耗时的，
- 改进：
```js
for(var i = 0, len = arr.length;i < len;i += 1){}
```
长度只取一次
- 所有浏览器中，通过将HTML容器上要遍历的次数缓存起来会大大提高速度。

## for-in 循环
- 用来遍历非数组对象，也称枚举
- 不遍历数组是因为在原型链上额外添加的方法和属性也会枚举出来，但是这并不是我们遍历所希望的。
- 可以使用Object.prototype.hasOwnProperty.call(obj, index) 来过滤。