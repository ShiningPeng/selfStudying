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


