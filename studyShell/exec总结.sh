#1
exec 1>liuxins
exec 2>&1


echo "sssss" >&2
echo "sssssssssssss" >&1
echo "ssssssssssssswwwwww" 



#2
exec 2>&1
exec 1>liuxins


echo "sssss" >&2
echo "sssssssssssss" >&1
echo "ssssssssssssswwwwww" 



#总结
这两个头两行值是换了一个位置其实他们区别还是挺大的
第一个不会打印任何东西  2 1文件描述符都会 被存在  liuxins文件里面

第二个 当使用 2>&1 的时候 &1还是一个标准输出到屏幕的所以在使用 >&2的时候会打印到屏幕
