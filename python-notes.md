- Python的内置函数type()来查询变量的类型，eg:  x=12;   type(x)  #(class 'int')
- id()函数返回对象的内存地址，eg：a=2.0;    id(a)   #35426160
- 在Python中，标识符由字母数字和下划线组成，但不能以数字开头，标识符中字母区分大小写。
- 单独的下划线(_)是一个特殊变量，用于表示上一次运算结果。
eg: >>>55
55
>>>_+100
155
- 关键字又称保留字，有  and，exec，not，assert，finally，or，break，for，pass，class，from，print，continue，global，raise，def，if，return，del，import，try，elif，in，while，else，is，with，except，lambda，yield。
- Python有8种数据类型:number（数字），string（字符串），list（列表），tuple（元组），dict（字典），set（集合），Boolean（布尔值），None（空值）
- 上一点中8种数据类型包括6种标准数据类型
  1. 字符型，三种声明方式，单引号，双引号，三引号。
  2. 数字，三种类型，整型int，浮点型float，复数complex
  3. 列表，list，可以修改，说白就是数组。列表是一种可修改的集合类型，其元素可以是数字、string等基本类型，也可以是列表、元组、字典等集合对象，甚至可以是自定义的类型。
  4. 元组，不可修改，用()来包裹数据，只有一个元素时需要在后面打逗号，不然会认为是字符串，eg：type(("hello"))，这里是被判断为 str 字符串类型，而 type(("hello",)) 的结果是 tuple 元组类型。
  5. 字典，形式像是一个JSON对象，不能有重复key值，否则后面的value会覆盖前一个value。字典是另一种可变容器模型，且可存储任意类型对象。字典的每个键值 key=>value 对用冒号 : 分割，每个键值对之间用逗号 , 分割，整个字典包括在花括号 {} 中。
  6. 集合（set）是一个无序的不重复元素序列。可以使用大括号 { } 或者 set() 函数创建集合。注意：创建一个空集合必须用 set() 而不是 { }，因为 { } 是用来创建一个空字典。
