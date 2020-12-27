"use strict";
exports.__esModule = true;
var express = require("express");
var process = require("process");
var app = express();
app.get('/', function (req, res) {
    // // console.log("进程id:"+process.pid)
    // process.kill(process.pid, 'SIGTERM')
    console.log(process.argv);
    res.send("ss");
});
var server = app.listen(3000, function () { return console.log('服务器已就绪'); });
// process.on('SIGTERM', () => {
//     console.log('进程已终止')
//   server.close(() => {
//     console.log('进程已终止')
//   })
// })
