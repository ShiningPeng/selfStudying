// 1. 下面代码的输出是什么？
function sayHi() {
  console.log(name);
  console.log(age);
  var name = "Lydia";
  let age = 21;
}

sayHi();
// undefined 和 ReferenceError

// 变量的赋值可以分为三个阶段：
// 创建变量，在内存中开辟空间
// 初始化变量，将变量初始化为undefined
// 真正赋值

// var可以提升变量声明，
// var a; 提升到最前