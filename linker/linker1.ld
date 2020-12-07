/* github 地址
https://github.com/iDalink/ld-linker-script */


基本概念
目标文件 *.o
    gcc -C xxxxxx
一个目标文件  划分  多个section(片段)。 section记录有 比如 .text断(记录指令代码段), .data段(记录数据的数据段)

section 记录代码段和数据段相关

        一个执行文件
        目标文件1           目标文件2       目标文件3
       sections(片段s1)     section(片段s2)    section(片段s3)......
         表项1               表项2           表项3

表项：
    每个section组成表项
    记录在elf(可执行文件)的头部区域

    表项记录的信息
        文件内部的偏移和加载的位置

一个执行文件(一个程序)被连接的时
       多个文件的section(片段)会按照规则合成segment(段)  
       程序执行时，系统是以节的视角加载可执行的文件
       特殊情况下
                程序的载体是ROM的情况下程序执行需要预先把ROM的segment(段)数据拷贝到RAM
                RAM和ROM介质处于同一个地址空间的不同地址段(也就是说都在内存里面只是在不同地方)

       也就是说节的存储会记录两个地址运行地址为VMA,存储地址为LMA       


 c函数变量和汇编的标号在编译后都会转化为符号(符号的值记录的是地址)
        当一个源文件引用外部的符号时，编译时会得到一个未定义的符号
        未定义的符号在链接决议时转化为定义的符号，并在指令区域填入正确的符号

  符号除了可以来自于函数和变量还可以来源于环境信息 比如源程序文件名，
  也可以来自linker script，甚至可以来自汇编源程序  




cat tool.c


int math_pow(int a, int b)
{
    int result = 1;
    int i;
    for (i = 0; i < b; i ++) {
        result *= a;
    }
    return result;
}
readelf -s tool.o  查看目标文件的section(片段)  tool.o是目标文件 里面有多个section(片段) 记录 data段 和 text段

   Num:    Value          Size Type    Bind   Vis      Ndx Name
     0: 0000000000000000     0 NOTYPE  LOCAL  DEFAULT  UND 
     1: 0000000000000000     0 FILE    LOCAL  DEFAULT  ABS tool.c 目标文件符号
     2: 0000000000000000     0 SECTION LOCAL  DEFAULT    1 
     3: 0000000000000000     0 SECTION LOCAL  DEFAULT    2 
     4: 0000000000000000     0 SECTION LOCAL  DEFAULT    3 
     5: 0000000000000000     0 SECTION LOCAL  DEFAULT    4 
     6: 0000000000000000     0 SECTION LOCAL  DEFAULT    6 
     7: 0000000000000000     0 SECTION LOCAL  DEFAULT    7 
     8: 0000000000000000     0 SECTION LOCAL  DEFAULT    9 
     9: 0000000000000000     0 SECTION LOCAL  DEFAULT   11 
    10: 0000000000000000     0 SECTION LOCAL  DEFAULT   13 
    11: 0000000000000000     0 SECTION LOCAL  DEFAULT   14 
    12: 0000000000000000     0 SECTION LOCAL  DEFAULT   12 
    13: 0000000000000000    53 FUNC    GLOBAL DEFAULT    1 math_pow







cat app.c
#include <stdio.h>
#include "tool.h"

int bss_var;

int glob_var = 0xaa55;

int main(int argc, char *argv[])
{
    int rev;

    rev = math_pow(2, 10);
    printf("2^10=%d\n", rev);
    
    rev = math_add(2, 10);
    printf("2+10=%d\n", rev);

    printf("math_add func len:0x%x\n",
           (unsigned long long)&math_add_end - (unsigned long long)math_add);
    
    printf("math_add=0x%x\n",(unsigned long long)math_add);
    printf("math_add_end=0x%x\n",(unsigned long long)math_add_end);

    bss_var = 0x55aa;
    return 0;
}

$ readelf -s app.o

