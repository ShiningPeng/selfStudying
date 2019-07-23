有些时候，我们前端从后端拿过来的JSON对象数据，某些字段并不是前端想要的，需要对一些字段名进行重命名。一般修改对象数组的对象属性名，最简便的就是通过遍历对象数组的方法进行修改，但是用这个方法，如果处理的数据量很大，它的执行效率是非常低的。下面介绍一个更高效的方法，即通过正则的方法进行过滤修改,还可以进行正则的判断：
JSON.parse(JSON.stringify(data).replace(/title/g,'name'))
//data为数组，title为修改前，name为修改后
JSON.stringify()把json对象转成json字符串；
使用正则的replace()方法替换属性名；
JSON.parse()把json字符串又转成json对象

##什么是 let ？
let 是ES 用于声明变量的命令，与 var 类似，与之不同的是：
1、let 声明的变量只在块级作用域内有效
2、不存在变量提升，而是“绑定”在暂时性死区
3、不能重复声明

##concat() 方法
用于连接两个或多个数组
用法：arrayObject.concat(arrayX,arrayX,......,arrayX)
Math.round()方法用于向下取整
Math.ceil()方法用于四舍五入

##正则表达式
可处理正则表达式的方法有regexp.exec、regexp.test、string.match、string.replace、string.search和string.split



