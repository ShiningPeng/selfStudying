## 小彭刷面试题的笔记
- 来自[送你 43 道 JavaScript 面试题](https://juejin.im/post/6844903869378461710)

1. for循环中setTimeout 
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
2. 对于箭头函数，this关键字指向的是它所在的上下文（定义时的位置）的环境，面试题中应该额外注意()=>{}
*******
3. +号
```js
+true //1
+"456" //456
```
  - 这里暂且记录，+号放在boolean值或者字符类型数字之前，会将该数字转换为Number类型
详细的+号一元和二元操作可以参考文章[JavaScript 加号运算符详解](https://www.cnblogs.com/polk6/p/js-adv-addopr.html)
********
4. js解析语法，匹配方括号时，先匹配左括号\[，然后去找右括号\]，找到右括号后才会计算[]中的表达式
******
5. new Number()是一个构造函数，虽然看起来是数字，但不是真正的数字，它还有另外一堆额外的功能，是一个对象
```js
let a = 3;
let b = new Number(3)
a == b  //true
a === b //false
``` 
- 两个等号会引发隐式类型转换，在这题中，右侧的对象会变为Number类型
*******
6. 在class中，如果函数或者变量有static修饰，那么这个函数或者变量只存在于这个构造函数中，实例化的对象不能访问到static属性下的函数或者变量
******
7. js中一切皆对象（原始类型除外）
******
8. 没有使用new关键字来实例化对象时，创建的新对象属于全局
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
9. 事件传播的三个阶段：捕获 =》目标 =》冒泡
******
10. 所有对象都有原型//false，原型链终点的对象的原型为null
******
11. 二元加号运算的四个步骤：
    - 值进行GetValue()
    - 值进行ToPrimitive()
    - 若一方为String类型，则两个操作数都进行ToString()
    - 若两个操作数都不是String类型，则两个操作数都进行ToNumber()转换，然后进行算数运算
******
12. ++
    - 后缀一元运算符 ++
        1. 先返回值
        2. 增加值
    - 前缀一元运算符 ++
        1. 先增加值
        2. 返回值
********
13. 模板字符串
    - 函数名``  构成**标签函数**
```js
function foo(){}
foo``
```
    - 如果使用标记的模板字符串，则第一个参数值始终是字符串值的数组，其余参数获取传递到字符串的表达式的值，即通过${}传递的变量的值
*******
