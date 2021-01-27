
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
 While the physical memory can contain up to 4 gigabytes, it is usually much smaller;
    
    翻译：物理内存最大4GB,他们通常比这个小
  the processor maps the 4 gigabyte flat space onto the physical address space by the address translation mechanisms described in Chapter 5.
    onTo  映射
    翻译 处理器在第5章描述4GB的平面地址空间映射到物理地址空间的翻译机制
   Applications programmers do not need to know the details of the mapping.

    翻译：应用程序员不需要知道详细的地址的映射





A pointer into this flat address space is a 32-bit ordinal number that may range from 0 to 2^(32) -1. 

            ordinal    /ˈɔːdɪnl/    adj. 顺序的，依次的
    翻译  指针进入到平面地址是一个32位范围从0到2^32-1按顺序是数

Relocation of separately-compiled modules in this space must be performed by systems software (e.g., linkers, locators, binders, loaders).

        separately /ˈseprətli/    adv. 分别地；分离地；个别地
        performed  执行
        翻译：单独的编译模块重置编译在这个地方不许由系统软件执行

```



### 2.1.2 The Segmented Model

翻译：段模型

```
In a segmented model of memory organization, the address space as viewed by an applications program (called the logical address space) is a much larger space of up to 2^(46) bytes (64 terabytes). 
    logical   /ˈlɒdʒɪkl/  逻辑的合理的
    翻译：在内存组织段模型里，地址空间被看作为是一个应用程序(调用逻辑地址空间) 是一个非常大的空间，大道 2^46 byte (64TB)
The processor maps the 64 terabyte logical address space onto the physical address space (up to 4 gigabytes) by the address translation mechanisms described in Chapter 5.

    翻译：在第5章描述处理器包含64TB的逻辑地址空间被地址转换机制映射到物理地址空间(最多4GB)
 Applications programmers do not need to know the details of this mapping.

    翻译：  翻译：应用程序员不需要知道详细的地址的映射







Applications programmers view the logical address space of the 80386 as a collection of up to 16,383 one-dimensional subspaces, each with a specified length.

    翻译：应用程序员在80386中查看逻辑地址空间，作为一个最多16383的一维空间集合，每一个元素都有指定的的长度
 Each of these linear subspaces is called a segment. 
    翻译：这些每一个线性空间是一个段
 A segment is a unit of contiguous address space.
    unit  单元单位
    contiguous   /kənˈtɪɡjuəs/  连续的 邻近的
    翻译：一个段是一个连续地址空间的单位
  Segment sizes may range from one byte up to a maximum of 2^(32) bytes (4 gigabytes).

    翻译:段的大小的可能的宽度从1个byte 到 2^32 byte 最大的数 (4GB)





A complete pointer in this address space consists of two parts (see Figure 2-1):
    
    翻译：一个完整的指针在地址空间两个部分(看图片2-1)组成
    A segment selector, which is a 16-bit field that identifies a segment.
    翻译：一个段选择器，标识一个段的16位字段
    An offset, which is a 32-bit ordinal that addresses to the byte level within a segment.
    ordinal    /ˈɔːdɪnl/    adj. 顺序的，依次的    n序数
    翻译：偏移，是一个32序数，地址是段里面的字节级别

    


  During execution of a program, the processor associates with a segment selector the physical address of the beginning of the segment. 
        During   /ˈdjʊərɪŋ/  在......期间
        associates  /ə'səʊʃɪeɪts/   n. 同伴；合作人；联合公司
        翻译:在执行程序期间，处理器 与 段选择器和段开始的物理地址有联系起来  
  Separately compiled modules can be relocated at run time by changing the base address of their segments.
        Separetely 单独的

        翻译:单独的编译模块在重新运行的时候，他们的段的地址会改变
   The size of a segment is variable; therefore, a segment can be exactly the size of the module it contains.  

    exactly 恰好
    翻译：段的大小是可变的；因此，段会恰好是模块包含的大小


```




## 2.2 Data Types
数据类型

```
Bytes, words, and doublewords are the fundamental data types (refer to Figure 2-2).
    fundamental  /ˌfʌndəˈmentl/   基本的
    翻译：byte word  和 doubleworld 是基本的数据类型(图片2-2)
 A byte is eight contiguous bits starting at any logical address. The bits are numbered 0 through 7; 
    contiguous 连续的
    翻译：byte 是 8个连续的bit ,开始在任何的逻辑地址。位的数字排序是0到7
 bit zero is the least significant bit.
    significat   /sɪɡˈnɪfɪkənt/  重大的有意义的  
    翻译  0位是最低有效位








