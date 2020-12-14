## elf文件的结构描述

### elf header 头文件
```
readelf -h xxxx.o

elf 文件头结构及相关常熟被定义在 /usr/include/elf.h里面

elf.h 头文件有两个版本 elf32_ehdr   elf64_ehdr

elf.h 里面的内容是通用的但是他们的大小存在差异 他们使用typedef 定义了一套自己的变量体系
    typedef  使用
    typedef 原来类型   新类型

```
