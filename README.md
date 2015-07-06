# Minos

### A simple Hexo theme.
#### >> [Demo](http://blog.zhangyingwei.com/)
![Box - An Hexo theme](http://7vzt96.com1.z0.glb.clouddn.com/theme_theme.jpg "")

## Installation

### Install

``` bash
$ git clone https://github.com/zhangyingwei/hexo-theme-box.git themes/box
```

**Box requires Hexo 3.0 and above.**

### Enable

Modify `theme` setting in `_config.yml` to `box`.

### Update

``` bash
cd themes/box
git pull
```

## Configuration

### Theme configuration example
```
# Header
menu:
  主页: /
  归档: archives
  分类: categories
  标签云: tags
  关于我: about

# Content
excerpt_link: Read More
fancybox: true

# Miscellaneous
google_analytics:
favicon: /favicon.png

myduoshuo:
  enable: true  ## duoshuo.com
  short_name: your dhuoshuo name ## e.g. coney,duoshuo short name.

rss: /atom.xml

```

## Languages

English and Simplified Chinese are the default languages of the theme. You can add translations in the `languages` folder and change the default language in site's `_config.yml`.

``` yml
language: zh-CN
```