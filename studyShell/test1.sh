path="./test.sh"

#判断文件或者文件夹是否存在
if [ -e ${path} ] 
then
    echo "${path} exit"
    if [ -d ${path}  ]
    then
        echo "${path} director"
    fi  
    if [ -f ${path} ]
    then
        echo "${path} file"
    fi  
else
    echo "${path} no exit"
fi