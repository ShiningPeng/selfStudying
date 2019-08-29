## JSON.parse 和 JSON.stringfy
有些时候，我们前端从后端拿过来的JSON对象数据，某些字段并不是前端想要的，需要对一些字段名进行重命名。一般修改对象数组的对象属性名，最简便的就是通过遍历对象数组的方法进行修改，但是用这个方法，如果处理的数据量很大，它的执行效率是非常低的。下面介绍一个更高效的方法，即通过正则的方法进行过滤修改,还可以进行正则的判断：
JSON.parse(JSON.stringify(data).replace(/title/g,'name'))
//data为数组，title为修改前，name为修改后
JSON.stringify()把json对象转成json字符串
使用正则的replace()方法替换属性名
JSON.parse()把json字符串又转成json对象

## 什么是 let ？
- let 是ES 用于声明变量的命令，与 var 类似，与之不同的是：
1. let 声明的变量只在块级作用域内有效
2. 不存在变量提升，而是“绑定”在暂时性死区
3. 不能重复声明

## concat() 方法
用于连接两个或多个数组
用法：arrayObject.concat(arrayX,arrayX,......,arrayX)
Math.round()方法用于向下取整
Math.ceil()方法用于四舍五入

## 正则表达式
可处理正则表达式的方法有regexp.exec、regexp.test、string.match、string.replace、string.search和string.split

## 关于__proto__和prototype
**Function.prototype 等于 Object实例的__proto__(隐式原型链)等于其构造函数的prototype**
```js
  var foo = {},
  F = function(){};
  Object.prototype.a = 'valA'
  Function.prototype.b = 'valB'
//原型上的属性会往下继承，不会往上，给Function的属性不会添加到Object上，给Object添加的属性会往下继承给Function
  console.log(foo.a);//valA
  console.log(foo.b);//undefined
  console.log(F.a);//valA
```
**构造函数是不需要返回值的，使用new来创建对象时（实例化），如果return的是非对象，会忽略返回值，不过return的是对象，则返回该对象(若return null 也会忽略返回值)**

## ques1  javascript全局执行上下文，为我们创建了两个东西：全局对象和this关键字
## __proto__和prototype
  万物都有proto，只有function才有prototype
  只有函数才有原型链,对象没有
  对象要看到原型直接.__proto__，就可以看到
  而函数要看到原型，需要.__proto__得到是用方法包起来的，就像是女孩子化了妆，再.__proto__之后才能看到素颜，也就是原型。

## new方法的执行原理
  1. 创建一个空对象，构造函数的this指向这个空对象
  2. 这个新对象被执行[原型]连接 
  3. 执行构造函数，将构造函数的属性或方法添加到this引用的对象上
  4. 如果构造函数中没有返回其他对象，那么返回this,即创建的新对象。否则，返回构造函数返回的对象

## ques2  call,bind,apply
  1. b.call(a) 相当于把b里面的作用域强行指向到a里面去，此时b就可以调用a里面的fn
  .call方法第一个参数是要this作用域指向的地方，后面的参数都是该作用域里要用到的值
  2. b.apply(a) 与 .call方法 用法一致，不一样的是，除第一个参数外的参数都要放到一个数组里，b.apply(a,[9,2])
  3. b.call() || b.apply() 此时this的作用域会指向window
  4. var c = b.bind(a);
     c();
     bind方法返回的是一个修改后的新的函数，所以该用函数该有的姿态去调用
     bind方法接收的参数是按照形参的顺序进行的

## ques3 浅拷贝和深拷贝
  1. 数组解构：
    let [x, y, z] = [1, 2, 3]
    //x=1,y=2,z=3
  2. 对象解构：
    let {foo, bar} = {foo:'aaa', bar:'bbb'}
    //foo='aaa',bar:'bbb'
    //另：允许给赋值的变量重命名 
      let {foo: baz} = {foo:'aaa'}
      //baz='aaa'
  3. 浅拷贝只是第一层属性进行拷贝，当第一层的属性为基本数据类型时，新对象和原对象互不影响，当第一层的属性为# 复杂数据类型 # 时，那么新对象和原对象的属性值其指向的是同一块内存地址(是同步更新的)
     深拷贝是将对象及值复制过来，两个对象修改其中任意一个的值，另一个的值不会改变

