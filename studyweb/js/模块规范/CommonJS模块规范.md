```
moudle 代表的是当前模块
let c=function(){
    console.log("刘鑫")
}
// let b=function(){
//     console.log("刘鑫")
// }

module.exports.c=c;
let b=function(){
    console.log("刘鑫222")
}

module.exports.d=b;

引用  let x=require("xxx") 
x代表的是 module.exports 对象
  




  

```