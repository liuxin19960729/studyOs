Introduction(介绍) to the 80386

```
The 80386 is an advanced(先进，高级) 32-bit microprocessor
(microprocessor  微处理器)
 optimized(最优化的 ) for multitasking (多任务处理) operating systems and designed for applications needing very high performance （high performance 高性能）.
 ccc for xxxxx  为 xxxxx  ccc  翻译顺序

 例：optimized for multitasking  operating systems
        为 多任务操作系统优化  


  The 32-bit registers and data paths support 32-bit addresses and data types. The processor can address up to four gigabytes(four gigabytes 4G) of physical memory and 64 terabytes(TB) (2^(46) bytes) of virtual memory. 
     处理器寻址最多寻址4G 物理内存 ，和最多64TB 的虚拟地址  
     4G 寻址地址是怎样计算的呢？
         在计算机中内存中最小的位宽为1byte
         
         1k=2^10 byte
         1m=2^10k
         1G=2^10m
         2^32 byte=2^22k=2^12m=2^2G=4G
         就是这样计算出来的

  The on-chip(chip 芯片) memory-management 
  facilities(  /fə'sɪlɪtɪz/  工具，设备) include address translation(翻译，转换) registers,
  芯片上的内存管理设备包含地址转换寄存器
  
  advanced multitasking hardware, a protection(保护) mechanism(机制，机构，原理), and paged virtual memory. Special debugging registers provide data and code breakpoints even in ROM-based software.
  
  芯片的内存管理工具包含地址转换寄存器， 先进的多任务硬件，保护机制和分页机制，虚内存，特殊的debug寄存器，event(甚至)在可读内存软件能够进行数据和代码的端点
```

### 1.1 Organization(组织,机构) of This Manual(adj 手工的  n 手册)
翻译： 手册的结构

