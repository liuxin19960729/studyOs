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
    var result = {};
    var t1 = new T1();
    for (var id in t1) {
        result[id] = t1[id];
    }
    var t2 = new T2();
    for (var id in t2) {
        if (!result.hasOwnProperty(id)) {
            result[id] = t1[id];
        }
        else {
            console.log("result %s key has", id);
        }
    }
}
main();
