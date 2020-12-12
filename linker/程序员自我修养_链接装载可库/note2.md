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


