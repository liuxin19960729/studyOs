# 函数

```
let a= (v)=>{ return v;}
let a= v=>v 
let a= (v)=>v  和上面的function函数是等效的

```


## this 对象知识总结

```
function P(){
    console.log(this);
}

P();
这样调用的化this代表的是全局对象




function P(){
    console.log(this);
    
}

let p=new P();

构造函数this代表的是一个新对象 p函数作实例化出来的对象



function P(){
    console.log(this);
    setInterval( function a(){
        console.log(this);
    },1000
    )
}

let p=new P();

function P(){
    console.log(this);
    setTimeout(function a(){
        console.log(this);
    },1000
    )
}

let p=new P();


在一个方法里面创建一个函数this代表的也是全局对象


function P(){
    const self=this;
    console.log(this);
    setTimeout(function a(){
        console.log(self);
    },1000
    )
}

let p=new P();

解决在里面创建函数使用外面的this


function P(){
    const self=this;
    // console.log(this);
}

P.prototype.a=function(){
    console.log(this);
}

let p=new P();
p.a();

这个this代表的是 P对象实例化的对象



function P(){
    
     function a(){
        console.log(this);
     }
     a();
}
let p=new P();

在P 里面 创建函数并且调用时全局的this


function P(){
    
   let a=()=>{
       console.log(this);
   }
     a();
}



let p=new P();
this打印出来的是P对象实例出来的




总结：
    单个函数
        一个函数直接调用里面的ths代表的Window对象(也就是全局对象)
        当实例化函数的时候内部this对象代表的是函数实例化的对象




    函数里面嵌套函数是用this

        若使用 function xxx(){}  里面使用this的话这个this就地表的是全局的Window对象

        若里面所使用娜姆达表达式创建函数，函数里面用this，这个this代表的是外面实例化的函数对象

```




### 通过call或apply调用


```
注意：
    箭头函数是没有this指针的


    var adder = {
    base: 1,

    add: function (a) {
        var f = v => v + this.base;
        return f(a);
    },

    addThruCall: function (a) {
        var f = v => v + this.base;
        var b = {
            base: 2
        };

        return f.call(b, a);
    }
};

console.log(adder.add(1))//2
console.log(adder.addThruCall(1))//2

dder.addThruCall(1) 之所以输出2 是因为箭头函数没有this，call会认为他传递的对象无效,所以里面的this也会使用外面的base


call 函数使用


let  test={
     add:function(){
         console.log(this);
     }
}
let  test2={
    add1:function(){
        console.log(this);
    }
}

test.add.call(test2) //{add1: ƒ}
给test.add 调用test.add 方法并且里面传入一个其他的对象


//let  test={
     add:function(){
         console.log(this);
     }
}
let  test2={
    add1:function(){
        console.log(this);
    }
}

test.add(); //{add: ƒ}

执行自己的对象  里面的this汉代代表字节

let  test={
     add:function(){
         let t=()=>{
             console.log(this)
         }
         let a={
             x:1
         }
         return t.call(a);
     }
}
let  test2={
    add1:function(){
        console.log(this);
    }
}

test.add(); //{add: ƒ} 




//注意箭头函数不能new(不能被实例化)
let a= ()=>{
    console.log("a");
}
let s=new a(); //index1.js:93 Uncaught TypeError: a is not a constructor




//箭头函数call 不能传递  对象

let a= ()=>{
    console.log(this);
}

a.call({x:1}) //Window {parent: Window, opener: null, top: Window, length: 0, frames: Window, …}




```



###  函数里面的隐式arguments对象

```
let a =(n)=>{
    console.log("传入的数:"+n);
    let n1=arguments[0];
    console.log("arguments[0]:"+n1);
}


a(2)

传入的数:2
index1.js:99 Uncaught ReferenceError: arguments is not defined
    at a (index1.js:99)
    at index1.js:104
注意:
    箭头函数里面没有内置的arguments对象






 function a(n){
    console.log("传入的数:"+n);
    let n1=arguments[0];
    console.log("arguments[0]:"+n1);
}


a(2)

传入的数:2
index1.js:100 arguments[0]:2


普通的函数里面具备arguments对象


```


箭头函数没有property 属性
var Foo = () => {};
console.log(Foo.prototype); // undefined

```
    function a(n){
    console.log(this)
    let num=this.add(1,2);
    console.log(num)
    console.log(this.c);
    }

    a.prototype.add=function(n,n1){
        return n+n1;
    }
    a.prototype.c=100;

    let b=new a();

    //输出
    a {}
    index1.js:100 3
    index1.js:101 100



```



###  箭头符号返回一个对象的写法


```
let a=()=>({
  c:1
})

console.log(a())


或者
let a=()=>{
   return { c:1};
}

console.log(a())
```