## ques4 闭包
  1. 什么是闭包？闭包是指有权限访问另一个函数作用域中的变量的函数
  2. 闭包的作用：(1)能够访问函数定义时所在的词法作用域(阻止其被回收)
                (2)私有化变量
                (3)模拟块级作用域
  所以尽量少使用闭包，不然会导致内存泄漏，项目，浏览器卡顿，进程等


```js
for (var i = 0; i < 10; i++) {
  setTimeout(() => {
    console.log(i);
  }, 0);
}
//上面打印10个10，
// 要打印出0-9
// 方法1.把var改为let
// 方法2. 闭包,如下
for (var i = 0;i<10;i++){
  (function(i){
    setTimeout(() => {
      console.log(i);
    }, 0);
  })(i);
}

// let每次循环会生成一个封闭的作用域和setTimeout绑定，而var每次循环会覆盖掉上一次的作用域
```

```js
// 五、for-in for-of
// Array.prototype.methods = function(){
//   console.log('wn');
// }
// var myArray = [1, 2, 3, 4, 5, 6, 7];
// myArray.name = 'wn';
// for(let index in myArray){
//   console.log(myArray[index]);
// }
for (let index of myArray) {
  console.log(index);
}
```
**for-in**
// 1. index索引为字符串类型的数字，不能直接进行几何运算，
// 2.遍历数组遍历顺序有可能不是按照实际数组的内部数据进行的
// 3.使用for-in会**遍历数组所有可枚举属性**，包括原型链，所以for-in很适合遍历对象
**for-of**
//for-in 遍历的是数组的索引，for-of遍历的是数组的元素
// for-of遍历的只是数组内的元素，而不包括数组原型属性和索引


console.log(a.__proto__ === b)//true
console.log(Object.getPrototypeOf(a) === b)//true
// 浏览器的__proto__属性就相当于getPrototypeOf这个正式的api,两次的操作时一样的

## async
- async 函数就是 Generator 函数的语法糖,
如class 是 function.prototype的语法糖

- generator函数是一次只执行到一个yield之后，通过next一步一步执行

## this的指向
1. 当函数作为对象的方法被调用时，this就会指向该对象。
2. 作为普通函数，this指向window。
3. 构造器调用，this指向返回的这个对象。
4. 箭头函数  
  - 箭头函数的this绑定看的是this所在函数定义在哪个对象下，就绑定哪个对象
  - 如果有嵌套的情况，则this绑定到最近的一层对象上

- this指向的固定化，并不是因为箭头函数内部有绑定this的机制，实际原因是箭头函数根本没有自己的this，导致内部的this就是外层代码块的this。正是因为它没有this，所以也就不能用作构造函数。

**怎么改变this的指向呢**
   1. 使用es6的箭头函数
   2. 在函数内部使用that = this
   3. 使用apply，call，bind 
   4. new实例化一个对象

## Object.keys()
  此方法返回由一个给定对象的自身可枚举属性的数组

## Object.defineProperity()
此方法用来修改或添加对象上的属性
Object.defineProperity(对象, 属性, {
  get(){ 
    //一般直接return 对象
   },//读取属性时调用的方法
  set(newVal){//写入(修改或新增)属性时调用的方法,参数是新值
    
  }
})

## js实现数据双向绑定
```html
<div id="app">
    <input type="text" id="txt" />
    <p id="show-txt"></p>
  </div>
```
```js
var obj = {};
    Object.defineProperty(obj, 'txt', {
      get() {
        return obj;
      },
      set(newVal) {
        newVal = document.getElementById('txt').value;
        document.getElementById('show-txt').innerHTML = newVal;
      }
    })
    document.addEventListener('keyup', function (e) {
      // console.log(e.target.value);
      obj.txt = e.target.value;
    })
```
keyup事件是每次键盘按下就会触发的事件，

