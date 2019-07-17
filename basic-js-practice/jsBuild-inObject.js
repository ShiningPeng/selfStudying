
// // 对象的定义，如数组对象
// // var arr = [1,5,4,2,3,6];
// // var arr2 = new Array();
// // var len = arr.length;//访问对象属性
// // // console.log(len);
// // var strObj = {name:'dllajfalj',
// // sayHello:function(){
// //   console.log('调用了strObj的sayHello方法');
// // }};
// // console.log(strObj["name"],strObj.name);//访问对象属性
// //调用对象的方法
// // strObj.sayHello();


// //数组的属性 constructor返回创建数组对象的原型函数,length设置或返回数组元素的个数,prototype允许你向数组对象添加属性或方法
// // var obj = {a:1,b:2};
// // console.log(obj.length);
// // console.log(obj.constructor);
// // obj.prototype.c = 10;
// // console.log('obj',obj);

// // function obje(a, b){
// //   this.a = a;
// //   this.b = b;
// // }
// // var objj = new obje(1, 5);
// // // objj.prototype.c = function (c){
// // //   this.c = c;
// // // }
// // // objj.c=7;
// // console.log(objj);

// // Date日期对象，日期对象可以储存任意一个日期，并且可以精确到毫秒数（1/1000 秒）
// var time = new Date(); //当前电脑系统时间
// console.log(time);

// //自定义
// var d = new Date(2012, 10, 1);
// console.log(d);
// console.log('getDay',time.getDay());
// console.log('getFullYear',time.getFullYear());
// console.log('getHours',time.getHours());
// console.log('getMinutes',time.getMinutes());
// console.log('getSeconds',time.getSeconds());
// console.log('getMonth',time.getMonth());
// console.log('getTime',time.getTime());
// console.log('getMilliseconds',time.getMilliseconds());

var str = 'fsl dfj ljl ffsafa fa';
console.log('str.length',str.length);
console.log('str.toUpperCase()',str.toUpperCase());
console.log('str.trim()',str.trim());
console.log('str.split("")',str.split(''));
console.log('str.indexOf("fa")',str.indexOf('fa'));
console.log('str.charAt(str.length-1)',str.charAt(str.length-1));
console.log('str.substr(5,7)',str.substr(5,7));



