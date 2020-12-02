#PROJ的变量
PROJ	:= challenge
#EMPTY的变量为空
EMPTY	:=
#SPACE的变量为两个空字符串
SPACE	:= $(EMPTY) $(EMPTY)
SLASH	:= /

V       := @


# xxx=   xx:=  都是创建变量   
#  区别：  =不管顺序前面的变量可以引用后面的          :=  两个变量只能先创建才能引用

# ifndef x  如果没有定义x  为true
# ifdef	x  如果定义x 为true

#  $(shell xxx) 能执行shell语句
#  2>&1  文件描述符可以写9个  0-8 ，3-8自定义
#  0 stdin  1 stdout  2 stderr  2>&1  把stderr 重定义到 stdout
# /dev/null  相当于是一销毁的地方,把语句重定向这个不存在的地方的目的是阻止输出到命令行
#  shell  if 条件    和其他编程语言不同  返回状态为0(正常执行)才能进入到if的判断


# grep  详解

# 1.在文件中查找单词的模式
# grep  单词  文件路径

# 2.在多个文件中查找
# grep单词  路径1 路径2 .....

# 3. 查找包含单词的文件名
# root@Linux-world:~# grep -l linuxtechi /etc/passwd /etc/shadow /etc/fstab /etc/mtab
# /etc/passwd
# /etc/shadow

# 4.在文件中查找并显示匹配行的行号
# root@Linux-world:~# grep -n linuxtechi /etc/passwd
# 39:linuxtechi:x:1000:1000:linuxtechi,,,:/home/linuxtechi:/bin/bash


# 5. -v 输出没有查找单词的行
# grep  -v	单词  文件路径


# 5  ^单词 返回以这单词开头的行
# grep  ^单词  文件路径

# 6	单词$  返回以这个单词结尾的行
# grep  单词$  文件路径


# 7. -r  递归查找
# grep  -r 单词  路径

# 8 查找文件中所有的空行

# grep ^$  文件路径

# 9 -i   忽略大小写查找

# grep  -i 单词  文件路径


# 10 -e  参数查找多个模式
# grep -e  单词     -e  单词3   文件路径名


# 11 用文件进行查找
# root@Linux-world:~# cat grep_pattern
# ^linuxtechi
# root
# false$
# root@Linux-world:~#

# root@Linux-world:~# grep -f grep_pattern /etc/passwd


# 12 计算匹配到的数量

# grep  -c 单词   文件路径

# 13 输出匹配行的前几行

# grep  -B  4   单词   文件路径     


# 14 -C    输出 前后各多好行





# grep '^elf32-i386$$'

# 查找有没有elf32-i386$ 是单独站一行的


/dev/null 2>&1

2>&1  就是说STDERR现在和STDOUT 一样  


2>&1 >/dev/null   2重定向到&1  &1在前面是 打印到屏幕   后面才说1重定向到/dev/null 


>/dev/null 2>&1

1 正常stdout  重定向到  /dev/null  stderr重定向到 &1  &1 重定向的位置前面是有的 >/dev/null






ifndef GCCPREFIX
GCCPREFIX := $(shell if i386-elf-objdump -i 2>&1 | grep '^elf32-i386$$' >/dev/null 2>&1; \
	then echo 'i386-elf-'; \
	elif objdump -i 2>&1 | grep 'elf32-i386' >/dev/null 2>&1; \
	then echo ''; \
	else echo "***" 1>&2; \
	echo "*** Error: Couldn't find an i386-elf version of GCC/binutils." 1>&2; \
	echo "*** Is the directory with i386-elf-gcc in your PATH?" 1>&2; \
	echo "*** If your i386-elf toolchain is installed with a command" 1>&2; \
	echo "*** prefix other than 'i386-elf-', set your GCCPREFIX" 1>&2; \
	echo "*** environment variable to that prefix and run 'make' again." 1>&2; \
	echo "*** To turn off this error, run 'gmake GCCPREFIX= ...'." 1>&2; \
	echo "***" 1>&2; exit 1; fi)
endif



#  which 指令 在$PATH(环境变量)目录里面找qemu-system-i386 文件 >dev/null 把找到的内容重定向到/dev/null


ifndef QEMU
QEMU := $(shell if which qemu-system-i386 > /dev/null; \
	then echo 'qemu-system-i386'; exit; \
	elif which i386-elf-qemu > /dev/null; \
	then echo 'i386-elf-qemu'; exit; \
	elif which qemu > /dev/null; \
	then echo 'qemu'; exit; \
	else \
	echo "***" 1>&2; \
	echo "*** Error: Couldn't find a working QEMU executable." 1>&2; \
	echo "*** Is the directory containing the qemu binary in your PATH" 1>&2; \
	echo "***" 1>&2; exit 1; fi)
endif


# eliminate default suffix rules
.SUFFIXES: .c .S .h

# delete target files if there is an error (or make is interrupted)
.DELETE_ON_ERROR:

# define compiler and flags
ifndef  USELLVM
HOSTCC		:= gcc
HOSTCFLAGS	:= -g -Wall -O2
CC		:= $(GCCPREFIX)gcc
CFLAGS	:= -march=i686 -fno-builtin -fno-PIC -Wall -ggdb -m32 -gstabs -nostdinc $(DEFS)
CFLAGS	+= $(shell $(CC) -fno-stack-protector -E -x c /dev/null >/dev/null 2>&1 && echo -fno-stack-protector)
else
HOSTCC		:= clang
HOSTCFLAGS	:= -g -Wall -O2
CC		:= clang
CFLAGS	:= -march=i686 -fno-builtin -fno-PIC -Wall -g -m32 -nostdinc $(DEFS)
CFLAGS	+= $(shell $(CC) -fno-stack-protector -E -x c /dev/null >/dev/null 2>&1 && echo -fno-stack-protector)
endif

CTYPE	:= c S

LD      := $(GCCPREFIX)ld
LDFLAGS	:= -m $(shell $(LD) -V | grep elf_i386 2>/dev/null | head -n 1)
LDFLAGS	+= -nostdlib

OBJCOPY := $(GCCPREFIX)objcopy
OBJDUMP := $(GCCPREFIX)objdump

COPY	:= cp
MKDIR   := mkdir -p
MV		:= mv
RM		:= rm -f
AWK		:= awk
SED		:= sed
SH		:= sh
TR		:= tr
TOUCH	:= touch -c

OBJDIR	:= obj
BINDIR	:= bin

ALLOBJS	:=
ALLDEPS	:=
TARGETS	:=


#和c语言预处理指令是一样的  把文件引用到这里面来
#-include tools/function.mk  前面加一个-不管他有没有找到都不会报错
#1. 如果 make 执行时，有 -I 或 --include-dir 参数，那么 make 就会在这个参数所指定的目录下去
#寻找。
#2. 如果目录 <prefix>/include （一般是：/usr/local/bin 或 /usr/include ）存在的话，make 也
#会去找
# 到当前目录下找 tools目录,function.mk文件
include tools/function.mk

