## 小彭刷面试题的笔记
- 来自[送你 43 道 JavaScript 面试题](https://juejin.im/post/6844903869378461710)

### 1. for循环中setTimeout 
```js
for(var i=0;i<3;i++) {
    setTimeout(
        ()=>{console.log(i)
    },1)
}
    // 3 3 3
```
  - 在js事件机制中，setTimeout执行时，循环已经走完了，因为用var声明的变量，执行了三次i++之后，i就一直为3了
********
### 2. 对于箭头函数，this关键字指向的是它所在的上下文（定义时的位置）的环境，面试题中应该额外注意()=>{}
*******
### 3. +号
```js
+true //1
+"456" //456
```
  - 这里暂且记录，+号放在boolean值或者字符类型数字之前，会将该数字转换为Number类型
详细的+号一元和二元操作可以参考文章[JavaScript 加号运算符详解](https://www.cnblogs.com/polk6/p/js-adv-addopr.html)
********
### 4. js解析语法，匹配方括号时，先匹配左括号\[，然后去找右括号\]，找到右括号后才会计算[]中的表达式
******
### 5. new Number()是一个构造函数，虽然看起来是数字，但不是真正的数字，它还有另外一堆额外的功能，是一个对象
```js
let a = 3;
let b = new Number(3)
a == b  //true
a === b //false
``` 
- 两个等号会引发隐式类型转换，在这题中，右侧的对象会变为Number类型
*******
### 6. 在class中，如果函数或者变量有static修饰，那么这个函数或者变量只存在于这个构造函数中，实例化的对象不能访问到static属性下的函数或者变量
******
### 7. js中一切皆对象（原始类型除外）
******
### 8. 没有使用new关键字来实例化对象时，创建的新对象属于全局
```js
function person(name,age){
    this.name = name;
    this.age = age;
}
const p1 = new Person("lilei",18);
const p2 = Person("zhangsan",16);
console.log(p2);   //undefined
// 实例化的属性挂到了全局上
global.name = "zhangsan";
global.age = 16;
```
******
### 9. 事件传播的三个阶段：捕获 =》目标 =》冒泡
******
### 10. 所有对象都有原型//false，原型链终点的对象的原型为null
******
### 11. 二元加号运算的四个步骤：
    - 值进行GetValue()
    - 值进行ToPrimitive()
    - 若一方为String类型，则两个操作数都进行ToString()
    - 若两个操作数都不是String类型，则两个操作数都进行ToNumber()转换，然后进行算数运算
******
### 12. ++
- 后缀一元运算符 ++
    1. 先返回值
    2. 增加值
- 前缀一元运算符 ++
    1. 先增加值
    2. 返回值
********
### 13. 模板字符串
- 函数名``  构成**标签函数**
```js
function foo(){}
foo``
```
- 如果使用标记的模板字符串，则第一个参数值始终是字符串值的数组，其余参数获取传递到字符串的表达式的值，即通过${}传递的变量的值
*******
### 14. 在比较相等性时，原始类型通过他们的值比较，而对象通过他们的引用比较，看内存位置是否一致，函数参数和函数体中的变量或者字面量的内存位置是不一样的
```js
function checkAge(data) {
  if (data === { age: 18 }) {
    console.log("You are an adult!");
  } else if (data == { age: 18 }) {
    console.log("You are still an adult.");
  } else {
    console.log(`Hmm.. You don't have an age I guess`);
  }
}

checkAge({ age: 18 });
//Hmm.. You don't have an age I guess
```
******
### 15. typeof 的返回值取值
- **undefined**,**object**,**boolean**,**number**,**biging(es2020)**,**string**,**symbol**,**function**
- 取值不包括 **array**,**NaN**
```js
typeof [1,2,3] === "object"  //true
```
******
### 16. 使用"use strict"
- 使用"use strict"可以确保不会意外地声明全局变量，当变量未声明便使用时会触发ReferenceError
*******
### 17. eval()
- 这个函数会计算字符串中的值，即如果字符串是表达式，则会进行计算
```js
eval("10*10+5")  //105
```
******
### 18. 存储在sessionStorage中的数据在关闭选项卡后会被删除
******
### 19. 对象是由若干key-value键值对组成的集合，所有对象的key值（symbol除外）都会被存储为字符串
```js
const obj = { 1: "a", 2: "b", 3: "c" };
const set = new Set([1, 2, 3, 4, 5]);

obj.hasOwnProperty("1");
obj.hasOwnProperty(1);
set.has("1");
set.has(1);
// true true false true
```
******
### 20. map、set
- Map：键值对合集，map对象有set,has,get,delete等方法
- Set：key的集合，set对象中没有重复的key，set对象有add,delete等方法
******
### 21. 对象中重复的key值
- 普通对象中的key值是可以重复的，但是相同key值的value，后面会覆盖前面的
```js
const obj = { a: "one", b: "two", a: "three" };
console.log(obj);
//{ a:"three", b:"two" }
```
******
### 22. 一个对象作为另一个对象的key
- 当一个对象作为另一个对象的key时，作为key值的这个对象会发生隐式类型转换为字符串"[object object]"
```js
const a = {};
const b = { key: "b" };
const c = { key: "c" };

a[b] = 123;     //a["object object"] =  123
a[c] = 456;     //a["object object"] =  456

console.log(a[b]);    //456
```
*******
### 23. this指针的指向
- es5，this指针永远指向最后调用它的那个对象
- es6，箭头函数中没有this绑定，必须通过作用域链来决定其值，
如果箭头函数被非箭头函数包含，则this绑定的是最近一层非箭头函数的this，
否则为undefined
******
### 24. js中的6个假值
- **undefined**
- **null**
- **NaN**
- **0**
- **false**
- **""(空字符串)**
*******
### 25. typeof 的返回值
- typeof 的返回值是字符串
```js
typeof 1 //"number"
typeof typeof 1 === "string"
```
*******
### 26. 数组中未赋值的元素
- 未赋值的元素为空插槽（empty），实际值为undefined
```js
const arr = [1, 2, 3]
arr[10] = 11
console.log(arr)
//[1, 2, 3, 7*empty,11]
```
******
### 27. try catch finally
- try catch finally语句可以嵌套
- 语句标记要try的语句块，并指定一个出现异常时抛出的响应
- 过程：
    1. 执行try，若try中任何一句语句抛出异常则执行2，若没有抛出异常，则跳过catch语句块
    2. 执行catch语句块
    3. finally中的语句是一定会执行的，在下一个try之前执行，无论try中语句是否抛出异常
*******
### 28. js中所有内容都是原始类型或者对象
*******
### 29. reduce函数
- 接收参数
    **arr.reduce(callback(accumulator, currentValue[, index[, array]])[, initialValue])**
- 其作用有：数组求和，二维数组化为一维数组等
- 详情可参考[reduce函数](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Array/Reduce)