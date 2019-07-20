##文字不换行，超出则隐藏并打点
white-space:nowrap;  //强制一行显示
overflow:hidden;   //超出隐藏
text-overflow:ellipsis; //打点


##弹性布局水平垂直居中
display:flex;
align-items:center; //垂直居中
justify-content:center; //水平居中

#弹性布局
X轴弹性布局，继承父容器的宽度
Y轴弹性布局,继承父容器的高度
flex-direction:column;

#伪圣杯布局
flex: 0 0 45px

#hsla()
颜色定义类似于rgba(7, 17, 27, 0.8),rgba使用的是二进制，hsla()使用的是另外一种格式，hsla(0, 0%, 100%, 0.5)

#行内标签（inline-block）
不支持直接修改宽高属性,display设置为block之后才可以修改
