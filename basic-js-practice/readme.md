#innerHTML
通过document.getElementById可以获得某个id的DOM结构，将此赋值给一个变量content，
content.innerHTML可以修改这个id所在的DOM结构，不仅仅是改变这里面的文字，还可以加入标签，如content.innerHTML = '<p>这是改变后的内容</p>'，content.innerHTML = 'hah'等等，不仅如此，还可以使用es6中的模板字符串，在这其中动态写入变量的值：`xxxx${变量名}xx`

**使用原生JS在标签中绑定方法时，需要加上（）调用，和vue、react、小程序之类的不同，只需要写函数名就行。**

#js动态改变dom元素样式
通过document.getElementById或者getElementByClassName获取到某个dom结构赋值给一个变量，如 var con = document.getElementById('content');
利用con对象的style属性下的某些属性就可以改变样式
con.style.color = "red";
需要注意的是所赋的值需要用引号一起来，不然会被当成是变量或者其他一些值，出现类似"red" is not defined错误。
疑问：似乎无妨通过这样的方式来改变字体大小，解决办法是定义好一个类，需要改变字体大小时动态地加上类名即可

#js动态修改、添加类名
document.getElementByTagName()得到的是一个数组，需要用下标确定是哪个标签
var con = document.getElementByTagName('div')[0];
con.className = "active"
这样的方法可以改变类名，但是用来添加类名的话，如果之前这个对象不存在类名，这样也是可以的，但是如果对象之前已经存在一个或几个类名呢，通过这个方式就会显得很生硬，少量类名还好，可以con.className = 'active more one',所以这样的方式并不合适。
对于真正的动态添加类名，我记忆中老是感觉有一个addClassName的api，但是百度之后发现好像没有，但是jquery中存在这样的一个api，就是addClass方法，刚才试了一下，不知道是哪里姿势不对，没成功。但是存在这个方法可以动态添加类名。

##js的一些基本事件
onload 在页面加载完成后，立即发生,可以写在body上，也可以在js中写，window.onload(()=>{})
onUnload 当用户退出页面时（页面关闭、页面刷新等）时触发
onclick 点击绑定的标签时触发
onmouseover 鼠标移动到绑定标签上面时触发
onmouseout 鼠标移开绑定的标签时触发
onchange 改变文本框的内容来触发onchange事件,**文本框失去焦点之后才会触发**
onfocus 文本框获得焦点时触发
onblur  文本框失去焦点时触发
onselect  文本框文字被选中时触发

##js内置对象
JavaScript 中的所有事物都是对象，如:字符串、数值、数组、函数等，每个对象带有属性和方法。
对象的属性：反映该对象某些特定的性质的，如：字符串的长度、图像的长宽等；
对象的方法：能够在对象上执行的动作。例如，表单的“提交”(Submit)，时间的“获取”(getYear)等；
JavaScript 提供多个内建对象，比如 String、Date、Array 等等
**Date对象**
new Date()获得当前电脑的系统时间
时间对象可以调用的方法
getFullYear() 返回对象的年
getMonth()  返回对象的月
getDate() 返回对象的日
getDay()  返回星期几，数字类型  
getTime() 返回1970年1月1日零点起的毫秒数
getMinutes() 返回对象的分钟数
getSeconds() 返回对象的秒数
getMilliseconds() 返回对象的毫秒数
getHours()  返回对象的小时数
**String字符串对象**
定义了一个字符串后就是属于一个字符串对象，就能够调用作为字符串的一些方法
var strObj = 'dfhljfaldja';
1. strObj.length返回字符串的长度
2. strObj.toUpperCase() 将字符串的小写字母转化为大写
3. strObj.toLowerCase() 将字符串的大写字母转化为小写
4. strObj.charAt(index) 返回指定位置的某个字符，index为下标，index不在0和                  strObj.length-1之间则返回空字符串，其中字符串中的空格也是字符
5. strObj.indexOf(需要检索的字符串,从何位置开始检索) 返回某个指定的字符串值在字符串中*首次出现*的位置，第二个参数不是必须的，没有则默认从0开始，取值在[0,length-1]之间的整数,区分字符的大小写，没有检索到则返回-1
6. strObj.split(指定的地方分割,分割次数) 将字符串分割为字符串数组，并返回此数组，第二个参数为可选参数，限定分割的次数，否则切完为止，若第一个参数指定""空字符来分割，则字符串每个字符之间都会被分割
7. strObj.substring(开始位置,结束位置) 用于提取字符串中介于两个指定下标之间的字符，结束位置为可选，不指定则到字符串对象结尾，若两参数相等，则返回空串，若第一个参数比第二个参数小，则提取字符串之前会交换两个参数，提取 **[开始位置,结束位置)**之间的字符串
8. strObj.substr(开始位置,长度) 从字符串中提取从开始位置开始（也就是包括开始位置的字符）的指定长度的字符串，若省略，则提取从开始位置到字符串结尾。如果开始位置是负数，则从字符串的尾部开始算起的位置。也就是说，**-1 指字符串中最后一个字符，-2 指倒数第二个字符**，以此类推。如果开始位置为负数且绝对值大于字符串长度，开始位置为0。
9. strObj.trim() 去除字符串的两端的空白