```
   Part I      -- Applications Programming  第一部分引用程序
   Part II     -- Systems Programming 第二部分系统程序
   Part III    -- Compatibility  兼容性 /kəmˌpætəˈbɪləti/
   Part IV     -- Instruction Set 指令集
   Appendices  附加

   These divisions(dɪˈvɪʒnz  划分部分,分隔 )are determined(决定) in part by the architecture(架构 /ˈɑːkɪtektʃər/) itself and in part by the different ways the book will be used. 
   这划分部分由他自己的架构决定，部分由本书使用不同的方式
   
   As the following table indicates, the latter two parts are intended as reference material for programmers actually engaged in the process of developing software for the 80386.

   As the following  如下
   indicates 指示,显示  [ˈɪndɪkeɪts]

   actually 事实上
   
   engaged  v参加,雇佣，从事  adj 忙碌的

   intended 故意的,有意的   /ɪnˈtendɪd/
    
   as reference  material 参考材料

    翻译： 如下表指示 ，后面两部分，(for) 为了程序员 从事engaged  actualy实际 在80386处理器开发软甲 as  作为  参考材料

    The first three parts are explanatory, showing the purpose of architectural features,
      
      explanatory  /ɪkˈsplænətri/ 说明，解释 
      purpose    /ˈpɜːpəs/   用途

      The first three parts  前三部分

      features  /ˈfiːtʃəz/ 
                     n. 产品特点，特征；容貌；嘴脸（feature的复数）
                   v. 是…的特色，使突出（feature的第三人称单数）
      
      翻译   前三部分是解释说明，展示用途的建筑特征
     developing terminology and concepts, and describing instructions as they relate to specific purposes or to specific architectural features.
       terminology  /ˌtɜːmɪˈnɒlədʒi/  术语，用辞
       concepts  /ˈkɒnsɛpt/   概念，观念；思想
       relate to   /rɪˈleɪt/  涉及


       翻译：开发术语和概念描述，他们涉及特殊的用途或者特别的建筑特征相关指令





The first three parts follow the execution modes and protection features of the 80386 CPU. 
 
 翻译 前三部分介绍 80386cpu 执行模式和保护模式


The distinction between applications features and systems features is determined by the protection mechanism of the 80386. 

  distinction   /dɪˈstɪŋkʃn/   区别；差别；特性；荣誉、勋章
  mechanism   /ˈmekənɪzəm/   机制；原理，途径；进程；机械装置；技巧

 翻译： 应用程序特征和系统程序特征之间的差异是由80386保护模式机制决定的
One purpose of protection is to prevent applications from interfering with the operating system; 
    interfering  /ˌɪntəˈfɪərɪŋ/ adj. 干涉的；多管闲事的

    purpose  /ˈpɜːpəs/ n. 目的；用途；意志  vt. 决心；企图；打算
    prevent  预防，避免


    翻译：保护模式的第一个目的 预防应用程序干扰操作系统


therefore, the processor makes certain registers and instructions inaccessible to applications programs. 
    therefore  /ˈðeəfɔːr/  因此
    certain   /ˈsɜːtn/  某一；必然的；确信；无疑的；有把握的  pron. 某些；某几个
    inaccessible  /ˌɪnækˈsesəbl/  adj. 难达到的；难接近的；难见到的
    accessible  /əkˈsesəbl/  adj. 易接近的；可进入的；可理解的

翻译：
  因此 ，处理器使用的某一些寄存器和指令 应用程序不能够访问
The features discussed in Part I are those that are accessible to applications; 
    discussed  /dɪˈskʌst/   v. 讨论（discuss的过去分词）；商讨
    that 那些 
    第一部分商讨那些可以访问的引用程序的特征
   
the features in Part II are available only to systems software that has been given special privileges or in unprotected systems.

      available   /əˈveɪləbl/ adj. 可获得的；可购得的；可找到的；有空的，适用于
      privileges   /ˈprɪvəlɪdʒɪz/   n. [计] 特权（privilege的复数）    n. [计] 特权（privilege的复数）

      given   /ˈɡɪvn/  获得 赋予

    翻译  第二部分 仅适用于  才做系统被赋予可出的权限 或不受保护的系统



The processing mode of the 80386 also determines the features that are accessible. The 80386 has three processing modes:

80386 处理器模式决定可以访问的特征，80386有三种处理模式 

   1.  Protected Mode.保护模式
   2.  Real-Address Mode. 实模式
   3.  Virtual 8086 Mode. 虚拟模式



Protected mode is the natural 32-bit environment of the 80386 processor.
    natural   /ˈnætʃrəl/   adj. 自然的；物质的；天生的；不做作的   n. 自然的事情；白痴；本位音

    翻译：在80386处理器 自然的32位环境就是保护模式
 In this mode all instructions and features are available.

  翻译 在这个模式(保护模式) 所有指令和特征是可用的




Real-address mode (often called just "real mode") is the mode of the processor immediately after RESET.
    often   /ˈɒfn; ˈɒftən/   adv. 常常，时常；往往，大多
    immediately   /ɪˈmiːdiətli/    立即，立刻；直接地    conj. 一…就

    翻译；: 处理器重置之后立即就变成实模式
 In real mode the 80386 appears to programmers as a fast 8086 with some new instructions. 
  
  appears    /ə'pɪəs/    v. 出现；呈现；看上去好像

    to  有对于的意思

  翻译 80386出现了实模式  对于程序员像是一个提供一些新指令的一个快速的8086 

 Most applications of the 80386 will use real mode for initialization only.
    在80386中大多数应用程序使用实模式仅仅为了初始化





Virtual 8086 mode (also called V86 mode) is a dynamic mode in the sense that the processor can switch(交换，开关) repeatedly and rapidly between V86 mode and protected mode.

      sense   /sens/  n. 感觉，官能；观念；道理；理智    vt. 感觉到；检测
      in the sense  就....而言
      rapidly   /ˈræpɪdli/    adv. 迅速地；很快地；立即

      翻译 虚拟8086模式(也叫做V86模式),是一个动态模式，就动态模式而言就是说处理器能够反复快速的在V86(8086)虚拟模式和保护模式之间切换


 The CPU enters V86 mode from protected mode to execute an 8086 program, 
 CPU从保护模式进入v86模式执行一个8086程序
 then leaves V86 mode and enters protected mode to continue executing a native 80386 program.
      leaves    /liːvz/ v. 离开；让……留下 
      翻译: 甚至离开V86模式 进入到保护模式 继续执行一个本地(原生)的80386的程序




The features that are available to applications programs in protected mode and to all programs in V86 mode are the same.
        are the same  一样

        翻译： 这些特征 适用于 保护模式下的应用程序和在v86模式下的所有程序，都是一样的

 These features form the content of Part I. 
      form   /fɔːm/  构成

      翻译: 这些特征构成第一部分


 The additional features that are available to systems software in protected mode form Part II. 
       additional   /əˈdɪʃənl/    adj. 附加的，额外的

    翻译：  在保护模式下，额外添加新特征，构成第二部分
 Part III explains real-address mode and V86 mode, as well as how to execute a mix of 32-bit and 16-bit programs.      
      explains  /ɪkˈspleɪnz/    v. 解释；说明（explain的三单形式）
      mix    /mɪks/   v. （使）混和；配制；参与  n. 混合；良莠不齐；混合物；

      翻译  第三部分 解释了实模式和v86(virtual 8086 mode)  mode 怎样混合执行32位和16位的程序




Available in All Modes             Part I -- Applications Programming

Available in Protected             Part II -- Systems Programming
Mode Only

Compatibility Modes    兼容模式            Part III -- Compatibility
      Compatibility   /kəmˌpætəˈbɪləti/   n. [计] 兼容性



```  


