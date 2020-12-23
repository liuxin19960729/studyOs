### npm
```
当输入npm install  npm会自动安装 package.json里卖弄依赖的包

当输入npm install xxx -D  将包安装到开发依赖项

npm install  --production  避免按安装开发依赖项

```


###  process 初识

```
import express = require('express')
import process = require('process');

const app = express()

app.get('/', (req, res) => {
    console.log("进程id:"+process.pid)
    process.kill(process.pid, 'SIGTERM')
})

const server = app.listen(3000, () => console.log('服务器已就绪'))

process.on('SIGTERM', () => {
    console.log('进程已终止')
  server.close(() => {
    console.log('进程已终止')
  })
})





读取环境变量
console.log(process.env.JAVA_HOME)




获取命令行参数
process.argv 


例  node app.js name=joe
第一个参数是 node 命令的完整路径。

第二个参数是正被执行的文件的完整路径。

所有其他的参数从第三个位置开始。



注意
     minimist 库 可以解析传入进来的参数

```