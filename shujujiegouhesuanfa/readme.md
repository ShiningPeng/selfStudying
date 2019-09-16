## 不生成新数组的迭代器方法：
- foreach() ，接受一个函数作为参数，
- every(),接受一个返回值为布尔类型的函数，对于所有元素，该函数均返回true，则该函数返回true
- some() ,同样接受一个返回值为布尔类型的函数，只要有一个元素使得该函数返回true，则该方法返回true。
- reduce()，接受一个函数作为参数，返回一个值
## 生成新数组的迭代器方法
- map(),传入一个函数作为参数，返回一个新的数组，这个数组是对数组中每个元素使用完这个函数后的结果组成的数组
- filter(),传入一个返回值类型为布尔的函数，一般用于过滤
## 创建二维数组
- 先创建一个一维数组，再使这个一维数组的每个元素都是一维数组
- Array.matrix(5, 5, 0),第一个参数是行数，第二个是列数，第三个是初始值
- 直接用二维数组字面量创建，[[ ], [], [ ]]