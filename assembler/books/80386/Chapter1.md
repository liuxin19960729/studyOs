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

```  