## Math对象
Math 对象是一个固有的对象，无需创建它，直接把 Math 作为对象使用就可以调用其所有属性和方法。这是它与Date,String对象的区别,如圆的面积 area = Math.PI * radius * radius;
一 、Math 的对象属性
1. Math.PI  返回圆周率
2. Math.E 返回算术常量e，自然对数的底数 
3. Math.LN2 返回2的自然对数  
4. Math.LN10 返回10的自然对数
5. Math.LOG2E 返回以2为底的e的对数
6. Math.LOG10E 返回以10为底的e的对数
7. Math.SQRT1_2 返回2的平方根的倒数
8. Math.SQRT2 返回2的平方根
二、Math 对象方法

abs(x)    返回数的绝对值
acos(x)   返回数的反余弦值
asin(x)   返回数的反正弦值
atan(x)   返回数的反正切值
atan2(y,x)    返回由x轴到点(x,y)的角度（以弧度为单位）
ceil(x) 对数进行向上取整
cos(x)  返回数的余弦
exp(x)  返回e的指数
floor(x)  对数进行向下取整
log(x)  返回数的自然对数（底为e）
max(x,y)  返回两者中最大值
min(x,y)  返回两者中最小值
pow(x,y)  返回x的y次方
random()  返回0-1之间的随机数 [0,1)
round(x)  对数进行四舍五入,返回与 x 最接近的整数。对于 0.5，该方法将进行上舍入。(5.5 将舍入为 6),如果 x 与两侧整数同等接近，则结果接近 +∞方向的数字值 。如 -5.5 将舍入为 -5; -5.52 将舍入为 -6。
sin(x)  返回数的正弦值
sqrt(x) 返回数的平方根
tan(x)  返回数的正切值
toSource()  返回该对象的源代码
valueOf() 返回Math对象的原始值

## Array 对象
数组属性
1. 数组对象.length 返回数组的长度
数组方法
1. concat() 连接两个或更多的数组，此方法返回一个新数组，不改变原来的数组  
2. join(分隔符) 把数组的所有元素放入一个字符串，元素通过指定的分隔符进行分隔，若省略分隔符则使用','作为分隔符
3. pop() 删除并返回数组的最后一个元素
4. push() 向数组的末尾添加一个或更多元素，并返回新的长度
5. reverse() 颠倒数组中元素的顺序
6. shift() 删除并返回数组的第一个元素
7. slice(strat,end) 从某个已有的数组返回选定的元素,不包括end位置元素，不会修改数组，而是返回一个子数组。可使用负值从数组的尾部选取元素。如果 end 未被规定，那么 slice() 方法会选取从 start 到数组结尾的所有元素
8. sort(方法函数) 对数组的元素进行排序，如果不指定<方法函数>，则按unicode码顺序排列。如果指定<方法函数>，则按<方法函数>所指定的排序方法排序。返回值是对数组的引用，数组在原数组上进行排序，不产生副本。 
  该函数要比较两个值，然后返回一个用于说明这两个值的相对顺序的数字。比较函数应该具有两个参数 a 和 b，其返回值如下： 
    若返回值<=-1，则表示 A 在排序后的序列中出现在 B 之前。
    若返回值>-1 && <1，则表示 A 和 B 具有相同的排序顺序。
    若返回值>=1，则表示 A 在排序后的序列中出现在 B 之后。
9. splice() 删除元素，并向数组添加新元素
10. toSource() 返回该对象的源代码
11. toString() 把数组转化为字符串，并返回结果
12. toLocaleString() 把数组转换为本地数组，并返回结果
13. unshift() 向数组的开头添加一个或更多元素，并返回新的长度
14. valueOf() 返回数组对象的原始值

##  window 对象方法
alert() 显示带有一段消息和一个确认信息按钮的警告框
prompt()  显示可提示用户输入的对话框
confirm() 显示带有一段消息及确认按钮和取消按钮的对话框
open()  打开一个新的浏览器窗口或查找一个已命名的窗口
close() 关闭浏览器窗口
print() 打印当前窗口的内容
focus() 把键盘焦点给予一个窗口
blur()  把键盘焦点从顶层窗口移开
moveBy()  可相对窗口的当前坐标把它移动移动指定的像素
moveTo()  把窗口的左上角移动到一个指定的坐标
resizeBy()  按照指定的像素调整窗口的大小
resizeTo()  把窗口的大小调整到指定的宽度和高度
scrollBy()  按照指定的像素值来滚动内容
scrollTo()  把内容滚动到指定的坐标
setInterval() 每隔指定的时间执行代码,也就是说循环执行
setTimeout()  在指定的延迟时间之后来执行代码，也就是说只执行一次
clearInterval() 取消setInterval()的设置
clearTimeout()  取消setTimeout()的设置

##  History对象
**history对象记录了用户曾经浏览过的页面(URL)，并可以实现浏览器前进与后退相似导航的功能。从窗口被打开的那一刻开始记录，每个浏览器窗口、每个标签页乃至每个框架，都有自己的history对象与特定的window对象关联**
window.history.[属性|方法]  （window可以省略）
history对象属性
history.length  返回浏览器历史列表中URL的数量
History对象方法
back()  加载history列表中前一个URL
forword() 加载history列表中的下一个URL
go()  加载history列表中的某个具体的页面






