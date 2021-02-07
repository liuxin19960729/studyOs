"use strict";
// import async= require("async");
// import fs= require("fs");
// async.map(['file1','file2','file3'], async (item,cb)=>{
//    console.log(item);
//    cb&&cb(null,"xx"+item);
// }, function(err, results) {
//    console.log(results);
// });
exports.__esModule = true;
// async.series([
//     function(callback) { 
//         console.log()
//      },
//     function(callback) { 
//         // callback();
//         console.log("33")
//      }
// ]);
var T1 = /** @class */ (function () {
    function T1() {
        this.a = 1;
    }
    T1.prototype.aa = function () {
        console.log("T1.aa");
    };
    T1.prototype.bb = function () {
        console.log("T1.aa");
    };
    return T1;
}());
var T2 = /** @class */ (function () {
    function T2() {
        this.a = 1;
    }
    T2.prototype.aa = function () {
        console.log("T1.aa");
    };
    T2.prototype.bb = function () {
        console.log("T1.aa");
    };
    return T2;
}());
function main() {
    // type Cache1 = Record<T1>;
    // let c:Cache1={a:100,aa:()=>{},bb:()=>{}};
    // console.log(c.ss)
    console.log(typeof T1);
}
main();
