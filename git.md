## 对于git提交新的仓库：
- 文件先git init 初始化，
- 配置用户，
1. git config --global user.name "github用户名"，
2. git config --global user.email "github设置的邮箱"
- 使用git add . 添加整个文件夹到暂存区
- git commit -m '提交备注' 
- git  remote add origin 仓库所在的网址
- git push -u origin master 由于是第一次提交，仓库是空的，所以需要加-u参数

## git提交步骤（已绑定提交仓库）
- git add 文件名/文件夹名
- git commit -m '所提交文件的备注信息'
- git pull	将远程仓库拉倒本地
- git push  //提交到远程仓库上

## 有关分支
- git branch     //查看所有分支
- git branch 分支名    //创建分支
- git checkout 分支名     //切换header指向到此分支上
- git branch -d 分支名         //删除分支
- git merge 分支名          //合并分支
- git branch -v    //查看每一个分支的最后一次提交
- git branch --merged     //查看哪些分支已经合并到当前分支

##### 在本地初始化git init之后会生成一个.git文件，拥有此文件的文件夹就是一个本地git仓库，在这个目录的子目录或者孙子目录...中不允许存在.git文件了，也就是说git仓库是不允许嵌套的，否则会导致文件上传失败的报错

## 删除github仓库上的文件步骤：
- 可以在需要删除文件的本地的目录打开git命令行
- git pull origin master  将远程项目拉下来
- dir 查看有哪些文件夹
- git rm -r --cached 文件名或文件夹名
- git commit -m '备注信息'    提交删除操作说明
- git push origin master  将本次更改更新到github项目上去

## 这些是在各种情况下使用的常见git命令：
1. 启动工作区（另请参见：Git帮助教程）
	- clone  将存储库克隆到新目录中
	- init     创建空的git存储库或重新初始化现有存储库
2. 处理当前更改（另请参阅：每日Git帮助）
	- add 	向索引添加添加文件内容
	- mv	移动或重命名文件、目录或符号链接
	- reset	将当前磁头重置为指定状态
	- rm	从工作树和索引中删除文件
3. 检查历史记录和状态（另请参见：git帮助修订）
	- bisect	对分使用二进制搜索查找引入错误的提交
	- grep	与图案匹配的灰色打印线条
	- log	日志显示提交日志
	- show	显示显示各种类型的对象
	- status	状态显示工作树状态
4. 成长，标记和调整你的共同历史
	- branch	分支列表、创建或删除分支
	- checkout	签出交换机分支或还原工作树文件
	- commit	将记录更改提交到存储库
	- diff	显示提交、提交和工作树等之间的更改
	- merge	合并将两个或多个开发历史记录合并在一起
	- rebase	在另一个基本提示上重新设置重新应用提交
	- tag	标记创建、列出、删除或验证用GPG签名的标记对象
5. 协作（另请参见：Git帮助工作流）
	- fetch	从另一个存储库获取下载对象和引用
	- pull	从另一个存储库或本地分支中提取并集成
	- push	推送更新远程引用以及关联的对象

## 关于报错fatal: refusing to merge unrelated histories（拒绝合并不相关的历史）
此时需要先执行 git pull origin master --allow-unrelated-histories,将远程仓库拉取到本地仓库，成功之后再进行push操作，就可以把本地仓库的内容推送到远程仓库。

## 查看当前git用户名和邮箱：
- git config user.name
- git config user.email

## 配置提交远程仓库https方式：git remote add origin 远程仓库网址

## 解决了一个困扰
解决了一个困扰了我几天的git 提交问题，可能是我的不正确的git pull 操作，导致我的一些文件中都存在了.git文件，所以之后push操作时一直都无法正常推送，偶然这次提交的时候报了一个这样的错误warning: adding embedded git repository，以前好像没有出现，百度之后立马就找到了解决方案，只需要把本地这些文件的.git文件删除即可，之后就可以正常的add,commit,push了。

# ！！！git pull origin master
在使用这个命令的时候一定要看清楚目录是在哪

## 报错：fatal:'origin' does not appear to be a git repository
fatal:Could not read from remote repository
原因：本地分支和远程分支断开连接
解决：git remote add origin 仓库网址
git remote -v查看是否连接上了

## git clone报错
Please make sure you have the correct access rights	and the repository exists.
克隆时没有权限，这时只需要fork一下，拉到自己的仓库，再克隆自己的仓库到本地就可以了



## git工作流
**仅个人工作经验**
- 接到一个新的需求，确认好自己的工作内容后新建一个分支
- git cheakout -b 新分支名（比如20210907/pcr/zhiZhuZhiPai）
- 在自己新建的分支上完成自己的任务
- 通常是在联调测试过后，自己的代码没有问题了，这个时候就可以合并到master分支了
	- 但如果没有通过测试就把代码合并到了master上，需要有权限的人比如组长才能进行修改，在master上直接操作；
	- 不过一般在自己合并代码的时候需要组长同意才能合并，口头上需要和组长讲
	- 而且gitlab上也会有限制，你合并代码时相当于提交了一个合并代码的请求，需要组长通过之后你的代码才会真正合并
	- 合并之前需要注意的是，需要先拉取主分支上其他同事的代码，不然会产生冲突
	- git checkout master; git pull;(使本地master分支有其他同事的代码) git merge 20210907/pcr/zhiZhuZhiPai;
	- 等组长通过了请求，你的代码就合并到了主分支上了
- 可以使用命令行来操作，或者vscode自带的git操作（界面左侧从上往下第三个tab），当然也可以使用图形化的工具，比如sourceTree


