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
elf 魔数
对应的是 elf.h里面的
```
typedef struct{
    unsigned char e_ident[16],
    ....
}
```
![alt MAGIC](./imgs/magic1.png)

```
上面的16byte数据被用来标识elf文件的平台属性
    1.前4个byte 是所有elf文件都必须相同的  0x7f 0x45 0x4c 0x46
          7f 是ascii del控制符
          0x45 ascii E
          0x4c ascii L
          0x46 ascii F
    这四个字节又叫做elf的魔数 


    几乎所有的可执行文件格式开始的这几个字节都是魔数
       a.out   0x01 0x07
       pe/coff   0x4d 0x5a  (mz)
        
        操作系统在加载可执行文件的时候会确定魔数是否正确，来决定是否进行加载
```


