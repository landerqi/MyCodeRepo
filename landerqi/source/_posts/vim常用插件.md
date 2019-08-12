title: vim常用插件
date: 2016-03-17 16:24:23
tags: [工具]
---

vim 是一款非常棒的编辑器，可能大家刚接触的时候会不适应，但是一旦用起来习惯后，会发现vim实在是一款非常有魅力的编辑器。我记得自己刚开始接触vim的时候，每次安装插件都被折磨的要死，安装过程繁琐，有些文档也写的不详细，一度想要放弃vim。后来发现有款叫`Pathogen`的插件，简直如或至宝，通过这款插件去安装、管理vim的插件真是太方便了。终于可以轻轻松松管理vim插件了，下面我为大家推介几款实用的vim插件。

<!-- more -->
<!-- toc -->

### Pathogen
([项目地址](https://github.com/tpope/vim-pathogen))

它是一款插件管理插件，有了它安装管理vim插件会非常的便捷，强烈推荐大家优先安装这款插件。
安装至`~/.vim/autoload/pathogen.vim`, 或者执行下面命令：
```
mkdir -p ~/.vim/autoload ~/.vim/bundle && \
curl -LSso ~/.vim/autoload/pathogen.vim https://tpo.pe/pathogen.vim
```
Windows系统中，把`~\vim`改成`~\vimfiles`。
然后在你的配置文件`vimrc`中添加：
```
execute pathogen#infect()
```
之后插件只要两条简单的命令就可以安装好了:
```
cd ~/.vim/bundle    //到bundle插件安装目录
git clone git://github.com/tpope/vim-xxx.git //插件github地址
```

### Syntastic
([项目地址](https://github.com/scrooloose/syntastic))

语法
`jshint2.vim`插件装在gvim上之后，启动变慢了好多，删了之后基本秒开。
安装：
```
cd ~/.vim/bundle && \
git clone https://github.com/scrooloose/syntastic.git
```

