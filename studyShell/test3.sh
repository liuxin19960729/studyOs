exec 2>erro
exec 1>&2
# 这一句隐含的就是文件描述符为1
cat test3.sh 

# 这一句隐含的就是文件描述符为1
echo "徐栎"