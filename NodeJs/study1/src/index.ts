// import async= require("async");
// import fs= require("fs");
// async.map(['file1','file2','file3'], async (item,cb)=>{
//    console.log(item);
//    cb&&cb(null,"xx"+item);
// }, function(err, results) {
//    console.log(results);
// });

import { any } from "async";
import { mainModule } from "process";


// async.series([
//     function(callback) { 
       
//         console.log()
//      },
//     function(callback) { 
//         // callback();
//         console.log("33")
//      }
// ]);

class T1{
   a=1;
   aa(){
      console.log("T1.aa")
   }

   bb(){
      console.log("T1.aa")
   }

}

class T2{
   a=1;
   aa(){
      console.log("T1.aa")
   }

   bb(){
      console.log("T1.aa")
   }

}




function main(){
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
 
}

}



main();




