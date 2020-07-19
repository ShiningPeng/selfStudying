## 介绍react整个项目目录结构
- readme.md
    - 对项目的说明
- package.json
    - 第三方包管理工具和配置文件
- package-lock.json
    - 锁定安装时的版本号，保证别人下载项目时版本号一致，使项目能够跑起来
- .gitignore
    - git 上传的管理文件，忽略一些文件的上传，如node_modules
- node_modules
    - 下载的第三方包
- public
    - 公用的文件
    - favicon.ico 显示网站的图标
    - index.html 模板文件，noscript是容错处理，健壮性，当js受到阻止或者没有跑成，会显示js开启失败
    - manifest.json 移动端的配置，开发移动端网页时
- src
    - 源代码目录，代码基本都写在其中，
    - index.js 项目的入口文件

## 函数式编程的特点
    - 代码清晰，一个函数负责一个功能或者渲染
    - 方便测试