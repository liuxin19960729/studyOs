// import async= require("async");
// import fs= require("fs");
// async.map(['file1','file2','file3'], async (item,cb)=>{
//    console.log(item);
//    cb&&cb(null,"xx"+item);
// }, function(err, results) {
//    console.log(results);
// });

import { any, map } from "async";
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
   [P in string]: T;
};
function main(){
   type Maps = Record<any>;
   let aa:Maps={"key":11};
   console.log(aa);
}



main();




