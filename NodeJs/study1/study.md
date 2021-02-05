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


### export

```
  xxx.js

  其实就是一个模块  默认这些模块都私有的

    

 两种方式公布模块

 1.module.exports =xxx
  公布这个模块的一个对象

 2.exports.car = car
    module.exports.car=car  和上面一个意思公布car对象

    这样做的意义在于提个模块可以公布多个对象


```



### npm


```
npm install  xxxx

通常会在此命令中看到更多标志：

--save 安装并添加条目到 package.json 文件的 dependencies。
--save-dev 安装并添加条目到 package.json 文件的 devDependencies。
区别主要是，devDependencies 通常是开发的工具（例如测试的库），而 dependencies 则是与生产环境中的应用程序相关。




所有包更新到最新的版本

npm  update


单个包进行更新
npm update <package-name>


版本控制
  有的库和其他库有依赖都更到最新可能用不了
  所以我们需要指定有些库的特定版本
指定库的显式版本还有助于使每个人都使用相同的软件包版本，以便整个团队运行相同的版本，直至 package.json 文件被更新


```



### 运行任务

```
package.json 文件支持一种用于指定命令行任务（可通过使用以下方式运行）的格式：
npm  run  xxxx


例：
{
  "scripts": {
    "start-dev": "node lib/server-development",
    "start": "node lib/server-production"
  },
}


执行 任务


npm  run  start-dev


```






### npm  将包安装到哪里

```
本地
  npm install  xxx
全局
npm install -g xxx



```




### 如何使用或执行npm安装的软件包

```
  1如何使用npm安装的全局的软件包
  

  2.使用本地安装的软件包
      const _ = require('lodash')

      ts 中的用法为
      import  xxx=require("xxx") 


    如果软件包是可执行文件，该怎么办？

        测试
        npx  xxxx/xx  执行npm包里面的可执行的文件
```



### package.json

```

```


### package-lock.json


```
版本5之后引入



作用：
  该文件旨在跟踪被安装的每个软件包的确切版本，以便产品可以以相同的方式被 100％ 复制（即使软件包的维护者更新了软件包）。


    解决package.json不能指定确切版本

package-lock.json 会固化当前安装的每个软件包的版本，当运行 npm install时，npm 会使用这些确切的版本。


当运行 npm update 时，package-lock.json 文件中的依赖的版本会被更新。


```


### 安装 npm 包的旧版本


```
可以使用 @ 语法来安装 npm 软件包的旧版本：
npm install <package>@<version>


查看npm包安装的所有的版本
  npm view xxx versions

```



### 将所有 Node.js 依赖包更新到最新版本

```
npm  install   xxxx
xxx包会被npm核记所有的包依赖会安装可以且最新的版本



npm outdated
   会打印出那些npm包很久没有更新了


若要将所有软件包更新到新的主版本，则全局地安装 npm-check-updates 软件包：
npm install -g npm-check-updates
ncu -u
这会升级 package.json 文件的 dependencies 和 devDependencies 中的所有版本，以便 npm 可以安装新的主版本


npm update


```




### 使用 npm 的语义版本控制

```
语义版本控制的概念很简单：所有的版本都有 3 个数字：x.y.z。

第一个数字是主版本。
第二个数字是次版本。
第三个数字是补丁版本。



当发布新的版本时，不仅仅是随心所欲地增加数字，还要遵循以下规则：

当进行不兼容的 API 更改时，则升级主版本。
当以向后兼容的方式添加功能时，则升级次版本。
当进行向后兼容的缺陷修复时，则升级补丁版本。


这些规则的详情如下：

^: 如果写入的是 ^0.13.0，则当运行 npm update 时，会更新到补丁版本和次版本：即 0.13.1、0.14.0、依此类推。
~: 如果写入的是 〜0.13.0，则当运行 npm update 时，会更新到补丁版本：即 0.13.1 可以，但 0.14.0 不可以。
>: 接受高于指定版本的任何版本。
>=: 接受等于或高于指定版本的任何版本。
<=: 接受等于或低于指定版本的任何版本。
<: 接受低于指定版本的任何版本。
=: 接受确切的版本。
-: 接受一定范围的版本。例如：2.1.0 - 2.6.2。
||: 组合集合。例如 < 2.1 || > 2.6。



可以合并其中的一些符号，例如 1.0.0 || >=1.1.0 <1.2.0，即使用 1.0.0 或从 1.1.0 开始但低于 1.2.0 的版本。

还有其他的规则：

无符号: 仅接受指定的特定版本（例如 1.2.1）。
latest: 使用可用的最新版本。


```



### 卸载npm 软件包

```
npm uninstall <package-name>  卸载但是不移除引用

npm uninstall -S xxx  删除并移除package.json的依赖引用



npm uninstall -g <package-name>  全局卸载


npm uninstall -D xxx  删除并移除package.json的开发环境依赖引用
```



### npm 全局或本地的软件包

```
全局包的意义

  所有的项目都有自己的软件包本地版本，即使这看起来有点浪费资源，但与可能产生的负面影响相比也很小。
  

  当程序包提供了可从 shell（CLI）运行的可执行命令、且可在项目间复用时，则该程序包应被全局安装。

  全局包最大的作用是不同项目可以对该包进行复用
  但是有不同的版本要求的时候全局就不是很好了



npm list -g  --depth 0

查全局安装了那些包并且只显示安装包，不显示依赖


```


### npm 依赖与开发依赖


