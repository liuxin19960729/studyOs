// import async= require("async");
// import fs= require("fs");
// async.map(['file1','file2','file3'], async (item,cb)=>{
//    console.log(item);
//    cb&&cb(null,"xx"+item);
// }, function(err, results) {
//    console.log(results);
// });

import { any, map } from "async";
import { type } from "os";
import { mainModule } from "process";
import { Key } from "readline";
import { Type } from "typescript";


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




// type Record<V,T> = {
//    [P in V]: T;
// };
function main(){
   // type Maps = Record<new T1(),any>;
   // let aa:Maps={"key":11};
   // console.log(aa);


   type keys= keyof T1;
   let ss:keys;
   
}



main();




