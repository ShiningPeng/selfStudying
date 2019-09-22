# python 笔记
### Python的内置函数type()来查询变量的类型，eg:  x=12;   type(x)  #(class 'int')
### id()函数返回对象的内存地址，eg：a=2.0;    id(a)   #35426160
### 在Python中，标识符由字母数字和下划线组成，但不能以数字开头，标识符中字母区分大小写。
### 单独的下划线(_)是一个特殊变量，用于表示上一次运算结果。
- eg: 
```
>>>55
55
>>>_+100
155
```
### 关键字又称保留字，有  and，exec，not，assert，finally，or，break，for，pass，class，from，print，continue，global，raise，def，if，return，del，import，try，elif，in，while，else，is，with，except，lambda，yield。
### Python有8种数据类型:number（数字），string（字符串），list（列表），tuple（元组），dict（字典），set（集合），Boolean（布尔值），None（空值）
### 上一点中8种数据类型包括6种标准数据类型
1. 字符型，三种声明方式，单引号，双引号，三引号。
2. 数字，三种类型，整型int，浮点型float，复数complex
3. 列表，list，可以修改，说白就是数组。列表是一种可修改的集合类型，其元素可以是数字、string等基本类型，也可以是列表、元组、字典等集合对象，甚至可以是自定义的类型。
4. 元组，不可修改，用  ()  来包裹数据，只有一个元素时需要在后面打逗号，不然会认为是字符串，eg：type(("hello"))  这里是被判断为  str字符串类型，而 type(("hello",))  的结果是 tuple元组类型。
5. 字典，形式像是一个JSON对象，不能有重复key值，否则后面的value会覆盖前一个value。字典是另一种可变容器模型，且可存储任意类型对象。字典的每个键值 key=>value 对用冒号 : 分割，每个键值对之间用逗号 , 分割，整个字典包括在花括号 {} 中。
6. 集合（set）是一个无序的不重复元素序列。可以使用大括号 { } 或者 set() 函数创建集合。
注意：创建一个空集合必须用 set() 而不是 { }，因为 { } 是用来创建一个空字典。
## 常用的 calendar 模块函数
- isleap(year)
- leapdays(year1, year2):返回[year1, year2)中的闰年数
- month(year, month) 返回指定年份和月份中的日历
## 运算符：+ - * / //(整除) **(乘方) %
- // ：做除法后返回商的整数部分，当分子或者分母为浮点型时返回值为浮点类型
- ** 乘方：优先级高于乘除
eg：2 ** 10  =》 1024
## 浮点数的计算误差
- eg:
x=2.2
x - 1.2 == 1   -> false
## 赋值
- 链式赋值:a=b=c=5
- 同步赋值：a,b,b=10,20,30
- 其他语言交换两个变量的值：temp=a;a=b;b=temp;
  python交换：a,b=b,a
## 输入
- 一般格式：input([ 提示字符串 ])
- 不进行转换的话输入的内容都是字符串类型
```
>>>x = input()
5
>>>x
'5'
>>>b=int(input('请输入一个数'))
1
>>>b
1
```
### 给多个变量输入值
```
>>>x,y=eval(input())
3,4
>>>x
3
>>>y
4
```
- 经过eval()函数处理，变成了元组(3,4)，然后赋值给x,y
## 输出
- 一般输出格式 print([ 输出项1 ][, 输出项2][, ···][,sep=分隔符][, end = 结束符])
  - sep标识输出时各输出项之间的分隔符，默认为空格，即""  ,end表示每一行以什么结尾，默认为换行，即'\n'

## 字符串的 format()方法
- 使用大括号"{}"格式说明符，大括号及其里面的字符（称作格式化字符）将会被format()中的参数替换。
  - eg:
    print('i am {}'.format('happy'))
    >>>i am happy
- 使用"{序号}"形式的格式说明符，在大括号中的数字用于指向输出对象在format()函数中的位置。
  - eg:
    print('{0} name is {1}'.\format('my','lihua'))
    >>>my name is lihua
- 使用"{键}"形式的格式说明符，大括号中是一个标识符，该标识符会指向使用该名字的参数
  - print('hi,i am li,{ms}'.format(ms='what's your name?'))
  >>>hi,i am li,what's your name?
- 混合使用序号，键形式的格式说明符
- 输出项的格式控制