```
当使用 npm install <package-name>

该软件包会被自动地列出在 package.json 文件中的 dependencies 列表下（在 npm 5 之前：必须手动指定 --save）。


需要设置 --production 标志（npm install --production），以避免安装这些开发依赖项。


```



### Node.js 包运行器 npx


```
npx 可以运行使用 Node.js 构建并通过 npm 仓库发布的代码。

运行 npx commandname 会自动地在项目的 node_modules 文件夹中找到命令的正确引用，而无需知道确切的路径，也不需要在全局和用户路径中安装软件包。



这非常有用，主要是因为：

不需要安装任何东西。
可以使用 @version 语法运行同一命令的不同版本。






```



### Node.js 事件循环
```
node js 是单线程
只需要注意如何编写代码，并避免任何可能阻塞线程的事情
主要需要关心代码会在单个事件循环上运行，并且在编写代码时牢记这一点，以避免阻塞它。


avaScript 中几乎所有的 I/O 基元都是非阻塞的。 网络请求、文件系统操作等。 被阻塞是个异常，这就是 JavaScript 如此之多基于回调（最近越来越多基于 promise 和 async/await）的原因。



调用堆栈
  调用堆栈是一个 LIFO 队列（后进先出）。

  事件循环不断地检查调用堆栈，以查看是否需要运行任何函数。

  当执行时，它会将找到的所有函数调用添加到调用堆栈中，并按顺序执行每个函数



```

### 消息队列

```
    setTimeout定时器
    当在堆栈执行了这个函数的s时候回调被放在消息队列里面
    时间到了的时候回调又被放入到堆栈里面


  消息队列
  用户触发的事件（如单击或键盘事件、或获取响应）也会在此排队，然后代码才有机会对其作出反应

  时间循循环   堆栈优先级高于 消息队列
  事件循环会赋予调用堆栈优先级，它首先处理在调用堆栈中找到的所有东西，一旦其中没有任何东西，便开始处理消息队列中的东西。


```


### 作业队列概念

```
Promise 使用了该队列（也在 ES6/ES2015 中引入）。 这种方式会尽快地执行异步函数的结果，而不是放在调用堆栈的末尾。




比喻
  有个游乐园中过山车的比喻很好：消息队列将你排在队列的后面（在所有其他人的后面），你不得不等待你的回合，而工作队列则是快速通道票，这样你就可以在完成上一次乘车后立即乘坐另一趟车。


   工作队列  在当前运用promise里面的函数调用之后，等待该函数执行完立即执行


   消息队列 等当前所有堆栈函数执行完，在看你是否能执行，才把你加入堆栈进行执行
```



注意  工作队列和消息队列的区别  就是前异步，和async  Promise现在异步的最大的区别






## 了解 process.nextTick()



```
每当事件循环进行一次完整的行程时，我们都将其称为一个滴答。


当将一个函数传给 process.nextTick() 时，则指示引擎在当前操作结束（在下一个事件循环滴答开始之前）时调用此函数：



process.nextTick(() => {
  //做些事情
})


当该操作结束时，JS 引擎会运行在该操作期间传给 nextTick 调用的所有函数。




setTimeout(()=>{
    console.log("time")
},0)

process.nextTick(()=>{
    console.log("next")
})


打印结果
      next
      time


      progress.nextTick 在时间循环之前调用
      
      setTimeout  在循环里面调用



   process.nextTick(()=>{
        console.log("next")
    })   要早于所有异步  因为大师在时间循环开始之前执行的
```




### 了解 setImmediate()

```
   作用：
    当要异步地（但要尽可能快）执行某些代码时



setImmediate() 与 setTimeout(() => {}, 0)（传入 0 毫秒的超时）、process.nextTick() 有何不同？





传给 process.nextTick() 的函数会在事件循环的当前迭代中（当前操作结束之后）被执行。 这意味着它会始终在 setTimeout 和 setImmediate 之前执行。

延迟 0 毫秒的 setTimeout() 回调与 setImmediate() 非常相似。 执行顺序取决于各种因素，但是它们都会在事件循环的下一个迭代中运行。


```



### 探索 JavaScript 定时器


```
setTimeout(calback,times,...args)

// 改变主意了
clearTimeout(id)




 美国多久执行一次
setInterval()

clearInterval(id)






```



### JavaScript 异步编程与回调

```
Promise 如何运作
它会以处理中状态开始。 这意味着调用的函数会继续执行，而 promise 仍处于处理中直到解决为止，从而为调用的函数提供所请求的任何数据。

被创建的 promise 最终会以被解决状态或被拒绝状态结束，并在完成时调用相应的回调函数（传给 then 和 catch）。







```


例子：
```js
let done = true

const isItDoneYet = new Promise((resolve, reject) => {
  if (done) {
    const workDone = '这是创建的东西'
    resolve(workDone)
  } else {
    const why = '仍然在处理其他事情'
    reject(why)
  }
})

resolve() 解决状态

reject(); 决绝状态

不调用这两个函数状态就是解决中






```



### Node.js 事件触发器


```

在后端，Node.js 也提供了使用 events 模块构建类似系统的选项。

具体上，此模块提供了 EventEmitter 类，用于处理事件。
const EventEmitter = require('events')
const eventEmitter = new EventEmitter()




该对象公开了 on 和 emit 方法。

emit 用于触发事件。
on 用于添加回调函数（会在事件被触发时执行）



EventEmitter 对象还公开了其他几个与事件进行交互的方法，例如：

once(): 添加单次监听器。
removeListener() / off(): 从事件中移除事件监听器。
removeAllListeners(): 移除事件的所有监听器。


```