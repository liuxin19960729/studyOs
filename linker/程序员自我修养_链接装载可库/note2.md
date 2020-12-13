# 目标文件里面有什么

### 目标文件的格式
```
    采用elf文件标准的分类
        1可重定位文件 
            包含数据和代码，被连接起来生成可执行文件      linux x.o   win x.obj
        2可执行文件
           x.exe   liunx  /bin/bash文件等

        3共享目标文件
            包含数据和代码
            两种情况下可以使用
                连接器下使用
                    这种文件和共享目标文件产生新的目标文件
                动态连接器
                    将几个这种共享目标文件结合作为进程映像的一部分来运行
        4.核心转储文件
            进程意外终止将进程的一些信息和地址空间转储到核心的存储文件  
            （linux core dump）                      
```

```
在linux下使用file 命令查看相应的文件类型



[root@VM_0_4_centos text]# file liuxin (
liuxin: ELF 64-bit LSB executable该文件是一个可执行的文件), x86-64, version 1 (SYSV), dynamically linked (uses shared libs), for GNU/Linux 2.6.32, BuildID[sha1]=947a4fc4f06768bf90df6a8a23483dfa0f138698, not stripped

[root@VM_0_4_centos text]# file main.o
main.o: ELF 64-bit LSB relocatable(该文件是一个重定向的文件), x86-64, version 1 (SYSV), not stripped
```


### 目标文件是怎么样的

```
目标文件包含的东西
    编译后的指令代码和数据
     和一些链接必须要使用的信息
        符号表
        调试信息
        字符串

    这些信息按照Section(节)的形式进行存储


   程序进行编译后
        指令放在代码段  .code  或 .text

        全局变量和静态变量放在数据段里面 .data

```


图

![alt sectin1](./imgs/codesections.png)

假设上面的图编译后是可执行文件或者是目标文件文件的格式是elf

elf 开头是文件 file header 
    描述文件是否克是可执行文件，目标硬件和目标操作系统的描述
    还包含一个段表（section table）
        段表：描述文件中各个段的数组,描述了各个段在文件中的偏移位置和段的属性,重段表中可以得到每个段的所有信息

.text 机器码指令

.data 全局变量和静态变量

.bss 未初始化的全局变量和静态变量


分段机制的好处
    实现不同内存段的权限
        代码 读
        数据 读和写
    提高cpu缓存命中率
        cpu缓存一般被设计数据缓存和指令缓存

    3. 当我们打开多个同一程序的 时候 ，他们的指令都是一样的，在内存里只需要保存一份可修改的指令部分就可以了。（每个程序的继承保留自己私有改程序部分）
          这样做为我们解决了大量的空间
     查看进程相关信息软件
    https://docs.microsoft.com/zh-cn/sysinternals/downloads/process-explorer




### 挖掘SimpleSectin.o

```

.text 机器码指令

.data 全局变量和静态变量

.bss 未初始化的全局变量和静态变量

.rodata 只读数据段

 .comment 注释信息数据段





[root@VM_0_4_centos 01]# objdump -h app

app:     file format elf64-x86-64

Sections:
Idx Name          Size     VMA               LMA               File off  Algn
 13 .text         00000262  0000000000400430  0000000000400430  00000430  2**4
                  CONTENTS, ALLOC, LOAD, READONLY, CODE

Size:表示段的长度
FileOffset:段所在的位置

 CONTENTS, ALLOC....., 表示段的各种属性
    CONTENTS：表示该段在文件中存在




```

![alt elf结构](./imgs/elfdata.png)
![alt elf结构](./imgs/elf结构.png)

```
size 命令
    查看elf .data .text .bss 的长度
size app
   text    data     bss     dec(三个段的长度)    hex（长度的16进制） filename
   1524     544       8    2076     81c app
```



### 代码段

```
 objdump -s  -d app
    -s 将段里面的所有内容以16进制展示出来
    -d 将包含指令的段进行反汇编
```