###  1.1.1 Part I -- Applications Programming


```
This part presents those aspects of the architecture that are customarily used by applications programmers.
        presents   ˈpreznts/    n. 礼物（present 的复数）   v. 颁发；赠送；提交；展示；致谢
        those   那些（that 的复数）
        aspects    /'æspekts/   n. 方面；相位；面貌（aspect的复数 
        architecture  架构   /ˈɑːkɪtektʃər/
        customarily   ˈkʌstəmərəli/  adv. 通常，习惯上 

        翻译  这部分介绍应用软件程序员通常使用架构那方面
Chapter 2 -- Basic Programming Model: Introduces the models of memory organization. Defines the data types.
        翻译 章节二，基本编程模型，介绍内存管理组织模型，定义数据类型
 Presents the register set used by applications. 
      .......by xxx   ...xxx.........  xxx提前
    翻译：  展示一些应用程序，使用寄存器
 Introduces the stack. Explains string operations. Defines the parts of an instruction. 
        operations    /,ɑpə'reʃən/    n. 运营；运作；业务操作（operation的复数)
         axxxxx of  bbb          翻译顺序  abbb xxxx
         介绍栈，解释字符串操作，定义指令的各个部分
 Explains addressing calculations. Introduces interrupts and exceptions as they may apply to applications programming.

      may   /meɪ/    可以，能够；可能，也许；祝，愿；会，能
      apply   /əˈplaɪ/    申请；涂，敷；应用 


      翻译： 解释地址计算，介绍 应用程序可能应用的中端和异常
Chapter 3 -- Application Instruction Set: Surveys the instructions commonly used for applications programming.
      Surveys     /sər've/     n. 调查 


      翻译：  第三章  应用指令集 ，调查应用程序通常使用的指令
 Considers instructions in functionally related groups; 
      Consider   /kənˈsɪdər/   考虑；认为；考虑到；细想 
      related    /rɪˈleɪtɪd/    adj. 有关系的，有关联的；讲述的，叙述的 
      functionally   /ˈfʌŋkʃənəli/    adv. 功能地；函数地；职务上地
      翻译： 功能分组相关的考虑指令
 for example, string instructions are considered in one section, while control-transfer instructions are considered in another.
        翻译  例如 ，字符串指令考虑在一个部分，虚幻控制转移指令考虑另一部分
  Explains the concepts behind the instructions. 
        behind   /bɪˈhaɪnd/     在……的后面     朝……后面；

        翻译：解释概念在指令后面
  Details of individual instructions are deferred until Part IV, the instruction-set reference.
        Details   /'dɪteɪlz/    n. 细节（detail的复数）；详细资料   v. 详细说明（detail的三单形式）
        
        individual    /ˌɪndɪˈvɪdʒuəl/    adj. 个人的；个别的；独特的   n. 个人，个体

        deferred   /dɪ'fɜːd/  adj. 延期的   v. 推迟

        reference   /ˈrefrəns/   n. 参考，参照；涉及   vi. 引用


      翻译: 个别指令的细节推迟到底4部分，指令集参考引用





```


