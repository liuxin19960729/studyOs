import async= require("async");
import fs= require("fs");
async.map(['file1','file2','file3'], async (item,cb)=>{
   console.log(item);
   cb&&cb(null,"xx"+item);
}, function(err, results) {
   console.log(results);
});


// async.series([
//     function(callback) { 
       
//         console.log()
//      },
//     function(callback) { 
//         // callback();
//         console.log("33")
//      }
// ]);