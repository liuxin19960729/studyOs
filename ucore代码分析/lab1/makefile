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






# $(shell shell命令)  会把shell 命令输出返回给变量

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

#

AWK		:= awk
SED		:= sed
SH		:= sh
TR		:= tr
#  touch  命令 如果没有文件创建 文件， 有文件 改变文件创建时间  -c  表示没有这个文件不用创建新的文件
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


# 分析 listf_cc
call 的用法：$(call 方法名 ,参数一,参数二)
listf_cc = $(call listf,$(1),$(CTYPE))  在listf  里面参数对应的是$(1),$(2)

listf 方法
$(2)==listf_cc 传入的$(CTYPE)=c S
$(1)==listf_cc传入的$(1)
listf = $(filter $(if $(2),$(addprefix %.,$(2)),%),\
		  $(wildcard $(addsuffix $(SLASH)*,$(1))))

filter 的用法：$(filter ,pattern,text)  获取满足pattern条件的text
作为filter的pattern
$(if $(2),$(addprefix %.,$(2)),%)

	if的用法  $(if <condition>,<then-part>)  $(if <condition>,<then-part>,<else-part>)  condition是判断条件
	上面那句话的意思是说  判断 $(2) 不为空 就返回$(addprefix %.,$(2))(也就是 %.$(2)  %.c %.s)  为空   返回  %
		$(addprefix ,addprefix, text) 返回加完前缀的字符串   addprefixtetx



作为filter 的text
$(wildcard $(addsuffix $(SLASH)*,$(1))) 
	wildcard 的用法： $(wildcard command) 列举

		addsuffix 加后缀 $(addsuffix,suffix,text)
			返回 $(1)/*
获取$(1)/*工作目录下的所有文件名

listf_cc = $(call listf,$(1),$(CTYPE))  意思为
	获取$(1)/*下文件名满足%.c  和  %.s  的文件




# 分析 create_target_cc
create_target_cc = $(call create_target,$(1),$(2),$(3),$(CC),$(CFLAGS))
$(call create_target,$(1),$(2),$(3),$(CC),$(CFLAGS)) //调用create_target方法  分别传入 $(1),$(2),$(3),clang 或 gcc ,  CFLAGS,变量的参数
	create_target = $(eval $(call do_create_target,$(1),$(2),$(3),$(4),$(5)))
	eval 函数  
		gnu 描述
		The eval function is very special: it allows you to define new makefile constructs that are not constant; (eval 允许定义新makefile构造，但是不能够是一个常量)
		which are the result of evaluating other variables and functions. he argument(论证) to the eval function is expanded(扩展),
		 then the results of that expansion( 然而这个扩展结果) are parsed as makefile syntax(语法). The expanded results can define new make variables, targets,
		  implicit or explicit rules, etc.(这个扩展能够定影 新 make变量 ，目标  隐式显式规则等)

		The result of the eval function is always the empty string (eval 总是返回 空字符串); 
		thus, it can be placed(放置) virtually anywhere in a makefile without causing syntax errors.(放在makefile任何地方不会造成语法错误)

		It’s important to realize that the eval argument is expanded twice; first by the eval function, 
		then the results of that expansion are expanded again when they are parsed as makefile syntax. (evel 函数的第一个参数是传入的是我们需要解析的makefile 语法)
		This means you may need to provide extra(额外，特别) levels of escaping for “$”(转义为 $) characters when using eval. The value function (see Value Function) can sometimes be useful in these situations, 
		to circumvent unwanted expansions.

		Here is an example of how eval can be used; this example combines(联合) a number of concepts and other functions. Although it might seem overly complex to use eval in this example,(联合参数和其他的方法组合成
		强大的复合体)
		rather than just writing out the rules, consider two things: first, the template definition (in PROGRAM_template) could need to be much more complex than it is here; and second,
		you might put the complex, “generic” part of this example into another makefile, then include it in all the individual makefiles. Now your individual makefiles are quite straightforward.(个人的makefile)


         例子
		 	PROGRAMS    = server client

			server_OBJS = server.o server_priv.o server_access.o
			server_LIBS = priv protocol

			client_OBJS = client.o client_api.o client_mem.o
			client_LIBS = protocol

			# Everything after this is generic

			.PHONY: all
			all: $(PROGRAMS)

			define PROGRAM_template =
			#$(1) 代表的是 call 传入进来的第一个参数
			# server : $$(server_OBJS) $$(servel_LIBS::%=-l%)  第一个  $代表的是转义符号
			$(1): $$($(1)_OBJS) $$($(1)_LIBS:%=-l%)
			ALL_OBJS   += $$($(1)_OBJS)
			endef
            
			# foreach的用法  $(foreach <var>,<list>,<text>)
			#$(eval $(call xxx,参数))  是是没有返回的
			$(foreach prog,$(PROGRAMS),$(eval $(call PROGRAM_template,$(prog)))) 

			$(PROGRAMS):
					$(LINK.o) $^ $(LDLIBS) -o $@

			clean:
					rm -f $(ALL_OBJS) $(PROGRAMS)  










define do_create_target
# totarget = $(addprefix $(BINDIR)$(SLASH),$(1)) -bin/${1}
__temp_target__ = $(call totarget,$(1))  #-bin/${1}
__temp_objs__ = $$(foreach p,$(call packetname,$(2)),$$($$(p))) $(3)  
#  $(call packetname,$(2)) 为list  
	#packetname = $(if $(1),$(addprefix $(OBJPREFIX),$(1)),$(OBJPREFIX))
		#$(1) 非空 返回  __objs_${1}   空  返回 __objs_  这里的$(1)  是 最外层create_target 传入进来的$(2)

	foreach  循环次数还是看 OBJPREFIX的值



TARGETS += $$(__temp_target__)
ifneq ($(4),)
$$(__temp_target__): $$(__temp_objs__) | $$$$(dir $$$$@)
	$(V)$(4) $(5) $$^ -o $$@
else
$$(__temp_target__): $$(__temp_objs__) | $$$$(dir $$$$@)
endif
endef





$(kernel): $(KOBJS)
	@echo + ld $@
	$(V)$(LD) $(LDFLAGS) -T tools/kernel.ld -o $@ $(KOBJS)
	@$(OBJDUMP) -S $@ > $(call asmfile,kernel)
	@$(OBJDUMP) -t $@ | $(SED) '1,/SYMBOL TABLE/d; s/ .* / /; /^$$/d' > $(call symfile,kernel)

$(KOBJS)
$(call read_packet,kernel libs)
read_packet=$(foreach p,$(call packetname,$(1)),$($(p)))

packetname=$(if $(1),$(addprefix $(OBJPREFIX),$(1)),$(OBJPREFIX)) # __objs_kernel  __objs_libs

read_packet =$(__objs_kernel)  $(__objs_libs)  