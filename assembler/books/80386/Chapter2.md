
# Chapter 2 Basic Programming Model
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

    翻译：为了这个原因，在第二部分讨论80386的I/0特征

```


##  2.1 Memory Organization and Segmentation

翻译内存组织和段

```
The physical memory of an 80386 system is organized as a sequence of 8-bit bytes. 

    翻译：80386系统 物理内存是顺序组织8位的字节序
Each byte is assigned a unique address that ranges from zero to a maximum of 2^(32) -1 (4 gigabytes).
    assigned  指定
    翻译 每一个 字节指定一个在0到最大数2^32-1范围唯一的地址(4GB)




80386 programs, however, are independent of the physical address space.
    however   /haʊˈevə(r)/  无论如何
    independent    /ˌɪndɪˈpendənt/    adj. 独立的；单独的；
    翻译：80386程序，无论如何，物理地址是独立的
 This means that programs can be written without knowledge of how much physical memory is available and without knowledge of exactly where in physical memory the instructions and data are located.
    means     /miːnz/   n. 手段；方法； 财产    vt. 用意；意味着；预示；
    exactly    /ɪɡˈzæktli/   adv. 恰好地；正是；精确地；正确地
    located   /ləʊˈkeɪtɪd/     adj. 处于，位于；坐落的
 翻译：这里的用意那些程序被写在不知道多少可用的物理内存，不知道怎样恰好在物理内存放置指令和数据






The model of memory organization seen by applications programmers is determined by systems-software designers. 
     determined   /dɪˈtɜːmɪnd/     adj. 决定了的；坚决的
     The model of memory organization  内存组织模型   c of xxx  xxx修饰c这个名词
     翻译：应用程序员看到的内存模型是系统软件设计者决定的   
The architecture of the 80386 gives designers the freedom to choose a model for each task. 
     翻译：80386架构给了设计者自由的选择每一个任务模式。
The model of memory organization can range between the following extremes:
    extreme /ɪkˈstriːm/ adj. 极端的；极度的；  n. 极端；末端；
    翻译：内存组织模型有下面两种极端
   
   
    A "flat" address space consisting of a single array of up to 4 gigabytes.
        up to 多大，最多  胜任
        flat adj  平的  n 平地 公寓 
        consist 组成
    翻译：最多4GB的的单独的数组组成一个平面的地址空间 
    A segmented address space consisting of a collection of up to 16,383 linear address spaces of up to 4 gigabytes each.

    翻译：一个段地址空间 每一个最多4GB， 最多16383 线性地址空间的集合的集合组成


Both models can provide memory protection.
     翻译：两种模型都提供内存保护     
 Different tasks may employ different models of memory organization.
    employ  /ɪmˈplɔɪ/  采用使用雇佣
    翻译: 不同的任务可能会使用不同的内存组织模式
  The criteria that designers use to determine a memory organization model and the means that systems programmers
        criteria   /kraɪ'tɪərɪə/  n 标准,条件
        翻译 设计者决定内存组织模型，系统程序员使用这些标准
    


use to implement that model are covered in Part II--Systems Programming.
    翻译： 使用，实现，内存组织模型在第二部分程序里面上包含
```



### 2.1.1 The "Flat" Model
平面模式
```
In a "flat" model of memory organization, the applications programmer sees a single array of up to 2^(32) bytes (4 gigabytes).

    翻译：在内存组织平面模式里面，应用程序员看 内存组织模式就是一个大小为2^32byte(4GB)的单个是的数组
 While the physical memory can contain up to 4 gigabytes, it is usually much smaller; the processor maps the 4 gigabyte flat space onto the physical address space by the address translation mechanisms described in Chapter 5. Applications programmers do not need to know the details of the mapping.
```