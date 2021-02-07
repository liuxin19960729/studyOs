1.获取对象key的方式
```ts
对象bean

let keys=Object.keys(bean);

//遍历对象的key
for (key in bean){

}

```



2.将两个属性融合(交叉类型)
```ts
 只允许存入T1 和 T2 的同名属性和同名属性和同类型的值
 let result=<T1&T2>{};


例：

  let result=<T1&T2>{};
  let t1=new T1();
  for(let id in t1){
       (<any>result)[id]=(<any>t1)[id]
  }
  let t2=new T2();
  for(let id in t2){
   if(!result.hasOwnProperty(id)){
      (<any>result)[id]=(<any>t1)[id]
   }else{
      console.log("result %s key has",id)
   }

```





2.联合类型

```ts
function padLeft(value: string, padding: string | number) {
    // ...
}



padding 允许使用string类型或number类型
```



3.类型保护与区分类型

```
typeof x === "number";  

typeof x === "string";

判断x 是否为number类型。
判断 x是否为 string类型






instanceof类型保护
  通过对象的构造函数来细化类型的一种方式
  instanceof的右侧要求是一个构造函数

```




类型别名


```
type Name = string;
type NameResolver = () => string;
type NameOrResolver = Name | NameResolver;
function getName(n: NameOrResolver): Name {
    if (typeof n === 'string') {
        return n;
    }
    else {
        return n();
    }
}
```





映射类型

```

   type Cache1 = Record<"ss"|"ddd",any>
   let c:Cache1={ss:100,ddd:"200"};
   console.log(c.ss)





type Record<T> = {
   [P in keyof T]: T[P];
};
function main(){
   type Cache1 = Record<T1>;
   let c:Cache1={a:100,aa:()=>{},bb:()=>{}};
   // console.log(c.ss)
}

```