## 必须会的排序算法
- 冒泡排序，选择排序，快速排序
1. 冒泡排序：相邻两个数进行比较，根据条件判断是否交换两个数，外层循环决定次数，内层循环负责交换数的位置。
2. 选择排序：每次循环找出一个最小的数的索引，然后根据索引交换值，从而进行排序
3. 快速排序：根据中间值分为left和right，利用递归不断分出left 和 right ，最后返回
return quickSort(left).concat([base],quickSort(right))


**js面试**

## 二、什么是闭包和原型链
- 内部函数可以访问定义他们外部函数的参数和变量。（作用域链的向上查找，把外围的作用域中的变量值存储在内存中而不是在函数调用完毕后销毁）设计私有的方法和变量，避免全局变量的污染
- 函数嵌套函数
	- 本质是将函数内部和外部连接起来。优点是可以读取函数内部的变量，让这些变量的值始终保存在内存中，不会在函数被调用之后自动清除
- 闭包的缺陷：
  1. 闭包的缺点就是常驻内存会增大内存使用量，并且使用不当容易造成内存泄漏
  2. 如果不是因为某些特殊任务而需要闭包，在没有必要的情况下，在其它函数中创建函数是不明智的，因为闭包对脚本性能具有负面影响，包括处理速度和内存消耗。   

- 内存溢出和内存泄漏（给的不够用| 用了不归还）
	1. 内存溢出：在程序中申请内存时，没有足够的内存空间供其使用，出现out of memory；比如申请了一个integer,但给它存了long才能存下的数，那就是内存溢出
	2. 内存泄漏：在程序申请内存后，无法释放已申请的内存空间，一次内存泄漏危害可以忽略，但内存泄漏堆积后果很严重，无论多少内存，迟到会被占光。

  举列子：闭包中的this,对象函数。匿名函数返回函数return function
 
- 作用域：(由当前环境与上层环境一系列的变量对象组成！！！保证 当先执行环境里，有权访问的变量和函数是有序的，作用域链变量只能被向上访问)
- 定义：由当前环境与上层环境的一系列变量对象组成(函数嵌套函数，内部一级级往上有序访问变量或对象)
- 作用是：保证当前执行环境里，有权访问的变量和函数时有序的，作用域链的变量只能被向上访问
变量访问到window对象及被终止，作用域链向下访问是不允许的
  1. 改变作用域有 with try..中的catch，
  2. 所有为定义的直接赋值的变量自动声明为全局作用域

- 作用域：一套规则，管理引擎如何在当前作用域以及嵌套的子作用域中根据标识符名称
		查找变量（标识符就是变量或者函数名）（只用全局作用域和局部作用域）（作用域在它创建的时候就存在了）

- 代码执行分为两个阶段：
		1. 代码编译阶段：有编译器完成，将代码翻译可执行的代码，这个阶段会被确定
		2. 代码执行阶段：有js引擎完成，主要执行可执行的大妈，这个阶段执行上下文被创建（对象被创建）
	
- 执行上下文：一个看不见得对象，存在若干个属性和变量，它被调用的时候创建的。函数被调用查看的this指向的object，object就是上下文（只有被调用的时候创建）

   作用域链: https://blog.csdn.net/yooungt13/article/details/20581635
	    · 当代码在一个环境中执行时，会创建变量对象的一个作用域链,
		举例子：var name ="Tom"
			function sayHi () {
			    alert('Hi,'+name)
			}
			sayHi()  //Hi, Tom
		函数sayHi()的执行环境为全局环境，所以它的变量对象为window。当函数执行到name时，先查找局部环境，找到则换回，否则顺着作用域查找，在全局环境中，
		找到name返回，这一查找变量的有序过程的依据就是作用域。
	
	    · 作用域链是保证执行环境有权访问的所有变量和函数的有序访问

- 原型链：函数的原型链对象constructor默认指向函数本身，原型对象除了有原型属性外，为了实现继承，还有一个原型链指针_proto_,该指针是指向上一层的原型对象，而上一层的原型对象的结构依然类似。因此可以利用_proto_一直指向Object的原型对象上，而Object原型对象用Object.prototype._proto_  = null表示原型链顶端。如此形成了js的原型链继承。同时所有的js对象都有Object的基本防范。

