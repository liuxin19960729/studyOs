最主要的应用场景在一些数据量非常大的文本中过滤掉没有用的东西，比如日志过滤等

gawk -F:  '{print $1}' /etc/passwd

-F : 把 /etc/passwd 以:来作为分隔符 '{print $1}'  打印第一列
$0 全部列数     $1....$n   第一列  第n列               



echo "我.是.刘鑫" | gawk -F . '{$3="徐栎"; print $0 }'


gawk 脚本建议使用.gawk 作为后缀

xxx.gawk
{
    命令
}

gawk  -f   脚本路径  文件  



#gawk 和sed 结合使用
 gawk -F : '{print $1}' /etc/passwd |sed  's/s/**/'
/etc/passwd 文件用 ：分隔  打印出第一列的时候在把s字符串替换成**



