// function test(a){
//     return new Promise((resolve,reject)=>{
//        setTimeout(()=>{
//             resolve("time")
//         },2000)   
//     })
// }

// async function main(){
//         console.log("1");
//         let t= test(1);
//         await t.then((v)=>{
//             console.log(v)
//         })
//         await t.then((v)=>{
//             console.log(v)
//         })
//         console.log("2");
// }

// async function main1(){
//     return 1;
// }
// function main2(){
//         console.log("1");
//         let t= main1();
//         t.then((v)=>{
//             console.log(v);
//         })
       
//         console.log("2");
// }
// main2()


// function a(){
//     // this.construct=function(){
//     //     console.log("构造")
//     // }
// }


// a.prototype.c=100;
// a.prototype.construct=function(){

   
// }
// let ao=new a();
// ao.construct()
// console.log(typeof(ao.construct))

// let a= v=>v
// // let a= (v)=>v
// console.log(a("s"));

// function P(){
    
//    let a=()=>{
//        console.log(this);
//    }
//      a();
// }



// let p=new P();

// let  test={
//      add:function(){
//          let t=()=>{
//              console.log(this)
//          }
//         //  let a={
//         //      x:1
//         //  }
//         let a= new t()
//         //  return a;
//      }
// }
// let  test2={
//     add1:function(){
//         console.log(this);
//     }
// }
// test.add()
// test.add.call();



// let a= ()=>{
//     console.log(this);
// }

// a.call({x:1})


// function a(n){
//    console.log(this)
//    let num=this.add(1,2);
//    console.log(num)
//    console.log(this.c);
// }

// a.prototype.add=function(n,n1){
//     return n+n1;
// }
// a.prototype.c=100;

// let b=new a();



function a(){
    console.log(this);
}
// a._xxx=[];
// a.prototype.c=[];
// a["sss"]=100;
let x=new a();

x.liuxin=function(){
  console.log("sssss")
}

x.liuxin();
// console.log(x);
// console.log(x.__proto__.c);

// console.log(x.__proto__.constructor._xxx);
// console.log(a._xxx);