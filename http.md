 一个页面从输入url到页面加载显示完成，这个过程发生了什么
  输入url => 判断缓存 => DNS解析 => TCP连接(三次握手) => 发送HTTP请求 => 服务器处理请求并返回HTTP报文 => 浏览器解析渲染页面 => 关闭TCP连接(四次挥手)

  1、浏览器的地址栏输入URL并按下回车。
  2、浏览器查找当前URL是否存在缓存，并比较缓存是否过期。
  3、DNS解析URL对应的IP。
  4、根据IP建立TCP连接（三次握手）。
  5、HTTP发起请求。
  6、服务器处理请求，浏览器接收HTTP响应。
  7、渲染页面，构建DOM树。
  8、关闭TCP连接（四次挥手）。


三次握手和四次挥手

##  Cookie, sessionStorage, localStorage的区别
Cookie: 数据始终在同源的http请求中携带（即使不需要），即cookie在浏览器和服务器之间来回传递，又要有接口请求，cookie就会自己上车。而sessionStorage 和 localStorage 不会自动把数据发给服务器，仅在本地保存。cookie还有路径(path)的概念，可以限制cookie只属于某个路径下，这里就是cookie会自己上车，但是指明上哪辆车，存储大小只有4k左右。

sessionStorage：仅在当前浏览器窗口关闭前有效，不能长久保存。

localStorage: 在所有的同源窗口都是共享的，cookie也是在所有同源窗口中共享,localStorage的存储大小在5M左右
token放在cookie中在http请求可以每次自动返回给后端
