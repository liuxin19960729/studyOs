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
import { Key } from "readline";


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


type Record<T> = {
   [P in keyof T]: T[P];
};
function main(){
   // type Cache1 = Record<T1>;
   // let c:Cache1={a:100,aa:()=>{},bb:()=>{}};
   // console.log(c.ss)
}



main();




