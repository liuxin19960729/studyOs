
## Chapter 2 Basic Programming Model
基本的编程模型

```
This chapter describes the 80386 application programming environment as seen by assembly language programmers when the processor is executing in protected mode.
    翻译：这个章节描述80386应用程序环境被汇编语言程序圆看作是在保护你是下处理器执行
 The chapter introduces programmers to those features of the 80386 architecture that directly affect the design and implementation of 80386 applications programs. 
    affect    /əˈfekt/      vt. 影响；感染；感动；假装
    翻译: 这个章节介绍程序员在8038架构的这些特征 ，这些特征直接 影响在80386应用程序的实现和设计
 Other chapters discuss 80386 features that relate to systems programming or to compatibility with other processors of the 8086 family.
    discuss   /dɪˈskʌs/   vt. 讨论；论述，辩论
    relate to  和....联系
    compatibility  兼容性
    翻译：其他章节讨论80386和系统程序之间的联系的特征,和8086家族的其他处理器的兼容性





The basic programming model consists of these aspects:

  Memory organization and segmentation
  Data types
  Registers
  Instruction format
  Operand selection
  Interrupts and exceptions


翻译：
    基础的程序模型包含这些方面：
        内存管理和段
        数据类型
        寄存器
        指令格式
        操作数的选择
        中断和异常




Note that input/output is not included as part of the basic programming model. 
    翻译： 注意那些 i/0o 没有包含在基本的编程的模式这部分
Systems designers may choose to make I/O instructions available to applications or may choose to reserve these functions for the operating system. 
    to.....to....
    availible  /əˈveɪləbl/  可获得的
    翻译:系统设计者可以选择为应用程序提供I/O指令，也可以选择为操作系统保留这些功能。
For this reason, the I/O features of the 80386 are discussed in Part II.
    reason    /ˈriːzn/   理由 原因

    

```


