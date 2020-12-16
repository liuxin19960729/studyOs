[资料](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Statements/async_function)

[github资料](https://github.com/promises-aplus)

[源码](https://github.com/then/promise/blob/master/src/core.js)
### await 关键字的作用
```
async函数可能包含0个或者多个await表达式。await表达式会暂停整个async函数的执行进程并出让其控制权，只有当其等待的基于promise的异步操作被兑现或被拒绝之后才会恢复进程。



注意：
await关键字只在async函数内有效。如果你在async函数体之外使用它，就会抛出语法错误 SyntaxError 。


```



```
async function main1(){
    return 1;
}
和
 function main1(){
    return new Promise(res,rej=>{
        res(1)
    });

    带表的意思是等价的
}





```




# Promise
```
A
const promiseA = new Promise((fulfill, reject) => {
  fulfill('here');
});

promiseA.then((value) => {
  console.log(`${value} a`);
});

promiseA.then((value) => {
  console.log(`${value} b`);
});

B
const promiseB = new Promise((fulfill, reject) => { fulfill('here'); })
                       .then((value) => { console.log(`${value} a`); })
                       .then((value) => { console.log(`${value} b`); });



方法 A 的输出

here a
here b

方法 B 的输出

here a
undefined b


上述两种方法看上去做的事情都是一样的，但是这两种的机制是不一样的所以造成执行结果会有所不同

    创建promise对象  内部有两个数组分别存着返回成功和返回成功的两个函数的数组

    执行then()方法后会返回一个新的Promise对象

因此，对于使用方法 A

对 promiseA 调用了两次 then 方法，但实际上都是在同一个对象上进行操作

因为调用了两次的 then 方法，所以 promiseA 中保存异步操作成功的回调队列就有两个元素

由于操作的是同一个 promiseA, 同一个对象，所以两次 then 的回调的 value 都是一样的数据





B 等同于

const promiseB = new Promise((fulfill, reject) => { fulfill('here'); });
const promiseB1 = promiseB.then((value) => { console.log(`${value} a`); });
const promiseB2 = promiseB1.then((value) => { console.log(`${value} b`); });


promiseB1  是一个新对象



```