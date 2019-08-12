title: 迁移博客至gitcafe
date: 2015-12-08 21:43:13
tags: hexo
---

由于各种原因，决定把博客由`github`迁移至`gitcafe`
<!-- more -->
<!-- toc -->
#### 准备工作：
+ 注册gitcafe并创建一个与用户名同名的项目，必须是公开项目。
+ 在SSH公钥管理中，填写电脑上保存的公钥。不知道如何设置的同学可以参考[这里](http://landerqi.com/2015/06/04/github%E7%94%9F%E6%88%90SSH-keys/)
+ 去`hexo\_config.yml`添加如下代码（用户名和项目名替换为自己的)：
```
deploy:
  type: git
  repo: git@gitcafe.com:landerqi/landerqi.git
  branch: gitcafe-pages
```
+ 保存之后，用`hexo deploy`布署到`gitcafe`上即可。

__如果需要绑定私有域名，可以参考[这里](https://gitcafe.com/GitCafe/Help/wiki/Pages-%E7%9B%B8%E5%85%B3%E5%B8%AE%E5%8A%A9)__

#### 迁移之后的好处：
+ GitCafe 是国内的，所以在国内访问速度比github快（切换到GitCafe之后ping 域名的返回时间都在20mm左右，之前在github上返回时间都在300mm左右）
+ github 屏蔽了百度的爬虫（官方解释是百度的爬虫太过暴力了），所以用百度是搜索不到你的博客的。
+ 由于国内某些原因导致github 的服务不是那么稳定，大家都懂的 ：）。
