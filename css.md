## 文字不换行，超出则隐藏并打点
- white-space:nowrap;  //强制一行显示
- overflow:hidden;   //超出隐藏
- text-overflow:ellipsis; //打点


## 弹性布局水平垂直居中
1. 方法一：
	- display:flex;
	- align-items:center; //垂直居中
	- justify-content:center; //水平居中

2. 方法二：
	- 父容器:position:relative
	- 子容器:position:absolute
	- top:0; left:0; transition:transform(-50%,-50%);

## 弹性布局
- X轴弹性布局，继承父容器的宽度
- Y轴弹性布局,继承父容器的高度
- flex-direction:column;

## 伪圣杯布局
- flex: 0 0 45px

## hsla()
颜色定义类似于rgba(7, 17, 27, 0.8),rgba使用的是二进制，hsla()使用的是另外一种格式，hsla(0, 0%, 100%, 0.5)

## 行内标签（inline-block）
不支持直接修改宽高属性,display设置为block之后才可以修改


**css面试**

## 一、css盒模型
1. css中的盒子模型包括IE盒子模型和标准的W3C盒子模型。
- border-sizing: border-box, inherit, content-box
- 标准盒子模型： 左右border+左右padding+contentwidth
- IE盒子模型border-box: width = content+padding+border 元素指定的任何内边距和边框都将在已设定的宽度和高度内进行绘制
- inherit: 从父类继承box-sizing的值

## 二、前端一像素问题（画一条0.5px的线）
- transform: scaleY（0.5） 使用伪元素设置1px的边框，然后对边框进行缩放(s
caleY)
　实现思路：
     1、设定目标元素的参考位置
     2、给目标元素添加一个伪元素before或者after，并设置绝对定位
     3、给伪元素添加1px的边框
     4、用box-sizing: border-box 属性把边框都包进宽和高里面
     5、宽和高设置为 200%
     6、整个盒子模型缩小为0.5
     7、调整盒子模型的位置，以左上角为基准 transform-origin: 0 0;
- border-image 设置图片的边框

## 三、4.transition和animation的区别
Animation和transition大部分属性是相同的，他们都是随时间改变元素的属性值，他们的主要区别是transition需要触发一个事件才能改变属性，
而animation不需要触发任何事件的情况下才会随时间改变属性值，并且transition为2帧，从from .... to，而animation可以一帧一帧的。
	
transition 规定动画的名字  规定完成过渡效果需要多少秒或毫秒  规定速度效果  定义过渡效果何时开始
animation  指定要绑定到选择器的关键帧的名称
	

## 四、不定宽高的DIV居中	
1. 使用flex  在父盒子设置display: flex; justify-content: center;align-items: center
2. 使用css的transform  	
	- 父盒子设置:display:relative
	 - Div 设置: transform: translate(-50%，-50%);position: absolute;top: 50%;left: 50%;
3. display：table-cell   
	- 父盒子设置:display:table-cell; text-align:center;vertical-align:middle;
	- Div 设置: display:inline-block;vertical-align:middle;
		
## 五、浮动 https://juejin.im/post/5a954add6fb9a06348538c0d
- 特性：浮动元素影响的不仅是自己，他会影响周围元素对其进行环绕
- 为什么要清除浮动？（解决父元素高度坍陷问题）
	一个块级元素如果没有设置height,其height由子元素撑开，对子元素使用了浮动之后，子元素就会脱离文档流。也就是说，父及元素中没有内容可以撑开其高度，这样父级元素height就会被忽略。这就是所谓的高度坍塌
- 如何清除浮动
	1. 给父级元素定义高度 
	2. 让父级元素也浮动 
	3. 父级定义display:table 
	4. - 父元素设置overflow:hidden 
	- clearfix:使用内容生成的方式清除浮动
	- .clearfix:after {  // :after选择器向选定的元素之后插入内容
   			content:""; // 生成内容为空
   			display: block; // 块级元素显示
   			clear:both; // 清除前面元素
			}
	- 不破坏文档流，没有副作用

## 七、position
	值：relative,static（默认值）,absolute,sticky,fixed
	absolute会根据上一级position的值不为static进行定位，如果向上一直没有找到position，则相对整个body进行定位
	fixe相对的是视图的窗口，或者frame框架（setFram的子框架，一种html标签）

## 八、css选择器分类：
- 基本的：
	1. id选择器（id="name"）
	2. 类选择器（class="head"）
	3. 标签选择器（body, div, ul, li）
	4. 全局选择器（*）
- 复杂的：
	1. 组合选择器（.head .head_logo）
	2. 后代选择器 （#head .nav ul li 从父集到子孙集）
	3. 群组选择器 (div, span, img {color:Red} 具有相同样式的标签分组显示)
	4. 继承选择器
	5. 伪类选择器（链接样式，a元素的伪类）
	6. 子选择器（div>p, 带大于号>）
	7. CSS相邻相邻兄弟选择器（h1+p, 带加号+）

## 九、CSS优先级
- 不同级别：总结排序：!important > 行内样式>ID选择器 > 类选择器 > 标签 > 通配符 > 继承 > 浏览器默认属性
	1. 属性后面加!import 会覆盖页面内任何位置定义的元素样式
	2. 作为style属性写在元素内的样式
	3. id选择器
	4. 类选择器
	5. 标签选择器
	6. 通配符选择器（*）
	7. 浏览器自定义或继承
- 同一级别：后写的会覆盖先写的
- css选择器的解析原则：选择器定位DOM元素是从右往左的方向，这样可以尽早的过滤掉一些不必要的样式规则和元素


