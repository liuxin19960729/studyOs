简要链接指令
    在运行一个程序时第一个被执行的指令称为"入口点"
     
        使用一个条目作为你程序执行的显示符号 
    -e  Use entry as the explicit symbol for beginning execution of your
                    rather than 而不是
           program, rather than the default entry point.  If there is no
           如果没有符号名字的条目  连接器 将试图解析为一个数字
           symbol named entry, the linker will try to parse entry as a number,
           可以使用地址地址作为条目地址          
           and use that as the entry address (the number will be interpreted
           这个数字将会解析为10进制的数  ,你也可以在前面使用0x作为一个16进制，或者前面使用0
           in base 10; you may use a leading(前面)0x for base 16, or a leading 0
           作为一个8进制
           for base 8).
    
    使用脚本文件作为连接脚本                  这个脚本替换ld‘s
-T  Use scriptfile as the linker script.  This script replaces ld's
            默认的连接器脚本 
           default linker script (rather than adding to it), so(连次 所以 
           副词  这样)commandfile命令文件
           must(必须) specify指定 everything necessary(必要，必须)
            
            to describe the output file.//所以命令文件必须指定所有的输出文件
            如果脚本文件不存在在当前的目录
           If scriptfile does not exist in the current directory, "ld" looks
           (looks for  寻找) 应该使用-L 选项指定目录让ld去寻找
           for it in the directories specified by any preceding -L options.
           
           Multiple -T options accumulate(累积)

     使用输出作为ld生产程序的名称
-o   Use output as the name for the program produced(生产) by ld; if this
           未指定选项                 名字a.out就是默认的 
           option is not specified, the name a.out is used by default.  The
           脚本命令 "OUTPUT" 也可以指定输出文件名称
           script command "OUTPUT" can(会，可以) also(也) specify the output file name.

ld -e main -T linker_script.lds -o app app.o tool.o tool_base.o

使用main作为程序的入口条目  在当前文件夹里面找一个名字为linker_script.lds
的ld脚本文件 ，-o 指定 app.o tool.o ...这些目标文件产生出执行文件的文件名字为app



程序入口
    


