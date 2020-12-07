
readelf -s   app.o
app.o  的section

Symbol table '.symtab' contains 18 entries:
   Num:    Value          Size Type    Bind   Vis      Ndx Name
     0: 0000000000000000     0 NOTYPE  LOCAL  DEFAULT  UND 
     1: 0000000000000000     0 FILE    LOCAL  DEFAULT  ABS app.c
     2: 0000000000000000     0 SECTION LOCAL  DEFAULT    1 
     3: 0000000000000000     0 SECTION LOCAL  DEFAULT    3 
     4: 0000000000000000     0 SECTION LOCAL  DEFAULT    4 
     5: 0000000000000000     0 SECTION LOCAL  DEFAULT    5 
     6: 0000000000000000     0 SECTION LOCAL  DEFAULT    7 
     7: 0000000000000000     0 SECTION LOCAL  DEFAULT    8 
     8: 0000000000000000     0 SECTION LOCAL  DEFAULT   10 
     9: 0000000000000000     0 SECTION LOCAL  DEFAULT   12 
    10: 0000000000000000     0 SECTION LOCAL  DEFAULT   14 
    11: 0000000000000000     0 SECTION LOCAL  DEFAULT   15 
    12: 0000000000000000     0 SECTION LOCAL  DEFAULT   13 
    13: 0000000000000004     4 OBJECT  GLOBAL DEFAULT  COM bss_var
    14: 0000000000000000     4 OBJECT  GLOBAL DEFAULT    3 glob_var
    15: 0000000000000000    68 FUNC    GLOBAL DEFAULT    1 main
    16: 0000000000000000     0 NOTYPE  GLOBAL DEFAULT  UND math_pow
    17: 0000000000000000




格式
    注释：
        /***/
    文件名写法
        可以直接键入文件名，如果文件名中有特殊的字符需要使用引号包裹文件名

 简要示例
    readelf -l  xxx
    -l  展现出segment(段) 的heraders信息


    Elf file type is EXEC (Executable file)
    Entry point 0x400430
    There are 9 program headers, starting at offset 64

    Program Headers:
    Type           Offset             VirtAddr           PhysAddr
                    FileSiz            MemSiz              Flags  Align
    PHDR           0x0000000000000040 0x0000000000400040 0x0000000000400040
                    0x00000000000001f8 0x00000000000001f8  R E    8
    INTERP         0x0000000000000238 0x0000000000400238 0x0000000000400238
                    0x000000000000001c 0x000000000000001c  R      1
        [Requesting program interpreter: /lib64/ld-linux-x86-64.so.2]
    LOAD           0x0000000000000000 0x0000000000400000 0x0000000000400000
                    0x000000000000084c 0x000000000000084c  R E    200000
    LOAD           0x0000000000000e10 0x0000000000600e10 0x0000000000600e10
                    0x0000000000000220 0x0000000000000228  RW     200000
    DYNAMIC        0x0000000000000e28 0x0000000000600e28 0x0000000000600e28
                    0x00000000000001d0 0x00000000000001d0  RW     8
    NOTE           0x0000000000000254 0x0000000000400254 0x0000000000400254
                    0x0000000000000044 0x0000000000000044  R      4
    GNU_EH_FRAME   0x00000000000006fc 0x00000000004006fc 0x00000000004006fc
                    0x000000000000003c 0x000000000000003c  R      4
    GNU_STACK      0x0000000000000000 0x0000000000000000 0x0000000000000000
                    0x0000000000000000 0x0000000000000000  RWE    10
    GNU_RELRO      0x0000000000000e10 0x0000000000600e10 0x0000000000600e10
                    0x00000000000001f0 0x00000000000001f0  R      1

    Section to Segment mapping:
    Segment Sections...
    00     
    01     .interp 
    02     .interp .note.ABI-tag .note.gnu.build-id .gnu.hash .dynsym .dynstr .gnu.version .gnu.version_r .rela.dyn .rela.plt .init .plt .plt.got .text .fini .rodata .eh_frame_hdr .eh_frame 
    03     .init_array .fini_array .jcr .dynamic .got .got.plt .data .bss 
    04     .dynamic 
    05     .note.ABI-tag .note.gnu.build-id 
    06     .eh_frame_hdr 
    07     
    08     .init_array .fini_array .jcr .dynamic .got 



.data .bss  都是 Section(片段) 03   加载的地址为 0x0000000000000e10
指令节的虚拟地址为  0x0000000000000000




SECTIONS
{
  . = 0x400000;
  .text : { *(.text) }
  . = 0x8000000;
  .data : { *(.data) }
  . = 0xc000000;
  .bss : { *(.bss) }
}

ld -e main -T linker_script.lds -o app app.o tool.o tool_base.o
readelf -l app

Elf file type is EXEC (Executable file)
Entry point 0x400000
There are 4 program headers, starting at offset 64

Program Headers:
  Type           Offset             VirtAddr           PhysAddr
                 FileSiz            MemSiz              Flags  Align
  LOAD           0x0000000000200000 0x0000000000400000 0x0000000000400000
                 0x00000000000000e0 0x00000000000000e0  R E    0x200000
  LOAD           0x0000000000400000 0x0000000008000000 0x0000000008000000
                 0x0000000000000004 0x0000000000000004  RW     0x200000
  LOAD           0x0000000000600000 0x000000000c000000 0x000000000c000000
                 0x0000000000000000 0x0000000000000004  RW     0x200000
  GNU_STACK      0x0000000000000000 0x0000000000000000 0x0000000000000000
                 0x0000000000000000 0x0000000000000000  RWE    0x10

 Section to Segment mapping:
  Segment Sections...
   00     .text .eh_frame 
   01     .data 
   02     .bss 
   03     


   VirtAddr  虚拟地址

   .text 为 00 所以虚拟地址为  0x0000000000400000   代码段
   .data 为01的虚拟地址为0x0000000008000000   数据段