Symbol table '.symtab' contains 13 entries:
   Num:    Value          Size Type    Bind   Vis      Ndx Name
     0: 0000000000000000     0 NOTYPE  LOCAL  DEFAULT  UND 
     1: 0000000000000000     0 FILE    LOCAL  DEFAULT  ABS app.c 目标文件符号
     2: 0000000000000000     0 SECTION LOCAL  DEFAULT    1 
     3: 0000000000000000     0 SECTION LOCAL  DEFAULT    3 
     4: 0000000000000000     0 SECTION LOCAL  DEFAULT    4 
     5: 0000000000000000     0 SECTION LOCAL  DEFAULT    5 
     6: 0000000000000000     0 SECTION LOCAL  DEFAULT    7 
     7: 0000000000000000     0 SECTION LOCAL  DEFAULT    8 
     8: 0000000000000000     0 SECTION LOCAL  DEFAULT    6 
     9: 0000000000000000    67 FUNC    GLOBAL DEFAULT    1 main
    10: 0000000000000000     0 NOTYPE  GLOBAL DEFAULT  UND _GLOBAL_OFFSET_TABLE_
    11: 0000000000000000     0 NOTYPE  GLOBAL DEFAULT  UND math_pow 外部符号，索引类型为UND未决议类型
    12: 0000000000000000     0 NOTYPE  GLOBAL DEFAULT  UND printf



cat tool_base.S

    .text
    .code64
    .global math_add
    .global math_add_end
math_add:   #math_add 代表的是标号
    add %rsi,%rdi
    mov %rdi, %rax
    ret
math_add_end = .  
    .word 0xf0f0, 0xf0f0, 0xf0f0, 0xf0f0


汇编
  =  伪指令, 
  1.  XX=整数  整数能存储32位的整数 在编译阶段会将所有使用XX的全部进行替换有点像
        c语言的宏定义
  2.       
    



    $ readelf -s tool_base.o

Symbol table '.symtab' contains 10 entries:
   Num:    Value          Size Type    Bind   Vis      Ndx Name
     0: 0000000000000000     0 NOTYPE  LOCAL  DEFAULT  UND 
     1: 0000000000000000     0 SECTION LOCAL  DEFAULT    1 
     2: 0000000000000000     0 SECTION LOCAL  DEFAULT    2 
     3: 0000000000000000     0 SECTION LOCAL  DEFAULT    3 
     4: 0000000000000000     0 SECTION LOCAL  DEFAULT    6 
     5: 0000000000000000     0 SECTION LOCAL  DEFAULT    8 
     6: 0000000000000000     0 SECTION LOCAL  DEFAULT    4 
     7: 0000000000000000     0 SECTION LOCAL  DEFAULT    9 
     8: 0000000000000000     0 NOTYPE  GLOBAL DEFAULT    1 math_add
     9: 0000000000000007     0 NOTYPE  GLOBAL DEFAULT    1 math_add_end
     math_add 标号里面存储了7个字节的代码段数据

    
    

MakeFile文件
     # 设置 test目标是伪目标 只能执行 make test 命令执行
    .PHONY:test

    test:app
            ./app
    
    # make 命令会执行这个目标
    app:app.o tool.o tool_base.o
            gcc -g -o $@ $^ //$^ 所有依赖文件 app.o tool.o tool_base.o    $@ 目标文件集  app


    app.o:app.c
            gcc -g -c -o $@ $<


    tool.o:tool.c tool.h
            gcc -g -c -o $@ $<

    tool_base.o:tool_base.S
            as -g -o $@ $<


 makeFile符号总结
    $@  表示目标文件集
    $^  表示所有的依赖文件
    $<  表示第一个依赖文件
    $?  表示比目标还要新的依赖文件列表


例子：
    main: main.o hello.o hi.o
        gcc -o main main.o hello.o hi.o

    main.o: main.c
            cc -c main.c

    hello.o: hello.c
            cc -c hello.c

    hi.o: hi.c
            cc -c hi.c

    clean:
            rm *.o
            rm main




    main: main.o hello.o hi.o
        gcc -o $@ $^  //$^  所有依赖文件  main.o hello.o hi.o    $@ 目标文件 main 
    main.o: main.c
            cc -c $<  //main.c 第一个依赖文件
    hello.o: hello.c
            cc -c $<
    hi.o: hi.c
            cc -c $<
    clean:
            rm *.o
            rm main        