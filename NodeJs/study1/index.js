"use strict";
exports.__esModule = true;
var process = require("process");
// const app = express()
// app.get('/', (req, res) => {
//     // // console.log("进程id:"+process.pid)
//     // process.kill(process.pid, 'SIGTERM')
//     console.log(process.argv)
//     res.send("ss")
// })
// const server = app.listen(3000, () => console.log('服务器已就绪'))
function a() {
    new Promise(function (res, rej) {
        res(null);
    }).then(function () {
        console.log("sss");
    });
    /**
     * 异步事件
     */
    process.nextTick(function () {
        console.log("next");
    });
}
// setTimeout(()=>{
//     console.log("time")
// },0)
a();
// process.on('SIGTERM', () => {
//     console.log('进程已终止')
//   server.close(() => {
//     console.log('进程已终止')
//   })
// })
