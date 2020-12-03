-e  多个 commond 
把 s 字符传成 aa  .....
sed -e 's/s/aa/' -e 's/d/xxx/' o.txt

-f  主要用于当我们要输入大量的命令 的时候可以把这些命令放到文件里卖弄

sed  -f  命令文件(绝对路径或者相对路径)  要修改的文件
建议
    sed命令脚本使用.sed结尾  这样能够区分shell脚本和sed命令脚本





sed  用其他符号进行分隔

echo "xxxx" | sed  's!/bin/bash!/bin/xxx!'

当命令需要使用到特殊符号的时候也可以用转义字符

echo "xxxx" | sed  's/\/bin\/bash/\/bin\/xxx/'