A word is two contiguous bytes starting at any byte address. A word thus contains 16 bits.
    thus 因此
    翻译：world 是两个连续的 byte ,在任何地方开始。一个Word因此包含16位
 The bits of a word are numbered from 0 through 15; bit 0 is the least significant bit.
    numbered 编号，列表
    翻译一个word是的编号是0位到15位;0位是最低有效位
  The byte containing bit 0 of the word is called the low byte; the byte containing bit 15 is called the high byte.
    翻译 byte 包含word的0位叫做最低byte;byte 包含15位是最高byte

 
 

 Each byte within a word has its own address, and the smaller of the addresses is the address of the word.
        翻译：一个word里面每个byte都有他们自己的地址，word 的地址是里面的小地址
  The byte at this lower address contains the eight least significant bits of the word, while the byte at the higher address contains the eight most significant bits.
        翻译：字 里面的byte小地址包含8个最低有效位，当这个byte地址是高地址包含8位高有效位




A doubleword is two contiguous words starting at any byte address. A doubleword thus contains 32 bits. 
    翻译：双字(double world) 是两个连续的字(world) 开始在任何 字节地址，因此一个双字节包含32位
The bits of a doubleword are numbered from 0 through 31; 
    翻译：一个双字的位的编号从0到31
bit 0 is the least significant bit.
    翻译：0位是最小有效位
 The word containing bit 0 of the doubleword is called the low word; the word containing bit 31 is called the high word.
    翻译： 双字包含的0位的字叫做低字;自包含32位叫做高位字




Each byte within a doubleword has its own address, and the smallest of the addresses is the address of the doubleword. 
    翻译：在双字里面每一个字节都有自己的地址，最小的地址就是双字的地址
The byte at this lowest address contains the eight least significant bits of the doubleword, while the byte at the highest address contains the eight most significant bits.
    翻译：在双字节中最低的地址字节包含8个最低有效位，当 这是一个高地址的字节，这个字节包含8位高有效位
 Figure 2-3 illustrates the arrangement of bytes within words anddoublewords.
    illustrates   /ˈɪləstreɪts/  阐述说明 
    arrangement  /əˈreɪndʒmənt/  布置证明 
    翻译：图片2-3对双字的这些字节的整理阐述和说明





Note that words need not be aligned at even-numbered addresses and doublewords need not be aligned at addresses evenly divisible by four. 
    aligned /əˈlaɪnd/   结盟,支持,校准
    翻译：注意那些字需要不需要交准双数地址和双字需要不校准呢能被4整除的地址
This allows maximum flexibility in data structures (e.g., records containing mixed byte, word, and doubleword items) and efficiency in memory utilization.
    flexibility 灵活的弹性的
    maximum  最大的
    efficiency /ɪˈfɪʃnsi/  效率功效
    utilization  利用
    翻译：这使得数据结构最大的灵活性(记录混合的字节，字，和双字 元素) 和内存利用的效率
 When used in a configuration with a 32-bit bus, actual transfers of data between processor and memory take place in units of doublewords beginning at addresses evenly divisible by four;
    翻译：
  however, the processor converts requests for misaligned words or doublewords into the appropriate sequences of requests acceptable to the memory interface. Such misaligned data transfers reduce performance by requiring extra memory cycles. For maximum performance, data structures (including stacks) should be designed in such a way that, whenever possible, word operands are aligned at even addresses and doubleword operands are aligned at addresses evenly divisible by four. Due to instruction prefetching and queuing within the CPU, there is no requirement for instructions to be aligned on word or doubleword boundaries. (However, a slight increase in speed results if the target addresses of control transfers are evenly divisible by four.)
```


#### Figure 2-2
<pre>
  7              0
 +---------------+
 |     BYTE      |  BYTE
 +---------------+

  15              7              0
 +---------------+---------------+
 |   HIGH BYTE   |   LOW BYTE    |  WORD
 +---------------+---------------+
    address n+1      address n

  31              23              15              7             0
 +---------------+---------------+---------------+--------------+
 |           HIGH WORD           |            LOW WORD          | DOUBLEWORD
 +---------------+---------------+---------------+--------------+
    address n+3     address n+2     address n+1      address n
</pre>

#### Figure 2-3

<pre>
                  MEMORY
       BYTE       VALUES
All values in hexadecimal
     ADDRESS   +----------+
              E|          |
               |----------|--+
              D|    7A    |  |- DOUBLE WORD AT ADDRESS A
               |----------|-+|  CONTAINS 7AFE0636
              C|    FE    | ||
               |----------| |- WORD AT ADDRESS B
              B|    06    | || CONTAINS FE06
               |----------|-+|
              A|    36    |  |
               |----------|--|
              9|    1F    |  |- WORD AT ADDRESS 9
               |----------|--+  CONTAINS IF
              8|          |
               |----------|--+
              7|    23    |  |
               |----------|  |- WORD AT ADDRESS 6
              6|    OB    |  |  CONTAINS 23OB
               |----------|--+
              5|          |
               |----------|
              4|          |
               |----------|--+
              3|    74    |  |
               |----------|-+|- WORD AT ADDRESS 2
              2|    CB    | ||  CONTAINS 74CB
               |----------|--+
              1|    31    | |-- WORD AT ADDRESS 1
               |----------|-+   CONTAINS CB31
              0|          |
               +----------+


</pre>