1.1.2 Part II -- Systems Programming 

```
This part presents those aspects of the architecture that are customarily used by programmers who write operating systems,
      aspects    /'æspekts/    n. 方面；相位；面貌（aspect的复数
      customarily  /ˈkʌstəmərəli/  adv. 通常，习惯上

    翻译： 这部分展示架构那些方面，那些通常写在操作系统被程序员使用 
 device drivers, debuggers, and other software that supports applications programs in the protected mode of the 80386.


      supports   /sə'port/    n. 支持；支承结构；忍受；[法] 赡养    v. 支持，忍受

      在80386保护模式下，引用程序支持  设备驱动， debuggers,其他软件





Chapter 4 -- Systems Architecture: Surveys the features of the 80386 that are used by systems programmers.
      第4章 系统架构 ： 研究80386的特点特征，是被系统程序员所使用的
 Introduces the remaining registers and data structures of the 80386 that were not discussed in Part I.
          remaining   /rɪˈmeɪnɪŋ/    v. 仍然是；剩余；仍需去做；逗留
          structures  /st'rʌktʃəz/   n. 结构；
          were  /wər; wɜːr/    v. 是，在
          discussed  /dɪˈskʌst/  v. 讨论（discuss的过去分词）；商讨
          翻译：介绍在第一部分没有讨论的 剩余的寄存器和数据结构
  Introduces the systems-oriented instructions in the context of the registers and data structures they support. 
        oriented    /'ɔːrɪentɪd/    adj. 以……为方向的；重视……的
        
        xxx  of  aa
        aa 提前进行翻译 

        翻译  寄存器和他们支持的数据结构在接下来的内容里介绍面向系统的指令
  Points to the chapter where each register, data structure, and instruction is considered in more detail.
        Points   n. 点；目的（point的复数）；见解    v. 指引；瞄准
        each    各自

      翻译： 寄存器，数据结构 和 指令 各个章节，会有更多的细节




Chapter 5 -- Memory Management: Presents details of the data structures, registers, and instructions that support virtual memory and the concepts of segmentation and paging. 
      翻译：
          第5章 内存管理  ：详细介绍数据结构，寄存器，和指令，虚拟内存，和分段个分页的概念
Explains how systems designers can choose a model of memory organization ranging from completely linear ("flat") to fully paged and segmented.
        choose    /tʃuːz/   vt. 选择，决定
        ranging  /'reɪndʒɪŋ/  v  变化，变动； 范围，幅度；排列
        completely   /kəmˈpliːtli/ adv. 完全地，彻底地；完整地
        from  xxx  to  xxxx  从  xxx  到  xxxx

  翻译： 解释系统设计人员怎样从完全线性到完全分页和分段中选择在内存组织范围中模型




Chapter 6 -- Protection: Expands on the memory management features of the 80386 to include protection as it applies to both segments and pages.
      Expands     /ɪkˈspændz/   扩大
      applies   applies  v. 申请；涂，敷；应用
      applies to  适用于

      翻译：第6章 保护：扩大80386内存管理特征，包含保护，并且同时适用于段和页
 Explains the implementation of privilege rules, stack switching, pointer validation, user and supervisor modes. Protection aspects of multitasking are deferred until the following chapter.

```