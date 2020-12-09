```
gcc main.c
./main.out

包含4个过程
    预处理
    编译
    汇编
    链接
```
![alt gcc编译过程分解](./imgs/gccCom.png)

gcc build(构建)的4个过程解释
### 预编译
```
   源文件的头文件进行一个编译
   例：
        main.c 文件用了头文件 stdio.h,stido.h会预编器编译成一个 stdio.i的文件


        gcc -E  hello.c -o hello.i
        cpp xxx.c  >xxx.i

    预编译过程主要做的事情
        1.#define 删除 并把所有定义的宏展开替换
        2.处理所有条件预编译指令 #if #ifndef ....
        3.处理#include 把包含的文件插入到当前预处理器的位置(递归，可能包含里面还有包含)
        4.删除所有的注释 // 和 /**/
        5.添加行号和文件名标识 比如 #2 "hello.c" 2 这样做主要用于编译报错警告打印相关信息
        6.保留所以的#pragma 编译器指令，因为编译器要使用

xxx.i文件是经过预编译的文件里面所有的预编译指令都被展开 包含条件 预处理指令。
这个文件也可以检查预处理条件和预处理指令是否正确
```

### 编译
```
就是把预处理完的文件进行一系列词法分析，语法分析，语义分析和优化后生产的汇编代码文件文件。

gcc -S hello.i -o hello.s

hello.s 就是汇编输出文件



main.s代码(gcc编译成汇编代码)
        .file   "main.c"
        .section        .rodata
.LC0:
        .string "hello world"
        .text
        .globl  main1
        .type   main1, @function
main1:
.LFB0:
        .cfi_startproc
        pushq   %rbp
        .cfi_def_cfa_offset 16
        .cfi_offset 6, -16
        movq    %rsp, %rbp
        .cfi_def_cfa_register 6
        movl    $.LC0, %edi
        movl    $0, %eax
        call    printf
        movl    $0, %eax
        popq    %rbp
        .cfi_def_cfa 7, 8
        ret
        .cfi_endproc
.LFE0:
        .size   main1, .-main1
        .ident  "GCC: (GNU) 4.8.5 20150623 (Red Hat 4.8.5-39)"
        .section        .note.GNU-stack,"",@progbits

```

### 汇编

```
汇编器是将汇编代码转变为机器可以执行的命令
        汇编器不像编器器那样复杂词法分析等，他就是把汇编指令翻译成计算机能认识的机器码

        as  xxx.s    -o  xxx.o

        获取

        gcc -c hello.s -o hello.o

        gcc -c  其实也能直接重  .c文件 通过预编译 编译 汇编直接生成目标文件(xxx.o)的
        文件



```


### 链接

怎样链接才能使helloword程序跑起来
![alt gcc编译过程分解](./imgs/hellowordld.png)

###  后面的知识是对前面图片的解释

#### 编译器做了什么
```
定义： 编译器将高级语言编译成机器语言的一个工具

从源代码到目标文件编译器需要做的事

1.扫描
2.语法分析
3.语义分析
4.源代码优化
5.代码生成
6.目标代码优化


例子
        array [index]=(index+4)*(2+6);
        XXX.c文件的代码


        1.首先被输入到扫描器
                进行简单的词法分析运用一种有限状态机的算法轻松将源代码字符序列分隔成记号（TOKEN）

                
```

![alt gcc编译过程分解](./imgs/token1.png)

![alt gcc编译过程分解](./imgs/token2.png)

#### 词法分析
```


上面的者两个图片就是编译器扫描并进行简单的词法分析并通过有限状态机的算法做标记的结果


词法分析产生的记号分类
        关键字
        标识符
        字面量(数字，字符串)，特殊符号（加号，等号）

扫描词法分析的同时编译器会把标识符放到符号表，把数字和字符串放到文字表



lex程序可以实现词法分析


c,c++这样有预编译的语言是预编译工作是不会交给编译器来做的，他是交给独立的预编译器来做


```


#### 语法分析

```
语法分析器（Gramar Parser） 分析扫描器词法分析后的记号的结果

语法分析器分析过后会产生语法树(Sybntx Tree)的结果

分析采用的手段是上下文无关语法（Context-free Grammer）


```

##### 下推自动机和语法树

```


```


语法树

![alt gcc编译过程分解](./imgs/SybntxTree1.png)


```
语法分析器 有一个现成的工具 yacc


```
