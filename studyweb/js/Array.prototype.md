# Array.prototype

[资料](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Array/prototype)

```
概念：
    Array.prototype  属性表示 Array 构造函数的原型，并允许您向所有Array对象添加新的属性和方法。

    Array实例继承自 Array.prototype 。与所有构造函数一样，您可以更改构造函数的原型对象，以对所有 Array 实例进行更改。



    




```


Array.property本身也是一个Array<br>Array.isArray(Arrat.property);//  返回true




# 属性

```
Array.prototype.constructor
所有的数组实例都继承了这个属性，它的值就是 Array，表明了所有的数组都是由 Array 构造出来的。
Array.prototype.length
上面说了，因为 Array.prototype 也是个数组，所以它也有 length 属性，这个值为 0，因为它是个空数组。
```


注意：  Array.property  他就是一个数组和其他数组方法基本一样



# Array.property  对所有的数组改变属性

```
例子一
Array.prototype.liuxin=function(){
    console.log("留心")
}

let a=[0,1,2];
a.liuxin();


例子二
Array.prototype.s=function(){
    this.push(1)
    this.push(2)
};

let a=[];

a.s();

console.log(a);

//打印  (2) [1, 2]

```