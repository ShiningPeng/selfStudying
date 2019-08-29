## 一个页面从输入url到页面加载显示完成，这个过程发生了什么
  1. 浏览器的地址栏输入URL并按下回车。
  2. 浏览器查找当前URL是否存在缓存，并比较缓存是否过期。
  3. DNS解析URL对应的IP。
  4. 根据IP建立TCP连接（三次握手）。
  5. HTTP发起请求。
  6. 服务器处理请求，浏览器接收HTTP响应。
  7. 渲染页面，构建DOM树。
  8. 关闭TCP连接（四次挥手）。


三次握手和四次挥手

##  Cookie, sessionStorage, localStorage的区别
- Cookie: 数据始终在同源的http请求中携带（即使不需要），即cookie在浏览器和服务器之间来回传递，又要有接口请求，cookie就会自己上车。而sessionStorage 和 localStorage 不会自动把数据发给服务器，仅在本地保存。cookie还有路径(path)的概念，可以限制cookie只属于某个路径下，这里就是cookie会自己上车，但是指明上哪辆车，存储大小只有4k左右。

- sessionStorage：仅在当前浏览器窗口关闭前有效，不能长久保存。

- localStorage: 在所有的同源窗口都是共享的，cookie也是在所有同源窗口中共享,localStorage的存储大小在5M左右
- token放在cookie中在http请求可以每次自动返回给后端

## http状态码
400 Bad request（错误请求）
401.1 Logon failed（登录失败）
401.2 Logon failed due to server configuration（由于服务器配置，登录失败）
401.3 Unauthorized due to ACL on resource（由于资源上的 ACL，未授权）
401.4 Authorization failed by filter（由于筛选器，授权失败）
401.5 Authorization failed by ISAPI/CGI application （由于 ISAPI/CGI 应用程序，授权失败）
403.1 Execute access forbidden（执行访问被禁止）
403.2 Read access forbidden（读取访问被禁止）
403.3 Write access forbidden（写入访问被禁止）
403.4 SSL required（要求 SSL ）
403.5 SSL 128 required（要求 SSL 128）
403.6 IP address rejected （IP 地址被拒绝）
403.7 Client certificate required（要求客户证书）
403.8 Site access denied（站点访问被拒绝）
403.9 Too many users（用户太多）
403.10 Invalid configuration（无效的配置）
403.11 Password change（密码更改）
403.12 Mapper denied access（映射程序拒绝访问）
403.13 Client certificate revoked（客户证书被取消）
403.14 Directory listing denied（目录列表被拒绝）
403.15 Client Access Licenses exceeded（超出客户访问许可证）
403.16 Client certificate untrusted or invalid（客户证书不受信任或无效）
403.17 Client certificate has expired or is not yet valid（客户证书已过期或无效）
404 Not found（没有找到）
404.1 Site not found（站点没有找到）
405 Method not allowed（不允许使用该方法）
406 Not acceptable（不接受）
407 Proxy authentication required（要求代理身份验证）
412 Precondition Failed（前提条件不正确）
414 Request-URL too long（请求的 URL 太长）

500 Internal server error（内部服务器错误）
500.12 Application restarting（应用程序重新启动）
500.13 Server too busy（服务器太忙）
500.15 Requests for Global.asa not allowed（不允许请求 Global.asa）
500-100.asp ASP 错误
501 Not implemented（没有实施）
502 Bad gateway（错误网关）

## 浏览器的重绘和回流(重排)
  浏览器渲染页面的过程
  1. 解析HTML，生成DOM树，解析CSS，生成CSSOM树
  2. 将DOM树和CSSOM树结合生成 Render Tree 渲染树
  3. 回流：根据生成的render树，进行回流，是为了得到节点的几何信息
  4. 重绘：根据render树和回流得到的信息，得到节点的绝对像素
  5. 将像素发给GPU，展示在页面上。
    **回流必将引起重绘，重绘不一定会引起回流**
- 当Render Tree中部分或全部元素的尺寸、结构、或某些属性发生改变时，浏览器重新渲染部分或全部文档的过程称为回流
- 当页面中元素样式的改变并不影响它在文档流中的位置时（例如：color、background-color、visibility等），浏览器会将新样式赋予给元素并重新绘制它，这个过程称为重绘。