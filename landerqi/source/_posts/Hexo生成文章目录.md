title: Hexo生成文章目录
date: 2015-12-08 22:18:36
tags: hexo
---

当一篇文章非常长，又没有目录，是非常难阅读的。所以为了使博客体验更好、博文结构更加清晰、读者更易找到文章中自己需要的部分，添加文章目录是非常必要的。
<!-- more -->
<!-- toc -->

### hexo-toc插件
此插件可以生成文章目录。
#### 安装
在博客根目录下运行：
`npm install hexo-toc --save`
#### 配置
在博客根目录下的 `_config.yml` 中如下配置：
```
#文章目录
toc:
    maxDepth: 3 //表示目录深度为3，即最多生成三级目录
```

__重启hexo，就可以看到生成的文章目录了__

但是此时生成的文章目录没有样式，很丑，所以我们需要自己定制一下样式。

### hexo-toc文章目录样式定制
审查元素会发现，插件自动生成的Dom结构是：
```
<!-- toc -->
<ul>
    <li>
        <a></a>
    </li>
    <li>
        <a></a>
    </li>
</ul>
<!-- tocstop -->

```
这样的结构没有选择器给你添加样式，所以需要在主题里面的
`article.ejs(themes/lightqi/layout/_partial/article.ejs)`底部加入以下代码：
```
<% if (!index &&theme.toc){ %>
<script>
  var tocEx = function(el){
    var toc = document.querySelector(el), content = toc.innerHTML;
    content = content.replace('<!-- toc -->', '<div class="toc"><b>文章目录</b>').replace('<!-- tocstop -->', '</div>');
    toc.innerHTML = content;
  }('.entry');
</script>
<% } %>
```
这样就会把上面的Dom结构修改成如下：
```
<div class="toc">
    <b>文章目录</b>
    <ul>
        <li>
            <a></a>
        </li>
        <li>
            <a></a>
        </li>
    </ul>
</div>
```
这样就可以给Div添加样式了。在主题`themes/lightqi/source/css/_partial/article.styl` 中添加如下样式：
```
.toc
  b
    margin-top 10px
    display block
    margin-bottom -8px
    font-size 16px
  right 10px
  float right
  margin-bottom 20px
  top 10px
  width: 200px
  margin-left 40px
  padding 10px 20px
  background #f8f8f8
  ul
    li
      margin 10px 0
      a
        color #666
```
大功告成！
