title: python学习笔记(2-urllib2-beautifulSoup)
date: 2016-09-13 23:40:34
tags: [python]
---

> 以下代码是基于python 2.7.12, 在此版本下，print不用加括号，后续新版本是需要加上括号的。
> 文件开头需要加上#coding=utf-8, 否则中文注释会报错，这是由于Phthon源码必须完全由ASCII集合组成。

### 实现一个简易python爬虫准备

#### urllib2网页下载器测试代码:

```
#coding=utf-8
import urllib2, cookielib

URL = 'http://www.baidu.com'

#直接请求
response = urllib2.urlopen('http://www.baidu.com')

#获取状态码，如果是200,则表示获取成功
print response.getcode()

#读取内容
cont = response.read()

#print cont

#创建Requst对象
request = urllib2.Request(URL)

#添加数据
#request.add_data('a', '1')

#添加http header
request.add_header('User-Agent', 'Mozilla/5.0')

response2 = urllib2.urlopen(request)

#print response2.read()

#创建cookie容器
cj = cookielib.CookieJar()

#创建一个opener
opener = urllib2.build_opener(urllib2.HTTPCookieProcessor(cj))

#给urllib2 安装opener
urllib2.install_opener(opener)

#使用带有cookie 的urllib2 访问网页
response3 = urllib2.urlopen(URL)

print cj
print response3.read()

##

```

<!-- more -->

#### 网页解析器，第三方模块 Beautiful Soup
官方网址： [https://www.crummy.com/software/BeautifulSoup/bs4/doc/](https://www.crummy.com/software/BeautifulSoup/bs4/doc/)
+ 如果电脑里有`pip`的话，可以直接输入 `pip install beautifulsoup4` 安装。
输入`pip list`, 可以查看是否安装成功。
+ 如果是mac, 通过Homebrew装了多版本的pyhton的话，可以通过`pip2`, `pip3`,来选择安装在哪个版本下。

Beautiful Soup网页解析器测试代码:
```
#coding=utf-8

import re
from bs4 import BeautifulSoup

html_doc = """
<html><head><title>The Dormouse's story</title></head>
<body>
<p class="title"><b>The Dormouse's story</b></p>

<p class="story">Once upon a time there were three little sisters; and their names were
<a href="http://example.com/elsie" class="sister" id="link1">Elsie</a>,
<a href="http://example.com/lacie" class="sister" id="link2">Lacie</a> and
<a href="http://example.com/tillie" class="sister" id="link3">Tillie</a>;
and they lived at the bottom of a well.</p>

<p class="story">...</p>
"""

soup = BeautifulSoup( html_doc, 'html.parser', from_encoding='utf-8')

print '获取所有的连接'
links = soup.find_all('a')
for link in links:
    print link.name, link['href'], link.get_text()

print '获取lacie的连接'
link_node = soup.find('a', href='http://example.com/lacie')
print link_node.name, link_node['href'], link_node.get_text()

print '正则匹配'
link_node = soup.find('a', href=re.compile(r'ill'))
print link_node.name, link_node['href'], link_node.get_text()

print '获取Ｐ段落文字'
p_node = soup.find('p', class_="title")
print p_node.name, p_node.get_text()

```
